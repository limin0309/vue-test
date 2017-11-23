<template>
  <div>
    <m-header title="列表页"></m-header>
    <scroller :on-refresh="refresh" ref="scroller" class="top">
      <ul class="list">
        <li v-for="people in peoples">
          <img v-lazy="people.photo" alt="">
          <div>
            <h3>{{people.people}}</h3>
            <p>{{people.content}}</p>
            <button @click="remove(people.id)">删除</button>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/MHeader'
  import {getPeople, removePeople} from 'api'
  export default{
    data(){
      return {peoples: []}
    },
    created(){
      this.getList();
    },
    components: {MHeader},
    methods: {
      remove(id){
        removePeople(id).then(res => {
          //前台删除成功后将此项在页面中移除掉
          this.peoples=this.peoples.filter(item => item.id != id);
        });//返回false不要  返回true留下
      },
      refresh(){
        //获取最新数据
        this.getList();
      },
      getList(){
        getPeople().then(res => {
          this.peoples = res.data;//读取所有图书放到数组中
          //加载数据后，获取scroll 调用finishPullToRefresh
          this.$refs.scroller.finishPullToRefresh();
        })
      },

    }
  }
</script>

<style scoped lang="less">
  .list {
    li {
      display: flex;
      border-bottom: 1px solid #ccc;
      img {
        width: 100px;
        height: 100px;
        margin:10px;
      }
      div {
        h3 {
          color: #666;
          margin: 5px;
        }
        p {
          margin: 5px;
        }
        display: flex;
        flex-direction: column;
      }
    }
    img[lazy="loading"] {
      background: url("../assets/loading.gif") no-repeat center;
      background-size: cover;
    }
    img[lazy='loading'] {

    }
    img[lazy="loaded"] {
      animation: fadeIn 2s;
      background: #00ff00;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0
    }
    50% {
      background: #000;
    }
    to {
      opacity: 1
    }
  }

  .top {
    margin-top: 40px;
  }
</style>
