<template>
  <div class="case-wreck-wrap">
    <MiscCaseHeader
      caseTitle="Wreckage Cat"
      caseText="A quick proof of concept of a 2D game in Unity,
    about a cat catching mice, and wrecking the house while doing it."
    />
    <div class="wreck-case">
      <CaseTextSection
        sectionClass="case-text-section misc-wreck-sprite"
        sectionHeaderClass="case-section-header header-wreck-sprite"
        headertext="Process"
        textClass="wreck-text-sprite"
        sectionText="Examples of sprites that are used for the animations.
        The game view is top-down. Below are examples of the interior of
        the house and the cats run cycle."
      />
      <img class="wreck-sprite1" src="@/assets/img/wreckage/kittyrunscreensprite2.png" alt />
      <img class="wreck-sprite2" src="@/assets/img/wreckage/kittyrunscreensprite.png" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-wreck-result"
        sectionHeaderClass="case-section-header header-wreck-result"
        headertext="Result"
        textClass="wreck-text-result"
        sectionText="Snapshot of the game."
      />
      <img class="wreck-result1" src="@/assets/img/wreckage/kittyrunheader.png" alt />
      <img class="wreck-result2" src="@/assets/img/wreckage/kittytoss1.jpg" alt />
      <img class="wreck-result3" src="@/assets/img/wreckage/kittyrunheader2.png" alt />
      <img class="wreck-result4" src="@/assets/img/wreckage/kittyrunscreen2.png" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-wreck-try"
        sectionHeaderClass="case-section-header header-wreck-try"
        headertext="Try Game"
        textClass="wreck-text-try"
        sectionText="When the game first was made, the unity web player was part of the browser,
        it is now depricated. The game can be downloaded for windows, mac or linux here, or just watch the video below."
      />
      <div class="video-wrapper">
        <PlayButton v-bind:isVisible="isVisible" />
        <video
          class="kittytoss-video"
          controls
          src="@/assets/img/wreckage/kittytoss.mp4"
          v-on:click="isVideoPlaying"
        ></video>
      </div>
      <a href="/UnityGames3D/wreckage.zip" class="wreck-download" id="wreck-win">
        <GameDownload downloadClass downloadID operatingSystem="Windows" :logoImg="getWinLogo()">
          <component :is="paw_component"></component>
        </GameDownload>
      </a>
      <a href="/UnityGames3D/wreckage.zip" class="wreck-download" id="wreck-mac">
        <GameDownload downloadClass downloadID operatingSystem="Mac" :logoImg="getMacLogo()">
          <component :is="paw_component"></component>
        </GameDownload>
      </a>
      <a href="/UnityGames3D/wreckage.zip" class="wreck-download" id="wreck-linux">
        <GameDownload downloadClass downloadID operatingSystem="Linux" :logoImg="getLinuxLogo()">
          <component :is="paw_component"></component>
        </GameDownload>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-wreck-wrap {
  animation: page-opacity 0.6s ease forwards;
}
.wreck-case {
  @include create-grid(85, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .misc-wreck-sprite {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  .wreck-sprite1 {
    width: 100%;
    @include place-in-grid(5, 12, 2, 13);
  }
  .wreck-sprite2 {
    width: 100%;
    @include place-in-grid(5, 12, 13, 24);
  }
  .misc-wreck-result {
    grid-row-start: 17;
    grid-column-start: 1;
  }
  .wreck-result1 {
    width: 100%;
    @include place-in-grid(20, 27, 2, 13);
  }
  .wreck-result2 {
    width: 100%;
    @include place-in-grid(20, 27, 13, 24);
  }
  .wreck-result3 {
    width: 100%;
    @include place-in-grid(30, 37, 2, 13);
  }
  .wreck-result4 {
    width: 100%;
    @include place-in-grid(30, 37, 13, 24);
  }
  .misc-wreck-try {
    grid-row-start: 42;
    grid-column-start: 1;
  }
  .video-wrapper {
    @include place-in-grid(46, 58, 5, 21);
    position: relative;
    .play-button {
      position: absolute;
      width: 9vw;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .kittytoss-video {
      width: 100%;
      &:hover {
        box-shadow: 26px 28px 14px #b6b6b6;
        cursor: pointer;
      }
    }
  }

  .wreck-download {
    grid-row-start: 64;
    grid-row-end: 76;
    width: 100%;
    border: 1px solid black;
    position: relative;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }

    .space-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        -45deg,
        $color-pink-light -70%,
        $color-green 120%
      );
      opacity: 0.6;
      transition: all 0.2s ease;
    }

    .top-text {
      @include header-style(lowercase);
      background: $color-pink;
      width: 100%;
      text-align: center;
      position: relative;
      font-size: 1.8vw;
      padding: 1vh 0;
      border-bottom: 1px solid black;
    }
    .download-choice-text {
      @include header-style(uppercase);
      position: absolute;
      bottom: 0;
      width: 100%;
      font-size: 3vw;
      text-align: center;
      background: $color-green-dark;
      border-top: 1px solid black;
      z-index: 10;
    }
  }
  #wreck-win {
    grid-column-start: 3;
    grid-column-end: 9;
    background: $color-pink;
    overflow: hidden;
    .os-logo {
      @include centerX();
      top: 40%;
      width: 60%;
      transition: all 0.4s ease;
      opacity: 0.8;
    }
    &:hover .os-logo {
      animation: logo-anim 0.2s ease-in forwards;
      animation-delay: 0.48s;
    }
  }
  #wreck-mac {
    grid-column-start: 10;
    grid-column-end: 16;
    background: $color-green;
    .top-text {
      background: $color-green-dark;
    }
    .download-choice-text {
      background: $color-pink;
    }
    .os-logo {
      @include centerX();
      top: 38%;
      width: 53%;
      transition: all 0.4s ease;
      opacity: 0.8;
    }
    &:hover .os-logo {
      animation: logo-anim 0.2s ease-in forwards;
      animation-delay: 0.48s;
    }
  }

  #wreck-linux {
    grid-column-start: 17;
    grid-column-end: 23;
    background: $color-pink-light;
    .os-logo {
      @include centerX();
      top: 40%;
      width: 46%;
      transition: all 0.4s ease;
      opacity: 0.8;
    }
    &:hover .os-logo {
      animation: logo-anim 0.2s ease-in forwards;
      animation-delay: 0.48s;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .wreck-case {
    grid-template-rows: repeat(112, 4.94vh);
    .misc-wreck-sprite {
      grid-row-start: 2;
    }
    .wreck-sprite1 {
      grid-row-start: 8;
      grid-row-end: 12;
      grid-column-start: 1;
      grid-column-end: 25;
    }
    .wreck-sprite2 {
      grid-row-start: 14;
      grid-row-end: 18;
      grid-column-start: 1;
      grid-column-end: 25;
    }
    .misc-wreck-result {
      grid-row-start: 22;
    }
    .wreck-result1 {
      grid-row-start: 25;
      grid-row-end: 27;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .wreck-result2 {
      grid-row-start: 31;
      grid-row-end: 32;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .wreck-result3 {
      grid-row-start: 37;
      grid-row-end: 46;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .wreck-result4 {
      grid-row-start: 43;
      grid-row-end: 44;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .misc-wreck-try {
      grid-row-start: 51;
    }
    .video-wrapper {
      grid-row-start: 57;
      grid-row-end: 60;
      grid-column-start: 2;
      grid-column-end: 24;
    }

    #wreck-win {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 65;
      grid-row-end: 78;
    }
    #wreck-mac {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 80;
      grid-row-end: 93;
    }
    #wreck-linux {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 95;
      grid-row-end: 108;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import GameDownload from "@/components/GameDownload.vue";
import PlayButton from "@/components/svg/PlayButton.vue";

const winLogo = require("@/assets/img/space-kitty/win.svg");
const macLogo = require("@/assets/img/space-kitty/mac.svg");
const linuxLogo = require("@/assets/img/space-kitty/linux.svg");

import Paw from "@/components/svg/Paw.vue";

export default {
  name: "WreckageCat",
  methods: {
    getWinLogo: () => winLogo,
    getMacLogo: () => macLogo,
    getLinuxLogo: () => linuxLogo,
    isVideoPlaying(e) {
      if (e.target.paused) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    }
  },
  components: {
    MiscCaseHeader,
    CaseTextSection,
    GameDownload,
    Paw,
    PlayButton
  },
  data() {
    return {
      paw_component: "Paw",
      isVisible: false
    };
  }
};
</script>
