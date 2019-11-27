<template>
  <div class="home">
    <MenuCursorButton buttonText="About" linkTo="/about" menuClass="menu menu-about" />
    <div class="frontpage-label top">Digital web ninja</div>
    <SubMenuCursor v-bind:onMouseClick="showSplat" v-bind:onMouseOver="mouseOver" v-bind:onMouseOut="toggleIsVideoShown" />
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

    <FrontpageEntertainment v-bind:isVideoShown="isVideoShown"/>
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
      icon_linked_component: "SoMeLinked",
    };
  },
  methods: {
    mouseOver(e) {
      this.toggleIsVideoShown();
    },
    toggleIsVideoShown() {
      this.isVideoShown = !this.isVideoShown;
    },
    showSplat(){
      this.isSplatShown = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_global.scss";

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
</style>
