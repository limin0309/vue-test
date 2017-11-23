<template>
  <div>
    <m-header title="添加页面"></m-header>
    <div class="add">
      <div class="group">
        <label for="bookName">人名</label>
        <input type="text" id="bookName" placeholder="请输入人物" v-model="people.people">
      </div>
      <div class="group">
        <label for="photo">封面</label>
        <input type="text" id="photo" placeholder="请输入封面" v-model="people.photo">
      </div>
      <div class="group">
        <label for="content">内容</label>
        <input type="text" id="content" placeholder="请输入详细内容" v-model="people.content">
      </div>
      <div class="group">
        <button @click="add">添加人物</button>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/MHeader'
    import {addPeople} from 'api'
  export default{
    data(){
      return {
        people: {
          people: '',
          photo: '',
          content: ''
        }

      }
    },
    computed: {},
    components: {MHeader},
    methods: {
        add(){
        addPeople(this.people).then(res=>{
           //添加成功后的逻辑
          this.$router.push('/list');
        });
        }
    }
  }
</script>

<style scoped lang="less">
  .add {
    padding: 0 20px;
    display: flex;
    flex-direction: column; //列布局
    .group {
      label {
        font-size: 16px;
        line-height: 25px;
      }
      input {
        border: 1px solid #ccc;
        height: 30px;
      }
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      button {
        height: 35px;
      }
    }
  }
</style>
