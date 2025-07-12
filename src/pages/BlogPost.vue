<template>
  <div>
    <div v-if="loading">Loading post...</div>
    <div v-else-if="error">Error loading post: {{ error }}</div>
    <div v-else-if="!post">Post not found</div>
    <div v-else>
      <article>
        <header>
          <h1>{{ post.title }}</h1>
          <p class="blog-post-date">{{ formatDate(post.date) }}</p>
        </header>
        <section v-html="post.html"></section>
      </article>

      <nav>
        <ul class="blog-nav">
          <li v-if="previousPost" class="blog-nav-item prev">
            <router-link :to="`/blog/${previousPost.slug}`">
              ← {{ previousPost.title }}
            </router-link>
          </li>
          <li v-else class="blog-nav-item prev" style="visibility: hidden;"></li>
          
          <li v-if="nextPost" class="blog-nav-item next">
            <router-link :to="`/blog/${nextPost.slug}`">
              {{ nextPost.title }} →
            </router-link>
          </li>
          <li v-else class="blog-nav-item next" style="visibility: hidden;"></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getBlogPost, getAllBlogPosts, formatDate, type BlogPost } from '@/utils/markdown'

const route = useRoute()
const post = ref<BlogPost | null>(null)
const allPosts = ref<BlogPost[]>([])
const previousPost = ref<BlogPost | null>(null)
const nextPost = ref<BlogPost | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const loadPost = async (slug: string) => {
  loading.value = true
  error.value = null
  
  try {
    // Load the specific post
    post.value = await getBlogPost(slug)
    
    if (!post.value) {
      error.value = 'Post not found'
      return
    }

    // Load all posts to determine previous/next
    if (allPosts.value.length === 0) {
      allPosts.value = await getAllBlogPosts()
    }

    // Find current post index and set previous/next
    const currentIndex = allPosts.value.findIndex(p => p.slug === slug)
    if (currentIndex !== -1) {
      previousPost.value = currentIndex > 0 ? allPosts.value[currentIndex - 1] : null
      nextPost.value = currentIndex < allPosts.value.length - 1 ? allPosts.value[currentIndex + 1] : null
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error'
  } finally {
    loading.value = false
  }
}

// Watch for route changes
watch(() => route.params.slug, (newSlug) => {
  if (typeof newSlug === 'string') {
    loadPost(newSlug)
  }
}, { immediate: true })

onMounted(() => {
  const slug = route.params.slug
  if (typeof slug === 'string') {
    loadPost(slug)
  }
})
</script>