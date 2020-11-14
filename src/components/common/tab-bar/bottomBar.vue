<template>
  <div id="bottomBar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "bottomBar"
    }
</script>

<style scoped>
  #bottomBar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background: #ccc;
  }
</style>