<template>
  <div class="home">
    <ul>
      <li v-for="item in articleList" style="position: relative;">
        <span style="position: absolute;">{{ item.time }}</span>
        <div style="width: 20px; height: 20px; border-radius: 50%; position: absolute;
        background-color: #afdcf8; left: 10%;"></div>
        <div style="width: 10px; height: 150px;
        border-radius: 4px; position: absolute; left: 10.5%; top: 20px; background-color: #afdcf8;">
        </div>
        <div class="list-item" >
            <h5 style="font-size: 16px; color: #fff; margin-bottom: 5px;">{{ item.name }}</h5>
            <div class="content">{{ item.content }}</div>
            <div style="display: flex; justify-content: space-between; margin-top: 10px;">
              <span style="font-size: 16px; color: #fff; cursor: pointer;">{{ item.type }}</span>
              <span style="font-size: 16px; color: #fff; cursor: pointer;">阅读全文>></span>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data(){
      return {
        articleList: [
          {id: 1, time:'2017-09-10', type: 'js', name: '浅谈js中的this', content: '管理后台富文本也是一个非常重要的功能，楼主在这里也踩了不少的坑。楼主在项目里最终选择了tinym这里在简述一下推荐使用tinymce的原因：tinymce是一家老牌做富文本的公司(这里也推荐ckeditor，也是一家一直做富文本的公司，也不错)，它的产品经受了市场的认可，不管是文档还是配置的自由度都很好。在使用富文本的时候有一点也很关键就是复制格式化，之前在用一款韩国人做的富文本summernote被它的格式化坑的死去活来，但tinymce的去格式化相当的好，它还有一个增值项目就是powerpaste,那是无比的强大，支持从word里面复制各种东西，都不会有问题。富文本还有一点也很关键，就是拓展性。楼主用tinymce写了好几个插件，学习成本和容易度都不错，很方便拓展。最后一点就是文档很完善，基本你想得到的配置项，它都有。tinymce也支持按需加载，你可以通过它官方的build页定制自己需要的plugins'},
          {id: 2, time:'2016-09-10', type: 'js', name: '浅谈js中的this', content: 'soosllldl'},
          {id: 3, time:'2015-09-10', type: 'js', name: '浅谈js中的this', content: 'soosllldl'},
          {id: 4, time:'2014-09-10', type: 'js', name: '浅谈js中的this', content: 'soosllldl'},
          ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    .list-item {
      width: 80%;
      background-color: lightblue;
      border-radius: 5px;
      margin: 30px 15% 5%;
      padding: 20px;
      position: relative;
      color: #fff;
    }
    .list-item::before{
      display: inline-block;
      width: 0;
      height: 0;
      border: solid transparent;
      border-width: 10px;
      border-bottom-color: lightblue;
      content: "";
      position: absolute;
      top:10px;
      left: -20px;
      transform: rotate(-90deg);
    }
    .content {
      font-size: 14px;
      color: gray;
      text-indent: 2em;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }
</style>
