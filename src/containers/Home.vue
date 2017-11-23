<template>
  <div>
    <m-header title="斗鱼主播"></m-header>
    <!--如果一个组件过于庞大，会导致难以维护，轮播图组件 可能也会被复用-->
    <div v-if="sliders.length">
      <slider :data="sliders"></slider>
      <!--不能直接渲染slider 可以数据没过来，slider就渲染完毕了 导致轮播图不能使用-->
    </div>
    <h3>最新上架</h3>
    <ul class="hot">
      <li v-for="hot in hots">
        <img :src="hot.photo" alt="">
        <span>{{hot.people}}</span>
      </li>
    </ul>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSliders,getHot} from 'api';
  import Slider from 'components/Slider.vue'
  import Loading from 'components/Loading';
  import MHeader from 'components/MHeader'
  console.log(getSliders);
  export default{
    data(){
      return {
          sliders: [],
          hots:[],
        isLoading:true
      }
    },
    created(){
      getSliders().then(res => {
//            console.log(res.data);
        this.sliders = res.data;//将获取的数据放到sliders数组中
        this.isLoading=false;//数据加载完成隐藏loading
      }).catch(err => {
        console.log(err);
      });


      getHot().then(res=>{
//          console.log(res.data)
          this.hots=res.data;
      }).catch(err=>{
          console.log(err);
      })
    },
    components: {Slider,Loading,MHeader},
    methods: {}
  }
</script>

<style scoped lang="less">
  h3{color:#666;padding-left:2%;margin:10px 0;font-weight:normal}
.hot{
  display:flex;
  flex-wrap:wrap;//折行
  li{
    text-align:center;
    align-items: center;
    display:flex;
    flex-direction: column;//竖着的
    width:33.3%;
    img{width:80%;height:100%;}
  }
}
</style>
