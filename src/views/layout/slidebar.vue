<template>
  <div class="slide">
    <!--<transition name="fade" mode="out-in">-->
      <!--<router-view></router-view>-->
    <!--</transition>-->
    <span style="text-align: center;">欢迎来到我的博客!</span>
    <div style="margin-top: 30px; padding: 10px; border-top: 5px solid lightgray;">
      <router-link to="/article">
        <input type="button" value="发布随笔" style="font-size: 16px; color: #fff; background-color: lightseagreen; padding: 5px; border-radius: 4px; cursor: pointer;">
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="scss" scoped>

</style>
