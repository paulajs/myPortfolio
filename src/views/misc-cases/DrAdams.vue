<template>
  <div class="case-dradam-wrap">
    <MiscCaseHeader
      caseTitle="Dr Adams"
      caseText="In my short time studying concept development,
      I participated in a project about bridging the gap between
      Dr Adams (cloting store) online and offline world."
    />
    <div class="case-adams">
      <CaseTextSection
        sectionClass="case-text-section misc-adams-inspiration"
        sectionHeaderClass="case-section-header header-adams-inspiration"
        headertext="Inspiration"
        textClass="adams-text-inspiration"
        sectionText="The store as seen in the photos is dark,
        while their online presence is rather light and colorfull.
        They use a lot of illustration in their online marketing and social media."
      />
      <img class="adams-offline" src="@/assets/img/dr-adams/offline.jpg" data-aos="fade-right" data-aos-easing="ease-out" alt />
      <img class="adams-online" src="@/assets/img/dr-adams/online1-grafik.jpg" data-aos="fade-left" data-aos-easing="ease-out" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-adams-concept"
        sectionHeaderClass="case-section-header header-adams-concept"
        headertext="The concept"
        textClass="adams-text-concept"
        sectionText="From observations at the store and netnography,
        a handfull of styles/types (of people that shop at Dr Adams)
        were identified, og illustrated by characters called Mini Me’s.
        These would be mascots of the types, to put on keychains, patches, stickers and more.
        The target group should identify with the characters enough
        to make them part of their style by using the patches, sticker and more and
        ultimately make them part of thier Instagram posts, when posting their outfits.
        The store could use them for different purposes, like putting
        outfits together for the types, as gifts for customers along with theit handwritten note,
        and social media campains. "
      />
      <CaseTextSection
        sectionClass="case-text-section misc-adams-early"
        sectionHeaderClass="case-section-header header-adams-early"
        headertext="Early types"
        textClass="adams-text-early"
        sectionText="The first types made after initial observation at the store. They represent the excentric man,
        the stylish lady, and the teenage boy. "
      />
      <img class="img-olderman" src="@/assets/img/dr-adams/SVG/older-man.svg" data-aos="fade-right" data-aos-easing="ease-out" alt />
      <img class="img-poshlady" src="@/assets/img/dr-adams/SVG/posh-lady.svg" data-aos="fade-up" data-aos-easing="ease-out" alt />
      <img class="img-youngboy" src="@/assets/img/dr-adams/SVG/young-boy.svg" data-aos="fade-left" data-aos-easing="ease-out" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-adams-final"
        sectionHeaderClass="case-section-header header-adams-final"
        headertext="Final Mini Me's"
        textClass="adams-text-final"
        sectionText="The final Mini Me’s made from user research and netnography."
      />
      <p class="stylishlady" data-aos="fade-right" data-aos-easing="ease-out">The stylish lady</p>
      <p class="stylishman" data-aos="fade-up" data-aos-easing="ease-out">The stylish man</p>
      <p class="exgirl" data-aos="fade-left" data-aos-easing="ease-out">The excentric girl</p>
      <img data-aos="fade-right" data-aos-easing="ease-out" class="img-gry" src="@/assets/img/dr-adams/SVG/gry.svg" alt />
      <img data-aos="fade-up" data-aos-easing="ease-out" class="img-soren" src="@/assets/img/dr-adams/SVG/soren.svg" alt />
      <img data-aos="fade-left" data-aos-easing="ease-out" class="img-katrine" src="@/assets/img/dr-adams/SVG/katrine.svg" alt />

      <p class="teenboy" data-aos="fade-right" data-aos-easing="ease-out">The teenage boy</p>
      <p class="teengirl" data-aos="fade-up" data-aos-easing="ease-out">The sporty and querky girl</p>
      <p class="oldman" data-aos="fade-left" data-aos-easing="ease-out">The excentric older man</p>
      <img data-aos="fade-right" data-aos-easing="ease-out" class="img-william" src="@/assets/img/dr-adams/SVG/william.svg" alt />
      <img data-aos="fade-up" data-aos-easing="ease-out" class="img-emile" src="@/assets/img/dr-adams/SVG/emile.svg" alt />
      <img data-aos="fade-left" data-aos-easing="ease-out" class="img-bjarne" src="@/assets/img/dr-adams/SVG/bjarne.svg" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-adams-logo"
        sectionHeaderClass="case-section-header header-adams-logo"
        headertext="The logos"
        textClass="adams-text-logo"
        sectionText="Dr Adams logo was made in an illustrated version aswell to match the concept."
      />
      <img class="logo-white" src="@/assets/img/dr-adams/SVG/logo-white.svg" data-aos="fade-right" data-aos-easing="ease-out" alt />
      <img class="logo-black" src="@/assets/img/dr-adams/SVG/logo-black.svg" data-aos="fade-left" data-aos-easing="ease-out" alt />
      <CaseTextSection
        sectionClass="case-text-section misc-adams-logofinal"
        sectionHeaderClass="case-section-header header-adams-logofinal"
        headertext="The final logos"
        textClass="adams-text-logofinal"
        sectionText
      />
      <img class="logofinal-white" src="@/assets/img/dr-adams/SVG/logo-final-white.svg" data-aos="fade-right" data-aos-easing="ease-out" alt />
      <img class="logofinal-black" src="@/assets/img/dr-adams/SVG/logo-final-black.svg" data-aos="fade-left" data-aos-easing="ease-out" alt />
    </div>
    <Footer nextText="Next case" prevText="Previous case" linkToNext="/ripple" linkToPrev="/bunny"/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-dradam-wrap{
  animation: page-opacity 0.6s ease forwards;
  overflow-x: hidden;
}
.case-adams {
  @include create-grid(125, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .misc-adams-inspiration {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  .adams-offline {
    width: 100%;
    grid-row-start: 5;
    grid-column-start: 2;
    grid-column-end: 13;
    border: 1px solid black;
  }
  .adams-online {
    width: 100%;
    grid-row-start: 5;
    grid-column-start: 13;
    grid-column-end: 24;
    border: 1px solid black;
  }
  .misc-adams-concept {
    grid-row-start: 20;
    grid-column-start: 1;
  }
  .misc-adams-early {
    grid-row-start: 29;
    grid-column-start: 1;
  }
  .img-olderman {
    grid-row-start: 33;
    grid-column-start: 6;
    grid-column-end: 10;
  }
  .img-poshlady {
    grid-row-start: 33;
    grid-column-start: 11;
    grid-column-end: 15;
  }
  .img-youngboy {
    grid-row-start: 33;
    grid-column-start: 16;
    grid-column-end: 20;
  }
  .misc-adams-final {
    grid-row-start: 50;
    grid-column-start: 1;
  }
  .stylishlady {
    grid-row-start: 54;
    grid-column-start: 6;
    grid-column-end: 10;
    width: 100%;
    align-self: center;
    font-family: $font-secundary;
  }
  .img-gry {
    grid-row-start: 55;
    grid-column-start: 6;
    grid-column-end: 10;
  }
  .stylishman {
    grid-row-start: 54;
    grid-column-start: 11;
    grid-column-end: 15;
    width: 100%;
    align-self: center;
    font-family: $font-secundary;
  }
  .img-soren {
    grid-row-start: 55;
    grid-column-start: 11;
    grid-column-end: 15;
  }
  .exgirl {
    grid-row-start: 54;
    grid-column-start: 16;
    grid-column-end: 20;
    width: 100%;
    align-self: center;
    font-family: $font-secundary;
  }
  .img-katrine {
    grid-row-start: 55;
    grid-column-start: 16;
    grid-column-end: 20;
  }
  .teenboy {
    grid-row-start: 71;
    grid-column-start: 6;
    grid-column-end: 10;
    width: 100%;
    align-self: center;
    font-family: $font-secundary;
  }
  .img-william {
    grid-row-start: 72;
    grid-column-start: 6;
    grid-column-end: 10;
  }

  .teengirl {
    grid-row-start: 71;
    grid-column-start: 11;
    grid-column-end: 15;
    width: 100%;
    align-self: center;
    font-family: $font-secundary;
  }
  .img-emile {
    grid-row-start: 72;
    grid-column-start: 11;
    grid-column-end: 15;
  }
  .oldman {
    grid-row-start: 71;
    grid-column-start: 16;
    grid-column-end: 20;
    width: 100%;
    align-self: center;
    font-family: $font-secundary;
  }
  .img-bjarne {
    grid-row-start: 72;
    grid-column-start: 16;
    grid-column-end: 20;
  }
  .misc-adams-logo {
    grid-row-start: 89;
    grid-column-start: 1;
  }
  .logo-white {
    grid-row-start: 93;
    grid-column-start: 6;
    grid-column-end: 13;
  }
  .logo-black {
    grid-row-start: 93;
    grid-column-start: 13;
    grid-column-end: 20;
  }
  .misc-adams-logofinal {
    grid-row-start: 112;
    grid-column-start: 1;
  }
  .logofinal-white {
    grid-row-start: 115;
    grid-column-start: 4;
    grid-column-end: 13;
  }
  .logofinal-black {
    grid-row-start: 115;
    grid-column-start: 13;
    grid-column-end: 22;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-adams {
    grid-template-rows: repeat(328, 4.94vh);
    .misc-adams-inspiration {
      grid-row-start: 3;
    }
    .adams-offline {
      grid-row-start: 9;
      grid-column-start: 1;
      grid-column-end: 25;
    }
    .adams-online {
      grid-row-start: 17;
      grid-column-start: 1;
      grid-column-end: 25;
    }
    .misc-adams-concept {
      grid-row-start: 27;
    }
    .misc-adams-early {
      grid-row-start: 42;
    }
    .img-olderman {
      grid-row-start: 46;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-poshlady {
      grid-row-start: 68;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-youngboy {
      grid-row-start: 90;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .misc-adams-final {
      grid-row-start: 114;
    }
    .stylishlady {
      grid-row-start: 118;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-gry {
      grid-row-start: 120;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .stylishman {
      grid-row-start: 144;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-soren {
      grid-row-start: 146;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .exgirl {
      grid-row-start: 170;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-katrine {
      grid-row-start: 172;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .teenboy {
      grid-row-start: 196;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-william {
      grid-row-start: 198;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .teengirl {
      grid-row-start: 222;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-emile {
      grid-row-start: 224;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .oldman {
      grid-row-start: 248;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .img-bjarne {
      grid-row-start: 250;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .misc-adams-logo {
      grid-row-start: 276;
    }
    .logo-white {
      grid-row-start: 280;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .logo-black {
      grid-row-start: 295;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .misc-adams-logofinal {
      grid-row-start: 312;
    }
    .logofinal-white {
      grid-row-start: 314;
      grid-column-start: 2;
      grid-column-end: 24;
    }
    .logofinal-black {
      grid-row-start: 320;
      grid-column-start: 2;
      grid-column-end: 24;
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
 p.adams-text-early{
   grid-column-end: 10;
 }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DrAdams",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    Footer
  },
  methods: {}
};
</script>
