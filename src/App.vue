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
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="home">首页</router-link>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="blog">随笔</router-link>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="blog">设计</router-link>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="blog">关于我</router-link>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="yudilogin">登录</router-link>
                </div>
              </el-col>
              <el-col :span="2">
                <div class="grid-content bg-purple">
                  <router-link class="app-nav" to="yudisignup">注册</router-link>
                </div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-main>
          <router-view :key="Math.random()*1"></router-view>
        </el-main>
        <el-aside width="300px" style="overflow:hidden;">
          <div class="author-info">
            <el-card :body-style="{ padding: '20px' }">
              <img src="../src/assets/yudioll/bg.jpg" class="image" />
              <div style="padding: 14px;margin:10px 0;">
                <span>yudioll</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "APP",
  data() {
    return {
      activeIndex: "1",
      currentDate: "2019-10-10"
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
        origin: "right",
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
    ScrollReveal().reveal(".author-info", animations.asideAnimation);
  },
  components: {}
};
</script>
<style lang="less" scoped>
.app-head {
  visibility: hidden;
  padding: 0;
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
.author-info {
  margin: 10px 0;
  text-align: center;
  .image {
    width: 200px;
    height: 200px;
  }
}
</style>
