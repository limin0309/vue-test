<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in data">
        <img :src="item" alt="">
      </div>
      <!-- Slides -->
      <!--<div class="swiper-slide">Slide 1</div>-->
      <!--<div class="swiper-slide">Slide 2</div>-->
      <!--<div class="swiper-slide">Slide 3</div>-->
      <!--<div class="swiper-slide">Slide 4</div>-->
    </div>
    <!-- If we need pagination  就是底下的小点-->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons 需要左右按钮-->
    <!--<div class="swiper-button-prev"></div>-->
    <!--<div class="swiper-button-next"></div>-->

    <!-- If we need scrollbar  需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'//  "main": "dist/js/swiper.js",   会直接找到dist下的swiper。js
  import 'swiper/dist/css/swiper.css';//引入swiper样式


  export default{
    props: ['data'],//会挂载在当前组件的实例上
    data(){
      return {}
    },
    mounted(){
       new Swiper ('.swiper-container', {
        loop: true,

        // If we need pagination
        pagination:'.swiper-pagination',

      })
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>

<style scoped>
img{width:100%}
</style>
