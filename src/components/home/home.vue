<template>
  <div class="home"></div>
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
  mounted() {
    const animations = {
      contain: {
        delay: 200,
        origin: "bottom",
        distance: "90px",
        scale: 0.9
      }
    };
    ScrollReveal().reveal(".headline", animations);
  },
  components: {}
};
</script>
<style  scoped>
@import "./home.less";
</style>