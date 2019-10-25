<template>
  <div class="home load-hidden">
    <el-timeline class="headline">
      <el-timeline-item timestamp="2018/4/12" placement="bottom">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="bottom">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="bottom">
        <el-card>
          <h4>更新 Github 模板</h4>
          <p>王小虎 提交于 2018/4/2 20:46</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      msg: "home"
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["islogin"])
  },
  mounted() {
    console.log(this.islogin);
    const animations = {
      contain: {
        delay: 300,
        origin: "top",
        distance: "90px",
        scale: 1
      }
    };
    ScrollReveal().reveal(".home", animations.contain);
    ScrollReveal().reveal(".author-info", animations.asideAnimation);
  },
  components: {}
};
</script>
<style lang="less"  scoped>
@import "./home.less";
</style>