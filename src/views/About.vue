<template>
  <div class="about">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <top-nav title="推荐"/>
    <top-nav title="军事"/>
    <top-nav title="社会"/>
    <top-nav title="科技"/>
    <HelloWorld msg="vue 官方相关资料的链接"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import TopNav from '@/components/Base/TopNav.vue'

export default {
  name: 'about',
  components: {
    HelloWorld,
    TopNav
  }
}
</script>