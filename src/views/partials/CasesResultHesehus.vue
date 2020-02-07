<template>
  <div class="cases-result-hesehus">
    <ButtonVisitPage />
    <div class="display-results">
      <h2 class="result-header">Videos</h2>
      <VideoCaseComponent
        videoSection="video-section section-matas"
        videoName="Matas Video"
        :videoSrc="getMatasVideo()"
        :videoPoster="getMatasPoster()"
      />
      <VideoCaseComponent
        videoSection="video-section section-fristads"
        videoName="Fristads Kansas Video"
        :videoSrc="getFristadsVideo()"
        :videoPoster="getFristadsPoster()"
      />
      <VideoCaseComponent
        videoSection="video-section section-inspiration"
        videoName="Inspiration Video"
        :videoSrc="getInspirationVideo()"
        :videoPoster="getInspirationPoster()"
      />
      <VideoCaseComponent
        videoSection="video-section section-danoffice"
        videoName="Danoffice Video"
        :videoSrc="getDanofficeVideo()"
        :videoPoster="getDanofficePoster()"
      />
      <VideoCaseComponent
        videoSection="video-section section-kunderejse"
        videoName="Customer journey Video"
        :videoSrc="getJourneyVideo()"
        :videoPoster="getJourneyPoster()"
      />

      <CaseTextSection
        sectionClass="case-text-section hesehus-result-mockup"
        sectionHeaderClass="case-section-header header-hesehus-mockup"
        headertext="Mockup"
        textClass="hesehus-text-mockup"
        sectionText="Mockup of the app. The prototype of the app is made in React.js."
      />
      <img class="hesehus-mockup" src="@/assets/img/SVG/hesehus-app-mock.svg" alt />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/_global.scss";

$transition: all 0.1s ease-in;

.cases-result-hesehus {
  display: flex;
  flex-direction: column;
  align-items: center;
  .display-results {
    display: grid;
    grid-template-rows: repeat(129, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    padding: 2vh 0.55vw;
    background: white;
    h2.result-header {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 1;
      grid-row-end: 4;
      font-family: $font-primary;
      transform: translateY(-184px) translateX(-17.068px);
      font-size: 8vw;
      color: black;
    }
    .hesehus-result-mockup {
      grid-row-start: 108;
      grid-column-start: 1;
    }
    .hesehus-mockup {
      grid-row-start: 118;
      grid-column-start: 2;
      grid-column-end: 24;
      align-self: center;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .cases-result-hesehus {
    .display-results {
      grid-template-rows: repeat(71, 4.94vh);
      h2.result-header {
        grid-column-start: 2;
        grid-column-end: 24;
        grid-row-start: 1;
        grid-row-end: 4;
        transform: translateY(0) translateX(-1vw);
        font-size: 17vw;
        justify-self: start;
      }
      .video-section {
        .video-section-header {
          grid-column-start: 1;
          grid-column-end: 20;
          height: 4.5vh;
          h4 {
            grid-row-start: 2;
            grid-column-start: 2;
            grid-column-end: 18;
            font-size: 17px;
          }
        }
        video {
          grid-column-start: 2;
          grid-column-end: 24;
        }
      }
      .hesehus-result-mockup {
        grid-row-start: 59;
      }
      .hesehus-mockup {
        grid-row-start: 65;
        grid-column-start: 1;
        grid-column-end: 25;
      }
      .section-fristads {
        grid-row-start: 15;
      }
      .section-inspiration {
        grid-row-start: 26;
      }
      .section-danoffice {
        grid-row-start: 37;
      }
      .section-kunderejse {
        grid-row-start: 48;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .cases-result-hesehus {
    .display-results {
      h2.result-header {
        margin-top: 6vh;
      }
    }
  }
}
</style>
<script>
import VideoCaseComponent from "@/components/VideoCaseComponent.vue";
import ButtonVisitPage from "@/components/ButtonVisitPage.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";

const matasVideo = require("@/assets/videos/hesehus/Matas1.mp4");
const matasPoster = require("@/assets/videos/hesehus/Matas1.png");
const fristadsVideo = require("@/assets/videos/hesehus/Fristads-kansas1.mp4");
const fristadsPoster = require("@/assets/videos/hesehus/Fristads-kansas1.png");
const inspirationVideo = require("@/assets/videos/hesehus/Inspiration1.mp4");
const inspirationPoster = require("@/assets/videos/hesehus/Inspiration1.png");
const danofficeVideo = require("@/assets/videos/hesehus/Danoffice1.mp4");
const danofficePoster = require("@/assets/videos/hesehus/Danoffice1.png");
const journeyVideo = require("@/assets/videos/hesehus/Kunderejse1.mp4");
const journeyPoster = require("@/assets/videos/hesehus/Kunderejse1.png");
export default {
  name: "CasesResultHesehus",
  methods: {
    getMatasVideo: () => matasVideo,
    getMatasPoster: () => matasPoster,
    getFristadsVideo: () => fristadsVideo,
    getFristadsPoster: () => fristadsPoster,
    getInspirationVideo: () => inspirationVideo,
    getInspirationPoster: () => inspirationPoster,
    getDanofficeVideo: () => danofficeVideo,
    getDanofficePoster: () => danofficePoster,
    getJourneyVideo: () => journeyVideo,
    getJourneyPoster: () => journeyPoster
  },
  components: {
    VideoCaseComponent,
    ButtonVisitPage,
    CaseTextSection
  }
};
</script>
