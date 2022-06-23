<template>
  <div class="app">
    <section>
      <h4>单文件上传 基于FormData</h4>
      <SingleFileUpload />
    </section>
  </div>
</template>

<script setup lang="ts">
import SingleFileUpload from "./components/single-file-upload.vue";
</script>

<style>
section {
  width: 300px;
  border: 1px solid #aaa;
  padding: 20px;
  box-sizing: border-box;
  margin-right: 15px;
}
</style>
