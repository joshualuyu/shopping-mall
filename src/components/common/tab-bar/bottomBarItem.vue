<template>
  <div id="Item" @click="change" :style="{color:isChange}">
    <slot name="icon"></slot>
    <slot name="word"></slot>
  </div>
</template>
<script>
    export default {
        name: "bottomBarItem",
        props:{
            path:String,
            cols:{
                type:String,
                default:"red"
            }
        },
        computed:{
            isActive(){
                // console.log(this.$route);
                return this.$route.path.indexOf(this.path) !==-1
            },
             isChange(){
                 return this.isActive?this.cols:""
             }
        },
        methods:{
            change(){
                console.log(this.index);
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
  #Item{
    flex: 1;
    font-size: 16px;
    text-align: center;
  }
  .fa{
    font-size: 20px;
  }
</style>