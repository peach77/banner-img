<template>
  <div class="wrap">
   <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
  <hr>
  <br><br><br><br><br>

<div class="swiper-container">
<swiper :options="swiperOption"  ref="mySwiper" >  
                        <!-- 这部分放你要渲染的那些内容 -->  
                        <swiper-slide v-for="item in items" :key="item.id"> 
                            <div class="box">
                              <img :src="item.imgUrl" class="index_img">
                              <p>{{item.text}}</p>
                            </div>
                        </swiper-slide>  

                       
               
  </swiper>

    <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    
</div>


  </div>

   
</template>

<script>
import Swiper from 'swiper'; 

    export default{
     
        name:'helloworld',
  
   
        data() {  
            return {
                items:[
                  {id:123,imgUrl:require("../assets/1.png"),text:'我是无人机'},{id:345,imgUrl:require("../assets/2.png"),text:'我是无人机'},{id:4890,imgUrl:require("../assets/3.png"),text:'我是无人机'},{id:890,imgUrl:require("../assets/4.png"),text:'我是无人机'},{id:2890,imgUrl:require("../assets/5.png"),text:'我是无人机'},{id:1890,imgUrl:require("../assets/6.png"),text:'我是无人机'}],
                swiperOption: {  
                  grabCursor : true,
                    slidesPerView : 3,  
                    centeredSlides : true,  
                    centeredSlidesBounds: true,
                    spaceBetween : 40,
                      loop : true,
                      slideToClickedSlide: true,
                                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  },
                    
                }, 
        
            }  
        },  
      
        computed: {  
  
            swiper() {  
              return this.$refs.mySwiper.swiper;  
            }  
        },  
        mounted () {  
            //这边就可以使用swiper这个对象去使用swiper官网中的那些方法  
            //this.swiper.slideTo(0, 0, false);  
          this.$refs.mySwiper=new Swiper('.swiper-container', {
        autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
                },

       });
         }  
    }
</script>


<style >

div.wrap{
  width: 1200px;
  margin: auto;
}

div.box{
  padding:80px 20px;
  width: 300px;
 
  margin: auto;
  text-align: center;
 

}
div.box img{
  width: 200px;
  height: 200px;
}
.swiper-slide-active{

  transform: scale(1.5);
  
}

  .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
</style>