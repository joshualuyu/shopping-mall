<template>
  <div id="goods">
    <Item v-for="item in goodss.list" :goods="item"></Item>
  </div>
</template>

<script>
  import Item from "./GoodsItem"
    export default {
        name: "Goods",
        components:{
            Item
        },
        props:{
            goodss:Object
        }
    }
</script>

<style scoped>
  #goods{
    display: flex;
    flex-wrap:wrap ;
    width: 100%;
    justify-content: space-around;
  }


</style>