<template>
  <div>
    <video v-if="webCam.showCaptureDiv" ref="video" id="video" style="width: 100%" autoplay></video>
    <img v-if="webCam.showPictureDiv" :src="avatar.imageURL" style="width: 100%" />
  </div>
</template>

<script>
export default {
  name: "webcam",
  data() {
    return {
      webCam: {
        captureButton: true,
        setPictureButton: false,
        showCaptureDiv: false,
        showPictureDiv: false
      }
    };
  },
  methods: {
    capture() {
      this.webCam.showCaptureDiv = true;
      this.avatar = {};
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then(mediaStream => {
            this.mediaStream = mediaStream;
            this.$refs.video.srcObject = mediaStream;
            this.webCam.captureButton = false;
            this.webCam.setPictureButton = true;
            this.$refs.video.play();
          })
          .catch(err => console.error("getUserMedia() error: ", err));
      }
    },
    async setPicture() {
      this.webCam.showCaptureDiv = false;
      this.webCam.showPictureDiv = true;
      const mediaStreamTrack = await this.mediaStream.getVideoTracks()[0];
      const imageCapture = new window.ImageCapture(mediaStreamTrack);
      await imageCapture.takePhoto().then(async blob => {
        await blobToDataURL(blob, data => {
          this.avatar.imageURL = data;
          this.webCam.captureButton = true;
          this.webCam.setPictureButton = false;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>