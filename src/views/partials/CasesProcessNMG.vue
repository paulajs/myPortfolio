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
      <CaseTextSection
        sectionClass="case-text-section experimentation-nmg"
        sectionHeaderClass="case-section-header header-experimentation-nmg"
        headertext="Experimentation"
        textClass="experimentation-text-nmg"
        sectionText="Experiments with colors,fonts and textures from the farm.
        Also Different examples of logos.
        Tinted colors are used to represent the sweetness of the marmelade, and a graphic
        of splatter is used to represent dropped jam, a likely occurence
        with children in the kitchen ;-) "
      />
      <img class="nmg-exp1" src="@/assets/img/exp1-100.jpg" alt />
      <img class="nmg-exp2" src="@/assets/img/exp2-100.jpg" alt />
      <img class="nmg-exp3" src="@/assets/img/exp3-100.jpg" alt />

      <CaseTextSection
        sectionClass="case-text-section styletiles-nmg"
        sectionHeaderClass="case-section-header header-styletiles-nmg"
        headertext="Styletiles"
        textClass="styletiles-text-nmg"
        sectionText="The final version of the visual identity, that is going to be applied to the course materials."
      />
      <img class="nmg-styletiles" src="@/assets/img/NMG-styletiles.jpg" alt />
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
  .nmg-exp2 {
    width: 100%;
    grid-row-start: 39;
    grid-column-start: 3;
    grid-column-end: 23;
  }
  .nmg-exp3 {
    width: 100%;
    grid-row-start: 47;
    grid-column-start: 3;
    grid-column-end: 23;
  }
  .nmg-styletiles {
    width: 100%;
    grid-row-start: 62;
    grid-column-start: 3;
    grid-column-end: 23;
    box-shadow: 13px 11px 19px #8b8a8a;
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
