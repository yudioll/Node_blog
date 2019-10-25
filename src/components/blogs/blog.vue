<template>
  <div class="blog load-hidden">
    <el-row class="blog-card" :span="6" v-for="(o, index) in data" :key="index">
      <el-card class="blog-cards" shadow="hover">
        <el-container>
          <el-aside class="blog-aside">
            <img class="blog-images" :src="o.imageUrl" alt />
          </el-aside>
          <div style="padding: 14px;">
            <router-link :to="{path: '/viewblog', query: {id: o._id }}">
              <span>{{o.title}}</span>
            </router-link>
            <div class="bottom clearfix">
              <div>{{o.desc}}</div>
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