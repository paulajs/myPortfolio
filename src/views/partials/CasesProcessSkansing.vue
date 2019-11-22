<template>
  <div class="case-process-skansing">
    <h2>Process</h2>
    <div class="process-wrapper">
      <CaseTextSection
        sectionClass="case-text-section inspiration-skansing"
        sectionHeaderClass="case-section-header header-inspiration-skansing"
        headertext="Inspiration"
        textClass="inspiration-text-skansing"
        sectionText="Inspiration from the series Mr Robot, some from cliché
        hacker/security visuals and cyber punk inspiration"
      />
      <Slider :images="sliderImages" sliderID="slider-insp-skansing"/>
       <CaseTextSection
        sectionClass="case-text-section experimentation-skansing"
        sectionHeaderClass="case-section-header header-experimentation-skansing"
        headertext="Experimentation"
        textClass="experimentation-text-skansing"
        sectionText="Experiments with color, icons and logo."
      />
      <Slider :images="sliderTwoImages" sliderID="slider-exp-skansing"/>
      <CaseTextSection
        sectionClass="case-text-section styletiles-skansing"
        sectionHeaderClass="case-section-header header-styletiles-skansing"
        headertext="Styletiles"
        textClass="styletiles-text-skansing"
        sectionText="Final version of the visual identity that is going to be applied to the webpage."
      />
      <img src="@/assets/img/skansing-style.jpg" class="skansing-style-img" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.case-process-skansing h2 {
  font-family: "Poppins", sans-serif;
  font-size: 150px;
  color: black;
  margin-left: 4.75vw;
  margin-top: 4vh;
}
.process-wrapper {
  grid-row-start: 3;
  font-family: "Source Code Pro", monospace;
  display: grid;
  grid-template-rows: repeat(90, 4.94vh);
  grid-row-gap: 1vh;
  grid-template-columns: repeat(24, 3.125vw);
  grid-column-gap: 1vw;
  margin: 0 1vw;
  #slider-insp-skansing{
      grid-row-start: 6;
  grid-row-end: 19;
  grid-column-start: 2;
  grid-column-end: 24;
  }
  #slider-exp-skansing{
          grid-row-start: 29;
  grid-row-end: 41;
  grid-column-start: 2;
  grid-column-end: 24;
  }
  .inspiration-skansing {
    grid-row-start: 2;
    grid-column-start: 1;
  }
   .experimentation-skansing{
    grid-row-start: 25;
    grid-column-start: 1
  }
  .styletiles-skansing{
     grid-row-start: 47;
    grid-column-start: 1;
  }
  .skansing-style-img{
    width: 100%;
    grid-row-start: 51;
    grid-column-start: 4;
    grid-column-end: 22;
  }
}
</style>
<script>
import Slider from "@/components/Slider.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";

import sliderImageOne from '@/assets/img/cyberpunk1.jpg'
import sliderImageTwo from '@/assets/img/mr-robot.jpg'
import sliderImageThree from '@/assets/img/hacker1.jpg'

import sliderImageFour from '@/assets/img/SVG/skansing-exp-color.svg'
import sliderImageFive from '@/assets/img/SVG/skansing-icons.svg'
import sliderImageSix from '@/assets/img/SVG/skansing-logos.svg'

export default {
  name: "CasesProcessSkansing",
   data() {
    return {
      sliderImages: [
        {
          path: sliderImageOne,
          altText: "cyberpunk inspiration",
        },
        {
          path: sliderImageTwo,
          altText: "mr robot inspiration",
        },
        {
          path: sliderImageThree,
          altText: "hacker inspiration",
        },
      ],
      sliderTwoImages: [
         {
          path: sliderImageFour,
          altText: "color experiments",
        },
        {
          path: sliderImageFive,
          altText: "icon experiments",
        },
        {
          path: sliderImageSix,
          altText: "logo experiments",
        },
      ]
    }
  },
  components: {
    Slider,
    CaseTextSection
  }
};
</script>
