<template>
  <div class="case-space-wrap">
    <MiscCaseHeader
      caseTitle="Space Kitty"
      caseText="A quick proof of concept (Unity game) about a cat from outerspace
      comming to earth and collecting human inventions, while
      fighting giant rats."
    />
    <div class="space-case">
      <CaseTextSection
        sectionClass="case-text-section misc-space-process"
        sectionHeaderClass="case-section-header header-process-space"
        headertext="Process"
        textClass="process-text-space"
        sectionText="Primary purpose of project was to learn Unity.
        The riggging, animation, design of characters and world are made in Blender 3D."
      />
      <img
        class="process-img1"
        src="@/assets/img/space-kitty/spacekittyscreenshot3.png"
        alt="game screen shot"
      />
      <img class="process-img2" src="@/assets/img/space-kitty/spaceship.png" alt="game screen shot" />
      <img class="process-img3" src="@/assets/img/space-kitty/rat.png" alt="game screen shot" />
      <img
        class="process-img4"
        src="@/assets/img/space-kitty/spacekittyscreenshot2.jpg"
        alt="game screen shot"
      />
      <CaseTextSection
        sectionClass="case-text-section misc-space-result"
        sectionHeaderClass="case-section-header header-result-space"
        headertext="Result"
        textClass="result-text-space"
        sectionText="Snapshots of the game prototype."
      />
      <img
        class="result-img1"
        src="@/assets/img/space-kitty/spacekittyscreenshot5.jpg"
        alt="game screen shot"
      />
      <img
        class="result-img2"
        src="@/assets/img/space-kitty/spacekittyscreenshot4.jpg"
        alt="game screen shot"
      />
      <img
        class="result-img3"
        src="@/assets/img/space-kitty/spacekittyscreenshot.jpg"
        alt="game screen shot"
      />
      <img
        class="result-img4"
        src="@/assets/img/space-kitty/spacekittyinthecity1.jpg"
        alt="game screen shot"
      />
      <CaseTextSection
        sectionClass="case-text-section misc-space-try"
        sectionHeaderClass="case-section-header header-try-space"
        headertext="Try game"
        textClass="try-text-space"
        sectionText="When the game was first made, the Unity Web Player was
        part of the browser, but unfortunately it is now depricated.
        The game can be downloaded for windows, mac or linux here,
        or just watch the video below."
      />
      <div class="video-wrapper">
        <PlayButton v-bind:isVisible="isVisible" />
        <video
          controls
          class="space-video"
          poster="@/assets/videos/space-kitty/spacekitty-poster.jpg"
          src="@/assets/videos/space-kitty/spacekitty.mp4"
          v-on:click="isVideoPlaying"
        ></video>
      </div>

      <a
        href="/UnityGames3D/KittyGift/kittygift/spacekittyinthecityWindows.zip"
        class="space-download"
        id="space-win"
        target="_blank"
      >
        <GameDownload downloadClass downloadID operatingSystem="Windows" :logoImg="getWinLogo()">
          <component :is="spaceship_component"></component>
        </GameDownload>
      </a>
      <a
        href="/UnityGames3D/KittyGift/kittygift/spacekittyinthecityMac.zip"
        class="space-download"
        id="space-mac"
        target="_blank"
      >
        <GameDownload downloadClass downloadID operatingSystem="Mac" :logoImg="getMacLogo()">
          <component :is="spaceship_component"></component>
        </GameDownload>
      </a>
      <a
        href="/UnityGames3D/KittyGift/kittygift/spacekittyinthecityLinux.zip"
        class="space-download"
        id="space-linux"
        target="_blank"
      >
        <GameDownload downloadClass downloadID operatingSystem="Linux" :logoImg="getLinuxLogo()">
          <component :is="spaceship_component"></component>
        </GameDownload>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-space-wrap {
  animation: page-opacity 0.6s ease forwards;
}

.misc-space-process {
  grid-row-start: 1;
  grid-column-start: 1;
}
.misc-space-result {
  grid-row-start: 27;
  grid-column-start: 1;
}
.misc-space-try {
  grid-row-start: 51;
  grid-column-start: 1;
}
.video-wrapper {
  @include place-in-grid(55, 67, 5, 21);
  position: relative;
  .play-button {
    position: absolute;
    width: 9vw;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .space-video {
    width: 100%;
    &:hover {
      box-shadow: 26px 28px 14px #b6b6b6;
      cursor: pointer;
    }
  }
}

.space-case {
  @include create-grid(85, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  img {
    width: 100%;
  }
  .process-img1 {
    @include place-in-grid(5, 12, 2, 13);
  }
  .process-img2 {
    @include place-in-grid(5, 12, 13, 24);
  }
  .process-img3 {
    @include place-in-grid(14, 21, 2, 13);
  }
  .process-img4 {
    @include place-in-grid(14, 21, 13, 24);
  }
  .result-img1 {
    @include place-in-grid(30, 37, 2, 13);
  }
  .result-img2 {
    @include place-in-grid(30, 37, 13, 24);
  }
  .result-img3 {
    @include place-in-grid(39, 46, 2, 13);
  }
  .result-img4 {
    @include place-in-grid(39, 46, 13, 24);
  }
  .space-download {
    grid-row-start: 71;
    grid-row-end: 83;
    width: 100%;
    border: 1px solid black;
    position: relative;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    &:hover .space-background {
      background: linear-gradient(
        -45deg,
        $color-pink-light -70%,
        $color-green 120%
      );
      opacity: 0.6;
      transition: all 0.3s ease;
    }
    .os-logo {
      @include centerX();
      top: 30%;
      width: 0%;
      transition: all 0.4s ease;
    }
    &:hover .os-logo {
      top: 70%;
      width: 20%;
      transition: all 0.4s ease;
    }
    .space-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 1;
      transition: all 0.3s ease;
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
  #space-win {
    grid-column-start: 3;
    grid-column-end: 9;
    background: $color-pink;
    .os-logo {
      @include centerX();
      top: 30%;
      width: 0%;
      transition: all 0.4s ease;
    }
    &:hover .os-logo {
      width: 24%;
      top: 70%;
      transition: all 0.4s ease;
    }
  }
  #space-mac {
    grid-column-start: 10;
    grid-column-end: 16;
    background: $color-green;
    &:hover {
      cursor: pointer;
    }
    &:hover .space-background {
      background: linear-gradient(
        top,
        $color-pink-light -50%,
        $color-green 190%
      );
      opacity: 0.8;
      transition: all 0.3s ease;
    }
    .space-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: black;
      opacity: 1;
      transition: all 0.3s ease;
    }
    .top-text {
      background: $color-green-dark;
    }
    .download-choice-text {
      background: $color-pink;
    }
  }
  #space-linux {
    grid-column-start: 17;
    grid-column-end: 23;
    background: $color-pink-light;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .space-case {
    grid-template-rows: repeat(125, 4.94vh);
    .misc-space-process {
      grid-row-start: 3;
    }
    .misc-space-result {
      grid-row-start: 36;
    }
    .process-img1 {
      @include place-in-grid(9, 11, 1, 25);
    }
    .process-img2 {
      @include place-in-grid(15, 18, 1, 25);
    }
    .process-img3 {
      @include place-in-grid(21, 24, 1, 25);
    }
    .process-img4 {
      @include place-in-grid(27, 30, 1, 25);
    }
    .result-img1 {
      @include place-in-grid(39, 43, 1, 25);
    }
    .result-img2 {
      @include place-in-grid(45, 49, 1, 25);
    }
    .result-img3 {
      @include place-in-grid(51, 54, 1, 25);
    }
    .result-img4 {
      @include place-in-grid(57, 60, 1, 25);
    }
    .misc-space-try {
      grid-row-start: 65;
    }
    .video-wrapper {
      grid-row-start: 72;
      grid-row-end: 75;
      grid-column-start: 2;
      grid-column-end: 24;
    }

    #space-win {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 80;
      grid-row-end: 93;
    }
    #space-mac {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 95;
      grid-row-end: 108;
    }
    #space-linux {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 110;
      grid-row-end: 123;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import GameDownload from "@/components/GameDownload.vue";
import PlayButton from "@/components/svg/PlayButton.vue";

import SpaceShip from "@/components/svg/SpaceShip.vue";

const winLogo = require("@/assets/img/space-kitty/win.svg");
const macLogo = require("@/assets/img/space-kitty/mac.svg");
const linuxLogo = require("@/assets/img/space-kitty/linux.svg");

export default {
  name: "SpaceKitty",
  data() {
    return {
      spaceship_component: "SpaceShip",
      isVisible: false
    };
  },
  components: {
    MiscCaseHeader,
    CaseTextSection,
    GameDownload,
    SpaceShip,
    PlayButton
  },
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
  }
};
</script>
