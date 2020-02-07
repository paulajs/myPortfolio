<template>
  <div>
    <MiscCaseHeader
      caseTitle="Horror Game"
      caseText="A quick proof of concept (game), set in a eerie vintage world about
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
      <img class="process-img1" src="../../assets/img/horror/horror.png" alt="game screen shot" />
      <img
        class="process-img2"
        src="../../assets/img/horror/horrorvintagescreen7.png"
        alt="game screen shot"
      />
      <img
        class="process-img3"
        src="../../assets/img/horror/horrorvintagescreen6.png"
        alt="game screen shot"
      />
      <img
        class="process-img4"
        src="../../assets/img/horror/horrorvintagescreen5.png"
        alt="game screen shot"
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
      />
      <img
        class="result-img2"
        src="../../assets/img/horror/horrorvintagescreen3.jpg"
        alt="game screen shot"
      />
      <img
        class="result-img3"
        src="../../assets/img/horror/horrorvintagescreen1.jpg"
        alt="game screen shot"
      />
      <img
        class="result-img4"
        src="../../assets/img/horror/horrorvintagescreen2.jpg"
        alt="game screen shot"
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
      <video
        controls
        class="horror-video"
        poster="../../assets/videos/horror/horror2.jpg"
        src="../../assets/videos/horror/horror.mp4"
      ></video>
      <GameDownload
        downloadClass="horror-download"
        downloadID="horror-win"
        operatingSystem="Windows"
        :logoImg="getWinLogo()"
      >
        <component :is="moon_component"></component>
      </GameDownload>
      <GameDownload
        downloadClass="horror-download"
        downloadID="horror-mac"
        operatingSystem="Mac"
        :logoImg="getMacLogo()"
      >
        <component :is="moon_component"></component>
      </GameDownload>
      <GameDownload
        downloadClass="horror-download"
        downloadID="horror-linux"
        operatingSystem="Linux"
        :logoImg="getLinuxLogo()"
      >
        <component :is="moon_component"></component>
      </GameDownload>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
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
  .horror-video {
    width: 100%;
    @include place-in-grid(54, 62, 5, 21);
    border: 2px solid black;
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
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .horror-case {
    grid-template-rows: repeat(185, 4.94vh);
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
    .horror-video {
      grid-row-start: 71;
      grid-row-end: 74;
      grid-column-start: 2;
      grid-column-end: 24;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import GameDownload from "@/components/GameDownload.vue";

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
    Moon
  },
  methods: {
    getWinLogo: () => winLogo,
    getMacLogo: () => macLogo,
    getLinuxLogo: () => linuxLogo
  },
  data() {
    return {
      moon_component: "Moon"
    };
  }
};
</script>
