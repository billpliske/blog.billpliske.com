<template>
  <div class="layout-wrapper">
    <header>
      <h2 :class="['site-title', { home: isHomePage, sub: !isHomePage }]">
        <router-link to="/">{{ siteTitle }}</router-link>
      </h2>
      <p v-if="isHomePage" class="site-description">{{ siteDescription }}</p>
    </header>
    
    <main>
      <slot />
    </main>
    
    <footer class="site-footer">
      © {{ currentYear }}, Built with Vue 3 & Amplify
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const siteTitle = 'Tall Tales'
const siteDescription = 'A (truthful) blog on development, design, and stuff.'
const currentYear = new Date().getFullYear()

const isHomePage = computed(() => route.path === '/')
</script>