<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("App.vue beforeCreate");
  },
  created() {
    console.log("App.vue created");
  },
  beforeMount() {
    console.log("App.vue beforeMount");
  },
  mounted() {
    console.log("App.vue mounted");
  },
  components: {}
};
</script>