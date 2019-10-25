<template>
  <div class="view-blog">
    <div class="view-title">{{info.title}}</div>
    <div class="view-img">
      <img :src="info.imageUrl" alt />
    </div>
    <div class="view-content" v-html="info.content"></div>
  </div>
</template>
<script>
import { getBloginfo } from "@api/blog";
import MarkDown from "vue-meditor";

export default {
  name: "viewblog",
  data() {
    return {
      id: "",
      info: {
        title: "",
        content: ""
      }
    };
  },
  created() {
    this.id = this.$route.query.id;
  },
  methods: {
    getBloginfo() {
      getBloginfo({ id: this.id }).then(res => {
        this.info = res.data;
      });
    }
  },
  mounted() {
    this.getBloginfo();
  }
};
</script>
<style lang="less" scoped>
.view-blog {
  margin-top: 10px;
  padding: 20px;
  background: white;
  border-radius: 20px;
  .view-title {
    font-size: 28px;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  .view-content {
    width: 70%;
    margin: 0 auto;
  }
  .view-img {
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 500px;
      height: 100%;
    }
  }
}
</style>