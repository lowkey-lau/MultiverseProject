<template>
  <div class="section first">
    <div class="videoBg">
      <video-player :src="bgVideo" :controls="false" :loop="true" :width="1620" :height="910" playInline fill :volume="0" muted autoplay />
      <div class="videoBg-shadow"></div>
    </div>
    <div class="imgBg"></div>
    <div class="scroll" ref="scroll">
      <div class="content" ref="content">
        <!-- 假设每次滚动都为100px  -->
        <div class="box" ref="box">
          <p :style="getStyles(index)" v-for="(item, index) in messages" :key="index" v-html="item.bold ? `<strong><i>${item.msg}</i></strong>` : item.msg"></p>
        </div>
      </div>
    </div>
    <div class="text">{{ y / 100 }},{{ arrivedState.top }}, {{ arrivedState.bottom }},{{ x }}，{{ y }}</div>
  </div>
</template>

<script setup>
import bgVideo from "../assets/video/intro.mp4";

import { computed, ref, watch } from "vue";
import { useScroll, useElementSize } from "@vueuse/core";

const messages = [
  {
    msg: "When you want something, ",
    bold: false,
  },

  {
    msg: "all the universe conspires ",
    bold: false,
  },
  {
    msg: "in helping you to achieve it.",
    bold: false,
  },
  {
    msg: "Paulo Coelho",
    bold: true,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
  {
    msg: "Feed is that conspiracy:",
    bold: false,
  },
  {
    msg: "the conspiracy of trust.",
    bold: false,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
  {
    msg: "Trust is the single",
    bold: false,
  },
  {
    msg: "most important ingredient",
    bold: false,
  },
  {
    msg: "missing from digital relationships.",
    bold: false,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
  {
    msg: "<br/><br />",
    bold: false,
  },
];

const getStyles = (index) => {
  const opacity = 0.25;

  return arrivedState.top
    ? {
        opacity: 1 - index * opacity,
        transform: `matrix(${1 - index * 0.1}, 0, 0, ${1 - index * 0.1}, 0, 0)`, //判断是否为第一帧
      }
    : {
        opacity: y.value / 100 > index ? 1 - (y.value / 100 - index) * 0.5 : 1 - (index - y.value / 100) * opacity,
        transform: `matrix(${1 + (y.value / 100 - index) * 0.1}, 0, 0, ${1 + (y.value / 100 - index) * 0.1}, 0, 0)`,
      };
};

const emit = defineEmits(["changeMousewheelEnable", "changePercent"]);

const scroll = ref(null);
const box = ref(null);
const { x, y, isScrolling, arrivedState, directions } = useScroll(scroll);

console.log(arrivedState.top);
const { width, height } = useElementSize(box);

const parseIntY = computed(() => Math.floor(y.value / 100));

const isBottom = computed(() => arrivedState.bottom);

const percent = computed(() => (arrivedState.bottom ? 100 : (y.value / (height.value - 400)) * 100));

watch(
  () => isBottom.value,
  (e1, _e1) => {
    emit("changeMousewheelEnable", e1);
  }
);

watch(
  () => percent.value,
  (e1, _e1) => {
    emit("changePercent", e1);
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
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
}

.content {
  width: 100%;
  // transform: translateY(33.33%);
  position: relative;
  height: 100%;
  top: 50%;

  p {
    white-space: nowrap;
    color: #fff;
    font-size: 48px;
    margin: 0 0 10px;
    // position: absolute;
    // left: 0;
    // top: 0;
    width: 100%;

    @media screen and (max-width: 767px) {
      font-size: 22px;
      min-height: 100px;
    }

    &:first-child {
      position: relative;
    }
  }
}

.imgBg {
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
  }

  height: 100%;
  width: 100%;

  background-image: url(../assets/images/intro-background.jpg);
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: #000;
  z-index: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.videoBg {
  @media screen and (max-width: 767px) {
    display: none;
  }

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0.8;
  z-index: 0;

  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-color: #000;

  &-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0.3;
    background-color: rgb(0, 0, 0);
  }
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
