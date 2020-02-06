<template>
  <div :class="sectionClass">
    <div :class="sectionHeaderClass">
      <h5>{{headertext}}</h5>
    </div>
    <p :class="textClass">{{sectionText}}</p>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
.case-text-section {
  display: grid;
  grid-template-rows: repeat(90, 4.94vh);
  grid-row-gap: 1vh;
  grid-template-columns: repeat(24, 3.125vw);
  grid-column-gap: 1vw;
  .case-section-header {
    color: white;
    background: black;
    grid-column-end: 6;
    display: grid;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    height: 3.06vh;
    transform: translateX(-1vw);
    grid-column-start: 1;
    h5 {
      grid-column-start: 2;
      grid-column-end: 8;
      align-self: center;
      font-size: 18px;
      transform: translateX(1vw);
      font-family: $font-secundary;
      font-weight: 300;
      grid-row-start: 1;
    }
  }
  p {
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    font-family: $font-secundary;
  }
  .inspiration-text-nmg {
    grid-column-end: 8;
  }
  p.experimentation-text-nmg {
    grid-column-end: 12;
  }
  p.experimentation-text-hesehus {
    grid-column-end: 8;
  }
  .inspiration-text-skansing {
    grid-column-end: 8;
  }
  .process-text-space {
    grid-column-end: 12;
  }
  .try-text-space {
    grid-column-end: 12;
  }
  .process-text-horror {
    grid-column-end: 12;
  }
  .try-text-horror {
    grid-column-end: 12;
  }
  .process-text-platformer {
    grid-column-end: 12;
  }
  .process-text-runner {
    grid-column-end: 8;
  }
  .process-text-fall {
    grid-column-end: 8;
  }
  .anim-text-three {
    grid-column-end: 10;
  }
  .adams-text-inspiration {
    grid-column-end: 10;
  }
  .adams-text-concept {
    grid-column-end: 12;
  }
  .wreck-text-sprite {
    grid-column-end: 10;
  }
  .wreck-text-try {
    grid-column-end: 10;
  }
  .audio-text-bars {
    grid-column-end: 12;
  }
  .audio-text-circle {
    grid-column-end: 8;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-text-section {
    p {
      grid-column-end: 23;
    }
    .case-section-header {
      grid-column-end: 20;
      height: 4.5vh;
      h5 {
        grid-column-end: 19;
      }
    }
    p.experimentation-text-hesehus {
      grid-column-end: 23;
    }
    .inspiration-text-nmg {
      grid-column-end: 23;
    }
    p.experimentation-text-nmg {
      grid-column-end: 23;
    }
    .inspiration-text-skansing {
      grid-column-end: 20;
    }
    .audio-text-bars {
      grid-column-end: 24;
    }
    .audio-text-circle {
      grid-column-end: 22;
    }
    .process-text-space{
      grid-column-end: 22;
    }
    .try-text-space{
      grid-column-end: 22;
    }
    .anim-text-three{
      grid-column-end: 22;
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .case-text-section {
    .case-section-header {
      grid-column-end: 7;
      h5 {
        font-size: 16px;
      }
    }
    .inspiration-text-nmg {
      grid-column-end: 11;
    }
    p.experimentation-text-nmg {
      grid-column-end: 15;
    }
  }
}
</style>
<script>
export default {
  name: "CaseTextSection",
  props: {
    sectionClass: String,
    sectionHeaderClass: String,
    headertext: String,
    textClass: String,
    sectionText: String
  }
};
</script>
