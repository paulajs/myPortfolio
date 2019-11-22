<template>
  <div class="canvas-wrapper">
    <h2 data-text="CLICK!">Click!</h2>
    <canvas ref="canvas" v-on:click="onMouseDown"></canvas>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.canvas-wrapper {
  grid-column-start: 4;
  grid-column-end: 22;
  grid-row-start: 33;
  grid-row-end: 43;
  position: relative;
  h2{
    @include header-style(uppercase);
    position: absolute;
   left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 12vw;
  z-index: -20;
    /* animation: pulse 0.3s ease-in infinite; */

  }
  canvas {
    border: 2px solid black;
    height: 100%;
    width: 100%;
  }
}
@keyframes pulse{
  0%{
    transform:  translate(-50%, -50%) scale(1);
  }
  50%{
    transform:  translate(-50%, -50%) scale(1.01);
  }
  100%{
    transform:  translate(-50%, -50%) scale(1);
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
  name: "ThreeClickAdd",
  data() {
    return {
      canvasRect: null,
      aspectRatio: null,
      scene: new THREE.Scene(),
      camera: null,
      renderer: null,
      colorArray: [0xff90ff,0xff00ff, 0x00ffc8, 0x00cf78],
      isAnimating: false
    };
  },
  mounted() {
    this.renderer = rendererFactory({
      canvas: this.$refs.canvas
    });
    this.canvasRect = this.$refs.canvas.getBoundingClientRect();
    this.aspectRatio = this.canvasRect.width / this.canvasRect.height;
    this.createScene();
    this.animate();
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
      this.renderer.setClearColor( 0xffffff, 0 )
      //this.scene.background = new THREE.Color(0xffffff);
      this.scene.fog = new THREE.Fog(0xffffff, 0.1, 7250);
      this.camera.position.z = 0;

      this.addLights();
    },
    addLights() {
      const ambientLight = new THREE.AmbientLight(0xcccccc);
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      const light = new THREE.SpotLight(0xffffff);
      this.scene.add(ambientLight);
      this.scene.add(directionalLight);
      this.scene.add(light);

      ambientLight.intensity = 0.4;
      directionalLight.position.set(0, 1000, 1800);
      directionalLight.intensity = 0.01;
      light.intensity = 0.8;
      light.position.set(0, 500, 1200);
    },
    makeAddCube(cubeSize, posX, posY, posZ, color) {
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const material = new THREE.MeshPhongMaterial({ color: color });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(posX, posY, posZ);
      this.scene.add(cube);
    },
    onMouseDown(event) {
      this.canvasRect = this.$refs.canvas.getBoundingClientRect();
       const x = event.clientX - this.canvasRect.left;
      const y = event.clientY - this.canvasRect.top;



        const canvasX =
        (-this.canvasRect.width + x * 2) * (this.aspectRatio * 1.25);
      const canvasY =
        (this.canvasRect.height - y * 2) * (this.aspectRatio * 1.25);

      const cubeColor = this.colorArray[Math.floor(this.colorArray.length*Math.random())];
      //const cubeColor = 0xffffff * Math.random();
      const cubeSize = this.canvasRect.width / 6;
      const canvasZ = -(this.canvasRect.width * 3);
      this.makeAddCube(cubeSize, canvasX, canvasY, canvasZ, cubeColor);
      this.isAnimating = true;
      this.animate();
      /*  setTimeout(() => {
        this.isAnimating = false;
      }, 10); */
    },
    animate() {
      /* if (this.isAnimating) {
        requestAnimationFrame(this.animate);
      } */
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
