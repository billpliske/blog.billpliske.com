# Tall Tales Blog

A modern blog built with Vue 3, Vite, and AWS Amplify Gen 2. Migrated from Gatsby while preserving the original design and content.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Your site will be running at `http://localhost:5173`

### Build for Production
```bash
npm run build
npm run preview
```

## ✍️ Creating New Blog Posts

### 1. Create a New Post Directory
Create a new folder in `/content/blog/` with your post's slug:
```bash
mkdir content/blog/my-new-post
```

### 2. Create the Post File
Create an `index.md` file in your new directory:
```bash
touch content/blog/my-new-post/index.md
```

### 3. Add Frontmatter and Content
Structure your markdown file like this:

```markdown
---
title: My Amazing New Blog Post
date: "2025-07-12T10:30"
description: A brief description of what this post covers
---

# Your Post Content Here

This is where you write your blog post content using **Markdown**.

## Subheadings Work Great

- Lists are supported
- Code blocks too!

```javascript
const greeting = "Hello, world!"
console.log(greeting)
```

Your post content continues here...
```

### 4. Frontmatter Fields

| Field | Required | Format | Example |
|-------|----------|--------|---------|
| `title` | ✅ Yes | String | `My Blog Post` |
| `date` | ✅ Yes | ISO String | `"2025-07-12T10:30"` |
| `description` | ❌ Optional | String | Brief summary for listings |

## 🖼️ Adding Images to Posts

### Option 1: External Images (Recommended)
Use external image hosting (Cloudinary, etc.) and reference directly:

```markdown
![Alt text](https://res.cloudinary.com/your-account/image/upload/your-image.jpg)
```

### Option 2: Local Images
1. Create an images folder in your post directory:
   ```bash
   mkdir content/blog/my-new-post/images
   ```

2. Add your images to this folder:
   ```bash
   cp my-image.jpg content/blog/my-new-post/images/
   ```

3. Reference in your markdown:
   ```markdown
   ![Alt text](./images/my-image.jpg)
   ```

### Image Best Practices
- Use descriptive alt text for accessibility
- Optimize images for web (WebP, compressed JPEGs)
- Keep file sizes reasonable (< 500KB recommended)

## 📁 Project Structure

```
├── content/blog/           # Your blog posts
│   ├── post-slug-1/
│   │   ├── index.md       # Post content
│   │   └── images/        # Optional: post images
│   └── post-slug-2/
│       └── index.md
├── src/
│   ├── components/        # Vue components
│   ├── pages/            # Page components
│   ├── utils/            # Utilities (markdown parser)
│   └── style.css         # Global styles
├── public/               # Static assets
└── amplify/             # AWS Amplify configuration
```

## 🎨 Styling

The blog uses your original design with:
- **Colors**: Dark theme with green accents
- **Fonts**: Raleway (body), Teko (headings), Roboto Mono (code)
- **Responsive**: Mobile-friendly layout

## 🚀 Deployment

### Deploy to AWS Amplify
1. Push your changes to your Git repository
2. Connect your repo to AWS Amplify
3. Amplify will automatically build and deploy your site

### Build Configuration
The site uses the included `amplify.yml` for build configuration and supports:
- Automatic builds on push
- Branch-based deployments
- Custom build settings

## 🛠️ Development Tips

### Code Syntax Highlighting
Supports syntax highlighting for:
- JavaScript/TypeScript
- CSS/SCSS
- JSON
- Bash
- Markdown

### Live Reload
Changes to blog posts are automatically reflected during development.

### URL Structure
- Home page: `/`
- Blog posts: `/blog/post-slug`
- 404 page: Automatic for invalid routes

## 📝 Editing Existing Posts

1. Navigate to the post directory: `content/blog/post-slug/`
2. Edit the `index.md` file
3. Save your changes
4. Changes will be visible immediately in development mode

## 🔧 Troubleshooting

### Post Not Showing Up?
- Check that your post is in the correct directory structure
- Verify the frontmatter is properly formatted with `---` delimiters
- Ensure the `title` and `date` fields are present

### Images Not Loading?
- Verify image paths are correct relative to the markdown file
- Check that image files exist in the specified location
- Ensure image file extensions are correct

---

Built with ❤️ using Vue 3, Vite, and AWS Amplify Gen 2