<template>
  <UCard class="rounded-2xl ml-[10%] mr-[10%] min-h-96">
    <div class="flex flex-col place-items-center">
      <div class="flex flex-row place-items-center space-x-48">
        <div class="flex flex-col place-items-center text-xl">
          <div class="text-4xl font-bold m-4 text-primary">
            <u>Critter's Back Yard Mechs ON PVP</u>
          </div>
          <div class="m-2 grow-on-hover">
            <b>Address:</b> 148.72.158.253:7042
          </div>
          <div class="m-2 grow-on-hover">
            <b>Status:</b> Online
          </div>
          <div class="m-2 grow-on-hover">
            <b>Country:</b> United States of America
          </div>
          <div class="m-2 grow-on-hover">
            <b>Server Location:</b> Saint Louis (MO) - USC
          </div>
          <div class="m-2 grow-on-hover">
            <b>Version:</b> 0.9.536.86452
          </div>
          <div class="m-2 grow-on-hover">
            <b>Peak Rank:</b> #859
          </div>
        </div>
        <iframe class="rounded-xl" src="https://discord.com/widget?id=1237309305225740328&theme=dark" width="400" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </div>
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
  transform: scale(1.1);
  cursor: default;
}
</style>