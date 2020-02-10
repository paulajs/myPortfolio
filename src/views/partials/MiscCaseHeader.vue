<template>
  <div class="misc-header">
    <h1>{{caseTitle}}</h1>
    <router-link class="case-home-button" to="/lab">
      <HomeButton buttonText="Back" />
    </router-link>
    <h2>{{caseText}}</h2>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-three {
  .misc-header {
    h1 {
      font-size: 155px;
    }
  }
}
.misc-header {
  display: grid;
  grid-template-rows: repeat(13, 4.94vh);
  grid-row-gap: 1vh;
  grid-template-columns: repeat(24, 3.125vw);
  grid-column-gap: 1vw;
  margin: 2vh 1vw;
  .case-home-button {
    grid-column-start: 24;
    grid-row-start: 1;
    justify-self: end;
    align-self: start;
    transform: translate(-26px, 8px);
  }
  h1 {
    grid-column-start: 2;
    grid-column-end: 23;
    grid-row-start: 1;
    grid-row-end: 8;
    font-size: 8vw;
    font-family: $font-primary;
    color: black;
    margin-left: -0.067em;
    align-self: end;
    margin-bottom: 2px;
  }
  h2 {
    grid-column-start: 2;
    grid-column-end: 10;
    grid-row-start: 9;
    align-self: end;
    font-family: $font-secundary;
    font-size: 1.1vw;
    font-weight: 400;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .misc-header {
    h1 {
      grid-column-start: 2;
      grid-column-end: 23;
      grid-row-start: 1;
      grid-row-end: 8;
      font-size: 15vw;
      margin-bottom: -4vh;
    }
    h2 {
      grid-column-start: 2;
      grid-column-end: 22;
      grid-row-start: 12;
      font-size: 4.7vw;
    }
  }
  .case-audio-wrap{
    .misc-header {
      h2{
        grid-row-start: 13;
        grid-column-end: 24;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .misc-header {
    h2 {
      grid-column-end: 13;
    }
  }
}
@media screen and (min-height: 1080px) and (min-device-width: 1900px) {
  .misc-header {
    h2 {
      grid-column-end: 13;
    }
  }
}
</style>
<script>
import HomeButton from "@/components/HomeButton.vue";

export default {
  name: "MiscCaseHeader",
  components: {
    HomeButton
  },
  props: {
    caseTitle: String,
    caseText: String
  }
};
</script>
