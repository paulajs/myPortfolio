<template>
  <div class="wrapper">
   <!--  <button v-bind:click="playPaint">Splat</button> -->
    <svg
      class="shape-overlays"
      ref="shapeoverlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <linearGradient id="my-cool-gradient" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff" />
        <stop offset="30%" stop-color="#00ff66" />
        <stop offset="100%" stop-color="#00cf78" />
      </linearGradient>
      <linearGradient id="my-cool-gradient2" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff" />
        <stop offset="40%" stop-color="#ff00ff" />
        <stop offset="100%" stop-color="#00ff66" />
      </linearGradient>
      <path class="shape-overlays__path" ref="path1" />
      <path class="shape-overlays__path" ref="path2" />
      <path class="shape-overlays__path" ref="path3" />
      <path class="shape-overlays__path" ref="path4" />
    </svg>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  width: 100vw;
}
.shape-overlays {
  width: 100vw;
  height: 100vh;
  margin-top: 0px;
  margin-left: 0px;
  z-index: 1000000;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
}
.shape-overlays.is-opened {
  pointer-events: auto;
}
.shape-overlays__path:nth-of-type(1) {
  fill: white;
  stroke: black;
  stroke-width: 0.2;
}
.shape-overlays__path:nth-of-type(2) {
  fill: url(#my-cool-gradient) #0bff9d;
  stroke: black;
  stroke-width: 0.2;
}
.shape-overlays__path:nth-of-type(3) {
  fill: url(#my-cool-gradient2) #ff00ff;
  stroke: black;
  stroke-width: 0.2;
}
.shape-overlays__path:nth-of-type(4) {
  fill: white;
  stroke: black;
  stroke-width: 0.2;
}
</style>
<script>
import ease from "../functions/easings.js";
export default {
  name: "ShapeOverlays",
  props:{
    runPaint: Boolean
  },
  data() {
    return {
      // elm: null;
      path: [],
      numPoints: null,
      duration: null,
      delayPointsArray: [],
      delayPointsMax: null,
      delayPerPath: null,
      timeStart: Date.now(),
      isAnimating: false,
      isSplatShown: false
    };
  },
  mounted() {
    this.init();
  },
  watch: {
    runPaint: function(){
      this.toggle();
    }
  },
  methods: {
    init() {
      this.path = [
        this.$refs.path1,
        this.$refs.path2,
        this.$refs.path3,
        this.$refs.path4
      ];
      if (window.innerWidth >= 736) {
        this.numPoints = 14;
        this.duration = 800;
        this.delayPointsMax = 520;
        this.delayPerPath = 110;
      } else {
        this.numPoints = 10;
        this.duration = 350;
        this.delayPointsMax = 340;
        this.delayPerPath = 130;
      }
    },
    splatter() {
      this.toggle();
    },
    toggle() {
      this.isAnimating = true;
      const range = 4 * Math.random() + 6;
      for (let i = 0; i < this.numPoints; i++) {
        const radian = (i / (this.numPoints - 1)) * Math.PI;
        this.delayPointsArray[i] =
          ((Math.sin(-radian) + Math.sin(-radian * range) + 2) / 4) *
          this.delayPointsMax;
      }
      this.timeStart = Date.now();
      this.renderLoop();
    },
    renderLoop() {
      const shapeOverlays = this.$refs.shapeoverlays;
      shapeOverlays.style.display = "block";
      this.render();
      if (
        Date.now() - this.timeStart <
        this.duration +
          this.delayPerPath * (this.path.length - 1) +
          this.delayPointsMax
      ) {
        requestAnimationFrame(() => {
          this.renderLoop();
        });
      } else {
        this.isAnimating = false;
        shapeOverlays.style.display = "none";
      }
    },
    render() {
      for (let i = 0; i < this.path.length; i++) {
        const computedPath = this.updatePath(
          Date.now() - (this.timeStart + this.delayPerPath * i)
        );
        this.path[i].setAttribute("d", computedPath);
      }
    },
    updatePath(time) {
      const points = [];
      for (let i = 0; i < this.numPoints + 1; i++) {
        const timeExp = Math.min(
          Math.max(time - this.delayPointsArray[i], 0) / this.duration,
          1
        );
        // points[i] = ease.exponentialIn(timeExp) * 100;
        points[i] = this.exponentialInOut(timeExp) * 100;
      }
      let str = "";
      str += `M 0 0 V ${points[0]} `;
      for (var i = 0; i < this.numPoints - 1; i++) {
        const p = ((i + 1) / (this.numPoints - 1)) * 100;
        const cp = p - ((1 / (this.numPoints - 1)) * 100) / 2;
        str += `C ${cp} ${points[i]} ${cp} ${points[i + 1]} ${p} ${
          points[i + 1]
        } `;
      }
      str += `V 0 H 0`;
      return str;
    },
    exponentialIn(t) {
      return t == 0.0 ? t : Math.pow(2.0, 10.0 * (t - 1.0));
    },
    exponentialInOut(t) {
      return t == 0.0 || t == 1.0
        ? t
        : t < 0.5
        ? +0.5 * Math.pow(2.0, 20.0 * t - 10.0)
        : -0.5 * Math.pow(2.0, 10.0 - t * 20.0) + 1.0;
    },
    circularInOut(t) {
      return t < 0.5
        ? 0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * t * t))
        : 0.5 * (Math.sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);
    }
  }
};
</script>
