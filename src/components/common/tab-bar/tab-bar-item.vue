<template>
    <div class="tab-item" @click="itemClick" :style="{color:change}">
      <slot name="icon"></slot>
      <slot name="word"></slot>
    </div>
</template>

<script>
    export default {
        name: "tab-bar-item",
        props:{
            path:String,
            colors:{
                type:String,
                default:"blue"
            }
        },
        computed:{
            isActive(){
                console.log(this.$route);
                return this.$route.path.indexOf(this.path)!==-1
            },
            change(){
                return this.isActive ?this.colors:""
            }
        },
        methods:{
            itemClick(){
                console.log(this.path);
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
  .tab-item{
    flex: 1;
  }

</style>