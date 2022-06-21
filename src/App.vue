<template>
  <div class="app">
    <!-- <el-upload
      ref="uploadRef"
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false"
    >
      <template #trigger>
        <el-button type="primary" style="margin-right: 10px">选择文件</el-button>
      </template>

      <el-button class="ml-3" type="success" @click="submitUpload"> 上传文件 </el-button>

      <template #tip>
        <div class="el-upload__tip">文件类型大小限制</div>
      </template>
    </el-upload> -->
    <InputText v-model="title" />
    <Button>vgri</Button>
  </div>
</template>

<script setup lang="ts">
const submitUpload = () => {};

const title = "hello primevue";
</script>

<style></style>
