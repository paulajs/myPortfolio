<template>
  <div class="case-audio-wrap">
    <MiscCaseHeader
      caseTitle="Javascript Audio"
      caseText="Small experiments with Web Audio API,
      and some simple animation made from audio frequencies. The music is mixed from samples using Adobe Audition.
      Below is a small introduction to the elements from Audio API's that are used."
    />
    <div class="audio-outline">
      <div class="background"></div>
      <div class="audio-postit-wrapper postit1">
        <h2>Context</h2>
        <img src="@/assets/img/audio/postit1.svg" data-aos="fade-right" data-aos-easing="ease-out" alt />
      </div>
      <div class="audio-postit-wrapper postit2">
        <h2>Source</h2>
        <img src="@/assets/img/audio/postit2.svg" data-aos="fade-up" data-aos-easing="ease-out" alt />
      </div>
      <div class="audio-postit-wrapper postit3">
        <h2>Analyser</h2>
        <img src="@/assets/img/audio/postit3.svg" data-aos="fade-down" data-aos-easing="ease-out" alt />
      </div>
      <div class="audio-postit-wrapper postit4">
        <h2>Fbc Array</h2>
        <img src="@/assets/img/audio/postit4.svg" data-aos="fade-left" data-aos-easing="ease-out" alt />
      </div>
    </div>

    <div class="case-audio">
      <CaseTextSection
        sectionClass="case-text-section misc-audio-bars"
        sectionHeaderClass="case-section-header header-audio-bars"
        headertext="Bars"
        textClass="audio-text-bars"
        sectionText="Extracting data from audio with javascript,
        to produce graphics to the frequencies of the audio. In this case producings simple bars.
        Below is also an example of the code."
      />
      <img class="bars-snippet" src="@/assets/img/audio/bars.jpg" data-aos="fade-up" data-aos-easing="ease-out" alt />
      <AudioSectionBars />
      <CaseTextSection
        sectionClass="case-text-section misc-audio-circle"
        sectionHeaderClass="case-section-header header-audio-circle"
        headertext="Circle"
        textClass="audio-text-circle"
        sectionText="The data from audio in this example is used to animate circles.
        Same principles as before, but with circles instead of bars."
      />
      <AudioSectionCircle />
      <CaseTextSection
        sectionClass="case-text-section misc-audio-img"
        sectionHeaderClass="case-section-header header-audio-img"
        headertext="Bars as background"
        textClass="audio-text-img"
        sectionText
      />
      <AudioSectionImg />
      <div class="thanks-to" data-aos="fade-up" data-aos-easing="ease-out">
        All the samples used in this project are from Looperman.com. Thanks to
        Nightingale, Path0gen, Fanto8BC, davidf0502, Rasputin, Danke, ksdq, ProdbyBarnabas,
        restartg, PRRJLY for providing samples.
      </div>
    </div>
     <Footer nextText="Next case" prevText="Go to lab" linkToNext="/space" linkToPrev="/lab"/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-audio-wrap{
  animation: page-opacity 0.6s ease forwards;
  overflow-x: hidden;
}
.case-audio {
  @include create-grid(78, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .misc-audio-bars {
    grid-column-start: 1;
    grid-row-start: 1;
  }
  .bars-snippet {
    grid-row-start: 6;
    grid-column-start: 1;
    grid-column-end: 25;
    justify-self: center;
    box-shadow: 26px 36px 19px #666;
  }
  .misc-audio-circle {
    grid-column-start: 1;
    grid-row-start: 36;
  }
  .misc-audio-bubbbles {
    grid-column-start: 1;
    grid-row-start: 56;
  }
  .misc-audio-img {
    grid-column-start: 1;
    grid-row-start: 56;
  }
  .thanks-to{
    grid-row-start: 75;
    grid-column-start: 2;
    grid-column-end: 12;
    font-family: $font-secundary;
  }
}

.audio-outline {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: $color-pink-light;
  position: relative;
  margin-bottom: 18vh;
  p {
    color: black;
    position: absolute;
    top: 0;
    z-index: 5;
    font-family: $font-secundary;
    font-size: 21px;
  }
  .background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    /* opacity: 0.8; */
    opacity: 1;
    background: #dfdfdf; /* linear-gradient($color-green -50% , $color-pink  140%); */
  }

  .audio-postit-wrapper {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: end;
    padding: 10vh 0vh;
    margin-bottom: 5vh;
    z-index: 10;
    h2 {
      /* @include header-style(none); */
      font-family: $font-secundary;
      font-size: 2em;
      margin-bottom: 5vh;
      color: black;
      font-weight: 300;
    }
    img {
      width: 79%;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-audio {
    grid-template-rows: repeat(67, 4.94vh);
    .bars-snippet {
      width: 100%;
      box-shadow: none;
    }
    .misc-audio-circle {
      grid-row-start: 28;
    }
    .misc-audio-img{
      grid-row-start: 48;
    }
      .thanks-to{
    grid-row-start: 61;
    grid-column-end: 24;
  }
  }
  .audio-outline {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 18vh;
    padding-top: 8vh;
    overflow: hidden;
    .audio-postit-wrapper {
      width: 118%;
      flex-direction: column;
      justify-content: center;
      padding: 0;
      margin-bottom: 18vh;
      z-index: 10;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import AudioSectionBars from "@/views/partials/AudioSectionBars.vue";
import AudioSectionCircle from "@/views/partials/AudioSectionCircle.vue";
/* import AudioSectionBubbles from "@/views/partials/AudioSectionBubbles.vue"; */
import AudioSectionImg from "@/views/partials/AudioSectionImg.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AudioCase",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    AudioSectionBars,
    AudioSectionCircle,
    /* AudioSectionBubbles, */
    AudioSectionImg,
    Footer
  }
};
</script>
