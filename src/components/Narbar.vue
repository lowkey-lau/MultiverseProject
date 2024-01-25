<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-nav" :class="{ active: props.slideActive == 0 }" @click="changeNabsActive(0)">
        <span> First </span>
        <div class="line" :style="{ width: `${percent}%` }" v-show="props.slideActive == 0"></div>
      </div>
      <div class="navbar-nav" :class="{ active: props.slideActive == 1 }" @click="changeNabsActive(1)">
        <span> Seconds </span>
        <div class="line full" v-show="props.slideActive == 1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slideActive: Number,
  percent: Number,
});

const emit = defineEmits(["changeSlideAcitve"]);

const changeNabsActive = (e) => {
  emit("changeSlideAcitve", e);
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 9;

  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  &-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    width: 160px;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all;
    position: relative;

    @media screen and (max-width: 767px) {
      font-size: 20px;
    }

    &.active {
      color: skyblue;
    }
  }
}

.line {
  height: 4px;
  border-radius: 16px;
  background: skyblue;
  position: absolute;
  left: 0;
  bottom: 0;

  &.full {
    width: 100%;
  }
}
</style>
