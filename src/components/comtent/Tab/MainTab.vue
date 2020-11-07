<template>
  <div>
    <TabBar>
      <TabBarItem path="/home" colors="pink">
        <div slot="icon" class="fa fa-home"></div>
        <div slot="word">首页</div>
      </TabBarItem>
      <TabBarItem path="/profile" colors="green">
        <div slot="icon" class="fa fa-home"></div>
        <div slot="word">目录页</div>
      </TabBarItem>
      <TabBarItem path="/category" colors="orange">
        <div slot="icon" class="fa fa-th-large"></div>
        <div slot="word">分类页</div>
      </TabBarItem>
      <TabBarItem path="/shoppingCart">
        <div slot="icon" class="fa fa-shopping-cart"></div>
        <div slot="word">购物车页</div>
      </TabBarItem>
    </TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
    import TabBar from "../../common/tab-bar/tab-bar"
    import TabBarItem from "../../common/tab-bar/tab-bar-item"
    export default {
        name: "MainTab",
        components:{
            TabBar,
            TabBarItem
        }
    }
</script>

<style scoped>
  .fa{
    font-size: 30px;
  }
</style>