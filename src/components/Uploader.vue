<template>
  <div>
    <div @click="launchFilePicker()">
      <slot name="activator"></slot>
    </div>
    <input
      type="file"
      ref="file"
      :name="uploadFieldName"
      @change="onFileChange(
          $event.target.name, $event.target.files)"
      style="display:none"
    >
  </div>
</template>

<script>
import { Storage } from "aws-amplify";
export default {
  name: "image-uploader",
  data() {
    return {
      uploadFieldName: "file",
      maxSize: 1024
    };
  },
  props: {
    value: Object
  },
  methods: {
    launchFilePicker() {
      this.$refs.file.click();
    },
    onFileChange(fieldName, file) {
      const { maxSize } = this;
      let imageFile = file[0];
      if (file.length > 0) {
        let size = imageFile.size / maxSize / maxSize;
        // Append file into FormData and turn file into image URL
        let formData = new FormData();
        let imageURL = URL.createObjectURL(imageFile);
        formData.append(fieldName, imageFile);
        // Emit the FormData and image URL to the parent component
        this.$emit("input", { formData, imageURL });
        Storage.put(new Date().getTime(), imageFile, {
          contentType: imageFile.type
        }).then(response => {
          this.$emit("uploadLink", response.key);
        });
      }
    }
  }
};
</script>