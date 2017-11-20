<template>
  <div class="article">
    <h5 style="padding: 10px 0 10px 10px; background: lightslategrey;">
      <router-link to="/" style="color: lightblue;">首页</router-link>
      <span style="color: lightgray;"> / 发布随笔</span>
    </h5>
    <div style="margin-left: 20px; margin-top: 20px;">
      <span>选择分类:</span>
      <select name="" id="" class="select-item">
        <option value="">请选择</option>
        <option value="">html</option>
        <option value="">css</option>
        <option value="">js</option>
      </select>
    </div>
    <div style="margin-left: 20px; margin-top: 20px;">
      <span> 标题:</span>
      <input type="text" style="width: 80%;" class="select-item" placeholder="标题最好不要超过20个字">
    </div>
    <div style="margin-top: 20px;">
      <textarea name="" id="simple-mde" cols="30" rows="10" style="border: 1px solid red;"></textarea>
    </div>
    <input type="button" value="提交" style="margin-left: 20px; padding: 5px; border-radius: 4px; color:#fff; background-color: deepskyblue; cursor: pointer;">
  </div>
</template>

<script>
  import 'simplemde/dist/simplemde.min.css';
  import SimpleMDE from 'simplemde';

  export default{
    data(){
      return {}
    },
    mounted(){
      new SimpleMDE({
        element: document.getElementById('simple-mde'),
        autofocus: true,
        placeholder: 'Write here...',
        autosave: {
          enabled: true,
          uniqueId: "MyUniqueID",
          delay: 1000,
        },
        blockStyles: {
          bold: "__",
          italic: "_"
        },
        forceSync: true,
        hideIcons: ["guide", "heading"],
        indentWithTabs: false,
        initialValue: "Hello world!",
        insertTexts: {
          horizontalRule: ["", "\n\n-----\n\n"],
          image: ["![](http://", ")"],
          link: ["[", "](http://)"],
          table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
        },
        lineWrapping: false,
        parsingConfig: {
          allowAtxHeaderWithoutSpace: true,
          strikethrough: false,
          underscoresBreakWords: true,
        },
        previewRender: function(plainText) {
          return customMarkdownParser(plainText);
        },
        previewRender: function(plainText, preview) {
          setTimeout(function(){
            preview.innerHTML = customMarkdownParser(plainText);
          }, 250);

          return "Loading...";
        },
        promptURLs: true,
        renderingConfig: {
          singleLineBreaks: false,
          codeSyntaxHighlighting: true,
        },
        shortcuts: {
          drawTable: "Cmd-Alt-T"
        },
        showIcons: ["code", "table"],
        spellChecker: false,
        status: false,
        status: ["autosave", "lines", "words", "cursor"], // Optional usage
        status: ["autosave", "lines", "words", "cursor", {
          className: "keystrokes",
          defaultValue: function(el) {
            this.keystrokes = 0;
            el.innerHTML = "0 Keystrokes";
          },
          onUpdate: function(el) {
            el.innerHTML = ++this.keystrokes + " Keystrokes";
          }
        }],
        styleSelectedText: false,
        tabSize: 4,
//        toolbar: false,
//        toolbarTips: false,
      })
    }
  }
</script>

<style lang="scss" scoped>
  .article {
    .select-item {
      width: 20%;
      border: 1px solid lightgray;
      padding: 5px;
      border-radius: 4px;
      &:hover {
        border: 1px solid gray;
      }
      &:focus {
        border: 1px solid lightblue;
      }

    }
  }
</style>
