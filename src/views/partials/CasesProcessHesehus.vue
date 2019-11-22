<template>
  <div class="case-process-hesehus">
    <h2>Process</h2>
    <div class="process-wrapper">
      <CaseTextSection
        sectionClass="case-text-section inspiration-hesehus"
        sectionHeaderClass="case-section-header"
        headertext="Inspiration"
        textClass="inspiration-text-hesehus"
        sectionText="Moodboard of Hesehus’ visual identity and research of e-commerce fairs."
      />

      <img class="hesehus-indtryk" src="@/assets/img/hesehus-indtryk.jpg" alt />
      <img class="hesehus-messe" src="@/assets/img/hesehus-messe.jpg" alt />
      <CaseTextSection
        sectionClass="case-text-section experimentation-hesehus"
        sectionHeaderClass="case-section-header header-experimentation-hesehus"
        headertext="Experimentation"
        textClass="experimentation-text-hesehus"
        sectionText=" Work process/ customer journey represented by boat and by spaceship, and
        development of graphic universe for the cases."
      />

      <img class="hesehus-boat" src="@/assets/img/SVG/day-ideation.svg" alt />
      <img class="hesehus-space" src="@/assets/img/SVG/night-ideation.svg" alt />
      <img class="hesehus-ideation" src="@/assets/img/SVG/ideation-icons.svg" alt />


      <CaseTextSection
        sectionClass="case-text-section storyboards-hesehus"
        sectionHeaderClass="case-section-header header-storyboards-hesehus"
        headertext="Storyboards"
        textClass="storyboards-text-hesehus"
        sectionText=" Example of a storyboard for the case Inspiration."
      />
      <img
        class="hesehus-storyboard-inspiration"
        src="@/assets/img/SVG/inspiration-storyboard.svg"
        alt
      />
      <img
        class="hesehus-storyboard-fristads-kansas"
        src="@/assets/img/SVG/danoffice-storyboard.svg"
        alt
      />
    </div>
  </div>
</template>
<style lang="scss">
.case-process-hesehus {
  h2 {
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
    grid-template-rows: repeat(105, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    margin: 0 1vw;

    .inspiration-hesehus {
      grid-row-start: 2;
      grid-column-start: 1;
    }
    .experimentation-hesehus {
      grid-row-start: 21;
      grid-column-start: 1;
    }
    .storyboards-hesehus {
      grid-row-start: 78;
      grid-column-start: 1;
    }

    p {
      grid-column-start: 2;
      grid-column-end: 6;
    }
    .hesehus-indtryk {
      grid-row-start: 6;
      width: 100%;
      grid-column-start: 2;
      grid-column-end: 14;
    }
    .hesehus-messe {
      grid-row-start: 6;
      grid-column-start: 14;
      width: 100%;
      grid-column-end: 24;
    }
    .hesehus-boat {
      grid-row-start: 25;
      grid-column-start: 3;
      grid-column-end: 23;
      width: 100%;
    }
    .hesehus-space {
      grid-row-start: 43;
      grid-column-start: 3;
      grid-column-end: 23;
      width: 100%;
    }
    .hesehus-ideation {
      grid-row-start: 58;
      grid-column-start: 3;
      grid-column-end: 23;
      width: 100%;
    }
    .hesehus-storyboard-inspiration {
      grid-row-start: 81;
      grid-column-start: 3;
      grid-column-end: 13;
      width: 100%;
    }
    .hesehus-storyboard-fristads-kansas {
      grid-row-start: 81;
      grid-column-start: 13;
      grid-column-end: 23;
      width: 100%;
    }
  }
}
</style>
<script>
import CaseTextSection from "@/components/CaseTextSection.vue";
export default {
  name: "CasesProcessHesehus",
  components: {
    CaseTextSection,
  }
};
</script>
