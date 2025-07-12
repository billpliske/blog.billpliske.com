import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/Home.vue'
import BlogPost from './pages/BlogPost.vue'
import NotFound from './pages/NotFound.vue'
import './style.css'

const routes = [
  { path: '/', component: Home },
  { path: '/blog/:slug', component: BlogPost, props: true },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')