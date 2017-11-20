<template>
  <div class="sign-in">
    <h5 style="padding: 10px 0 10px 10px; background: lightslategrey;">
      <router-link to="/" style="color: lightblue;">首页</router-link>
      <span style="color: lightgray;"> / 登录</span>
    </h5>
    <div style="display: flex; justify-content: center; align-items: center;">
      <form action="" class="form-item">
        <div>
          <span style="margin-right: 10px;">用户名:</span><input type="text" name="user" class="input-item">
        </div>
        <div style="margin-top: 30px;">
          <span style="margin-right: 20px;">密码:</span><input type="password" name="password" class="input-item">
        </div>
        <div style="margin-top: 40px;">
          <input type="button" value="登录" class="button-item">
          <span class="span-item">忘记密码?</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="scss" scoped>
  .sign-in {
    .form-item {
      width: 500px;
      height: 500px;
      display: flex;
      display: -webkit-flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .input-item {
      border: 1px solid lightgray;
      padding: 4px 10px;
      border-radius: 4px;
      background: lightgoldenrodyellow;
      &:hover{
        border: 1px solid gray;
      }
      &:focus{
        border: 1px solid lightblue;
      }
    }
    .button-item {
      color: #fff;
      border: 1px solid #05c;
      border-radius: 4px;
      background-color: #05c;
      padding: 5px; margin-right: 15px;
      cursor: pointer;
      &:hover {
        background-color: blue;
      }
    }
    .span-item {
      font-size: 14px;
      color: gray;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
