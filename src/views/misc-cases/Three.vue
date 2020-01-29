<template>
  <div>
    <MiscCaseHeader
      caseTitle="Three interactions"
      caseText="Small examples of animation and mouse events in Three.js,
      for further use and combination in games or similar interactive experiences with Three.js"
    />
    <div class="case-three">
      <h2 class="three-header three-anim">Animation</h2>
      <CaseTextSection
        sectionClass="case-text-section misc-three-anim"
        sectionHeaderClass="case-section-header header-anim-three"
        headertext="Simple Tween animation"
        textClass="anim-text-three"
        sectionText="The javascript tweening engine TWEEN.js can be used for easy
        animations with Three.js. Several smaller animation can be chained into a larger one."
      />
      <ThreeAnim />
      <img class="anim-snippet1" src="@/assets/img/three/tween-anim.jpg" alt="code snippet" />
      <p
        class="snippet-text"
        id="anim-snip-text"
      >Tween needs a start and end state to animate between, like position, scale, color and other.</p>
      <!--<img class="anim-snippet2" src="@/assets/img/three/tween-anim1.jpg" alt="code snippet" />-->
      <h2 class="three-header three-click">Click events</h2>
      <CaseTextSection
        sectionClass="case-text-section misc-three-clickadd"
        sectionHeaderClass="case-section-header header-clickadd-three"
        headertext="Click and add cube"
        textClass="clickadd-text-three"
        sectionText="Click event with Three.js, click on canvas and add cube."
      />
      <ThreeClickAdd />
      <CaseTextSection
        sectionClass="case-text-section misc-three-clickMove"
        sectionHeaderClass="case-section-header header-clickMove-three"
        headertext="Click and move cube"
        textClass="clickMove-text-three"
        sectionText="Click event with Three.js. Click on empty canvas to move cube to that position."
      />
      <ThreeClickMove />
      <img class="click-snippet" src="@/assets/img/three/clickadd.jpg" alt />
      <h2 class="three-header three-ray">Raycaster</h2>
      <CaseTextSection
        sectionClass="case-text-section misc-three-remove"
        sectionHeaderClass="case-section-header header-remove-three"
        headertext="Click and remove cube"
        textClass="remove-text-three"
        sectionText="Raycaster is used to locate the cubes in 3d space.
         Click on a cube to remove it. "
      />
      <ThreeClickRemove />
      <CaseTextSection
        sectionClass="case-text-section misc-three-over"
        sectionHeaderClass="case-section-header header-over-three"
        headertext="Mouse over event"
        textClass="over-text-three"
        sectionText="Mouse over event with raycaster and animation. Use mouse to hover over balls"
      />
      <ThreeMouseOver />
      <img class="ray-snippet" src="@/assets/img/three/raycast.jpg" alt />
      <h2 class="three-header three-drag">Drag</h2>
      <CaseTextSection
        sectionClass="case-text-section misc-three-drag"
        sectionHeaderClass="case-section-header header-drag-three"
        headertext="Mouse drag event"
        textClass="drag-text-three"
        sectionText="Mouse drag with Three.js, click and drag the cube."
      />
      <ThreeDrag />
      <img class="drag-snippet" src="@/assets/img/three/drag.jpg" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.case-three {
  @include create-grid(165, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .three-header {
    grid-column-start: 2;
    grid-column-end: 15;
    font-family: $font-primary;
    color: black;
    font-weight: 800;
    font-size: 90px;
  }
  .three-anim {
    grid-row-start: 1;
  }
  .misc-three-anim {
    grid-row-start: 4;
  }
  .three-anim-canvas {
    grid-row-start: 8;
  }
  .snippet-text {
    font-family: $font-secundary;
    grid-column-start: 2;
    grid-column-end: 24;
    text-align: center;
  }
  #anim-snip-text {
    grid-row-start: 22;
  }
  .anim-snippet1 {
    grid-row-start: 17;
    grid-column-start: 2;
    grid-column-end: 24;
    justify-self: center;
  }
  .anim-snippet2 {
    grid-row-start: 18;
    grid-column-start: 13;
    grid-column-end: 24;
  }
  .three-click {
    grid-row-start: 26;
  }
  .misc-three-clickadd {
    grid-row-start: 29;
  }
  .three-clickadd-canvas {
    grid-row-start: 32;
  }
  .three-clickadd-canvas {
    canvas {
      bottom: 2px solid black;
    }
  }
  .misc-three-clickMove {
    grid-row-start: 47;
  }
  .click-snippet {
    grid-row-start: 64;
    grid-column-start: 1;
    grid-column-end: 25;
    justify-self: center;
  }
  .three-ray {
    grid-row-start: 78;
  }
  .misc-three-remove {
    grid-row-start: 82;
  }
  .misc-three-over {
    grid-row-start: 100;
  }
  .ray-snippet {
    grid-row-start: 117;
    grid-column-start: 1;
    grid-column-end: 25;
    justify-self: center;
  }
  .three-drag {
    grid-row-start: 129;
  }
  .misc-three-drag {
    grid-row-start: 132;
  }
  .drag-snippet {
    grid-row-start: 148;
    grid-column-start: 1;
    grid-column-end: 25;
    justify-self: center;
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .case-three {
    .three-header {
      font-size: 5vw;
    }
    .anim-snippet1 {
      grid-row-start: 18;
    }
    #anim-snip-text {
      grid-row-start: 24;
    }
    .three-drag {
      grid-row-start: 131;
    }
    .misc-three-drag {
      grid-row-start: 134;
    }
    .drag-snippet {
      grid-row-start: 149;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import ThreeAnim from "@/views/partials/ThreeAnim.vue";
import ThreeClickAdd from "@/views/partials/ThreeClickAdd.vue";
import ThreeClickMove from "@/views/partials/ThreeClickMove.vue";
import ThreeClickRemove from "@/views/partials/ThreeClickRemove.vue";
import ThreeMouseOver from "@/views/partials/ThreeMouseOver.vue";
import ThreeDrag from "@/views/partials/ThreeDrag.vue";

export default {
  name: "CaseThree",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    ThreeAnim,
    ThreeClickAdd,
    ThreeClickMove,
    ThreeClickRemove,
    ThreeMouseOver,
    ThreeDrag
  }
};
</script>
