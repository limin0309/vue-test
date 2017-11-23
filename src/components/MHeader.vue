<template>
  <div class="header">
    {{title}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props:["title"],
    data(){
      return {}
    },
    computed: {},
    components: {},
    methods: {}
  }
</script>

<style scoped>
  .header {
    background: #f1f1f1;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #666;
  }
</style>
