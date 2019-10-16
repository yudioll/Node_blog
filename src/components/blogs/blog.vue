<template>
  <div class="blog">
    <el-row class="blog-card" :span="6" v-for="(o, index) in data" :key="index">
      <el-card class="blog-cards" shadow="hover">
        <el-container>
          <el-aside style="width:300px;height:300px;">
            <img class="blog-images" src="https://cn.vuejs.org/images/logo.png" alt />
          </el-aside>
          <div style="padding: 14px;">
            <span>{{o.title}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ o.content }}</time>
            </div>
          </div>
        </el-container>
      </el-card>
    </el-row>
  </div>
</template>
<script>
import { getList } from "@api/home";
export default {
  name: "home",
  data() {
    return {
      msg: "asdad",
      data: []
    };
  },
  methods: {
    getListbase() {
      getList()
        .then(result => {
          this.data = result;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    var fooReveal = {
      delay: 200,
      origin: "bottom",
      distance: "90px",
      scale: 0.9
    };
    ScrollReveal().reveal(".blog-card", fooReveal);
    this.getListbase();
  },
  components: {}
};
</script>
<style lang="less"  scoped>
@import "./blog.less";
</style>