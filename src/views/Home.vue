<template>
  <div class="home">
    <div class="nav">
      <div v-for="(value, key, index) in navs" 
        :key="index" 
        :class="{ active: value.active }" 
        @click="changeNav(key)"
      >
        {{key}}
      </div>
    </div>

    <ul>
      <li v-for="(tt, index) in tts" :key="index" v-if="tt.title">
        <div><a :href="tt.link">{{tt.title}}</a></div>
        <span>{{tt.ptime}} - {{tt.source}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

import axios from 'axios'

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
    let url = 'https://www.apiopen.top/journalismApi'

    // fetch(url)
    // .then(v=>v.json())
    // .then(v=>{
    //   this.navs = v.data
    //   this.tts = v.data.toutiao
    //   console.log(this.navs)
    //   Reflect.ownKeys(v.data).forEach((key, index) => {
    //     this.navs[key] = {
    //       active: key === 'toutiao',
    //       data: this.navs[key]
    //     }
    //   })
    // })

    
    // axios.get(url).then((res) => {
    //   this.navs = res.data
    //   this.tts = res.data.toutiao
    //   // console.log(this.navs)
    //   Reflect.ownKeys(res.data).forEach((key, index) => {
    //     this.navs[key] = {
    //       active: key === 'toutiao',
    //       data: this.navs[key]
    //     }
    //   })
    // })

    this.$api.get(url, {}, response => {
      if (response.status >= 200 && response.status < 300) {
        this.navs = response.data.data
        this.tts = response.data.data.toutiao
        console.log(this.navs)
        Reflect.ownKeys(response.data.data).forEach((key, index) => {
          this.navs[key] = {
            active: key === 'toutiao',
            data: this.navs[key]
          }
        })
      } else {
        console.log(response.msg);
      }
    })
  }
}
</script>


<style lang="scss" scoped>
.home {
  height: calc( 100% - 60px );
  .nav {
    width: 79px; border-right: 1px solid black;
    height: calc( 100% - 30px );
    padding: 15px 10px;
    float: left;
    box-shadow: inset 0 10px 10px -8px #333;
    div {
      background: RGBA(255,0,0,0.2);
      margin-top: 5px;
      text-align: center;
      padding: 5px 0;
      border-radius: 5px;
      cursor: pointer;
    }
    .active {
      background: RGBA(255,0,0,0.6);
    }
  }
  ul {
    width: calc( 100% - 100px );
    height: calc( 100% - 30px );
    overflow: auto;
    padding: 15px 0;
    float: right;
    box-shadow: inset 0 10px 10px -8px #333;
    li {
      padding: 5px 10px;
      span {
        font-size: 0.5rem;
      }
    }
  }
}
</style>