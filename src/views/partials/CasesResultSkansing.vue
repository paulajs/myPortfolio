<template>
  <div class="cases-result-skansing">
    <a href="https://skansing.dk/" target=”_blank”>
      <ButtonVisitPage />
    </a>
    <div class="display-results">
      <h2 class="result-header">Mockups</h2>
    </div>
    <div class="mobile-mockup-skansing">
      <div class="skansing-result-header">
        <h4>Mobile mockup</h4>
      </div>
      <img class="mobile-mock1" src="@/assets/img/SVG/mobmock1.svg" data-aos="fade-right" data-aos-easing="ease-out" alt />
      <img class="mobile-mock2" src="@/assets/img/SVG/mobmock2.svg" data-aos="fade-left" data-aos-easing="ease-out" alt />
    </div>
    <div class="desktop-mockup1-skansing">
      <div class="skansing-result-header">
        <h4>Desktop mockup version 1</h4>
      </div>
      <img class="desktop-mock1" src="@/assets/img/SVG/mockupv1.svg" data-aos="fade-up" data-aos-easing="ease-out" alt />
    </div>
    <video
      @mouseover="eventVideo"
      @mouseleave="eventVideoLeave"
      class="skansing-video"
      muted
      loop
      src="@/assets/videos/skansing/skansingvid44.mp4"
    ></video>
    <div class="desktop-mockup2-skansing">
      <div class="skansing-result-header">
        <h4>Desktop mockup version 2</h4>
      </div>
      <img class="desktop-mock2" src="@/assets/img/SVG/mockfin.svg" data-aos="fade-up" data-aos-easing="ease-out" alt />
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.cases-result-skansing {
  display: flex;
  flex-direction: column;
  align-items: center;
  .skansing-video {
    width: 100%;
    margin-bottom: 19vh;
  }
  .display-results {
    display: grid;
    grid-template-rows: repeat(4, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    background: white;
    h2.result-header {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 1;
      grid-row-end: 4;
      @include font-primary-and-fat;
      font-size: 7vw;
      color: black;
    }
  }
  .skansing-result-header {
    color: white;
    background: black;
    grid-column-start: 1;
    grid-column-end: 6;
    display: grid;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    height: 3.4vh;
    transform: translateX(-1vw);
    font-family: "Source Code Pro", monospace;
    h4 {
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 8;
      font-size: 18px;
      transform: translateX(1vw);
      font-weight: 300;
    }
  }
  .mobile-mockup-skansing {
    display: grid;
    grid-template-rows: repeat(21, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    img {
      width: 100%;
    }

    img.mobile-mock1 {
      grid-column-start: 5;
      grid-column-end: 12;
      grid-row-start: 3;
    }
    img.mobile-mock2 {
      grid-column-start: 14;
      grid-column-end: 21;
      grid-row-start: 3;
    }
  }
  .desktop-mockup1-skansing {
    display: grid;
    grid-template-rows: repeat(21, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    img {
      width: 100%;
    }

    .desktop-mock1 {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 2;
    }
  }
  .desktop-mockup2-skansing {
    display: grid;
    grid-template-rows: repeat(21, 4.94vh);
    grid-row-gap: 1vh;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    img {
      width: 100%;
    }

    .desktop-mock2 {
      grid-column-start: 2;
      grid-column-end: 24;
      grid-row-start: 2;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .cases-result-skansing {
    .skansing-result-header{
      grid-column-end: 20;
      h4{
        grid-column-end: 20;
      }
    }
    .display-results {
      grid-template-rows: repeat(3, 4.94vh);
      h2.result-header {
        font-size: 16vw;
      }
    }
    .mobile-mockup-skansing {
      grid-template-rows: repeat(40, 4.94vh);
      .skansing-result-header {
        grid-column-end: 20;
        h4 {
          grid-column-end: 20;
        }
      }
      img.mobile-mock1 {
        grid-column-start: 1;
        grid-column-end: 25;
        grid-row-start: 3;
      }
      img.mobile-mock2 {
        grid-column-start: 1;
        grid-column-end: 25;
        grid-row-start: 20;
      }
    }
    .desktop-mockup1-skansing {
      grid-template-rows: repeat(8, 4.94vh);
      .skansing-result-header {
        grid-column-end: 20;
        h4 {
          grid-column-end: 15;
        }
      }
      .desktop-mock1 {
        grid-column-start: 1;
        grid-column-end: 25;
      }
    }
    .desktop-mockup2-skansing {
      grid-template-rows: repeat(8, 4.94vh);
      .desktop-mock2 {
        grid-column-start: 1;
        grid-column-end: 25;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .cases-result-skansing {
    .skansing-result-header {
      grid-column-end: 8;
    }
    .display-results {
      h2.result-header {
        font-size: 8vw;
      }
    }
  }
}
</style>

<script>
import ButtonVisitPage from "@/components/ButtonVisitPage.vue";

export default {
  name: "CasesResultSkansing",
  components: {
    ButtonVisitPage
  },
  methods: {
    eventVideo: function(e) {
      console.log("enter");
      e.target.play();
    },
    eventVideoLeave: function(e) {
      console.log("leave");
      e.target.pause();
    }
  }
};
</script>
