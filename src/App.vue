<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <router-link to="/home">
          <i class="el-icon-s-home"></i> home
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/blog">
          <i class="el-icon-s-data"></i> blog
        </router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-view"></i> productions
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-share"></i> about me
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "APP",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    console.log("App.vue mounted");
  },
  components: {}
};
</script>