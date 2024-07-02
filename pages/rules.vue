<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <div class="text-4xl font-bold m-4 text-primary">Rules</div>
      <div class="m-2 grow-on-hover text-xl">Puppet Population is 2.5x</div>
      <div class="m-2 grow-on-hover text-xl">Radiation Zone</div>
      <div class="m-2 grow-on-hover text-xl">Safe Zone</div>
      <div class="m-2 grow-on-hover text-xl">Recurring Generation Of Admin Raidable Bases</div>
      <div class="m-2 grow-on-hover text-xl">Traders</div>
      <div class="m-2 grow-on-hover text-xl">Smaller Squad Sizes</div>
      <div class="m-2 grow-on-hover text-xl">Max 2 Flags Per Squad</div>
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
  transform: scale(1.2);
  cursor: default;
}
</style>