<template>
  <div class="cases-result-nmg">
    <div class="display-results">
      <div class="nmg-design-obj">
        <h2>Design objectives</h2>
        <div class="postits">
          <img src="@/assets/img/SVG/postit1.svg" alt />
          <img src="@/assets/img/SVG/postit2.svg" alt />
          <img src="@/assets/img/SVG/postit3.svg" alt />
          <img src="@/assets/img/SVG/postit4.svg" alt />
        </div>
      </div>
      <h2 class="result-header">Results</h2>
      <p class="nmg-result-para">
        The resulting illustrations symbolises marmalade splatter dropped on floor like children's playfulness in the kitchen, where accidents sometimes happen ;).
        The splatter is combined with a focus on each of the main ingredients in the marmalade, and which are grown on the farm.
      </p>
      <CaseTextSection
        sectionClass="case-text-section models-nmg"
        sectionHeaderClass="case-section-header header-models-nmg"
        headertext="3d models"
        textClass="visual-models-nmg"
        sectionText="Results are illustrated with renders of the jams and the booklets. "
      />
      <ThreeNmgDisplay />
      <CaseTextSection
        sectionClass="case-text-section visual-id-nmglabel"
        sectionHeaderClass="case-section-header header-visual-id-nmg"
        headertext="Visual Identity label"
        textClass="visual-id-text-nmglabel"
        sectionText="Example of the visual identity on a marmelade label."
      />
      <img class="nmg-visual-label" src="@/assets/img/SVG/nmg-vi-label1.svg" alt />
      <CaseTextSection
        sectionClass="case-text-section visual-id-nmgbooklet"
        sectionHeaderClass="case-section-header header-visual-id-nmg"
        headertext="Visual Identity Booklet"
        textClass="visual-id-text-nmgbooklet"
        sectionText="Example of a booklet for the marlemade course."
      />
      <img class="nmg-visual-booklet" src="@/assets/img/nmg-vi-booklet-100.jpg" alt />
       <CaseTextSection
        sectionClass="case-text-section visual-id-nmgweb"
        sectionHeaderClass="case-section-header header-visual-id-nmg"
        headertext="Visual Identity Website"
        textClass="visual-id-text-nmgweb"
        sectionText="Example of the implementation on web."
      />
      <img class="nmg-visual-web1" src="@/assets/img/SVG/nmg-vi-web1.svg" alt />
      <img class="nmg-visual-web2" src="@/assets/img/SVG/nmg-vi-web2.svg" alt />
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/_global.scss";

$transition: all 0.1s ease-in;

.cases-result-nmg {
  display: flex;
  flex-direction: column;
  align-items: center;

  .display-results {
    display: grid;
    grid-template-rows: repeat(101, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    padding: 2vh 0.55vw;
    background: white;
    .nmg-design-obj {
      grid-column-start: 1;
      grid-column-end: 25;
      grid-row-start: 1;
      grid-row-end: 12;
      background: linear-gradient(#ff90ff -29%, #2f97b3 152%);
      display: grid;
      grid-template-rows: repeat(30, 4.94vh);
      grid-row-gap: 1vh;
      grid-template-columns: repeat(24, 3.125vw);
      grid-column-gap: 1vw;
      border: 1px solid black;
      h2 {
        grid-column-start: 2;
        grid-column-end: 24;
        font-family: $font-primary;
        color: white;
        font-size: 87px;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
      }
      .postits {
        grid-column-start: 2;
        grid-column-end: 24;
        grid-row-start: 4;
        grid-row-end: 10;
        display: flex;
        flex-direction: row;
        img {
          width: 25%;
          height: 38vh;
        }
      }
    }
    h2.result-header {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 15;
      grid-row-end: 16;
      font-family: $font-primary;
      color: white;
      font-size: 94px;
      color: rgb(27, 25, 25);
    }
    .nmg-result-para {
      font-family: $font-secundary;
      grid-row-start: 18;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .models-nmg {
      grid-row-start: 21;
      grid-column-start: 1;
    }
    .visual-id-nmglabel {
      grid-row-start: 54;
      grid-column-start: 1;
    }
    .nmg-visual-label {
      grid-column-start: 3;
      grid-column-end: 23;
      grid-row-start: 56;
      width: 100%;
    }
    .visual-id-nmgbooklet {
      grid-row-start: 70;
      grid-column-start: 1;
    }
    .nmg-visual-booklet {
      grid-row-start: 72;
      grid-column-start: 3;
      grid-column-end: 23;
      width: 100%;
    }
    .visual-id-nmgweb{
      grid-row-start: 91;
      grid-column-start: 1;
    }
    .nmg-visual-web1{
      grid-row-start: 93;
      grid-column-start: 1;
      grid-column-end: 14;
      width: 96%;
      justify-self: start;
    }
    .nmg-visual-web2{
      grid-row-start: 93;
      grid-column-start: 12;
      grid-column-end: 25;
      width: 96%;
      justify-self: end;
    }
  }
}
</style>
<script>
import ThreeNmgDisplay from "@/components/ThreeNmgDisplay.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";

export default {
  name: "CasesResultNmg",
  components: {
    ThreeNmgDisplay,
    CaseTextSection
  }
};
</script>
