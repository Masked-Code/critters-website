<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <div class="text-3xl font-bold text-primary m-2">Squads</div>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-user-group" class="text-xl text-primary"/><span class="text-2xl"> Racoon Bandit</span>
        </template>
        <div>That one squad</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <UBadge size="lg" color="green" variant="solid" class="m-1">Person</UBadge>
            <div class="font-bold text-primary m-1">1106 Fame Points</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-user-group" class="text-xl text-primary"/><span class="text-2xl"> Big Dick Bandits</span>
        </template>
        <div>The top dogs</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <UBadge size="md" color="orange" variant="solid" class="m-1">Masked</UBadge>
              <UBadge size="lg" color="blue" variant="solid" class="m-1">DangerZoneGaming</UBadge>
            </div>
            <div class="font-bold text-primary m-1">375 Fame Points</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-user-group" class="text-xl text-primary"/><span class="text-2xl"> I Like Turtles</span>
        </template>
        <div>We reeeeaallly like turtles</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <UBadge size="md" color="red" variant="solid" class="m-1">Thing 1</UBadge>
              <UBadge size="lg" color="yellow" variant="solid" class="m-1">Thing 2</UBadge>
            </div>
            <div class="font-bold text-primary m-1">273 Fame Points</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-user-group" class="text-xl text-primary"/><span class="text-2xl"> Purple Snakes</span>
        </template>
        <div>SNAKES ON THE PLANE!</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <UBadge size="md" color="purple" variant="solid" class="m-1">Me</UBadge>
              <UBadge size="lg" color="white" variant="solid" class="m-1">Myself</UBadge>
              <UBadge size="lg" color="black" variant="solid" class="m-1">I</UBadge>
            </div>
            <div class="font-bold text-primary m-1">199 Fame Points</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-user-group" class="text-xl text-primary"/><span class="text-2xl"> Big Beavers</span>
        </template>
        <div>Big beavers, hairy beavers, long beavers... just all the beavers</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <UBadge size="md" color="teal" variant="solid" class="m-1">The Beaver</UBadge>
            </div>
            <div class="font-bold text-primary m-1">192 Fame Points</div>
          </div>
        </template>
      </UCard>
      <UCard class="m-2 min-w-[90%] grow-on-hover">
        <template #header>
          <UIcon name="i-heroicons-user-group" class="text-xl text-primary"/><span class="text-2xl"> Fearless Dragons</span>
        </template>
        <div>RAWR 🔥🔥🔥</div>
        <template #footer>
          <div class="flex flex-row justify-between">
            <div class="flex flex-row">
              <UBadge size="md" color="blue" variant="solid" class="m-1">The knight in shing armor</UBadge>
            </div>
            <div class="font-bold text-primary m-1">27 Fame Points</div>
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