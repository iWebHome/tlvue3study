<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      配置和自定义工程的教程方法请到 <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli 文档</a>.
    </p>
    <h3>安装 CLI 插件</h3>
    <ul>
      <li v-for="(cli,index) in clis" :key="index">
        <a :href=linkPrefix+cli.link target="_blank" rel="noopener">{{cli.text}}</a>
      </li>
    </ul>
    <h3>vue 相关生态</h3>
    <ul>
      <li v-for="(essent,index) in essential" :key="index">
        <a :href=essent.link target="_blank" rel="nooperner">{{essent.text}}</a>
      </li>
    </ul>
    <h3>vue 周边组件</h3>
    <ul>
      <li v-for="(ecosys,index) in ecosystem" :key="index">
        <a :href=ecosys.link target="_blank" rel="nooperner">{{ecosys.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function () {
    return {
      linkPrefix: 'https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-',
      clis: [
        { link: 'babel', text: 'babel' },
        { link: 'pwa', text: 'pwa' },
        { link: 'eslint', text: 'eslint' },
        { link: 'unit-mocha', text: 'unit-mocha' },
        { link: 'e2e-nightwatch', text: 'e2e-nightwatch' }
      ],
      essential: [
        { link: 'https://vuejs.org', text: '核心文档' },
        { link: 'https://forum.vuejs.org', text: '官方论坛' },
        { link: 'https://chat.vuejs.org', text: '社交聊天' },
        { link: 'https://twitter.com/vuejs', text: 'Twitter' },
        { link: 'https://news.vuejs.org', text: '资讯' }
      ],
      ecosystem: [
        { link: 'https://router.vuejs.org', text: 'vue-router' },
        { link: 'https://vuex.vuejs.org', text: 'vuex' },
        { link: 'https://github.com/vuejs/vue-devtools#vue-devtools', text: 'vue-devtools' },
        { link: 'https://vue-loader.vuejs.org', text: 'vue-loader' },
        { link: 'https://github.com/vuejs/awesome-vue', text: 'awesome-vue' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
