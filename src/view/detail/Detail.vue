<template>
  <div id="detail">
    <TopBar bgn="white">
      <div slot="left" @click="back">
        <img src="@/assets/img/common/back.svg" alt="" class="pic">
      </div>
      <div slot="center" class="item">
        <div class="item-top"
             v-for="(item,index) in topTitles"
             :key="index"
             @click="change(index)"
             :class="{active:current==index?true:false}">{{item}}</div>
      </div>
    </TopBar>
    <Swiper>
      <SwiperItem v-for="(item,index) in detailGoods.bannerImg">
        <div class="banner-img">
          <img :src="item" alt="" >
        </div>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import {request} from "../../network";
  import TopBar from "../../components/common/top-bar/TopBar"
  import {Swiper,SwiperItem} from "@/components/common/swiper"

  export default {
      name: "Detail",
      components:{
          TopBar,
          SwiperItem,
          Swiper
      },
        data(){
            return{
                detailGoods:{
                    bannerImg:[],
                    shoppingInfo:{
                        title:"",
                        price:"",
                        oldPrice:"",
                        des:""
                    },
                    columns:[],
                    services:[],
                    des:"",
                    detailImg:[],
                    itemParam:[],
                    rate:[]


                },
                topTitles:["商品","推荐","评论","参数"],
                current:0
            }
        },
        methods:{
            getDetailData(ids){
                request({
                    url:"detail",
                    params:{
                        goodsId:ids
                    }
                }).then(value=>{
                    console.log(value);
                    let dat = value.data.result
                    this.detailGoods.bannerImg=dat.itemInfo.topImages
                    this.detailGoods.shoppingInfo.title=dat.itemInfo.title
                    this.detailGoods.shoppingInfo.price=dat.itemInfo.price
                    this.detailGoods.shoppingInfo.oldPrice=dat.itemInfo.oldPrice
                    this.detailGoods.shoppingInfo.des=dat.itemInfo.discountDesc
                    this.detailGoods.columns.push(dat.columns[0],dat.columns[1],dat.shopInfo.services[dat.shopInfo.services.length-1].name)
                    this.detailGoods.services=dat.shopInfo.services
                    this.detailGoods.services.pop()
                    this.detailGoods.des=dat.itemInfo.desc
                    this.detailGoods.detailImg=dat.detailInfo.detailImage[0].list
                    this.detailGoods.itemParam=dat.itemParams
                    this.detailGoods.rate=dat.rate.list
                    console.log(this.detailGoods);
                })
            },
            back(){
                this.$router.push("/home")
            },
            change(index){
                console.log(index);
                this.current=index
            }
        },
        created() {
            // console.log(this.detailGoods);
            this.getDetailData(this.$route.query.id)
        },
        mounted() {
          console.log(this.detailGoods);
      }
    }
</script>

<style scoped>
  .pic{
    margin-top: 10px;
  }
  .item{
    display: flex;
  }
  .item-top{
    flex: 1;
    line-height: 44px;
    text-align: center;
  }
  .active{
    color: red;
    border-bottom:1px red solid ;
  }
.banner-img{
  height: 300px;
  overflow: hidden;
}
</style>