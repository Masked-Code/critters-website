<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%]">
    <div class="flex flex-col mt-24 mb-24 justify-center items-center">
      <div
        class="gradient-text text-9xl font-bold text-center mt-20"
        :style="{ animationDuration: animationDuration }"
      >
      CRITTER'S BACKYARD
      </div>
      <div class="text-2xl mt-3 mb-10">
         Death is everywhere! Do you have what it takes to survive?
      </div>
    </div>
    <ULandingGrid class="m-36 ml-48 mr-48">
      <ULandingCard class="col-span-6 row-span-4" title="Background">
        <template #icon>
          <UIcon name="i-heroicons-users" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Background information about the server and community Background information about the server and community Background information about the server and community Background information about the server and community
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Ideals">
        <template #icon>
          <UIcon name="i-heroicons-building-office" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Ideals and goals of the server and community Ideals and goals of the server and community Ideals and goals of the server and community Ideals and goals of the server and community Ideals and goals of the server and community
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-4" title="Triats">
        <template #icon>
          <UIcon name="i-heroicons-currency-dollar" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Things that make the server special Things that make the server special Things that make the server special Things that make the server special Things that make the server special
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Calling Card">
        <template #icon>
          <UIcon name="i-heroicons-cube-transparent" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Calling card for the server and community Calling card for the server and community Calling card for the server and community Calling card for the server and community
        </template>
      </ULandingCard>
    </ULandingGrid>
  </div>
</template>

<script setup lang="ts">
const animationDuration = `5s`

</script>

<style scoped>
.gradient-text {
  display: inline-block;
  background: linear-gradient(100deg, #6750db, #c45fff, #6750db, #6750db);
  background-size: 200% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: scroll-gradient linear infinite;
}

@keyframes scroll-gradient {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
