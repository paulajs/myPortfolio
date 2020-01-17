<template>
  <div class="misc-header">
    <h1>{{caseTitle}}</h1>
    <router-link class="case-home-button" to="/lab">
      <HomeButton buttonText="Back"/>
    </router-link>
    <h2>
      {{caseText}}

    </h2>
  </div>
</template>
<style lang="scss" scoped>
.case-three{
  .misc-header{
    h1{
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
    font-size: 9vw;
    font-family: "Poppins", sans-serif;
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
    font-family: "Source Code Pro", monospace;
    font-size: 21px;
    font-weight: 400;
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
