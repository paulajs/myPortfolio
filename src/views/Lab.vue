<template>
  <div class="misc">
   <!--  <video class="mobile-videos" v-on:ended="videoEnd" muted autoplay src="@/assets/videos/frontpage-entertain/lab-mobile.mp4" ref="mobilevid"></video> -->
    <div class="misc-header">
      <h1>Laboratory</h1>
      <router-link class="misc-home-button" to="/">
        <HomeButton buttonText="Home" />
      </router-link>
      <div class="misc-description">
        <div class="misc-background"></div>
        <p>Various random projects and experiments</p>
      </div>
    </div>
    <div class="misc-grid">
      <MiscCaseWrappedDouble
        miscCaseClass="misc-case1"
        headerClass="header-audio"
        headerFirstClass="text-audio"
        headerSecondClass="text-exp"
        headerFirstText="Audio"
        headerSecondText="experiments"
        routerLink="/audio"
      >
        <component :is="case_audio_component"></component>
      </MiscCaseWrappedDouble>

      <MiscCaseSingle
        miscCaseClass="misc-case2"
        headerClass="header-space"
        headerText="Space Kitty"
        stars="yes"
        routerLink="/space"
      >
        <component :is="case_space_component"></component>
      </MiscCaseSingle>
      <MiscCaseDouble
        miscCaseClass="misc-case3"
        headerOneClass="header-adams-ill"
        headerTwoClass="header-adams"
        headerOneText="illustration"
        headerTwoText="Dr Adams"
        routerLink="/dr-adams"
      >
        <component :is="case_adams_component"></component>
      </MiscCaseDouble>
      <MiscCaseDouble
        miscCaseClass="misc-case4"
        headerOneClass="header-bunny-left"
        headerTwoClass="header-bunny-right"
        headerOneText="Bunny"
        headerTwoText="Games"
        routerLink="/bunny"
      >
        <component :is="case_bunny_component"></component>
      </MiscCaseDouble>
      <MiscCaseWrappedDouble
        miscCaseClass="misc-case5"
        headerClass="header-three"
        headerFirstClass="text-three"
        headerSecondClass="text-exp"
        headerFirstText="Three js"
        headerSecondText="experiments"
        routerLink="/three"
      >
        <component :is="case_three_component"></component>
      </MiscCaseWrappedDouble>
      <MiscCaseSingle
        miscCaseClass="misc-case6"
        headerClass="header-ripple"
        headerText="Ripple effect"
        stars="no"
        routerLink="/ripple"
      >
        <component :is="case_ripple_component"></component>
      </MiscCaseSingle>
      <MiscCaseWrappedDouble
        miscCaseClass="misc-case7"
        headerClass="header-css-anim"
        headerFirstClass="text-css"
        headerSecondClass="text-anim"
        headerFirstText="CSS"
        headerSecondText="animation"
        routerLink="/css-anim"
      >
        <component :is="case_css_component"></component>
      </MiscCaseWrappedDouble>
      <MiscCaseSingle
        miscCaseClass="misc-case8"
        headerClass="header-horror"
        headerText="Horror game"
        stars="yes"
        routerLink="/horror"
      >
        <component :is="case_horror_component"></component>
      </MiscCaseSingle>
      <MiscCaseDouble
        miscCaseClass="misc-case9"
        headerOneClass="header-wreck-top"
        headerTwoClass="header-wreck-bottom"
        headerOneText="Wreckage"
        headerTwoText="Cat"
        routerLink="/wreckagecat"
      >
        <component :is="case_wreck_component"></component>
      </MiscCaseDouble>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
 .misc{
   animation: page-opacity 0.6s ease forwards;
 }
/*  @keyframes page-opacity {
   0%{
     opacity: 0;
   }
   100%{
     opacity: 1;
   }
 } */
.misc-header {
  @include create-grid(4, 9.94vh, 12, 7.01vw, 1vh, 1vw);
  margin: 2vh 2vw 9vh 2vw;
  align-items: center;
  h1 {
    font-family: $font-primary;
    font-size: 8.6vw;
    width: 100%;
    color: black;
    @include place-in-grid(1, 4, 1, 10);
  }
  .misc-home-button {
    @include place-in-grid(1, 4, 12, 12);
    justify-self: end;
  }
  .misc-description {
    @include place-in-grid(4, 5, 1, 13);
    height: 100%;
    background: white;
    border: 1px solid black;
    position: relative;
    p {
      color: black;
      font-family: $font-secundary;
      font-size: 1.5vw;
      margin-left: 3vw;
      @include centerY();
      font-weight: 300;
    }
    .misc-background {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      background: white;
      opacity: 0.6;
    }
  }
}
.misc-grid {
  /*   @include create-grid(13, 11.94vh, 12, 5.18vw, 7vh, 3vw);
 margin: 2vh 2vw; */
  grid-template-rows: repeat(13, 10.94vh);
  grid-template-columns: repeat(12, 4.18vw);
  grid-row-gap: 7vh;
  grid-column-gap: 3vw;
  display: grid;
  margin: 2vh 8vw;
}
.mobile-videos {
  display: none;
  position: fixed;
  top: 0vh;
  left: 0vw;
  width: 100vw;
  height: 100vh;
  z-index: 100000;
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {

 .misc-grid {
    grid-template-columns: repeat(4, 22.54vw);
    grid-template-rows: repeat(103, 11.94vh);
    grid-column-gap: 2vw;
    margin: 2vh 2vw;
  }
  .misc {
    .show-mob-video {
      display: block;
    }
    .misc-header {
      h1 {
        font-size: 11.6vw;
      }
      .misc-description {
        p {
          font-size: 5vw;
        }
      }
    }
  }
}

</style>

<script>
import HomeButton from "@/components/HomeButton.vue";
import MiscCaseWrappedDouble from "@/views/partials/MiscCaseWrappedDouble.vue";
import MiscCaseSingle from "@/views/partials/MiscCaseSingle.vue";
import MiscCaseDouble from "@/views/partials/MiscCaseDouble.vue";
import MiscCaseAudioSVG from "@/components/svg/MiscCaseAudio.vue";
import MiscCaseSpaceSVG from "@/components/svg/MiscCaseSpace.vue";
import MiscCaseAdamsSVG from "@/components/svg/MiscCaseAdams.vue";
import MiscCaseBunnySVG from "@/components/svg/MiscCaseBunny.vue";
import MiscCaseThreeSVG from "@/components/svg/MiscCaseThree.vue";
import MiscCaseRippleSVG from "@/components/svg/MiscCaseRipple.vue";
import MiscCaseCSSSVG from "@/components/svg/MiscCaseCSS.vue";
import MiscCaseHorrorSVG from "@/components/svg/MiscCaseHorror.vue";
import MiscCaseWreckageSVG from "@/components/svg/MiscCaseWreckage.vue";
const caseVideoMobLab = require("@/assets/videos/frontpage-entertain/lab-mobile.mp4");
export default {
  components: {
    HomeButton,
    MiscCaseWrappedDouble,
    MiscCaseSingle,
    MiscCaseDouble,
    MiscCaseAudioSVG,
    MiscCaseSpaceSVG,
    MiscCaseAdamsSVG,
    MiscCaseBunnySVG,
    MiscCaseThreeSVG,
    MiscCaseRippleSVG,
    MiscCaseCSSSVG,
    MiscCaseHorrorSVG,
    MiscCaseWreckageSVG
  },
  data() {
    return {
      case_audio_component: "MiscCaseAudioSVG",
      case_space_component: "MiscCaseSpaceSVG",
      case_adams_component: "MiscCaseAdamsSVG",
      case_bunny_component: "MiscCaseBunnySVG",
      case_three_component: "MiscCaseThreeSVG",
      case_ripple_component: "MiscCaseRippleSVG",
      case_css_component: "MiscCaseCSSSVG",
      case_horror_component: "MiscCaseHorrorSVG",
      case_wreck_component: "MiscCaseWreckageSVG"
    };
  },
};
</script>

