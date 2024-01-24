

<template>
  <swiper
  :direction="'vertical'"
  :pagination="{
    clickable: true,
  }"
  :modules="[Pagination]"
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper>

<!-- 
  <First msg="Vite + Vue" />
  <Seconds/> -->
</template>


<script setup>
  import First from './components/First.vue'
  import Seconds from './components/Seconds.vue'
  
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
</script>

<style scoped>
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
