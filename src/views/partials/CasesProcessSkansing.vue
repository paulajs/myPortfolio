<template>
  <div class="case-process-skansing">
    <h2>Process</h2>
    <div class="process-wrapper">
      <CaseTextSection
        sectionClass="case-text-section inspiration-skansing"
        sectionHeaderClass="case-section-header header-inspiration-skansing"
        headertext="Inspiration"
        textClass="inspiration-text-skansing"
        sectionText="Inspiration from the series Mr Robot, some inspiration from cliché
        hacker/security and cyber punk universe"
      />
      <Slider :images="sliderImages" sliderID="slider-insp-skansing" />
      <div class="mobile-insp-img">
        <img src="@/assets/img/cyberpunk1.jpg" alt />
        <img src="@/assets/img/mr-robot.jpg" alt />
        <img src="@/assets/img/hacker1.jpg" alt />
      </div>
      <CaseTextSection
        sectionClass="case-text-section experimentation-skansing"
        sectionHeaderClass="case-section-header header-experimentation-skansing"
        headertext="Experimentation"
        textClass="experimentation-text-skansing"
        sectionText="Experiments with color, icons and logo."
      />
      <Slider :images="sliderTwoImages" sliderID="slider-exp-skansing" />
      <div class="mobile-exp-img">
        <img src="@/assets/img/SVG/skansing-exp-color-mob.svg" alt />
        <img src="@/assets/img/SVG/skansing-icons-mob1.svg" alt />
        <img src="@/assets/img/SVG/skansing-logos-mob.svg" alt />
      </div>
      <CaseTextSection
        sectionClass="case-text-section styletiles-skansing"
        sectionHeaderClass="case-section-header header-styletiles-skansing"
        headertext="Styletiles"
        textClass="styletiles-text-skansing"
        sectionText="Final version of the visual identity that is going to be applied to the webpage."
      />
      <img src="@/assets/img/skansing-style.jpg" class="skansing-style-img" alt />
      <img src="@/assets/img/skansing-style-mob.jpg" class="skansing-style-img-mob" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.case-process-skansing h2 {
  @include font-primary-and-fat;
  font-size: 7vw;
  color: black;
  margin-left: 4.75vw;
  margin-top: 4vh;
}
.process-wrapper {
  grid-row-start: 3;
  font-family: $font-secundary;
  @include create-grid(71, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 0 1vw;
  .skansing-style-img-mob {
    display: none;
  }
  .mobile-insp-img {
    display: none;
  }
  .mobile-exp-img {
    display: none;
  }
  #slider-insp-skansing {
    @include place-in-grid(6, 19, 2, 24);
  }
  #slider-exp-skansing {
    @include place-in-grid(29, 41, 2, 24);
  }
  .inspiration-skansing {
    grid-row-start: 2;
    grid-column-start: 1;
  }
  .experimentation-skansing {
    grid-row-start: 25;
    grid-column-start: 1;
  }
  .styletiles-skansing {
    grid-row-start: 47;
    grid-column-start: 1;
  }
  .skansing-style-img {
    width: 100%;
    grid-row-start: 51;
    grid-column-start: 4;
    grid-column-end: 22;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-process-skansing {
    h2 {
      font-size: 19vw;
    }
    .process-wrapper {
      grid-template-rows: repeat(146, 4.94vh);
      .mobile-insp-img {
        grid-row-start: 7;
        grid-column-start: 1;
        grid-column-end: 25;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 95%;
          margin-bottom: 8vh;
        }
      }
      .experimentation-skansing {
        grid-row-start: 28;
      }
      .mobile-exp-img {
        display: block;
        grid-row-start: 32;
        grid-column-start: 1;
        grid-column-end: 25;
        img {
          margin-bottom: 8vh;
        }
      }
      .styletiles-skansing {
        grid-row-start: 116;
      }
      .skansing-style-img {
        display: none;
      }
      .skansing-style-img-mob {
        display: block;
        width: 100%;
        grid-row-start: 121;
        grid-column-start: 1;
        grid-column-end: 25;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .case-process-skansing h2 {
    font-size: 8vw;
  }
}
</style>
<script>
import Slider from "@/components/Slider.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";

import sliderImageOne from "@/assets/img/cyberpunk1.jpg";
import sliderImageTwo from "@/assets/img/mr-robot.jpg";
import sliderImageThree from "@/assets/img/hacker1.jpg";

import sliderImageFour from "@/assets/img/SVG/skansing-exp-color.svg";
import sliderImageFive from "@/assets/img/SVG/skansing-icons.svg";
import sliderImageSix from "@/assets/img/SVG/skansing-logos.svg";

export default {
  name: "CasesProcessSkansing",
  data() {
    return {
      sliderImages: [
        {
          path: sliderImageOne,
          altText: "cyberpunk inspiration"
        },
        {
          path: sliderImageTwo,
          altText: "mr robot inspiration"
        },
        {
          path: sliderImageThree,
          altText: "hacker inspiration"
        }
      ],
      sliderTwoImages: [
        {
          path: sliderImageFour,
          altText: "color experiments"
        },
        {
          path: sliderImageFive,
          altText: "icon experiments"
        },
        {
          path: sliderImageSix,
          altText: "logo experiments"
        }
      ]
    };
  },
  components: {
    Slider,
    CaseTextSection
  }
};
</script>
