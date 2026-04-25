---
title: How to write a new post
subtitle: Everything you need to know in five minutes.
date: 2026-04-25
---

Welcome to your blog. This post itself is an example you can copy and modify. Every post lives in `src/posts/` as a Markdown file — that's it. No database, no admin login, no plugins to update.

## The basic structure

At the top of every post file, there's a small block of metadata between two `---` lines. That's called frontmatter, and it sets the title, subtitle, and date. After that, you just write.

You can use **bold**, *italic*, [links](https://example.com), and lists:

- One thing
- Another thing
- A third thing

Or numbered lists, blockquotes, headings — anything Markdown supports.

## Adding images

Drop an image file into `src/assets/images/`, then reference it like this:

```markdown
![A caption describing the image](/assets/images/your-photo.jpg)
```

The image will appear inline in your post, sized responsively for any screen.

> Tip: keep image filenames lowercase and use hyphens instead of spaces. `morning-light.jpg` works; `Morning Light.jpg` will cause headaches.

## Code, quotes, and dividers

You can use `inline code` like that, or a horizontal rule for a section break:

---

That's everything you need. To create your next post, just copy this file, rename it, change the frontmatter, and start writing.
