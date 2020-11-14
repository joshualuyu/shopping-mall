<template>
  <div class="home-recommend">
    <div class="rec-item" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeRecommond",
        props:{
            recommend:Array
        }
    }
</script>

<style scoped>

  .home-recommend{
    display: flex;
  }
  .rec-item img{
    width: 20vw;
  }
  .rec-item{
    margin-top: 3vh;
    flex: 1;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 10px #ccc solid;
  }
</style>