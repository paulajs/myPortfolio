<template>
  <div class="case-ripple-wrap">
    <MiscCaseHeader
      caseTitle="Ripple effect"
      caseText="A small project made with Pixi.js. A ripple effect on mouse down.
      Unfortunately it does not work on mobile devices."
    />
    <div class="case-ripple">
      <CaseTextSection
        sectionClass="case-text-section misc-ripple-about"
        sectionHeaderClass="case-section-header header-ripple-about"
        headertext="About"
        textClass="ripple-text-about"
        sectionText="Click the rectangle, and a ripple will appear."
      />
      <div class="pixi-container" ref="pixicontainer">
        <h2 class="canvas-click-text" ref="canvastext">Click!</h2>
      </div>
    </div>
    <Footer nextText="Next case" prevText="Previous case" linkToNext="/wreckagecat" linkToPrev="/dr-adams"/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.case-ripple-wrap{
  animation: page-opacity 0.6s ease forwards;
}
.case-ripple {
  @include create-grid(20, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .misc-ripple-about {
    grid-row-start: 1;
    grid-column-start: 1;
  }
  .pixi-container {
    grid-row-start: 3;
    grid-row-end: 18;
    grid-column-start: 2;
    grid-column-end: 24;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
        overflow: hidden;
    .canvas-click-text {
      @include header-style(uppercase);
      position: absolute;
      font-size: 14vw;
      bottom: 0;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .case-ripple{
    .pixi-container{
      overflow: hidden;
    }
  }
}
</style>
<script>
import MiscCaseHeader from "@/views/partials/MiscCaseHeader.vue";
import CaseTextSection from "@/components/CaseTextSection.vue";
import Footer from "@/components/Footer.vue";
import {
  Container,
  Loader,
  autoDetectRenderer,
  Sprite,
  filters
} from "pixi.js";

const netImage = require("@/assets/img/ripple/net1.png");
const mapImage = require("@/assets/img/ripple/map.png");

class Ripple {
  constructor(sprite, filter) {
    this.sprite = sprite;
    this.filter = filter;
  }

  scaleAdd = function(x, y) {
    this.sprite.scale.x += x;
    this.sprite.scale.y += y;
  };
}

export default {
  name: "RippleCase",
  components: {
    MiscCaseHeader,
    CaseTextSection,
    Footer
  },
  data() {
    return {
      ripples: [],
      stage: new Container(),
      renderer: autoDetectRenderer(1366, 768),
      loader: null,
      rippleScaleAmount: 0.025,
      anchorPoint: 0.5
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.renderer.backgroundColor = 0xffffff;
      this.$refs.pixicontainer.appendChild(this.renderer.view);
      this.loader = Loader.shared;
      this.loadAssets();
    },
    loadAssets() {
      this.loader
        .add(netImage)
        .add(mapImage)
        .load(this.setup);
    },
    setup() {
      const texture = this.loader.resources[netImage].texture;
      const background = new Sprite(texture);
      background.interactive = true;
      background.anchor.set(0.3);
      //background.scale.set(1);
      background.position.set(
        this.renderer.view.width / 2,
        this.renderer.view.height / 2
      );
      if (window.innerWidth < 736) {
        this.renderer.view.width = 600;
        this.renderer.view.height = 900;
      } else {
        this.renderer.view.width = 1366;
        this.renderer.view.height = 768;
      }

      this.stage.addChild(background);

      this.renderer.view.addEventListener("click", ev => {
        this.$refs.canvastext.style.display = "none";
        const ripplecount = this.ripples.length;
        if (ripplecount > 1) {
          this.ripples.splice(0, ripplecount - 1);
        }
        const sprite = new Sprite(Loader.shared.resources[mapImage].texture);
        sprite.anchor.set(0.5);

        const canvasRect = this.renderer.view.getBoundingClientRect();

        const mousex = ev.clientX - canvasRect.left;
        const mousey = ev.clientY - canvasRect.top;

        sprite.position.set(mousex, mousey);
        /* sprite.scale.set(0.1); */
        sprite.scale.set(0.5);
        const filter = new filters.DisplacementFilter(sprite);
        const ripple = new Ripple(sprite, filter);
        this.stage.addChild(sprite);
        this.ripples.push(ripple);
        this.stage.filters = this.ripples.map(ripple => ripple.filter);
      });

      this.gameLoop();
    },
    gameLoop() {
      requestAnimationFrame(this.gameLoop);
      this.ripples.forEach(ripple =>
        ripple.scaleAdd(this.rippleScaleAmount, this.rippleScaleAmount)
      );
      this.renderer.render(this.stage);
    }
  }
};
</script>
