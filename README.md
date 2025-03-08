# Shapes.inc Blog

Welcome!
This is an open-source repository for hosting and sharing personal or service blogs. This repository is managed by **Dhruv(me) & Shapes Inc.**

## Adding a Blog Post
To add a blog post, follow these steps:

1. Navigate to `blog.ts` in the `lib` folder.
2. Blog posts are stored in a structured array`blogPosts`. Please follow the format of pre-existing blog posts when adding new ones.
3. Blog categories are defined in `const categories:`. If you're using a new category, define it here before adding it to your blog post.
![cat](https://i.imgur.com/utX98xD.png)

Each blog post is defined as an object in the `blogPosts` array with the following metadata:  
![Example_Blog_Post](https://i.imgur.com/yinVG9C.png)

```typescript
{
  title: "Post Title",       // Main title (e.g., "Ensuring Safety at Shapes.inc")
  slug: "url-friendly-name", // URL-friendly version of the title (lowercase, hyphens)
  date: "Month Day, Year",   // Publication date (e.g., "March 7th, 2025")
  author: "Author Name",     // Full name of the author
  authorPfp: "URL",          // Link to the author’s profile picture
  role: "Author Role",       // Author’s position (e.g., "Community Manager")
  thumbnail: "URL",          // Link to the blog’s thumbnail image
  category: "category",      // Topic tag (e.g., "safety")
  content: "..."             // Markdown content (see formatting rules below)
}
```

---
## **Content Formatting Rules**  
The `content` field uses **Markdown syntax** with the following rules for line breaks and spacing:  

### **Line Breaks**  
- **Single Line Break**: Use `\n` to create a line break within the same paragraph.  
  Example:  
  `"Line 1\nLine 2"` → Renders as:  
  ```
  Line 1
  Line 2
  ```

- **Paragraph Break**: Use `\n\n` to start a new paragraph.  
  Example:  
  `"Paragraph 1.\n\nParagraph 2."` → Renders as:  
  ```
  Paragraph 1.

  Paragraph 2.
  ```

### **Markdown Elements**  
- **Headings**:  
  - `# Heading 1`  
  - `## Heading 2`  
  - `### Heading 3`  

- **Lists**:  
  - Bullet points: `- Item`  
  - Numbered lists: `1. Item`  

- **Bold Text**: Wrap text in `**` (e.g., `**Important**`).  

- **Images**: Use `![Alt Text](URL)` (e.g., `![Safety](https://i.imgur.com/2C9MF0l.png)`).  

---

## **Example**  
```typescript
content: "# Title\n\nIntro paragraph.\n\n## Subheading\n- **Item 1**\n- Item 2\n\n![Image](URL)"
```  
Renders as:  
```
Title

Intro paragraph.

Subheading
- Item 1
- Item 2

[Image]
```

---

## **Best Practices**  
1. Always test your Markdown in a preview tool to ensure formatting is correct. You can use this tool to preview your entries: https://blogpreview.dhrv.dev/
2. Use `\n\n` to separate sections (e.g., headings from paragraphs).  
3. Avoid manual indentation—rely on Markdown syntax.  
4. For long posts, break content into logical sections with headings.  

---
# Preview
 You can use this tool to preview your entries: https://blogpreview.dhrv.dev/
 
--- 

Example Blog Entry:
![example](https://i.imgur.com/zjMpLJT.png)

--- 

## Self-Hosting the site
If you're self-hosting the site:

1. Make changes to brand elements in the layout and page files.
2. Run the following commands:
   ```sh
   npm run build
   npm run dev
   ```
   
Thank you for contributing!
