<template>
  <div class="case-horror-wrap">
    <MiscCaseHeader
      caseTitle="Horror Game"
      caseText="A quick proof of concept (Unity game), set in an eerie vintage world. It's about
    a girl who has to collect keys, and protect
    herself from owls with rocks."
    />
    <div class="horror-case">
      <CaseTextSection
        sectionClass="case-text-section misc-horror-process"
        sectionHeaderClass="case-section-header header-process-horror"
        headertext="Process"
        textClass="process-text-horror"
        sectionText="The primary purpose of the project was to learn Unity.
        The riggging, animation, design of characters and world was made in Blender 3D.
        The inspiration for the world came from an old render made in Blender 3D,
        and has a vintage/horror feel to it."
      />
      <img class="process-img1" src="../../assets/img/horror/horror.png" alt="game screen shot" data-aos="fade-right" data-aos-easing="ease-out" />
      <img
        class="process-img2"
        src="../../assets/img/horror/horrorvintagescreen7.png"
        alt="game screen shot"
        data-aos="fade-left" data-aos-easing="ease-out"
      />
      <img
        class="process-img3"
        src="../../assets/img/horror/horrorvintagescreen6.png"
        alt="game screen shot"
        data-aos="fade-right" data-aos-easing="ease-out"
      />
      <img
        class="process-img4"
        src="../../assets/img/horror/horrorvintagescreen5.png"
        alt="game screen shot"
        data-aos="fade-left" data-aos-easing="ease-out"
      />
      <CaseTextSection
        sectionClass="case-text-section misc-horror-result"
        sectionHeaderClass="case-section-header header-result-horror"
        headertext="Result"
        textClass="result-text-horror"
        sectionText="Snapshots of the game."
      />
      <img
        class="result-img1"
        src="../../assets/img/horror/horrorvintagescreen4.jpg"
        alt="game screen shot"
        data-aos="fade-right" data-aos-easing="ease-out"
      />
      <img
        class="result-img2"
        src="../../assets/img/horror/horrorvintagescreen3.jpg"
        alt="game screen shot"
        data-aos="fade-left" data-aos-easing="ease-out"
      />
      <img
        class="result-img3"
        src="../../assets/img/horror/horrorvintagescreen1.jpg"
        alt="game screen shot"
        data-aos="fade-right" data-aos-easing="ease-out"
      />
      <img
        class="result-img4"
        src="../../assets/img/horror/horrorvintagescreen2.jpg"
        alt="game screen shot"
        data-aos="fade-left" data-aos-easing="ease-out"
      />
      <CaseTextSection
        sectionClass="case-text-section misc-horror-try"
        sectionHeaderClass="case-section-header header-try-horror"
        headertext="Result"
        textClass="try-text-horror"
        sectionText="When the game first was made, the unity web player
        was part of the browser, it is now depricated. The game can be
        downloaded for windows, mac or linux here, or just watch the video below."
      />
      <div class="video-wrapper">
        <PlayButton v-bind:isVisible="isVisible" />
        <video
          controls
          class="horror-video"
          poster="../../assets/videos/horror/horror2.jpg"
          src="../../assets/videos/horror/horror.mp4"
          v-on:click="isVideoPlaying"
        ></video>
      </div>

      <a
        href="/UnityGames3D/HorrorGift/horrorgift/horrorWindows.zip"
        class="horror-download"
        id="horror-win"
        target="_blank"
      >
        <GameDownload downloadClass downloadID operatingSystem="Windows" :logoImg="getWinLogo()">
          <component :is="moon_component"></component>
        </GameDownload>
      </a>
      <a
        href="/UnityGames3D/HorrorGift/horrorgift/horrorMac.zip"
        class="horror-download"
        id="horror-mac"
        target="_blank"
      >
        <GameDownload downloadClass downloadID operatingSystem="Mac" :logoImg="getMacLogo()">
          <component :is="moon_component"></component>
        </GameDownload>
      </a>
      <a
        href="/UnityGames3D/HorrorGift/horrorgift/horrorLinux.zip"
        class="horror-download"
        id="horror-linux"
      >
        <GameDownload downloadClass downloadID operatingSystem="Linux" :logoImg="getLinuxLogo()">
          <component :is="moon_component"></component>
        </GameDownload>
      </a>
    </div>
    <Footer nextText="Next case" prevText="Previous case" linkToNext="/css-anim" linkToPrev="/wreckagecat"/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-horror-wrap {
  animation: page-opacity 0.6s ease forwards;
  overflow-x: hidden;
}
.horror-case {
  @include create-grid(85, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  img {
    width: 100%;
  }
  .misc-horror-process {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  .misc-horror-result {
    grid-row-start: 26;
    grid-column-start: 1;
  }
  .misc-horror-try {
    grid-row-start: 50;
    grid-column-start: 1;
  }
  .video-wrapper {
    @include place-in-grid(54, 66, 5, 21);
    position: relative;
    .play-button {
      position: absolute;
      width: 9vw;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    .horror-video {
      width: 100%;
      &:hover {
        box-shadow: 26px 28px 14px #b6b6b6;
        cursor: pointer;
      }
    }
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
    @include place-in-grid(29, 36, 2, 13);
  }
  .result-img2 {
    @include place-in-grid(29, 36, 13, 24);
  }
  .result-img3 {
    @include place-in-grid(38, 45, 2, 13);
  }
  .result-img4 {
    @include place-in-grid(38, 45, 13, 24);
  }
  .horror-download {
    grid-row-start: 70;
    grid-row-end: 82;
    width: 100%;
    border: 1px solid black;
    position: relative;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
    .os-logo {
      @include centerX();
      top: 70%;
      width: 20%;
      opacity: 0;
      transition: all 0.4s ease;
    }
    &:hover .os-logo {
      opacity: 1;
      transition: all 0.4s ease;
    }
    &:hover .space-background {
      opacity: 0.8;
      transition: all 0.4s ease-out;
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
      opacity: 0;
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
  #horror-win {
    grid-column-start: 3;
    grid-column-end: 9;
    background: black;
    &:hover {
      background: $color-pink;
      transition: all 0.7s ease;
    }
  }
  #horror-mac {
    grid-column-start: 10;
    grid-column-end: 16;
    background: black;
    &:hover {
      background: $color-pink;
      transition: all 0.7s ease;
    }
    .space-background {
      opacity: 0;
    }
    &:hover .space-background {
      opacity: 0.5;
      transition: all 0.4s ease-out;
    }
  }
  #horror-linux {
    grid-column-start: 17;
    grid-column-end: 23;
    background: black;
    &:hover {
      background: $color-pink;
      transition: all 0.7s ease;
    }
    .space-background {
      opacity: 0;
    }
    &:hover .space-background {
      opacity: 0.7;
      transition: all 0.4s ease-out;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .horror-case {
    grid-template-rows: repeat(125, 4.94vh);
    .misc-horror-process {
      grid-row-start: 2;
    }
    .process-img1 {
      @include place-in-grid(9, 15, 2, 24);
    }
    .process-img2 {
      @include place-in-grid(15, 18, 2, 24);
    }
    .process-img3 {
      @include place-in-grid(21, 25, 2, 24);
    }
    .process-img4 {
      @include place-in-grid(27, 31, 2, 24);
    }
    .misc-horror-result {
      grid-row-start: 34;
    }
    .result-img1 {
      @include place-in-grid(38, 41, 2, 24);
    }
    .result-img2 {
      @include place-in-grid(44, 48, 2, 24);
    }
    .result-img3 {
      @include place-in-grid(50, 54, 2, 24);
    }
    .result-img4 {
      @include place-in-grid(56, 59, 2, 24);
    }
    .misc-horror-try {
      grid-row-start: 64;
    }
    .video-wrapper {
      grid-row-start: 71;
      grid-row-end: 74;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    #horror-win {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 79;
      grid-row-end: 92;
    }
    #horror-mac {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 94;
      grid-row-end: 107;
    }
    #horror-linux {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 109;
      grid-row-end: 122;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import GameDownload from "@/components/GameDownload.vue";
import PlayButton from "@/components/svg/PlayButton.vue";
import Footer from "@/components/Footer.vue";
import Moon from "@/components/svg/Moon.vue";

const winLogo = require("@/assets/img/space-kitty/win.svg");
const macLogo = require("@/assets/img/space-kitty/mac.svg");
const linuxLogo = require("@/assets/img/space-kitty/linux.svg");

export default {
  name: "HorrorGameCase",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    GameDownload,
    Moon,
    PlayButton,
    Footer
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
  },
  data() {
    return {
      moon_component: "Moon",
      isVisible: false
    };
  }
};
</script>
