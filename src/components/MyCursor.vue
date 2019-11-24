<template>
  <div class="cursor" :ref="cursorRef">
    <p class="cursor-text">Enter</p>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/_global.scss";
.cursor {
  pointer-events: none;
  user-select: none;
  display: none;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  mix-blend-mode: luminosity;
  box-shadow: 10px 10px 18px #333;
  border: 1px solid black;
  background: linear-gradient(rgb(255, 144, 255), rgb(82, 255, 151));
  border-radius: 100%;
  position: absolute;
  z-index: 0;
  .cursor-text {
    pointer-events: none;
    color: black;
    position: absolute;
    font-family: $font-secundary;
    font-weight: 500;
    font-size: 23%;
  }
}
</style>
<script>

export default {
  name: "MyCursor",
  props:{
    cursorRef: String
  }
};
</script>
