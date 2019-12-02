<template>
  <div class="home">
    <MenuCursorButton buttonText="About" linkTo="/about" menuClass="menu menu-about" />
    <div class="frontpage-label top">Digital web ninja</div>
    <SubMenuCursor
      v-bind:onMouseClick="showSplat"
      v-bind:onMouseOver="mouseOver"
      v-bind:onMouseOut="toggleIsVideoShown"
    />
    <div class="menu menu-some">
      <a href="/">
        <SoMeIcon>
          <component :is="icon_linked_component"></component>
        </SoMeIcon>
      </a>
      <a href="/">
        <SoMeIcon>
          <component :is="icon_mail_component"></component>
        </SoMeIcon>
      </a>
      <a href="/">
        <SoMeIcon>
          <component :is="icon_insta_component"></component>
        </SoMeIcon>
      </a>
      <a href="/">
        <SoMeIcon>
          <component :is="icon_pin_component"></component>
        </SoMeIcon>
      </a>
    </div>
    <div class="frontpage-label bottom">Web, design, animation</div>
    <MenuCursorButton buttonText="Misc" linkTo="/misc" menuClass="menu menu-misc" />
    <FrontpageEntertainment v-bind:isVideoShown="isVideoShown" />
    <div :class="{'entertain-element': true, 'show-border':isVideoShown}">
      <video
        v-show="isVideoShown"
        class="case-videos"
        ref="casevideo"
        muted
        autoplay
        src="../assets/videos/frontpage-entertain/noise-old.mp4"
        @ended="onVideoEnded"
      ></video>
    </div>
  </div>
</template>

<script>
import FrontpageEntertainment from "@/components/FrontpageEntertainment.vue";
import MenuCursorButton from "@/components/MenuCursorButton.vue";
import SubMenuCursor from "@/components/SubMenuCursor.vue";
import SoMeIcon from "@/components/SoMeIcon.vue";
import SoMeLinked from "@/components/svg/SoMeLinked.vue";
import MyCursor from "@/components/MyCursor.vue";
import SoMeMail from "@/components/svg/SoMeMail.vue";
import SoMeInsta from "@/components/svg/SoMeInsta.vue";
import SoMePin from "@/components/svg/SoMePin.vue";
const caseVideo = require("@/assets/videos/frontpage-entertain/case-vid-test2.mp4");
const noise = require("@/assets/videos/frontpage-entertain/noise-old.mp4");

export default {
  name: "home",
  components: {
    FrontpageEntertainment,
    MenuCursorButton,
    SubMenuCursor,
    SoMeLinked,
    SoMeMail,
    SoMeInsta,
    SoMeIcon,
    MyCursor,
    SoMePin
  },
  data() {
    return {
      isVideoShown: false,
      icon_pin_component: "SoMePin",
      icon_insta_component: "SoMeInsta",
      icon_mail_component: "SoMeMail",
      icon_linked_component: "SoMeLinked"
    };
  },
  watch:{
    isVideoShown: function(){
      if(!this.isVideoShown){
        this.$refs.casevideo.src = noise;
        this.$refs.casevideo.loop = false;
      }
    }
  },
  methods: {
    mouseOver(e) {
      this.toggleIsVideoShown();
    },
    toggleIsVideoShown() {
      this.isVideoShown = !this.isVideoShown;
    },
    showSplat() {
      this.isSplatShown = true;
    },
    onVideoEnded(){
      this.$refs.casevideo.src = caseVideo;
      this.$refs.casevideo.loop = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_global.scss";

.case-videos{
  width: 100%;
}
.show-border{
  border: 1px solid black;
}
button:hover p {
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: $color-pink;
}

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
.entertain-element {
    grid-column-start: 2;
    grid-column-end: 12;
    grid-row-start: 2;
    grid-row-end: 9;
  overflow: hidden;
}
</style>
