<template>
  <nav>
    <router-link to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/list">
      <i class="iconfont icon-liebiao"></i>
      <span>列表</span>
    </router-link>
    <router-link to="/collect">
      <i class="iconfont icon-shoucang"></i>
      <span>收藏</span>
    </router-link>
    <router-link to="/add">
      <i class="iconfont icon-tianjia"></i>
      <span>添加</span>
    </router-link>
  </nav>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {}
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>

<style scoped lang="less">
nav{
  height:60px;
  background:#fff;
  display:flex;
  position: fixed;
  width:100%;
  bottom:0;
  left:0;
  border-top:1px solid #ccc;
  align-items:center;/*看*/
  a{
    i{font-size:20px}
    display:flex;/*flex布局*/
    flex:1;
    flex-direction:column ;/*列布局*/
    align-items: center;/*居中*/
  }
  .active{
    color:orange;
  }
}
</style>
