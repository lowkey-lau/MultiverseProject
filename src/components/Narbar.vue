<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-nav" :class="{ active: props.slideActive == 0 }" @click="changeNabsActive(0)">
        <span> First</span>
        <div class="process" v-show="props.slideActive == 0">
          <div class="process-inner" :style="{ width: `${percent}%` }"></div>
        </div>
      </div>
      <div class="navbar-nav" :class="{ active: props.slideActive == 1 }" @click="changeNabsActive(1)">
        <span> Seconds </span>
        <div class="process" v-show="props.slideActive == 1">
          <div class="process-inner full"></div>
        </div>
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
  z-index: 9;
  padding: 45px 0;

  &-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: 30px;
  }

  &-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 100%;
    cursor: pointer;
    transition: 0.4s all;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    font-family: "Avenir Next Regular", sans-serif;
  }
}

.process {
  height: 5px;
  background: red;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #b3b3b3;
  width: 100%;

  &-inner {
    height: 100%;
    background-color: #fff;
    transition: 0.2s all;

    .full {
      width: 100%;
    }
  }
}
</style>
