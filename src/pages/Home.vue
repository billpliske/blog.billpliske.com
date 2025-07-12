<template>
  <div>
    <div v-if="loading">Loading posts...</div>
    <div v-else-if="error">Error loading posts: {{ error }}</div>
    <div v-else>
      <article 
        v-for="post in posts" 
        :key="post.slug" 
        class="blog-post-preview"
      >
        <header>
          <h1 class="blog-post-title">
            <router-link :to="`/blog/${post.slug}`">
              {{ post.title }}
            </router-link>
          </h1>
          <div class="blog-post-date">{{ formatDate(post.date) }}</div>
        </header>
        <section class="blog-post-excerpt">
          <p v-if="post.description">{{ post.description }}</p>
          <p v-else>{{ getExcerpt(post.content) }}</p>
        </section>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAllBlogPosts, formatDate, type BlogPost } from '@/utils/markdown'

const posts = ref<BlogPost[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const getExcerpt = (content: string): string => {
  // Remove markdown formatting and get first 150 characters
  const plainText = content.replace(/[#*_`]/g, '').replace(/\n/g, ' ')
  return plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText
}

onMounted(async () => {
  try {
    posts.value = await getAllBlogPosts()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Unknown error'
  } finally {
    loading.value = false
  }
})
</script>