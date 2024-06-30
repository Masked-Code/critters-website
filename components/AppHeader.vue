<template>
    <UCard class="rounded-3xl m-10">
        <div class="flex items-center justify-between">
            <div class="justify-self-start">
                <UButton color="primary" variant="link" to="/" class="text-3xl grow-on-hover">Critters Backyard</UButton>
            </div>
            <div class="justify-self-center">
                <UButton size="xl" class="rounded-2xl m-1" to="/events">Events</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/server">Server</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/rules">Rules</UButton>
                <UButton size="xl" class="rounded-2xl m-1 external-link" to="https://scum-map.com/en/interactive_map" target="_blank">Map</UButton>
                <UButton size="xl" class="rounded-2xl m-1 external-link" to="https://store.steampowered.com/news/app/513710" target="_blank">News</UButton>
                <UButton size="xl" class="rounded-2xl m-1" to="/contact">Contact</UButton>
            </div>
        </div>
    </UCard>
</template>
<script lang="ts" setup>
</script>

<style>
.grow-on-hover {
  transition: transform 0.1s ease-in-out;
  cursor: pointer;
}

.grow-on-hover:hover {
  transform: scale(1.1);
}

.external-link {
  cursor: alias;
}
</style>