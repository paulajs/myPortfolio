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
      <video
        controls
        class="space-video"
        poster="@/assets/videos/space-kitty/spacekitty-poster.jpg"
        src="@/assets/videos/space-kitty/spacekitty.mp4"
      ></video>
      <GameDownload
        downloadClass="space-download"
        downloadID="space-win"
        operatingSystem="Windows"
        :logoImg="getWinLogo()"
      >
        <component :is="spaceship_component"></component>
      </GameDownload>
      <GameDownload
        downloadClass="space-download"
        downloadID="space-mac"
        operatingSystem="Mac"
        :logoImg="getMacLogo()"
      >
        <component :is="spaceship_component"></component>
      </GameDownload>
      <GameDownload
        downloadClass="space-download"
        downloadID="space-linux"
        operatingSystem="Linux"
        :logoImg="getLinuxLogo()"
      >
        <component :is="spaceship_component"></component>
      </GameDownload>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-space-wrap{
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
.space-video {
  width: 100%;
  @include place-in-grid(55, 63, 5, 21);
  border: 2px solid black;
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
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .space-case {
    grid-template-rows: repeat(125, 4.94vh);
    .misc-space-process{
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
    .space-video {
      grid-row-start: 72;
      grid-row-end: 75;
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

import SpaceShip from "@/components/svg/SpaceShip.vue";

const winLogo = require("@/assets/img/space-kitty/win.svg");
const macLogo = require("@/assets/img/space-kitty/mac.svg");
const linuxLogo = require("@/assets/img/space-kitty/linux.svg");

export default {
  name: "SpaceKitty",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    GameDownload,
    SpaceShip
  },
  methods: {
    getWinLogo: () => winLogo,
    getMacLogo: () => macLogo,
    getLinuxLogo: () => linuxLogo
  },
  data() {
    return {
      spaceship_component: "SpaceShip"
    };
  }
};
</script>
