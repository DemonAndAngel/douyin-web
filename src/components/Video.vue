<template>
  <div class="div-video">
    <video id="video" class="video" controls autoplay >
        Your browser is too old which doesn't support HTML5 video.
    </video>
  </div>
</template>

<script>
import flvjs from "flv.js"
export default {
  name: "Video",
  props: ["data"],
  data () {
    return {
	  flvPlayer: null
    }
  },
  mounted() {
      if (flvjs.isSupported()) {
        var video = document.getElementById('video');
        this.flvPlayer = flvjs.createPlayer({
          type: 'flv',
		  isLive: true,
		  hasAudio: true,
          hasVideo: true,
          url: this.data.stream_url
        });
        this.flvPlayer.attachMediaElement(video);
        this.flvPlayer.load();
		this.flvPlayer.play();
      }
  },
  methods: {
  }
}
</script>

<style lang="less">
.div-video {
    .video{
        width: 180px;
        height: 320px;
    }
}
</style>