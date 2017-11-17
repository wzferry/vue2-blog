<template>
  <div>
    <div style="width: 100%;">
      <NavBar/>
    </div>
    <div style="display:flex;">
      <div style="width: 80%; margin-top: 20px; height: 600px; background: #fff;">
        <Content/>
      </div>
      <div style="width: 20%; margin-top: 20px; margin-left: 20px; height: 600px; background: #fff;">
        <SlideBar/>
      </div>
    </div>

  </div>
</template>

<script>
  import { NavBar, Content, SlideBar } from '../../views/layout/index';

  export default{
    name: 'layout',
    components: {
      NavBar,
      Content,
      SlideBar
    }
  }
</script>

<style>

</style>
