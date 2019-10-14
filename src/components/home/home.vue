<template>
  <div class="home">
    <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      msg: "home"
    };
  },
  methods: {},
  mounted() {},
  components: {}
};
</script>
<style  scoped>
@import "./home.less";
</style>