<template>
  <div class="canvas-move-wrapper">
    <h2 ref="text1" class="text1">Click here!</h2>
    <h2 ref="text2" class="text2">Or anywhere</h2>
    <canvas ref="canvasMove" v-on:click="onMouseDown"></canvas>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.canvas-move-wrapper {
  grid-column-start: 4;
  grid-column-end: 22;
  grid-row-start: 52;
  grid-row-end: 62;
  position: relative;
  .text1 {
    @include header-style(uppercase);
    position: absolute;
    left: 5%;
    top: 10%;
    font-size: 4vw;
    transform: scale(0.9);
    animation: pop 1s ease-in-out infinite;
    z-index: -20;
  }
  .text2 {
    @include header-style(uppercase);
    position: absolute;
    left: 70%;
    top: 70%;
    font-size: 2.5vw;
    transform: scale(0.9);
    animation: pop 1s ease-in-out infinite;
    z-index: -20;
  }
  canvas {
    border: 2px solid black;
    height: 100%;
    width: 100%;
  }
  @keyframes pop{
    0%{
      transform: scale(0.9);
    }
    50%{
      transform: scale(1);

    }
    100%{
      transform: scale(0.9);
    }
  }
}
</style>
<script>
import * as THREE from "three";
import * as TWEEN from "tween";

const rendererFactory = config =>
  new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    ...config
  });

export default {
  name: "ThreeClickMove",
  data() {
    return {
      canvasRect: null,
      aspectRatio: null,
      scene: new THREE.Scene(),
      camera: null,
      renderer: null,
      isAnimating: false,
      animationDuration: 1000,
      timeoutID: null,
      textVisible: true
    };
  },
  mounted() {
    this.renderer = rendererFactory({
      canvas: this.$refs.canvasMove
    });
    this.canvasRect = this.$refs.canvasMove.getBoundingClientRect();
    this.aspectRatio = this.canvasRect.width / this.canvasRect.height;
    this.createScene();
  },
  watch: {
    textVisible: function(){
      this.$refs.text1.style.display = "none";
      this.$refs.text2.style.display = "none";
    }
  },
  methods: {
    createScene() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.aspectRatio,
        0.01,
        20000
      );
      this.renderer.setSize(this.canvasRect.width, this.canvasRect.height);
      //this.scene.background = new THREE.Color(0xffffff);
      this.scene.fog = new THREE.Fog(0xffffff, 0.1, 8050);
      this.camera.position.z = 3500;

      this.addLights();
      this.makeAddCube(500, 0, 0, -800, 0x00cf78);
      this.animate();
    },
    addLights() {
      const ambientLight = new THREE.AmbientLight(0xcccccc);
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      const light = new THREE.SpotLight(0xffffff);
      this.scene.add(ambientLight);
      this.scene.add(directionalLight);
      this.scene.add(light);

      ambientLight.intensity = 0.8;
      directionalLight.position.set(0, 0, 500);
      directionalLight.intensity = 0.2;
      light.position.set(0, 50, 800);
    },
    makeAddCube(cubeSize, posX, posY, posZ, color) {
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const material = new THREE.MeshPhongMaterial({ color: color });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(posX, posY, posZ);
      cube.name = "player";
      this.scene.add(cube);
    },
    onMouseDown() {

        this.textVisible = false;

      this.canvasRect = this.$refs.canvasMove.getBoundingClientRect();
      const x = event.clientX - this.canvasRect.left;
      const y = event.clientY - this.canvasRect.top;
      const canvasX =
        (-this.canvasRect.width + x * 2) * (this.aspectRatio * 1.25);
      const canvasY =
        (this.canvasRect.height - y * 2) * (this.aspectRatio * 1.25);

      var player = this.scene.getObjectByName("player");

      new TWEEN.Tween(player.position)
        .to(
          {
            x: canvasX,
            y: canvasY,
            z: -800
          },
          1000
        )
        .easing(TWEEN.Easing.Elastic.Out)
        .start();

      if (!this.isAnimating) {
        this.isAnimating = true;
        this.animate();
      }
      if (this.timeoutID) {
        clearTimeout(this.timeoutID);
      }
      this.timeoutID = setTimeout(() => {
        this.isAnimating = false;
        this.timeoutID = null;
      }, this.animationDuration);
    },
    animate() {
      if (this.isAnimating) {
        requestAnimationFrame(this.animate);
      }
      TWEEN.update();
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
