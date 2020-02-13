<template>
  <div
    class="icon-some"
    @mousemove="showSoMeCursor"
    @mouseleave="hideSoMeCursor"
    v-on:touchstart="iconTouchAnim"
  >
    <div class="icon-cursor" ref="iconcursor"></div>

    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
.icon-some {
  cursor: default;
  width: 3.3vw;
  height: 3.3vw;
  .pinkTouch {
    stroke: $color-green;
    fill: transparent;
    stroke-width: 3px;
  }
  .greenTouch {
    display: block;
    stroke: $color-pink;
    fill: transparent;
    stroke-width: 4px;
    animation: rumble 0.3s ease-in infinite;
  }
}

.icon-cursor {
  width: 35px;
  height: 35px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#ff90ff),
    to(#00ffc8)
  );
  mix-blend-mode: luminosity;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  z-index: 1000;
  border-radius: 100%;
  display: none;
  border: 1px solid black;
  box-shadow: 5px 5px 10px #333;
}
</style>
<script>
export default {
  name: "SoMeIcon",
  methods: {
    showSoMeCursor(e) {
      if (window.innerWidth < 736) {
        this.$refs.iconcursor.display = "none";
      } else {
        const cursorAdjust =
          this.$refs.iconcursor.getBoundingClientRect().width / 2;
        this.$refs.iconcursor.style.display = "block";
        this.$refs.iconcursor.style.top = `${e.pageY - cursorAdjust}px`;
        this.$refs.iconcursor.style.left = `${e.pageX - cursorAdjust}px`;
      }
    },
    hideSoMeCursor() {
      this.$refs.iconcursor.style.display = "none";
    },
    iconTouchAnim(e) {
      console.log("hello", e.target.children[1].children[0]);
      e.target.children[1].children[0].classList.add("greenTouch");
      e.target.children[1].children[1].classList.add("pinkTouch");
    }
  }
};
</script>
