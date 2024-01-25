<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-nav" :class="{ active: props.slideActive == 0 }" @click="changeNabsActive(0)">First</div>
      <div class="navbar-nav" :class="{ active: props.slideActive == 1 }" @click="changeNabsActive(1)">Seconds</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  slideActive: Number,
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
    width: 200px;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all;

    &.active {
      color: skyblue;
    }
  }
}
</style>
