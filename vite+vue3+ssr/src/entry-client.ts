import { createApp } from './main'
import type { StateTree } from 'pinia';

const { app, router, pinia } = createApp()

declare global {
  interface Window {
    __PINIA_INITIAL_STATE__: Record<string, StateTree>;
  }
}

pinia.state.value = window.__PINIA_INITIAL_STATE__

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})