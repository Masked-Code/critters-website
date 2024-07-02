<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <img class="rounded-3xl m-4" width="300" src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnpoNjIzZXB1a2J0Z2JoeWM0M29xNWVmMWt3NXRodnppcnByYjFpMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kAbWiuvtzoG3e/giphy.webp" alt="Profile Picture">
      <div
        class="gradient-text text-5xl font-bold text-center"
        :style="{ animationDuration: animationDuration }">Critter</div>
      <div class="m-2 text-2xl font-bold">Owner</div>
      <div><b class="text-indigo-500">Discord:</b> crittercreek1</div>
      <div class="m-2 text-xl">Im the guy who knows what the fuck</div>
      <UBadge class="m-2 font-bold" size="md" color="green" variant="solid">Online</UBadge>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
const animationDuration = `5s`
</script>

<style>
.gradient-text {
  display: inline-block;
  background: linear-gradient(100deg, #d30707, #0493e6, #c8ff00, #8000f7, #00f314, #d30707);
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