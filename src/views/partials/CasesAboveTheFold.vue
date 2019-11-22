<template>
  <div class="above-the-fold">
    <h1>{{caseTitle}}</h1>
    <router-link class="case-home-button" to="/">
      <HomeButton buttonText= "Home"/>
    </router-link>
    <h2>{{description}}</h2>
    <div class="info-box info-about">
      <h3>About</h3>
      <p>
        {{aboutText}}
      </p>
    </div>
    <div class="info-box info-challange">
      <h3>Challange</h3>
      <p>
        {{challangeText}}
      </p>
    </div>
    <div class="info-box info-thoughts">
      <h3>Thoughts</h3>
      <p>
        {{thoughtsText}}
      </p>
    </div>
  </div>
</template>
<style lang="scss">
$transition: all 0.1s ease-in;
.case-nmg div h1 {
    font-size: 10vw;
}
.above-the-fold {
  display: grid;
  grid-template-rows: repeat(17, 4.94vh);
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
    font-size: 242px;
    font-family: "Poppins", sans-serif;
    color: black;
    margin-left: -0.067em;
    align-self: end;
    margin-bottom: 2px;
  }

  h2 {
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 8;
    align-self: end;
    font-family: "Source Code Pro", monospace;
    font-size: 28px;
    font-weight: 400;
  }

  .info-box {
    grid-row-start: 11;
    display: grid;
    grid-template-columns: repeat(8, 3.125vw);
    grid-column-gap: 1vw;
    h3 {
      grid-column-start: 1;
      grid-column-end: 1;
      writing-mode: vertical-lr;
      justify-self: end;
      font-family: "Poppins", sans-serif;
      font-size: 21px;
    }
    p {
      grid-column-start: 2;
      grid-column-end: 8;
      font-family: "Source Code Pro", monospace;
    }
  }
  .info-about {
    grid-column-start: 1;
    grid-column-end: 9;
  }
  .info-challange {
    grid-column-start: 9;
    grid-column-end: 17;
  }
  .info-thoughts {
    grid-column-start: 17;
    grid-column-end: 25;
  }
}
@keyframes rumble{
    0%{
      transform: translate3D(0px, 0px,0);
    }
    10%{
      transform: translate3D(1px, 0.5px,0);
    }
    40%{
      transform: translate3D(0px, 0px,0);
    }
    60%{
      transform: translate3D(-1px, 1px,0);
    }
    80%{
      transform: translate3D(0px, 0.5px,0);
    }
    100%{
      transform: translate3D(1px, 0px,0);
    }
  }

</style>
<script>
import HomeButton from "@/components/HomeButton.vue";
export default {
  name: "CasesAboveThefold",
  components: {
    HomeButton
  },
  props: {
    caseTitle: String,
    description: String,
    aboutText: String,
    challangeText: String,
    thoughtsText: String
  }
};
</script>
