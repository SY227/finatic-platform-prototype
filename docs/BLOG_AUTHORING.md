# Finatic Blog Authoring Guide

## System structure
- Content source: `lib/blog.ts`
- Template renderer: `components/blog/BlogPostTemplate.tsx`
- Index page: `app/blog/page.tsx`
- Post route: `app/blog/[slug]/page.tsx`

## Add a new blog post
1. Open `lib/blog.ts`.
2. Append a new `BlogPost` object to `BLOG_POSTS` with all required fields.
3. Required linking fields for internal linking system:
   - `relatedToolHref`, `relatedToolText`
   - `relatedGuideHref`, `relatedGuideText`
   - `siblingPostHref`, `siblingPostText`
4. Keep slugs kebab-case and unique.
5. Add realistic `publishedAt`, `updatedAt`, and `readTime`.

## Editorial rules
- One primary keyword / intent per post.
- One clear reader promise.
- One practical framework.
- Human-first writing (no keyword stuffing).
- Educational-only positioning.

## Internal linking rule
Every post must include links to:
- one tool
- one guide
- one sibling article
- download CTA (`/download`)

Template already renders these from fields in `lib/blog.ts`.


## Current baseline topic set
The repository now includes the 20 planned foundational topics. Add future posts by extending adjacent intents or updating existing evergreen posts with improved examples and references.
