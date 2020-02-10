<template>
  <div class="case-bunny-wrap">
    <MiscCaseHeader
      caseTitle="Bunny Games"
      caseText="A while back when learning Quintus.js, a javascript HTML5 game engine ,
      I made 3 small games. The inspiration for the world was
      found in Alice in Wonderland."
    />
    <div class="bunny-case">
      <CaseTextSection
        sectionClass="case-text-section misc-bunny-platformer"
        sectionHeaderClass="case-section-header header-bunny-platformer"
        headertext="Bunny Platformer"
        textClass="process-text-platformer"
        sectionText="Primary purpose of project was to get familiar with Quintus.js,
        a javascript game libary. The graphics were made in Illustrator,
        however the primary focus was on the code. The first game is a platformer-type of game."
      />
      <img
        class="platform-img1"
        src="@/assets/img/bunny/bunny-platform1.jpg"
        alt="game screen shot"
      />
      <img
        class="platform-img2"
        src="@/assets/img/bunny/bunny-platform2.jpg"
        alt="game screen shot"
      />
      <img
        class="platform-img3"
        src="@/assets/img/bunny/bunny-platform9.jpg"
        alt="game screen shot"
      />
      <img
        class="platform-img4"
        src="@/assets/img/bunny/bunny-platform8.jpg"
        alt="game screen shot"
      />
      <img
        class="platform-img5"
        src="@/assets/img/bunny/bunny-platform3.jpg"
        alt="game screen shot"
      />
      <img
        class="platform-img6"
        src="@/assets/img/bunny/bunny-platform6.jpg"
        alt="game screen shot"
      />
      <div class="button-platform">
        <ButtonVisitPage />
      </div>

      <CaseTextSection
        sectionClass="case-text-section misc-bunny-runner"
        sectionHeaderClass="case-section-header header-bunny-runner"
        headertext="Bunny Runner"
        textClass="process-text-runner"
        sectionText="The second game is a runner game.
        The bunny has to avoid the dice and collect the card suits. "
      />
      <img class="runner-img1" src="@/assets/img/bunny/bunnyrunner.jpg" alt="game screen shot" />
      <img class="runner-img2" src="@/assets/img/bunny/bunnyrunner1.jpg" alt="game screen shot" />
      <div class="button-runner">
        <ButtonVisitPage />
      </div>
      <CaseTextSection
        sectionClass="case-text-section misc-bunny-fall"
        sectionHeaderClass="case-section-header header-bunny-fall"
        headertext="Bunny Fall"
        textClass="process-text-fall"
        sectionText="The last game made is similar to the runner,
        but vertical instead. The bunny has to avoid the insects and collect the card suits.  "
      />
      <img class="fall-img1" src="@/assets/img/bunny/bunnyfall.jpg" alt="game screen shot" />
      <img class="fall-img2" src="@/assets/img/bunny/bunnyfall1.jpg" alt="game screen shot" />
      <div class="button-fall">
        <ButtonVisitPage />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-bunny-wrap{
  animation: page-opacity 0.6s ease forwards;
}
.bunny-case {
  @include create-grid(77, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  img {
    width: 100%;
  }
  .misc-bunny-platformer {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  .button-platform {
    grid-row-start: 35;
    @include place-in-grid(32, 34, 1, 25);
    justify-self: center;
  }
  .button-runner {
    grid-row-start: 35;
    @include place-in-grid(51, 53, 1, 25);
    justify-self: center;
  }
  .button-fall {
    grid-row-start: 35;
    @include place-in-grid(70, 71, 1, 25);
    justify-self: center;
  }
  .misc-bunny-runner {
    grid-row-start: 38;
    grid-column-start: 1;
  }
  .misc-bunny-fall {
    grid-row-start: 56;
    grid-column-start: 1;
  }
  .platform-img1 {
    @include place-in-grid(5, 12, 2, 13);
  }
  .platform-img2 {
    @include place-in-grid(5, 12, 13, 24);
  }
  .platform-img3 {
    @include place-in-grid(14, 21, 2, 13);
  }
  .platform-img4 {
    @include place-in-grid(14, 21, 13, 24);
  }
  .platform-img5 {
    @include place-in-grid(23, 30, 2, 13);
  }
  .platform-img6 {
    @include place-in-grid(23, 30, 13, 24);
  }
  .runner-img1 {
    @include place-in-grid(42, 48, 2, 13);
  }
  .runner-img2 {
    @include place-in-grid(42, 48, 13, 24);
  }
  .fall-img1 {
    @include place-in-grid(60, 65, 2, 13);
  }
  .fall-img2 {
    @include place-in-grid(60, 65, 13, 24);
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .bunny-case {
    grid-template-rows: repeat(91, 4.94vh);
    .misc-bunny-platformer {
      grid-row-start: 2;
    }
    .platform-img1 {
      @include place-in-grid(9, 12, 1, 25);
    }
    .platform-img2 {
      @include place-in-grid(14, 18, 1, 25);
    }
    .platform-img3 {
      @include place-in-grid(19, 24, 1, 25);
    }
    .platform-img4 {
      @include place-in-grid(24, 30, 1, 25);
    }
    .platform-img5 {
      @include place-in-grid(29, 32, 1, 25);
    }
    .platform-img6 {
      @include place-in-grid(34, 38, 1, 25);
    }
    .button-platform {
      grid-row-start: 40;
      grid-row-end: 42;
    }
    .misc-bunny-runner {
      grid-row-start: 46;
    }
    .runner-img1 {
      @include place-in-grid(51, 54, 1, 25);
    }
    .runner-img2 {
      @include place-in-grid(56, 58, 1, 25);
    }
    .button-runner {
      grid-row-start: 63;
      grid-row-end: 65;
    }
    .misc-bunny-fall {
      grid-row-start: 68;
    }
    .fall-img1 {
      @include place-in-grid(73, 76, 1, 25);
    }
    .fall-img2 {
      @include place-in-grid(78, 81, 1, 25);
    }
    .button-fall {
      grid-row-start: 85;
      grid-row-end: 87;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import ButtonVisitPage from "@/components/ButtonVisitPage.vue";
export default {
  name: "BunnyGames",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    ButtonVisitPage
  }
};
</script>
