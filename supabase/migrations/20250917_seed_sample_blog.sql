-- Seed a sample blog post with rich HTML content
-- This migration assumes the public.blog table exists.
-- It is idempotent via ON CONFLICT DO NOTHING on slug.

insert into public.blog (
  slug,
  title,
  excerpt,
  content,
  author,
  tags,
  published,
  published_at,
  reading_time
) values (
  'welcome-to-anonshare-blog',
  'Welcome to the AnonShare Blog',
  'A quick tour of what you''ll find here: privacy tips, secure sharing guides, platform updates, and deep-dives into anonymous communication.',
  $$
  <h2>What you can expect</h2>
  <p>We built AnonShare with a simple goal: make secure, anonymous sharing effortless. In this blog, we''ll cover:</p>
  <ul>
    <li><strong>Privacy best practices</strong> you can apply today</li>
    <li><strong>Step-by-step guides</strong> for anonymous text, notes, and file sharing</li>
    <li><strong>Platform updates</strong> and behind-the-scenes architecture notes</li>
  </ul>

  <h3>Quick example: sharing code safely</h3>
  <p>Never paste secrets or API keys. If you must share sensitive snippets, consider encrypting before upload and setting short expirations.</p>
  <pre><code class="language-js">// Example: never commit keys
const apiKey = process.env.MY_API_KEY // ✔ keep secrets in env vars
  </code></pre>

  <blockquote>
    <p>Privacy is not a feature. It''s a foundation.</p>
  </blockquote>

  <p>Thanks for being here. If there''s a topic you''d like us to cover, let us know!</p>
  $$,
  'AnonShare Team',
  array['welcome','privacy','guides'],
  true,
  now(),
  3
)
on conflict (slug) do nothing;


