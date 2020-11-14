<template>
  <div @click="urlTo">
    <img :src="goods.show.img" alt="" class="big-img">
    <p class="goods-title">{{goods.title}}</p>
    <p class="word">
      <span class="price">${{goods.price}}</span>
      <img src="@/assets/img/common/collect.svg" alt="">
      <span class="num">{{goods.cfav}}</span>
    </p>
  </div>
</template>0
<script>
    export default {
        name: "GoodsItem",
        props:{
            goods:{
                type:Object
            }
        },
        methods:{
            urlTo(){
                console.log(this.goods.iid);
                this.$router.push({
                    path:"/detail",
                    query:{
                        id:this.goods.iid
                    }
                })
            }
        }
    }
</script>

<style scoped>

  div{
    width: 45%;
    /*flex: 1;*/
  }
  div .big-img{
    width: 100%;
    vertical-align: middle;
  }
  div p img{
    width: 20px;
    margin-left: 40px;
  }
  .goods-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: red;
    vertical-align: middle;
  }
  .num{
    vertical-align: middle;
   }
  .word{
    line-height: 40px;
  }
</style>