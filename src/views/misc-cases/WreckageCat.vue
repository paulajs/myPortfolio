<template>
  <div>
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
      <video class="kittytoss-video" controls src="@/assets/img/wreckage/kittytoss.mp4"></video>
      <GameDownload
        downloadClass="wreck-download"
        downloadID="wreck-win"
        operatingSystem="Windows"
        :logoImg="getWinLogo()"
      >
        <component :is="paw_component"></component>
      </GameDownload>
      <GameDownload
        downloadClass="wreck-download"
        downloadID="wreck-mac"
        operatingSystem="Mac"
        :logoImg="getMacLogo()"
      >
        <component :is="paw_component"></component>
      </GameDownload>
         <GameDownload
        downloadClass="wreck-download"
        downloadID="wreck-linux"
        operatingSystem="Linux"
        :logoImg="getLinuxLogo()"
      >
        <component :is="paw_component"></component>
      </GameDownload>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
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
  .kittytoss-video {
    width: 100%;
    @include place-in-grid(46, 54, 5, 21);
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import GameDownload from "@/components/GameDownload.vue";

const winLogo = require("@/assets/img/space-kitty/win.svg");
const macLogo = require("@/assets/img/space-kitty/mac.svg");
const linuxLogo = require("@/assets/img/space-kitty/linux.svg");

import Paw from "@/components/svg/Paw.vue";

export default {
  name: "WreckageCat",
  methods: {
    getWinLogo: () => winLogo,
    getMacLogo: () => macLogo,
    getLinuxLogo: () => linuxLogo
  },
  components: {
    MiscCaseHeader,
    CaseTextSection,
    GameDownload,
    Paw
  },
  data() {
    return {
      paw_component: "Paw"
    };
  }
};
</script>
