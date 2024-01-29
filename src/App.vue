<template>
  <div class="main">
    <div class="wrapper">
      <Narbar :slideActive="state.slideActive" :percent="state.percent" @changeSlideAcitve="changeSlideAcitve" />
      <div class="container">
        <swiper
          :direction="'vertical'"
          :pagination="{
            clickable: true,
          }"
          :mousewheel="true"
          :modules="[Mousewheel, Pagination]"
          :speed="1000"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <First :slideActive="state.slideActive" @changeMousewheelEnable="changeMousewheelEnable" @changePercent="changePercent" />
          </swiper-slide>
          <swiper-slide>
            <Seconds :slideActive="state.slideActive" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import Narbar from "./components/Narbar.vue";
import First from "./components/First.vue";
import Seconds from "./components/Seconds.vue";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { reactive, ref } from "vue";

const mousewheelEnable = ref(false);

const state = reactive({
  swiper: null,
  slideActive: 0,
  percent: 0,
});

const onSwiper = (e) => {
  state.swiper = e;
  state.swiper.disable();
};

const onSlideChange = (e) => {
  state.slideActive = e.activeIndex;

  // 这里需要判定一些条件，可以优化的
  if (state.slideActive == 0) {
    state.swiper.disable();
  }
};

const changeSlideAcitve = (e) => {
  state.swiper.enable();
  state.swiper.slideTo(e);
};

const changeMousewheelEnable = (e) => {
  if (e) {
    mousewheelEnable.value = e;
    state.swiper.enable();
  }
};

const changePercent = (e) => {
  state.percent = e;
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  overflow: hidden;
  background-color: #e6e6e6;
}

.wrapper,
.container {
  height: 100%;
}

.container {
  padding: 15px;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
