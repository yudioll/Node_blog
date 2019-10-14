<template>
  <div class="home">
    <ul>
      <li v-for="item in data" :key="item._id">
        <h1>{{item.title}}</h1>
        <div>
          <span>{{item.content}}</span>
          <span>{{item.date}}</span>
        </div>
      </li>
    </ul>
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
    this.getListbase();
  },
  components: {}
};
</script>
<style  scoped>
@import "./blog.less";
</style>