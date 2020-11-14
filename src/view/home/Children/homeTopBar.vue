<template>
  <TopBar>
    <h4 slot="center">
      购物街
    </h4>
  </TopBar>
</template>

<script>
    import TopBar from "@/components/common/top-bar/TopBar"
    export default {
        name: "homeTopBar",
        components:{
            TopBar
        }
    }
</script>

<style scoped>

  h4{
    text-align: center;
    line-height: 44px;
    color: white;
  }
</style>