<template>
  <div id="tab-tar">
    <slot>

    </slot>
  </div>
</template>

<script>
    export default {
        name: "tab-bar"
    }
</script>

<style scoped>
  #tab-tar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 55px;
    display: flex;
    text-align: center;
    background: red;
    color: white;
  }

</style>