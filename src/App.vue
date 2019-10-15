<template>
  <div id="app">
    <el-container>
      <el-header class="app-head">
        <el-row style="height:80px">
          <el-col :span="3">
            <img src alt />
          </el-col>
          <el-col :span="21">
            <el-row type="flex" justify="end">
              <el-col :span="3">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="home">首页</router-link>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="blog">随笔</router-link>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="blog">设计</router-link>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="blog">关于我</router-link>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="app-aside" width="200px">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>导航一
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>导航二
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>导航三
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view :key="Math.random()*1"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ScrollReveal from "scrollreveal";
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
    const animations = {
      asideAnimation: {
        delay: 200,
        origin: "left",
        distance: "90px",
        scale: 0.9,
        reset: true
      },
      headAnimation: {
        delay: 200,
        origin: "bottom",
        distance: "90px",
        reset: true
      }
    };
    ScrollReveal().reveal(".app-head", animations.headAnimation);
    ScrollReveal().reveal(".app-aside", animations.asideAnimation);
  },
  components: {}
};
</script>
<style lang="less" scoped>
.app-head {
  visibility: hidden;
  padding: 0;
  // background-color: #24292e;
  margin-bottom: 20px;
  height: 80px !important;
  line-height: 80px;
}
.app-aside {
  visibility: hidden;
}
.el-main {
  padding: 0 20px;
}
.app-nav {
  color: #333;
  font-size: 20px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  text-decoration: none;
}
</style>
