<template>
  <div class="topnav">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'topnav',
  props: ['title'],
  data: function() {
    return {
      text: '导航条'
    }
  }
}
</script>