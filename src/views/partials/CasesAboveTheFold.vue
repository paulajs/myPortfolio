<template>
  <div class="above-the-fold">
    <h1>{{caseTitle}}</h1>
    <router-link class="case-home-button" to="/">
      <HomeButton buttonText="Home" />
    </router-link>
    <h2>{{description}}</h2>
    <div class="info-box info-about" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-out">
      <h3>About</h3>
      <p>{{aboutText}}</p>
    </div>
    <div class="info-box info-challange" data-aos="fade-down" data-aos-duration="300" data-aos-easing="ease-out" data-aos-delay="150">
      <h3>Challange</h3>
      <p>{{challangeText}}</p>
    </div>
    <div class="info-box info-thoughts" data-aos="fade-up" data-aos-duration="300" data-aos-easing="ease-out" data-aos-delay="250">
      <h3>Thoughts</h3>
      <p>{{thoughtsText}}</p>
    </div>
  </div>
</template>
<style lang="scss">
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

$transition: all 0.1s ease-in;
.case-nmg div h1 {
  font-size: 10vw;
}
.case-skansing {
  .above-the-fold {
    h1 {
      font-size: 10.7vw;
    }
  }
}
.above-the-fold {
  @include create-grid(17, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .case-home-button {
    grid-column-start: 24;
    grid-row-start: 1;
    justify-self: end;
    align-self: start;
    transform: translate(-26px, 8px);
  }
  h1 {
    @include place-in-grid(1, 8, 2, 23);
    font-size: 12.5vw;
    @include font-primary-and-less-fat;
    color: black;
    margin-left: -0.067em;
    align-self: end;
    margin-bottom: 2px;
  }

  h2 {
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 8;
    align-self: end;
    font-family: $font-secundary;
    font-size: 1.6vw;
    font-weight: 400;
    color: black;
  }

  .info-box {
    grid-row-start: 11;
    display: grid;
    grid-row-end: 13;
    grid-row-gap: 2.4vh;
    grid-template-columns: repeat(8, 3.125vw);
    grid-column-gap: 1vw;
    grid-template-rows: repeat(2, 50%);
    h3 {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      justify-self: auto;
      @include font-primary-and-less-fat;
      font-size: 3.8vh;
      color: black;
    }
    p {
      grid-column-start: 2;
      grid-column-end: 8;
      font-family: $font-secundary;
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
@keyframes rumble {
  0% {
    transform: translate3D(0px, 0px, 0);
  }
  10% {
    transform: translate3D(1px, 0.5px, 0);
  }
  40% {
    transform: translate3D(0px, 0px, 0);
  }
  60% {
    transform: translate3D(-1px, 1px, 0);
  }
  80% {
    transform: translate3D(0px, 0.5px, 0);
  }
  100% {
    transform: translate3D(1px, 0px, 0);
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-nmg {
    div {
      h1 {
        font-size: 12vw;
      }
    }

    .above-the-fold {
      .info-thoughts {
        grid-row-start: 25;
      }
    }
  }
  .case-skansing {
    .above-the-fold {
      grid-template-rows: repeat(33, 4.94vh);
      h1 {
        font-size: 16.5vw;
      }
      .info-about {
        grid-row-end: 14;
      }
      .info-challange {
        grid-row-start: 15;
        grid-row-end: 22;
      }
      .info-thoughts {
        grid-row-start: 22;
        grid-row-end: 32;
      }
    }
  }
  .above-the-fold {
    grid-template-rows: repeat(37, 4.94vh);
    h1 {
      grid-row-start: 1;
      grid-row-end: 6;
      font-size: 20.5vw;
    }
    h2 {
      grid-column-start: 2;
      grid-column-end: 10;
      grid-row-start: 6;
      grid-row-end: 8;
      align-self: start;
      font-size: 3.5vw;
    }
    .case-home-button {
      transform: translate(-9px, 1px);
    }
    .info-box {
      grid-column-start: 1;
      grid-column-end: 23;
      grid-template-columns: repeat(8, 11.5%);
      grid-template-rows: repeat(17, 4.94vh);
      grid-row-gap: 1vh;
      h3 {
        grid-column-start: 2;
        grid-column-end: 8;
        grid-row-start: 1;
        writing-mode: horizontal-tb;
        justify-self: start;
        font-size: 4.8vh;
        color: black;
      }
      p {
        grid-column-start: 2;
        grid-column-end: 9;
        grid-row-start: 3;
      }
    }
    .info-about {
      grid-row-start: 9;
      grid-row-end: 16;
    }
    .info-challange {
      grid-row-start: 16;
      grid-row-end: 27;
    }
    .info-thoughts {
      grid-row-start: 28;
      grid-row-end: 37;
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .above-the-fold {
    .info-box {
      h3 {
        font-size: 2.7vh;
      }
    }
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
