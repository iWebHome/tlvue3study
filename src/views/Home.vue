<template>
  <div class="home">
    <div class="nav">
      <div v-for="(value, key, index) in navs" :key="index">
        {{key}}
      </div>
      <ul>
        <li v-for="(tt, index) in tts" :key="index">
          {{tt.title}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data: function () {
    return {
      navs: {},
      tts: []
    }
  },
  created: function () {
    fetch('https://www.apiopen.top/journalismApi')
    .then(v=>v.json())
    .then(v=>{
      console.log(v.data)
      this.tts = v.data.toutiao
      this.navs = v.data
    })
  }
}
</script>
