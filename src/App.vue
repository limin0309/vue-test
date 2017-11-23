<template>
  <div>
    <!--保持缓存 缓存页面-->
    <div class="content">
      <keep-alive>
        <transition name="tans">
        <router-view></router-view>
        </transition>
      </keep-alive>
      <tab></tab>
    </div>
  </div>
</template>

<script>
  import Tab from 'components/Tab'
  export default {
    data(){
      return {}
    },
    computed: {},
    components: {Tab},
    methods: {}
  }
</script>

<style scoped>
  .trans-enter{

  }
  .trans-enter-active{

  }
  .trans-leave-active{

  }

 /*每个组件都保管着自己的样式 与其他人无关*/
  .content{
    margin-bottom:70px;
  }
</style>
