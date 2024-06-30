<template>
  <div class="flex flex-col justify-center items-center min-h-96 m-[5%]">
    <div class="flex flex-col mt-24 mb-24 justify-center items-center">
      <div
        class="gradient-text text-9xl font-bold text-center mt-14"
        :style="{ animationDuration: animationDuration }"
      >
      CRITTER'S BACKYARD
      </div>
      <div class="text-3xl font-bold mt-5 mb-8">
         Death is everywhere! Do you have what it takes to survive?
      </div>
      <UButton size="lg" class="text-xl font-bold rounded-3xl" color="primary" variant="soft" to="https://discord.gg/YEAyUyQHzR" target="_blank">Discord<UIcon name="i-heroicons-link"></UIcon></UButton>
    </div>
    <ULandingGrid class="m-36 ml-48 mr-48">
      <ULandingCard class="col-span-6 row-span-4" title="Background">
        <template #icon>
          <UIcon name="i-heroicons-users" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Critter, once a quiet farmer in Critter's Backyard, was driven mad by the brutal slaughter of his family by marauding bandits. Now, he roams the wasteland, a ruthless force of vengeance. With a scarred face and eyes burning with fury, he wields a rusty machete and a shotgun, hunting those who wronged him. His name is whispered among survivors, a legend of madness and bloodshed. Will you dare enter Critter's Backyard and uncover the dark secrets fueling his unending quest for retribution?
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Ideals">
        <template #icon>
          <UIcon name="i-heroicons-building-office" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Survival, realism, and camaraderie. Players come together to navigate a harsh and immersive environment, prioritizing teamwork, strategy, and resourcefulness. The community values respect, fair play, and mutual support, fostering an atmosphere where players can challenge themselves and each other in a competitive yet cooperative spirit. The server encourages creative problem-solving, adaptability, and resilience, reflecting the core survivalist themes of the game while building a strong, supportive network of players.
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-4" title="Triats">
        <template #icon>
          <UIcon name="i-heroicons-currency-dollar" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Our SCUM server and its community often showcase the best aspects of online gaming. The server is well-maintained, providing a stable and immersive environment for players to explore the game's rich survival mechanics. The community fosters a strong sense of camaraderie, with players readily sharing tips and resources to help one another succeed. This welcoming atmosphere encourages teamwork, mutual respect, and fair play, enhancing the overall gaming experience and contributing to a vibrant and enjoyable community for all members.
        </template>
      </ULandingCard>
      <ULandingCard class="col-span-6 row-span-2" title="Calling Card">
        <template #icon>
          <UIcon name="i-heroicons-cube-transparent" class="text-4xl text-primary"></UIcon>
        </template>
        <template #description>
          Welcome to our SCUM community, where survival isn't just a game—it's a way of life! Whether you're a seasoned veteran or a fresh convict washed ashore, our community offers the perfect blend of camaraderie and competition. Engage in intense PVP battles, join cooperative missions, or simply explore the vast open world filled with challenges and opportunities. Our dedicated players and supportive moderators ensure an immersive and dynamic experience for all. Dive into a world where every decision matters, build your base, master the elements, and prove you have what it takes to thrive on the unforgiving island. Join us, and let's conquer the SCUM together!
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
