<template>
  <NuxtLayout>
    <AppHeader />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Critters Backyard',
  meta: [
    { name: 'description', content: 'Critters Backyard SCUM server website' },
    { name: 'og:description', content: 'Critters Backyard SCUM server website' },
    { name: 'og:title', content: 'Critters Backyard'},
    { name: 'og:url', content: 'https://www.google.com/'},
    { name: 'lang', content: 'English'},
    { name: 'twitter:title', content: 'Critters Backyard'},
    { name: 'twitter:description', content: 'Critters Backyard SCUM server website'},
    { name: 'twitter:card', content: 'summary'},
  ],
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.1;
  filter: blur(1rem);
}
</style>
