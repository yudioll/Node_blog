<template>
  <div class="writeBlog">
    <mark-down @on-save="handleSave" :height="editHeight"></mark-down>
    <div class="send-btn">
      <span class="btn-save" @click="handleSend">发表</span>
    </div>
    <el-dialog title="发表" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title" @keydown="handleTitle"></el-input>
        </el-form-item>
        <el-form-item label="描述">
          <el-input v-model="formLabelAlign.desc" @keydown="handleDesc"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
            @change="handleTime"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            v-model="formLabelAlign.date"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="封面图">
          <el-upload
            class="avatar-uploader"
            action="http://localhost:3000/yudiupload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="formLabelAlign.imageUrl" :src="formLabelAlign.imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleConfim">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import MarkDown from "vue-meditor";
import { addList } from "@api/user.js";
export default {
  name: "writeBlog",
  components: {
    MarkDown: MarkDown
  },
  data() {
    return {
      editHeight: 500,
      centerDialogVisible: false,
      labelPosition: "right",
      formLabelAlign: {
        title: "",
        date: "",
        desc: "",
        imageUrl: "",
        content: ""
      },
      flag: true
    };
  },
  methods: {
    handleSave(value) {
      if (value.html == "") {
        this.$message({
          type: "error",
          message: "请输入文章内容"
        });
        this.flag = false;
      } else {
        this.$message({
          type: "success",
          message: "保存成功，您可以提交了"
        });
        this.flag = true;
        this.formLabelAlign.content = value.html;
      }
    },
    handleSend() {
      this.centerDialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.flag = true;
      this.formLabelAlign.imageUrl = file.response.fileUrl;
      console.log(this.formLabelAlign.imageUrl);
    },
    beforeAvatarUpload() {},
    handleTitle() {
      this.flag = true;
    },
    handleTime() {
      this.flag = true;
    },
    handleDesc() {
      this.flag = true;
    },
    handleConfim() {
      let flag = true;
      if (this.formLabelAlign.title == "") {
        this.$message({
          type: "error",
          message: "请输入标题"
        });
        this.flag = false;
        return false;
      }
      if (this.formLabelAlign.date == "") {
        this.$message({
          type: "error",
          message: "请选择时间"
        });
        this.flag = false;
        return false;
      }
      if (this.formLabelAlign.imageUrl == "") {
        this.$message({
          type: "error",
          message: "请选择上传的封面"
        });
        this.flag = false;
        return false;
      }
      if (this.formLabelAlign.content == "") {
        this.$message({
          type: "error",
          message: "请输入文章"
        });
        this.flag = false;
        return false;
      }
      if (this.formLabelAlign.desc == "") {
        this.$message({
          type: "error",
          message: "请输入描述"
        });
        this.flag = false;
        return false;
      }
      if (this.flag) {
        addList(this.formLabelAlign)
          .then(res => {
            if (res.status) {
              this.$message({
                type: "success",
                message: res.successMessage
              });
              this.$router.push({ path: "/blog" });
              this.centerDialogVisible = false;
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    console.log(this.$refs.textarea);
  }
};
</script>
<style lang="less" scope>
@import "./writeBlog.less";
</style>