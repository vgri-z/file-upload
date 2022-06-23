<template>
  <div class="single-file-upload">
    <FileUpload
      name="demo[]"
      :customUpload="true"
      @uploader="myUploader"
      @upload="uploadComplate"
      accept="image/*"
      chooseLabel="选择文件"
      uploadLabel="文件上传"
      cancelLabel="取消上传"
    />
  </div>
</template>

<script setup lang="ts">
import instance from "../service/request";
import FileUploadUploadEvent from "primevue/fileupload";
import { resData } from "../types";

const myUploader = (event: any) => {
  const file = event.files[0];
  const fd = new FormData();
  fd.append("file", file);
  fd.append("filename", file.name);

  instance.post("/upload_single", fd).then((res: any) => {
    console.log(res);
    if (res.code === 0) {
      alert("文件上传成功，可基于 " + res.servicePath + " 进行查看");
    }
  });
};

const uploadComplate = (event: any) => {
  console.log(event);
};
</script>

<style></style>
