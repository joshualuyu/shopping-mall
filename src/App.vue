<template>
  <div id="app">
    <Bottom></Bottom>
  </div>
</template>

<script>
import Bottom from "./components/comtent/bottom/bottom"
import Me from "./view/me/me"
export default {
  name: 'App',
  components: {
      Bottom,
      Me
  }
}
</script>

<style>
  @import "./assets/css/fonts/图标字体/css/font-awesome.css";
  @import "./assets/css/base.css";
  template{
    overflow-x:hidden ;
  }
</style>
