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
        The resulting illustrations symbolises marmalade splatter dropped on floor,
        like childrens playfulness in the kitchen causing accidents to happen at times ;).
        The splatter is combined with a focus on each of the main organic ingredients in the marmalade.
      </p>
      <CaseTextSection
        sectionClass="case-text-section models-nmg"
        sectionHeaderClass="case-section-header header-models-nmg"
        headertext="3d models"
        textClass="visual-models-nmg"
        sectionText="Results are illustrated with renders of the marmelade labels and the booklets or the course. "
      />
      <ThreeNmgDisplay />
      <CaseTextSection
        sectionClass="case-text-section visual-id-nmglabel"
        sectionHeaderClass="case-section-header header-visual-id-nmg"
        headertext="Visual Identity label"
        textClass="visual-id-text-nmglabel"
        sectionText="Example of the visual identity on a marmelade label."
      />
      <div class="nmg-visual-label">
        <img src="@/assets/img/EThindbær.png" alt />
        <img src="@/assets/img/ETkvæde.png" alt />
        <img src="@/assets/img/EThyldebær.png" alt />
      </div>

      <CaseTextSection
        sectionClass="case-text-section visual-id-nmgbooklet"
        sectionHeaderClass="case-section-header header-visual-id-nmg"
        headertext="Visual Identity Booklet"
        textClass="visual-id-text-nmgbooklet"
        sectionText="Example of a booklet for the marlemade course."
      />
      <div class="nmg-visual-booklet">
        <img src="@/assets/img/nmg-straw-book-100.jpg" alt />
        <img src="@/assets/img/nmg-quince-book-100.jpg" alt />
        <img src="@/assets/img/nmg-hyld-book-100.jpg" alt />
      </div>

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
@import "@/assets/sass/_mixins.scss";

$transition: all 0.1s ease-in;

.cases-result-nmg {
  display: flex;
  flex-direction: column;
  align-items: center;

  .display-results {
    display: grid;
    grid-template-rows: repeat(103, 4.94vh);
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
        @include font-primary-and-fat;
        color: white;
        font-size: 6vw;
/*         -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black; */
      }
      .postits {
        grid-column-start: 2;
        grid-column-end: 24;
        grid-row-start: 5;
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
      @include font-primary-and-less-fat;
      font-size: 6vw;
      color: black;
    }
    .nmg-result-para {
      font-family: $font-secundary;
      grid-row-start: 18;
      grid-column-start: 2;
      grid-column-end: 14;
    }
    .models-nmg {
      grid-row-start: 22;
      grid-column-start: 1;
    }
    .visual-id-nmglabel {
      grid-row-start: 54;
      grid-column-start: 1;
    }
    .nmg-visual-label {
      grid-column-start: 3;
      grid-column-end: 23;
      grid-row-start: 58;
      grid-row-end: 68;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      img {
        width: 25%;
      }
    }
    .visual-id-nmgbooklet {
      grid-row-start: 70;
      grid-column-start: 1;
    }
    .nmg-visual-booklet {
      grid-row-start: 74;
      grid-row-end: 88;
      grid-column-start: 2;
      grid-column-end: 24;
      width: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      img {
        width: 28%;
      }
    }
    .visual-id-nmgweb {
      grid-row-start: 91;
      grid-column-start: 1;
    }
    .nmg-visual-web1 {
      grid-row-start: 93;
      grid-column-start: 1;
      grid-column-end: 14;
      width: 96%;
      justify-self: start;
    }
    .nmg-visual-web2 {
      grid-row-start: 93;
      grid-column-start: 12;
      grid-column-end: 25;
      width: 96%;
      justify-self: end;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .cases-result-nmg {
    .display-results {
      grid-template-rows: repeat(206, 4.94vh);
      .nmg-design-obj {
        grid-row-end: 41;
        h2 {
          font-size: 16vw;
        }
        .postits {
          grid-row-start: 7;
          grid-row-end: 34;
          flex-direction: column;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      h2.result-header {
        grid-row-start: 43;
        grid-row-end: 46;
        font-size: 16vw;
      }
      .nmg-result-para {
        grid-row-start: 46;
        grid-column-end: 23;
      }
      .models-nmg {
        grid-row-start: 54;
      }
      .display-nmg {
        grid-row-start: 57;
      }
      .result-nmg-wrapper {
        grid-template-rows: repeat(56, 4.94vh);
        #strawberryjam {
          grid-column-start: 1;
          grid-column-end: 23;
          grid-row-start: 3;
          grid-row-end: 9;
        }
        #strawberryfolder {
          grid-column-start: 1;
          grid-column-end: 23;
          grid-row-start: 9;
          grid-row-end: 15;
        }
        #quincejam {
          grid-column-start: 1;
          grid-column-end: 23;
          grid-row-start: 15;
          grid-row-end: 21;
        }
        #quincefolder {
          grid-column-start: 1;
          grid-column-end: 23;
          grid-row-start: 21;
          grid-row-end: 27;
        }
        #elderjam {
          grid-column-start: 1;
          grid-column-end: 23;
          grid-row-start: 27;
          grid-row-end: 32;
        }
        #elderfolder {
          grid-column-start: 1;
          grid-column-end: 23;
          grid-row-start: 33;
          grid-row-end: 39;
        }
      }
      .visual-id-nmglabel {
        grid-row-start: 98;
      }
      .nmg-visual-label {
        grid-row-start: 103;
        grid-row-end: 140;
        justify-content: normal;
        align-items: center;
        flex-direction: column;
        img {
          width: 95%;
          margin-bottom: 12vh;
        }
      }
      .visual-id-nmgbooklet {
        grid-row-start: 138;
      }
      .nmg-visual-booklet {
        grid-row-start: 142;
        grid-row-end: 186;
        grid-column-start: 2;
        grid-column-end: 24;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: normal;
        img {
          width: 93%;
        }
      }
      .visual-id-nmgweb {
        grid-row-start: 188;
      }
      .nmg-visual-web1 {
        grid-row-start: 192;
        grid-column-start: 1;
        grid-column-end: 25;
        width: 100%;
        justify-self: center;
      }
      .nmg-visual-web2 {
        grid-row-start: 199;
        grid-column-start: 1;
        grid-column-end: 25;
        width: 100%;
        justify-self: center;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .cases-result-nmg {
    .display-results {
      .nmg-result-para {
        grid-column-end: 16;
      }
      .nmg-visual-booklet {
        grid-row-start: 73;
      }
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
