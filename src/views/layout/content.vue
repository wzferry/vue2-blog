<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <!--:key="key"-->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default{
    methods: {
      key() {

      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
