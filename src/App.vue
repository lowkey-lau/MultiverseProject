<template>
  <div class="main">
    <div class="wrapper">
      <Narbar />
      <div class="container">
        <swiper
          :direction="'vertical'"
          :pagination="{
            clickable: true,
          }"
          :modules="[Pagination]"
          :speed="1000"
        >
          <swiper-slide>
            <First />
          </swiper-slide>
          <!-- <swiper-slide>
            <Seconds />
          </swiper-slide> -->
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
</script>

<style lang="scss" scoped>
.main,
.wrapper {
  height: 100vh;
}

.container {
  height: 100%;
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
