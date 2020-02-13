<template>
  <div class="contact-page">
    <div class="contact-header">
      <h1>Contact</h1>
      <router-link class="case-home-button" to="/">
        <HomeButton buttonText="Home" />
      </router-link>
    </div>
    <div class="contact-links">
      <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_linked_component"></component>
        </SoMeIcon>
      </a>
      <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_mail_component"></component>
        </SoMeIcon>
      </a>
      <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_pin_component"></component>
        </SoMeIcon>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.contact-page {
  animation: page-opacity 0.6s ease forwards;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  .contact-header {
    width: 94%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: -6vh;
    h1 {
      font-family: $font-primary;
      font-size: 3.3em;
      color: black;
      font-weight: 700;
      justify-self: start;
    }
    .home-button {
      justify-self: end;
    }
  }
  .contact-links {
    width: 100%;
    padding-top: 7vh;

    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .icon-some {
      cursor: default;
      width: 24.3vw;
      height: 24.3vw;
    }
  }
}

</style>
<script>
import HomeButton from "@/components/HomeButton.vue";
import SoMeIcon from "@/components/SoMeIcon.vue";
import SoMeLinked from "@/components/svg/SoMeLinked.vue";
import SoMeMail from "@/components/svg/SoMeMail.vue";
import SoMeInsta from "@/components/svg/SoMeInsta.vue";
import SoMePin from "@/components/svg/SoMePin.vue";
export default {
  name: "about",
  components: {
    HomeButton,
    SoMeLinked,
    SoMeMail,
    SoMeInsta,
    SoMeIcon,
    SoMePin
  },
  data() {
    return {
      icon_pin_component: "SoMePin",
      icon_insta_component: "SoMeInsta",
      icon_mail_component: "SoMeMail",
      icon_linked_component: "SoMeLinked"
    };
  },
  methods: {
    mouseOverSoMe(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = noise;
        this.gameEnd = false;
        this.$refs.casevideo.loop = false;
      }
      this.switchVideo = "some";
      this.showVideo();
    },
    onMouseOutSoMe(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = null;
        this.gameEnd = false;
        this.$refs.casevideo.loop = false;
      }
      this.hideVideo();
    }
  }
};
</script>
