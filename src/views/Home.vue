<template>
  <div class="home">
    <div class="nav">
      <div v-for="(value, key, index) in navs" :key="index" :class="{ active: value.active }" @click="changeNav(key)">
        {{key}}
      </div>
      <ul>
        <li v-for="(tt, index) in tts" :key="index" v-if="tt.title">
          <div><a :href="tt.link">{{tt.title}}</a></div>
          <span>{{tt.ptime}} - {{tt.source}}</span>
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
  methods: {
    changeNav: function (akey) {
      Reflect.ownKeys(this.navs).forEach((key, index) => {
        this.navs[key].active = akey === key && (this.tts = this.navs[key].data)
      })
    }
  },
  created: function () {
    fetch('https://www.apiopen.top/journalismApi')
    .then(v=>v.json())
    .then(v=>{
      this.navs = v.data
      this.tts = v.data.toutiao
      console.log(v.data)

      Reflect.ownKeys(v.data).forEach((key, index) => {
        this.navs[key] = {
          active: key === 'toutiao',
          data: this.navs[key]
        }
      })
    })
  }
}
</script>