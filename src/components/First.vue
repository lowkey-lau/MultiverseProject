<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)

import bgVideo from '../assets/video/intro.mp4'

const playerOptions = {
        autoplay: true,
        width: '640px',
        height: '360px',
        sources: [{
          src: bgVideo,
          type: 'video/mp4'
        }],
        controls: false
      }
</script>

<template>
<div class="section first">
  <div class="videoBg">
    <video-player
    :src="bgVideo"
    :controls="false"
    :loop="true"
    :volume="0.6"
    fill
    muted
    autoplay
  />
  </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.first{
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.videoBg{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

    overflow: hidden;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: #000;

}

.video-js{
  position: relative;
    width: 100%!important;
    height: 100%!important;
}
</style>
