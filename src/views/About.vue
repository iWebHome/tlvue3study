<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <top-nav :title="title1" @click-event="click"/>
    <top-nav title="军事"/>
    <top-nav title="社会"/>
    <top-nav title="科技"/>
    <HelloWorld msg="vue 官方相关资料的链接"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      title1: '推荐'
    }
  },
  methods: {
    click (e) {
      console.log(e)
      this.title1 = e
    }
  }
}
</script>
