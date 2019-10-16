<template>
  <div class="blog load-hidden">
    <el-row class="blog-card" :span="6" v-for="(o, index) in data" :key="index">
      <el-card class="blog-cards" shadow="hover">
        <el-container>
          <el-aside style="width:200px;height:200px;">
            <img class="blog-images" src="https://cn.vuejs.org/images/logo.png" alt />
          </el-aside>
          <div style="padding: 14px;">
            <span>{{o.title}}</span>
            <div class="bottom clearfix">
              <div>{{o.content}}</div>
              <time class="time">{{ o.date }}</time>
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
      origin: "right",
      distance: "90px",
      scale: 1
    };
    ScrollReveal().reveal(".blog", fooReveal);
    this.getListbase();
  },
  components: {}
};
</script>
<style lang="less"  scoped>
@import "./blog.less";
</style>