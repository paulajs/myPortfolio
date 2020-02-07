<template>
  <div>
    <MiscCaseHeader
      caseTitle="CSS Animation"
      caseText="A small and simple example with a lot of  sentimental value.
      Example showing a walk cycle animation using sprites and CSS keyframes."
    />
    <div class="case-cssanim">
      <CaseTextSection
        sectionClass="case-text-section misc-css-sprites"
        sectionHeaderClass="case-section-header header-css-sprites"
        headertext="The sprite"
        textClass="css-text-sprites"
        sectionText="The animation is made with the sprite below. It is originally handdrawn
        then processed in photoshop for the effects."
      />
      <img class="the-sprite" src="@/assets/img/cssAnim/css-animation-sprite.png" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-css-anim"
        sectionHeaderClass="case-section-header header-css-anim"
        headertext="The animation"
        textClass="css-text-anim"
        sectionText="The resulting animation. There are 8 frame, therefore steps(8),
        and the length of the sprite is 4000px."
      />
      <div class="animation-wrapper">
        <div class="walk-animation"></div>
      </div>
      <img class="css-codesnip" src="@/assets/img/cssAnim/code-snip.jpg" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-cssanim {
  @include create-grid(50, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .misc-css-sprites {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  .the-sprite {
    grid-row-start: 5;
    grid-column-start: 2;
    grid-column-end: 24;
    width: 100%;
  }
  .misc-css-anim {
    grid-row-start: 12;
    grid-column-start: 1;
  }
  .animation-wrapper {
    grid-row-start: 13;
    grid-row-end: 28;
    grid-column-start: 6;
    grid-column-end: 20;
    display: flex;
    justify-content: center;
    align-items: center;

    .walk-animation {
      border: 3px solid black;
      height: 500px;
      width: 500px;
      background: url("../../assets/img/cssAnim/css-animation-sprite.png");
      animation: play 2.5s steps(8) infinite;
    }
  }
  .css-codesnip {
    grid-row-start: 27;
    grid-column-start: 2;
    grid-column-end: 24;
    justify-self: center;
  }

  @keyframes play {
    0% {
      background-position: 0px;
    }
    100% {
      background-position: -4000px;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-cssanim {
    overflow: hidden;
    .misc-css-sprites {
      grid-row-start: 2;
    }
    .the-sprite {
      grid-row-start: 7;
      grid-column-start: 1;
      grid-column-end: 25;
    }
    .misc-css-anim {
      grid-row-start: 12;
    }
    .animation-wrapper {
      grid-row-start: 15;
      grid-row-end: 34;
      grid-column-start: 1;
      grid-column-end: 26;
    }
    .walk-animation {
      transform: translateX(-31vw);
    }
    .css-codesnip {
      grid-row-start: 33;
      grid-column-start: 1;
      grid-column-end: 25;
      width: 100%;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
export default {
  name: "CSSAnim",
  components: {
    MiscCaseHeader,
    CaseTextSection
  }
};
</script>
