<template>
  <div>
    <Swiper>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
  import Vue from "vue"
  import VueAwesomeSwiper from "vue-awesome-swiper"
  Vue.use(VueAwesomeSwiper)
  import {Swiper,SwiperSlide,directive} from "vue-awesome-swiper"
    export default {
        name: "home",
        data(){
            return{
                multidata:""
            }
        },
        components:{
            Swiper,
            SwiperSlide
        },
        directives:{
            swiper:directive
        },
        created() {
            console.log(this.multidata);
            let xml =new XMLHttpRequest()
            xml.open("get","http://192.168.1.39:3000/home/multidata")
            xml.send()
            xml.onreadystatechange= ()=>{
                if (xml.response==4&&xml.status==200){
                    this.multidata = JSON.parse(xml.response)
                    console.log(JSON.parse(xml.response));
                }
            }
        }
    }
</script>

<style scoped>

</style>