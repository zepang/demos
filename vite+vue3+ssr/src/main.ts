import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter } from './router'
import App from './App.vue'
import './assets/main.css'

export function createApp () {
  const app = createSSRApp(App)
  const router = createRouter()
  const pinia = createPinia()

  app.use(pinia)
  app.use(router)

  return { app, router, pinia }
}
