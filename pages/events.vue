<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <div class="text-3xl font-bold text-primary m-2">Events</div>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-home-modern" class="text-xl text-primary"/> Critter's Second Home
        </template>
        <UProgress animation="carousel" />
        <template #footer>
          <div class="flex flex-row justify-between">
            <UBadge size="md" color="yellow" variant="solid">Under Constructioin</UBadge>
            <div class="font-bold text-primary">N/A</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-home" class="text-xl text-primary"/> Critter's Frozen Vacation Home
        </template>
        <div>Information Coming Soon</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <UBadge size="md" color="green" variant="solid">Unraided</UBadge>
            <div class="font-bold text-primary">Posted: 6/25/2024</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-building-storefront" class="text-xl text-primary"/> Critter's Hidden Toolshed
        </template>
        <div>Information Coming Soon</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <UBadge size="md" color="red" variant="solid">Raided</UBadge>
            <div class="font-bold text-primary">Posted: 6/24/2024</div>
          </div>
        </template>
      </UCard>
    </div>
  </UCard>
</template>

<script lang="ts" setup>

</script>

<style>
.grow-on-hover {
  transition: transform 0.1s ease-in-out;
  cursor: default;
}

.grow-on-hover:hover {
  transform: scale(1.05);
  cursor: default;
}
</style>