<template>
  <div class="section first">
    <div class="videoBg">
      <video-player :src="bgVideo" :controls="false" :loop="true" fill :volume="0" muted autoplay />
    </div>
    <div class="scroll" ref="scroll">
      <div class="content" ref="content">
        <!-- 假设每次滚动都为100px  -->
        <div class="box" ref="box">
          <p
            :style="[
              {
                opacity: parseIntY > index ? 1 - (parseIntY - index) * 0.25 : 1 - 0.25 * index + parseIntY * 0.25,
                transform: `scale(${parseIntY > index ? 1 - (parseIntY - index) * 0.25 : 1 - 0.25 * index + 0.25 * parseIntY})`,
                fontWeight: parseIntY == index ? 'bold' : 'normal',
                color: parseIntY == index ? 'white' : 'black',
              },
            ]"
            v-for="(item, index) in 20"
            :key="index"
          >
            {{ isBottom }}, Lorem ipsum dolor sit amet consectetur adipisicing
          </p>

          <!-- 这一块需要优化 -->
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
      </div>
    </div>
    <div class="text">{{ x }}{{ y }}</div>
  </div>
</template>

<script setup>
import bgVideo from "../assets/video/intro.mp4";

import { computed, ref, watch } from "vue";
import { useScroll, useElementSize } from "@vueuse/core";

const emit = defineEmits(["changeMousewheelEnable"]);

const scroll = ref(null);
const box = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(scroll);
const { width, height } = useElementSize(box);

const parseIntY = computed(() => parseInt(y.value / 100));

const isBottom = computed(() => arrivedState.bottom);

watch(
  () => isBottom.value,
  (e1, _e1) => {
    emit("changeMousewheelEnable", e1);
  }
);
</script>

<style lang="scss" scoped>
.section {
  position: relative;
}

.first {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
}

.content {
  height: 100%;
  width: 100%;
  transform: translateY(50%);

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    font-size: 40px;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    transition: 0.1s all;

    &:last-child {
      margin-bottom: 400px;
    }
  }
}

.read-the-docs {
  color: #888;
}

.videoBg {
  position: absolute;
  width: 200%;
  height: 200%;
  left: 0;
  top: 0;
  opacity: 0.8;
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

:deep(.vjs-tech) {
  object-fit: fill !important;
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
