<template>
  <div :class="menuClass">
    <MyCursor cursorRef="cursor" />
    <router-link v-bind:to="linkTo">
      <button
        class="menu-button"
        @mousemove="showCursor"
        @mouseleave="hideCursor"
        @mouseover="onMouseOver"
        @mouseout="onMouseOut"
      >
        <p :data-case="buttonText">{{buttonText}}</p>
      </button>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/_global.scss";
.menu-button {
  cursor: none;
  opacity: 0;
  @include menu-button-mixin;
}
button:hover p {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-pink;
}
button:hover p:before {
  content: attr(data-case);
  position: absolute;
  z-index: -50;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-green;
  pointer-events: none;
  left: 1.2%;
  top: 1.2%;
  animation: rumble-menu 0.15s ease-in infinite;
  pointer-events: none;
}
</style>
<script>
import MyCursor from "@/components/MyCursor.vue";
export default {
  name: "MenuCursorButton",
  props: {
    buttonText: String,
    linkTo: String,
    menuClass: String,
    onMouseOver: Function,
    onMouseOut: Function
  },
  components: {
    MyCursor
  },
  methods: {
    showCursor(e) {
      this.$children[0].$refs.cursor.style.display = "flex";
      this.$children[0].$refs.cursor.style.zIndex = 42000;
      this.$children[0].$refs.cursor.style.top = `${e.pageY - 35}px`;
      this.$children[0].$refs.cursor.style.left = `${e.pageX - 35}px`;
    },
    hideCursor() {
      this.$children[0].$refs.cursor.style.display = "none";
    }
  }
};
</script>
