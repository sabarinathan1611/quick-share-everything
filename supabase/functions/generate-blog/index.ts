import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

type NewsArticle = {
  title: string;
  description?: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt?: string | null;
  source?: { name?: string | null } | null;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function isLikelyValidHtml(html: string): { valid: boolean; reason?: string } {
  const content = html?.trim() || "";
  if (!content) return { valid: false, reason: "Empty content" };
  const lower = content.toLowerCase();
  if (!lower.includes("<h1") || !lower.includes("<p")) {
    return { valid: false, reason: "Missing required headings/paragraphs" };
  }
  if (lower.includes("<script")) {
    return { valid: false, reason: "Contains disallowed <script> tag" };
  }
  if (!content.startsWith("<") || !content.endsWith(">")) {
    return { valid: false, reason: "Not wrapped in HTML-like markup" };
  }
  // crude tag-balance sanity (not full validation)
  const openP = (content.match(/<p\b/gi) || []).length;
  const closeP = (content.match(/<\/p>/gi) || []).length;
  if (closeP > 0 && openP !== closeP) {
    return { valid: false, reason: "Unbalanced <p> tags" };
  }
  return { valid: true };
}

async function fetchLatestTechAndSecurity(newsApiKey: string): Promise<NewsArticle[]> {
  const results: NewsArticle[] = [];

  // Latest technology headline
  const techUrl = new URL("https://newsapi.org/v2/top-headlines");
  techUrl.searchParams.set("category", "technology");
  techUrl.searchParams.set("language", "en");
  techUrl.searchParams.set("pageSize", "5");
  techUrl.searchParams.set("apiKey", newsApiKey);

  // Latest cybersecurity (use keyword search)
  // Try top-headlines with q first, fallback to everything
  const cyberTopUrl = new URL("https://newsapi.org/v2/top-headlines");
  cyberTopUrl.searchParams.set("q", "cybersecurity");
  cyberTopUrl.searchParams.set("language", "en");
  cyberTopUrl.searchParams.set("pageSize", "5");
  cyberTopUrl.searchParams.set("apiKey", newsApiKey);

  const [techRes, cyberTopRes] = await Promise.all([
    fetch(techUrl.toString()),
    fetch(cyberTopUrl.toString()),
  ]);

  const techJson = techRes.ok ? await techRes.json() : { articles: [] };
  let cyberJson = cyberTopRes.ok ? await cyberTopRes.json() : { articles: [] };

  if (!cyberTopRes.ok || !Array.isArray(cyberJson.articles) || cyberJson.articles.length === 0) {
    const cyberEverythingUrl = new URL("https://newsapi.org/v2/everything");
    cyberEverythingUrl.searchParams.set("q", "cybersecurity");
    cyberEverythingUrl.searchParams.set("language", "en");
    cyberEverythingUrl.searchParams.set("sortBy", "publishedAt");
    cyberEverythingUrl.searchParams.set("pageSize", "5");
    cyberEverythingUrl.searchParams.set("apiKey", newsApiKey);
    const cyberRes = await fetch(cyberEverythingUrl.toString());
    cyberJson = cyberRes.ok ? await cyberRes.json() : { articles: [] };
  }

  const techArticles: NewsArticle[] = Array.isArray(techJson.articles) ? techJson.articles : [];
  const cyberArticles: NewsArticle[] = Array.isArray(cyberJson.articles) ? cyberJson.articles : [];

  // pick latest unique by url - one from each list preferred
  const seen = new Set<string>();
  for (const a of techArticles) {
    if (a?.url && !seen.has(a.url)) {
      seen.add(a.url);
      results.push(a);
      break;
    }
  }
  for (const a of cyberArticles) {
    if (a?.url && !seen.has(a.url)) {
      seen.add(a.url);
      results.push(a);
      break;
    }
  }

  // If we still have less than 2, fill from remaining combined
  if (results.length < 2) {
    for (const a of [...techArticles, ...cyberArticles]) {
      if (a?.url && !seen.has(a.url)) {
        seen.add(a.url);
        results.push(a);
        if (results.length >= 2) break;
      }
    }
  }

  return results.slice(0, 2);
}

async function callDeepSeek(deepseekKey: string, articles: NewsArticle[]): Promise<string> {
  const endpoint = Deno.env.get("DEEPSEEK_API_URL") || "https://api.deepseek.com/chat/completions";
  const model = Deno.env.get("DEEPSEEK_MODEL") || "deepseek-chat";

  const prompt = `You are an expert technical writer. Write a concise, well-structured blog post in valid HTML using <h1>, <h2>, <p>, <ul>, <li>, and <blockquote>. No <script> tags, no external scripts, no inline event handlers.

Use the following two recent news items as primary sources. Summarize, synthesize insights, and add context for developers, focusing on technology and cybersecurity implications for privacy-first sharing platforms like AnonShare.

Sources:\n${articles
    .map((a, i) => `(${i + 1}) Title: ${a.title}\nDesc: ${a.description || ""}\nURL: ${a.url}\nPublished: ${a.publishedAt || ""}\nSource: ${a.source?.name || ""}`)
    .join("\n\n")}\n\nRequirements:\n- Start with a single <h1> title.\n- Include 2-3 <h2> sections.\n- 6-10 short paragraphs total.\n- Include a short <ul> list of actionable takeaways.\n- End with a <h2> References</h2> and a <ul> of <a> links to the sources.\n- Keep it under ~900 words.\n- Use American English.\n- Do not include a <html> or <body> tag; only fragment HTML.\n`;

  const body = {
    model,
    messages: [
      { role: "system", content: "You write production-ready HTML blog posts with strict formatting." },
      { role: "user", content: prompt },
    ],
    temperature: 0.6,
    max_tokens: 1500,
  } as const;

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${deepseekKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`DeepSeek error: ${res.status} ${errText}`);
  }

  const json = await res.json();
  // OpenAI-compatible response
  const content = json?.choices?.[0]?.message?.content;
  if (!content) throw new Error("DeepSeek returned no content");
  return content as string;
}

function extractTitleAndExcerpt(html: string): { title: string; excerpt: string } {
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const titleRaw = h1Match ? h1Match[1] : "Technology and Cybersecurity Update";
  const titleText = titleRaw.replace(/<[^>]+>/g, "").trim();

  const pMatch = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const pText = pMatch ? pMatch[1].replace(/<[^>]+>/g, "").trim() : "Latest developments in technology and cybersecurity.";
  const excerpt = pText.slice(0, 200);

  return { title: titleText || "Technology and Cybersecurity Update", excerpt };
}

function estimateReadingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const NEWSAPI_KEY = Deno.env.get("NEWSAPI_KEY");
    const DEEPSEEK_API_KEY = Deno.env.get("DEEPSEEK_API_KEY");

    if (!supabaseUrl || !supabaseServiceKey) {
      return new Response(JSON.stringify({ error: "Missing Supabase credentials" }), { headers: corsHeaders, status: 500 });
    }
    if (!NEWSAPI_KEY) {
      return new Response(JSON.stringify({ error: "Missing NEWSAPI_KEY" }), { headers: corsHeaders, status: 400 });
    }
    if (!DEEPSEEK_API_KEY) {
      return new Response(JSON.stringify({ error: "Missing DEEPSEEK_API_KEY" }), { headers: corsHeaders, status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 1) Fetch news
    const articles = await fetchLatestTechAndSecurity(NEWSAPI_KEY);
    if (articles.length < 2) {
      return new Response(JSON.stringify({ error: "Not enough articles found" }), { headers: corsHeaders, status: 424 });
    }

    const urlsSorted = articles.map((a) => a.url).filter(Boolean).sort();
    const urlsJoined = urlsSorted.join("|");
    const newsHash = await sha256(urlsJoined);
    const newsTag = `news:${newsHash.slice(0, 16)}`;

    // 2) Duplicate check by tag
    const { data: existing, error: existingError } = await supabase
      .from("blog")
      .select("id, tags")
      .contains("tags", [newsTag]);

    if (existingError) {
      throw existingError;
    }
    if (existing && existing.length > 0) {
      return new Response(JSON.stringify({ success: false, message: "Duplicate news set; blog already exists" }), { headers: corsHeaders, status: 409 });
    }

    // 3) Generate blog HTML via DeepSeek
    const html = await callDeepSeek(DEEPSEEK_API_KEY, articles);

    // 4) Validate HTML
    const { valid, reason } = isLikelyValidHtml(html);
    if (!valid) {
      return new Response(JSON.stringify({ error: `Generated HTML failed validation: ${reason}` }), { headers: corsHeaders, status: 422 });
    }

    // 5) Extract title/excerpt, build row
    const { title, excerpt } = extractTitleAndExcerpt(html);
    const slugBase = slugify(title).slice(0, 64) || `tech-cyber-update`;
    const slug = `${slugBase}-${newsHash.slice(0, 8)}`;
    const reading_time = estimateReadingTime(html);

    const cover = articles.find((a) => a.urlToImage)?.urlToImage || null;

    const insertRow = {
      slug,
      title,
      excerpt,
      content: html,
      author: "AnonShare Team",
      cover_image_url: cover,
      tags: ["ai-generated", "technology", "cybersecurity", newsTag],
      published: true,
      published_at: new Date().toISOString(),
      reading_time,
    } as const;

    const { data: inserted, error: insertError } = await supabase
      .from("blog")
      .insert(insertRow)
      .select("id, slug, title, published_at");

    if (insertError) {
      // handle unique slug race
      if (insertError.code === "23505") {
        return new Response(JSON.stringify({ success: false, message: "Duplicate slug or unique constraint" }), { headers: corsHeaders, status: 409 });
      }
      throw insertError;
    }

    return new Response(
      JSON.stringify({ success: true, inserted: inserted?.[0], sources: articles.map((a) => a.url) }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" }, status: 200 },
    );
  } catch (err: any) {
    console.error("generate-blog error:", err);
    return new Response(JSON.stringify({ success: false, error: err?.message || String(err) }), { headers: corsHeaders, status: 500 });
  }
});
