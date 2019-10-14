<template>
  <div class="home">
    <ul>
      <li v-for="item in data" :key="item._id">
        <h1>{{item.title}}</h1>
        <div>
          <pre>{{item.content}}</pre>
          <span>{{item.date}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getList } from "../api/home";
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
    this.getListbase();
  },
  components: {}
};
</script>
<style lang="less" scoped>
// .el-header {
//   background-color: #b3c0d1;
//   color: #333;
//   line-height: 60px;
// }

// .el-aside {
//   color: #333;
// }
</style>