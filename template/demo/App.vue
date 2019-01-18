<template lang="pug">
#app.page
  .title {{name}}
  .desc {{description}}
  {{#if_eq type "component"}}
  {{name}}
  {{/if_eq}}
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
body {
  margin: 0;
}

#app {
  padding: 15px 20px;

  .title {
    font-size: 32px;
    text-align: center;
    font-weight: bold;
  }

  .desc {
    font-size: 16px;
    color: #555;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
