<template>
  <div class="app">
    <n-upload :on-before-upload="beforeUpload" :custom-request="customRequest">
      <n-button>上传文件</n-button>
    </n-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import instance from "./service/request";

// instance.post("/upload_single");
const file = ref(null);

const beforeUpload = (event: any) => {
  // 对文件类型，文件大小进行限制
  console.log(event);
  // if (event.file) {
  //   file.value = event.file;
  // }
};

const customRequest = () => {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
