<template>
  <div class="navmenu">
    <h3 class="header">wzferry <span>の</span> 博客</h3>
    <div style="display: flex; justify-content: space-between;">
      <ul class="navbar">
        <li><router-link to="/" style="color: lightblue;">首页</router-link></li>
        <li><router-link to="/about" style="color: lightblue;">关于我</router-link></li>
        <li><router-link to="/essay" style="color: lightblue;">所有随笔</router-link></li>
        <li><router-link to="/life" style="color: lightblue;">慢生活</router-link></li>
        <li><router-link to="/message" style="color: lightblue;">留言</router-link></li>
      </ul>
      <input type="text" placeholder="搜索关键字" class="search">
      <div style="display: flex; justify-content: space-around; ">
        <div style="margin-right: 20px;"><router-link to="/signIn" style="color: lightblue;">登录</router-link></div>
        <div><router-link to="/signUp" style="color: lightblue;">注册</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'navbar'
  }
</script>

<style lang="scss" scoped>
  .navmenu {
    .header {
      color: #fff;
      margin: 20px 0;
      @keyframes single-rotate{
        0% {
          -ms-transform: rotate(0);
          -moz-transform: rotate(0);
          -o-transform: rotate(0);
          -webkit-transform: rotate(0);
          transform: rotate(0);
        }
        50% {
          -ms-transform: rotate(180deg);
          -moz-transform: rotate(180deg);
          -o-transform: rotate(180deg);
          -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
        }
        100% {
          -ms-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      span {
        display: inline-block;
        color: #fff;
        -webkit-animation: single-rotate 2s linear 0s infinite;
        animation: single-rotate 2s linear 0s infinite;
        -webkit-animation-fill-mode:both;
        animation-fill-mode:both;
      }
    }
    .search {
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid darkgray;
      &:hover{
        border: 1px solid gray;
      }
      &:focus{
        border: 1px solid lightblue;
      }
    }
    @keyframes fadeIn {
      0% {
        -ms-transform: translateX(15px);
        -moz-transform: translateX(15px);
        -o-transform: translateX(15px);
        -webkit-transform: translateX(15px);
        transform: translateX(15px);
        opacity: 0;
      }
      50% {
        -ms-transform: translateX(7.5px);
        -moz-transform: translateX(7.5px);
        -o-transform: translateX(7.5px);
        -webkit-transform: translateX(7.5px);
        transform: translateX(7.5px);
        opacity: 0.5;
      }
      100% {
        -ms-transform:translateX(0);
        -moz-transform: translateX(0);
        -o-transform: translateX(0);
        -webkit-transform: translateX(0);
        transform: translate(0);
        opacity: 1;
      }
    }
    .navbar{
      display: flex;
      display: -webkit-flex;
      -webkit-animation: fadeIn 1s linear 0s 1;
      animation: fadeIn 1s linear 0s 1;
      li {
        margin-right: 20px;
        font-size: 16px;
        color: lightblue;
        cursor: pointer;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
</style>
