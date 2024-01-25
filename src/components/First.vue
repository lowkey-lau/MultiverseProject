<template>
  <div class="section first">
    <div class="videoBg">
      <video-player :src="bgVideo" :controls="false" :loop="true" :volume="0.6" fill muted autoplay />
    </div>
    <div class="scroll" ref="scroll">
      <div class="content">
        <!-- 假设每次滚动都为100px  -->

        0.25 * index + (y / 100) * 0.25

        <p
          :style="[
            {
              opacity: 1 - 0.25 * index + (y / 100) * 0.25,
              transform: `scale(${1 - 0.25 * index + 0.25 * (y / 100)})`,
            },
          ]"
          v-for="(item, index) in 20"
          :key="index"
        >
          {{ y / 100 }}, {{ index }}, Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      </div>
    </div>
    <div class="text">{{ x }}{{ y }}</div>
  </div>
</template>

<script setup>
import bgVideo from "../assets/video/intro.mp4";

import { ref } from "vue";
import { useScroll } from "@vueuse/core";

const scroll = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(scroll);
</script>

<style scoped>
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
}

.content {
  margin-top: 300px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 40px;
    padding: 0;
    margin: 0;
  }
}

.read-the-docs {
  color: #888;
}

.first {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.videoBg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.3;
  z-index: 0;

  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: #000;
}

.video-js {
  position: relative;
  width: 100% !important;
  height: 100% !important;
}

.text {
  position: fixed;
  right: 0;
  bottom: 0;
  background: yellow;
  color: red;
  z-index: 999;
}
</style>
