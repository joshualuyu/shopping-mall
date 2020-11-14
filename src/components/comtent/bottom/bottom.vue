<template>
  <div>
    <Bottom>
      <BottomItem path="/home" cols="blue">
        <div slot="icon" class="fa fa-play"></div>
        <div slot="word">首页</div>
      </BottomItem>
      <BottomItem path="/category">
        <div slot="icon" class="fa fa-play"></div>
        <div slot="word">首页</div>
      </BottomItem>
      <BottomItem path="/profile">
        <div slot="icon" class="fa fa-play"></div>
        <div slot="word">首页</div>
      </BottomItem>
      <BottomItem path="/shoppingCart">
        <div slot="icon" class="fa fa-play"></div>
        <div slot="word">首页</div>
      </BottomItem>
    </Bottom>
    <router-view></router-view>
  </div>
</template>

<script>
  import Bottom from "../../common/tab-bar/bottomBar"
  import BottomItem from "../../common/tab-bar/bottomBarItem"
    export default {
        name: "bottom",
        components:{
            Bottom,
            BottomItem
        }
    }
</script>

<style scoped>

</style>