<template>
  <div class="container">
    <div v-motion-slide-rotate-top class="block" />
  </div>
</template>

<style>
.container {
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
}

.block {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
