<template>
  <div class="single-file-upload">
    <el-upload
      ref="uploadRef"
      class="upload-demo"
      accept="image/*"
      :file-list="fileList"
      :limit="1"
      :auto-upload="false"
      :before-upload="beforeUpload"
      :http-request="myUpload"
    >
      <template #trigger>
        <el-button type="primary" :disabled="isDisabled" style="margin-right: 10px">选择文件</el-button>
      </template>

      <el-button class="ml-3" type="success" :loading="isLoading" @click="submitUpload"> 文件上传 </el-button>

      <template #tip>
        <div class="el-upload__tip">请上传大小不超过2MB的图片</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import instance from "../service/request";
import { ElMessage } from "element-plus";
import { UploadInstance, UploadRawFile, UploadRequestOptions } from "element-plus";
import { resData } from "../types";
import { AxiosResponse } from "axios";

const uploadRef = ref<UploadInstance>();
const fileList = ref([]);
const isLoading = ref(false);
const isDisabled = ref(false);

const beforeUpload = (event: UploadRawFile) => {
  // return false终止上传行为
  const { size, type } = event;
  // 对文件大小进行限制
  if (size > 1024 * 1024 * 2) {
    ElMessage({
      message: "请上传大小不超过2MB的图片",
      type: "warning",
    });
    return false;
  }
  // 对文件类型进行限制
  if (!/(PNG|JPG|JPEG)/i.test(type)) {
    ElMessage({
      message: "支持图片类型为png、jpg、jpeg",
      type: "warning",
    });
    return false;
  }
};
const myUpload = (event: UploadRequestOptions) => {
  console.log(event, "http ");
  const { file } = event;
  const fd = new FormData();
  fd.append("file", file);
  fd.append("filename", file.name);

  instance
    .post("/upload_single", fd)
    .then((res: any) => {
      if (res.code === 0) {
        ElMessage({
          message: "文件上传成功",
          type: "success",
        });
        return;
      }
      return Promise.reject(res.codeText);
    })
    .catch(() => {
      ElMessage({
        message: "文件上传失败，请重新上传",
        type: "error",
      });
    })
    .finally(() => {
      isLoading.value = false;
      isDisabled.value = false;
      fileList.value = [];
    });
};

const submitUpload = () => {
  if (!fileList.value.length) {
    ElMessage({
      message: "请先选择文件",
      type: "warning",
    });
    return;
  }
  isLoading.value = true;
  isDisabled.value = true;
  uploadRef.value!.submit();
};
</script>

<style></style>
