<template>
  <div class="home">
    <MenuCursorButton buttonText="About" linkTo="/about" menuClass="menu menu-about" />
    <div class="frontpage-label top">Digital web ninja</div>
     <SubMenuCursorButton />
    <div class="menu menu-some">
      <a href="/">
        <img class="icon-linked" alt="icon-linkedein" src="../assets/img/SVG/icon-linked.svg" />
      </a>
      <a href="/">
        <img class="icon-linked" alt="icon-email" src="../assets/img/SVG/icon-email.svg" />
      </a>
      <a href="/">
        <img class="icon-linked" alt="icon-insta" src="../assets/img/SVG/icon-insta.svg" />
      </a>
      <a href="/">
        <img class="icon-linked" alt="icon-pinterest" src="../assets/img/SVG/icon-pinterest.svg" />
      </a>
    </div>
    <div class="frontpage-label bottom">Web, design, animation</div>
    <MenuCursorButton buttonText="Misc" linkTo="/misc" menuClass="menu menu-misc" />

    <FrontpageEntertainment v-bind:isVideoShown="isVideoShown" />
  </div>
</template>

<script>
import FrontpageEntertainment from "@/components/FrontpageEntertainment.vue";
import MenuCursorButton from "@/components/MenuCursorButton.vue";
import SubMenuCursorButton from "@/components/SubMenuCursorButton.vue";

export default {
  name: "home",
  components: {
    FrontpageEntertainment,
    MenuCursorButton,
    SubMenuCursorButton
  },
  data() {
    return {
      isVideoShown: false
    };
  },
  methods:{
    toggleIsVideoShown() {
      this.isVideoShown = !this.isVideoShown;
    },
    hoverOverLink: function() {
      this.toggleIsVideoShown();
    },
    leaveLink: function() {
      this.toggleIsVideoShown();
    },
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_global.scss";

.cursor:hover + button p,
button:hover p {
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: $color-pink;
}
.cursor:hover + button p:after,
button:hover p:after {
  content: attr(data-text);
  position: absolute;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-green;
  pointer-events: none;
  left: 1.2%;
  top: 1.2%;
  animation: rumble-menu 0.25s ease-in infinite;
  pointer-events: none;
}

.cursor p {
  pointer-events: none;
  color: black;
  position: absolute;
  font-family: "Source Code Pro", monospace;
  font-weight: 500;
}
.cursor {
  background: black;
  pointer-events: none;
  cursor: none;
  user-select: none;
  display: none;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  mix-blend-mode: luminosity;
  box-shadow: 10px 10px 12px #333;
  border: 1px solid black;
  background: linear-gradient(rgb(255, 144, 255), rgb(82, 255, 151));
  border-radius: 100%;
  position: absolute;
  z-index: 0;
  transition-duration: 100ms;
  transition-timing-function: ease-out;
  animation: cursorAnim 0.5s infinite alternate;
}

.expand {
  animation: cursorAnim3 0.5s;
  border: 2px solid black;
}

@keyframes cursorAnim {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.93);
  }
}

@keyframes cursorAnim3 {
  0% {
    border: 1px solid black;
    background: black;
    opacity: 0.8;
  }
  50% {
    transform: translate(-20px, -20px);
    border: 20px solid black;
    background: black;
    opacity: 0.4;
  }
  90% {
    transform: translate(-10px, -10px);
    border: 10px solid black;
    opacity: 0.1;
  }
  100% {
    border: 1px solid black;
    opacity: 1;
  }
}
</style>
