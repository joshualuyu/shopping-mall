<template>
  <div class="title-bar">
    <div class="title-item"
         v-for="(item,index) in titles"
         :key="item"
          @click="change(index)">
      <span :class="{active:arrent==index?true:false}">
        {{item}}
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "titleBar",
        props:{
            titles:Array
        },
        data(){
            return{
                arrent:0
            }
        },
        methods:{
            change(index){
                this.arrent =index
                this.$emit("itemClick",index)
            }
        }
    }
</script>

<style scoped>

  .title-bar{
    margin-top: 10px;
    display: flex;
  }
  .title-item{
    flex: 1;
    text-align: center;
  }
  .active{
    color: #ff96b4;
    border-bottom: 2px #ff69b4 solid;
  }
</style>