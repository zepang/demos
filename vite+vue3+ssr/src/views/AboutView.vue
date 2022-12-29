<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { defineComponent, useSSRContext } from 'vue'
import { useCounterStore } from '@/stores/counter'

export default defineComponent({
  serverPrefetch () {
    console.log(111111111)
    console.log(useSSRContext())
    const store = useCounterStore()
    return { store }
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
