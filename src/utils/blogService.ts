import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type BlogPost = Tables<"blog">;
export type BlogListItem = Pick<BlogPost, "id" | "slug" | "title" | "excerpt" | "author" | "tags" | "published_at" | "reading_time">;

export async function listPublishedPosts(): Promise<BlogListItem[]> {
  const { data, error } = await supabase
    .from("blog")
    .select("id, slug, title, excerpt, author, tags, published_at, reading_time")
    .eq("published", true)
    .order("published_at", { ascending: false, nullsFirst: false });

  if (error) throw error;
  return (data ?? []) as BlogListItem[];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error) throw error;
  return data ?? null;
}


