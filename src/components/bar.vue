<template>
  <div class="bar">
    <span @click="handleBar" class="btn">click</span>

    <span>{{msg}}</span>
  </div>
</template>
<script>
const fetchInitdata = ({ store }) => {
  store.dispatch("fetchBar");
};
export default {
  name: "bar",
  asyncData: fetchInitdata,
  data() {
    return {};
  },
  methods: {
    handleBar() {
      alert("bar");
    }
  },
  mounted() {
    let store = this.$store;
    fetchInitdata({ store });
  },
  computed: {
    msg() {
      return this.$store.state.bar;
    }
  },
  created() {}
};
</script>
<style lang="less" scoped>
</style>