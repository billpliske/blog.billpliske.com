import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markdown'

export interface BlogPost {
  slug: string
  title: string
  date: string
  description?: string
  content: string
  html: string
}

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && Prism.languages[lang]) {
      try {
        return '<pre class="language-' + lang + '"><code class="language-' + lang + '">' +
               Prism.highlight(str, Prism.languages[lang], lang) +
               '</code></pre>'
      } catch (__) {}
    }
    return '<pre class="language-none"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
  }
})

// Simple frontmatter parser - no Node.js dependencies needed!
function parseFrontmatter(rawContent: string) {
  const frontmatterRegex = /^---\s*\n(.*?)\n---\s*\n(.*)/s
  const match = rawContent.match(frontmatterRegex)
  
  if (!match) {
    return { data: {}, content: rawContent }
  }
  
  const frontmatterText = match[1]
  const content = match[2]
  
  // Parse simple YAML-like frontmatter
  const data: Record<string, any> = {}
  frontmatterText.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '')
      data[key] = value
    }
  })
  
  return { data, content }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const blogModules = import.meta.glob('/content/blog/*/index.md', { 
    query: '?raw', 
    import: 'default' 
  })
  const posts: BlogPost[] = []

  for (const path in blogModules) {
    const rawContent = await blogModules[path]() as string
    const { data: frontmatter, content } = parseFrontmatter(rawContent)
    
    // Extract slug from path
    const slug = path.match(/\/content\/blog\/(.+)\/index\.md$/)?.[1] || ''
    
    const post: BlogPost = {
      slug,
      title: frontmatter.title || '',
      date: frontmatter.date || '',
      description: frontmatter.description || '',
      content,
      html: md.render(content)
    }
    
    posts.push(post)
  }

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Pre-load all blog posts at build time for individual post lookup
let allPostsCache: BlogPost[] | null = null

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    // Use the same glob pattern to ensure consistency
    if (!allPostsCache) {
      allPostsCache = await getAllBlogPosts()
    }
    
    return allPostsCache.find(post => post.slug === slug) || null
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error)
    return null
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}