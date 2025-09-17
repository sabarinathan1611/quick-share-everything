-- Create blog table and policies
-- Safe to run multiple times

-- Enable required extension for UUID generation
create extension if not exists "pgcrypto";

create table if not exists public.blog (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  content text not null,
  author text,
  cover_image_url text,
  tags text[] default '{}',
  published boolean not null default false,
  published_at timestamptz,
  reading_time integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_published_at_idx on public.blog (published_at desc nulls last);

-- Updated at trigger
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_blog_updated_at on public.blog;
create trigger set_blog_updated_at
before update on public.blog
for each row execute function public.set_updated_at();

-- Row Level Security
alter table public.blog enable row level security;

-- Allow anyone to read published posts only
drop policy if exists "Allow read of published posts" on public.blog;
create policy "Allow read of published posts" on public.blog
  for select
  using (published = true);

-- Seed a couple of posts (idempotent via ON CONFLICT)
insert into public.blog (slug, title, excerpt, content, author, tags, published, published_at, reading_time)
values
  (
    'how-to-share-text-anonymously',
    'How to Share Text Anonymously (Without Login)',
    'Learn how to use anonymous clipboard tools to share text, notes, and code securely without leaving a digital footprint.',
    'In today''s digital age, privacy is paramount. This guide walks you through sharing text anonymously using tools like AnonShare, with tips for security and best practices.',
    'AnonShare Team',
    array['privacy','clipboard','guide'],
    true,
    now(),
    3
  ),
  (
    'pastebin-alternatives-2025',
    '5 Best Pastebin Alternatives for Privacy in 2025',
    'We explore the top 5 privacy-focused alternatives for secure, anonymous text and file sharing in 2025.',
    'While Pastebin is popular, it may not be the best for privacy. Here are five alternatives that respect anonymity and security, including AnonShare.',
    'AnonShare Team',
    array['privacy','pastebin','alternatives'],
    true,
    now(),
    4
  )
on conflict (slug) do nothing;


