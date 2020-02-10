<template>
  <div class="case-process-NMG">
    <h2>Process</h2>
    <div class="process-wrapper">
      <CaseTextSection
        sectionClass="case-text-section inspiration-nmg"
        sectionHeaderClass="case-section-header header-inspiration-nmg"
        headertext="Inspiration"
        textClass="inspiration-text-nmg"
        sectionText="Inspiration from the danish countryside and 'hygge'.
          Also inspiration from premium and retro products. And of course inspiration
          from Nørremadegaard itself."
      />
      <Slider :images="sliderImages" sliderID="slider-insp-nmg" />
      <div class="mobile-insp-img">
        <img src="@/assets/img/nmg-premium.jpg" alt />
        <img src="@/assets/img/nmg-retro.jpg" alt />
        <img src="@/assets/img/mood-nmg-100.jpg" alt />
      </div>
      <CaseTextSection
        sectionClass="case-text-section experimentation-nmg"
        sectionHeaderClass="case-section-header header-experimentation-nmg"
        headertext="Experimentation"
        textClass="experimentation-text-nmg"
        sectionText="Experiments with colors,fonts and textures from the farm.
        Also different examples of logos.
        Tinted colors are used to represent the sweetness of the marmelade, and a graphic
        of splatter is used to represent dropped jam."
      />
      <img class="nmg-exp1" src="@/assets/img/exp1-100.jpg" alt />
      <img class="nmg-exp2" src="@/assets/img/exp2-100.jpg" alt />
      <img class="nmg-exp3" src="@/assets/img/exp3-100.jpg" alt />

      <img class="mob-nmg-exp1 mob-exp-img" src="@/assets/img/nmg-mob-ex1-100.jpg" alt />
      <img class="mob-nmg-exp2 mob-exp-img" src="@/assets/img/nmg-mob-ex2-100.jpg" alt />
      <img class="mob-nmg-exp3 mob-exp-img" src="@/assets/img/nmg-mob-ex3-100.jpg" alt />

      <CaseTextSection
        sectionClass="case-text-section styletiles-nmg"
        sectionHeaderClass="case-section-header header-styletiles-nmg"
        headertext="Styletiles"
        textClass="styletiles-text-nmg"
        sectionText="The final version of the visual identity, that is going to be applied to the course materials."
      />
      <img class="nmg-styletiles" src="@/assets/img/NMG-styletiles.jpg" alt />
      <img class="nmg-styletiles-mob" src="@/assets/img/NMG-mob-styletiles.jpg" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
.case-process-NMG h2 {
  font-family: $font-primary;
  font-size: 8vw;
  color: black;
  margin-left: 4.75vw;
  margin-top: 14vh;
}
.process-wrapper {
  grid-row-start: 3;
  font-family: $font-secundary;
  display: grid;
  grid-template-rows: repeat(82, 4.94vh);
  grid-row-gap: 1vh;
  grid-template-columns: repeat(24, 3.125vw);
  grid-column-gap: 1vw;
  margin: 0 1vw;
  .mobile-insp-img {
    display: none;
  }
  .inspiration-nmg {
    grid-row-start: 2;
    grid-column-start: 1;
  }
  .experimentation-nmg {
    grid-row-start: 25;
    grid-column-start: 1;
  }
  .styletiles-nmg {
    grid-row-start: 58;
    grid-column-start: 1;
  }
  #slider-insp-nmg {
    grid-row-start: 6;
    grid-row-end: 19;
    grid-column-start: 2;
    grid-column-end: 24;
  }
  .nmg-exp1 {
    width: 100%;
    grid-row-start: 29;
    grid-column-start: 3;
    grid-column-end: 23;
  }
  .mob-nmg-exp1 {
    display: none;
  }
  .nmg-exp2 {
    width: 100%;
    grid-row-start: 39;
    grid-column-start: 3;
    grid-column-end: 23;
  }
  .mob-nmg-exp2 {
    display: none;
  }
  .nmg-exp3 {
    width: 100%;
    grid-row-start: 47;
    grid-column-start: 3;
    grid-column-end: 23;
  }
  .mob-nmg-exp3 {
    display: none;
  }
  .nmg-styletiles-mob {
    display: none;
  }
  .nmg-styletiles {
    width: 100%;
    grid-row-start: 62;
    grid-column-start: 3;
    grid-column-end: 23;
    box-shadow: 13px 11px 19px #8b8a8a;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-process-NMG {
    h2 {
      font-size: 16vw;
      margin-top: 7vh;
    }
    .process-wrapper {
      grid-template-rows: repeat(165, 4.94vh);
      .mobile-insp-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        grid-row-start: 8;
        grid-row-end: 28;
        grid-column-start: 1;
        grid-column-end: 25;
        img {
          width: 95%;
          margin-bottom: 12vh;
        }
      }
      .experimentation-nmg {
        grid-row-start: 30;
      }
      .nmg-exp1 {
        display: none;
      }
      .nmg-exp2 {
        display: none;
      }
      .nmg-exp3 {
        display: none;
      }
      .mob-exp-img {
        display: block;
        grid-column-start: 1;
        grid-column-end: 25;
        width: 100%;
      }
      .mob-nmg-exp1 {
        grid-row-start: 38;
      }
      .mob-nmg-exp2 {
        grid-row-start: 52;
      }
      .mob-nmg-exp3 {
        grid-row-start: 64;
      }
      .styletiles-nmg {
        grid-row-start: 118;
      }
      .nmg-styletiles {
        display: none;
      }
      .nmg-styletiles-mob {
        display: block;
        grid-row-start: 123;
        grid-column-start: 1;
        grid-column-end: 25;
        width: 100%;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .process-wrapper {
    #slider-insp-nmg {
      grid-row-start: 7;
      grid-row-end: 20;
    }
    .nmg-exp1 {
      grid-row-start: 30;
    }
    .nmg-exp3 {
      grid-row-start: 46;
    }
    .styletiles-nmg {
      grid-row-start: 57;
    }
  }
}
</style>
<script>
import Slider from "@/components/Slider.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import sliderImageOne from "@/assets/img/nmg-premium.jpg";
import sliderImageTwo from "@/assets/img/nmg-retro.jpg";
import sliderImageThree from "@/assets/img/mood-nmg-100.jpg";

export default {
  name: "CasesProcessNMG",
  data() {
    return {
      sliderImages: [
        {
          path: sliderImageOne,
          altText: "premium inspiration"
        },
        {
          path: sliderImageTwo,
          altText: "retro inspiration"
        },
        {
          path: sliderImageThree,
          altText: "mood inspiration"
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
