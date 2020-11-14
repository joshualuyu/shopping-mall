<template>
  <div id="home">
    <HomeTopBar></HomeTopBar>
    <div class="wrapper" ref="wrapper">
      <div class="content">

        <Swiper>
          <SwiperItem v-for="(item,index) in banner"
          :key="index">
            <img :src="item.image" alt="">
          </SwiperItem>
        </Swiper>
        <HomeR :recommend="recommend"></HomeR>
        <Popular></Popular>
        <TitleBar :titles="['流行','新款','精选']" @itemClick="itemData"></TitleBar>
        <Goods :goodss="goodss[titles[index]]"></Goods>
      </div>
    </div>
    <Backtop :isShow="homeIsShow" @backTop="backTop"></Backtop>
  </div>
</template>
<script>
    //导入公共组件
    import {request} from "../../network";
    import {Swiper,SwiperItem} from "@/components/common/swiper"
    import {getMultidata} from "../../network/homeData"
    import Goods from "../../components/comtent/goods/Goods"
    import TitleBar from "@/components/comtent/titleBar/titleBar"
    import {getHomeGoods} from "../../network/homeGoods";
    import betterScroll from "better-scroll"
    import Backtop from "@/components/common/back-top/BackTop"
    //私有组件
    import HomeTopBar from "./Children/homeTopBar"
    import HomeR from "./Children/HomeRecommend"
    import Popular from "./Children/WeekPopular"

    export default {
        name: "home",
        components: {
            HomeTopBar,
            Swiper,
            SwiperItem,
            HomeR,
            Popular,
            TitleBar,
            Goods,
            Backtop
        },
        data() {
            return {
                banner:[],
                recommend:[],
                goodss:{
                    pop:{
                        title:"流行",
                        id:0,
                        list:[]
                    },
                    news:{
                        title:"新款",
                        id:0,
                        list:[]
                    },
                    sell:{
                        title:"精选",
                        id:0,
                        list:[]
                    }
                },
                titles:["pop","news","sell"],
                index:0,
                scroll,
                homeIsShow:false
            }
        },
        methods: {
            getHomeGoods(title,id){
                request({
                    url:"/home/"+title,
                    params:{
                        id:id
                    }
                }).then(value=>{
                    this.goodss[title].list.push(...value.data.data.list)
                    this.goodss[title].id++;
                    this.$nextTick(() => {
                        const scroll = new betterScroll(this.$refs.wrapper, {
                            click:true,
                            probeType:3,
                            pullUpLoad:true
                        })
                        this.scroll =scroll
                        this.scroll.on("pullingUp",position=>{
                            this.getHomeGoods([this.titles[this.index]],this.goodss[this.titles[this.index]].id+1)
                        })
                        this.scroll.on("scroll",position=>{
                            if (position.y>=-1000){
                                this.homeIsShow=false
                            } else {
                                this.homeIsShow=true
                            }
                        })
                    })
                })
            },
            itemData(index){
                this.index =index
                this.scroll.refresh()
            },
            backTop(){
                this.scroll.scrollTo(0,0,3000)
            }
        },
        created() {
            getMultidata().then(value=>{
                console.log(this.index);
                console.log(value);
                this.banner=value.data.data.banner.list;
                this.recommend=value.data.data.recommend.list;
            })
            this.getHomeGoods("pop",this.goodss.pop.id+1)
            this.getHomeGoods("news",this.goodss.news.id+1)
            this.getHomeGoods("sell",this.goodss.sell.id+1)
        },
    }
</script>

<style scoped>
  #home{
    margin-bottom: 50px;
  }
  .wrapper{
    overflow: hidden;
    height: calc(100vh - 50px - 44px);
  }

</style>