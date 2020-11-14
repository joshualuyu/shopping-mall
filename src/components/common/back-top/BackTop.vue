<template>
  <div class="back-top" v-show="isShow">
    <img src="@/assets/img/common/top.png" alt="" @click="backTop">
  </div>
</template>

<script>
    export default {
        name: "BackTop",
        props:{
            isShow:{
                type:Boolean,
                default:false
            }
        },
       methods:{
           backTop(){
               this.$emit("backTop")
           }
       }
    }
</script>

<style scoped>
  .back-top{
    position: fixed;
    bottom: 70px;
    right: 30px;
    opacity: 0.8;
  }
  img{
    width: 40px;
  }
</style>