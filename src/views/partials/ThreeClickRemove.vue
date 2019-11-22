<template>
  <div class="canvas-remove-wrapper">
    <canvas ref="canvasRemove" v-on:click="onMouseDown"></canvas>
  </div>
</template>
<style lang="scss" scoped>
.canvas-remove-wrapper {
  grid-column-start: 4;
  grid-column-end: 22;
  grid-row-start: 86;
  grid-row-end: 96;

  canvas {
    border: 2px solid black;
    height: 100%;
    width: 100%;
  }
}
</style>
<script>
import * as THREE from "three";
import * as TWEEN from "tween";

const rendererFactory = config =>
  new THREE.WebGLRenderer({
    antialias: true,
    ...config
  });

export default {
  name: "ThreeClickRemove",
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
      canvas: this.$refs.canvasRemove
    });
    this.canvasRect = this.$refs.canvasRemove.getBoundingClientRect();
    this.aspectRatio = this.canvasRect.width / this.canvasRect.height;
    this.createScene();
    this.animate();
  },
  methods: {
    createScene() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.aspectRatio,
        0.1,
        20000
      );
      this.renderer.setSize(this.canvasRect.width, this.canvasRect.height);
      this.scene.background = new THREE.Color(0xffffff);
      this.scene.fog = new THREE.Fog(0xffffff, 0.1, 1100);
      this.camera.position.z = 500;

      this.addLights();
      this.addCubes();
    },
    addLights() {
      const ambientLight = new THREE.AmbientLight(0xcccccc);
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      const light = new THREE.SpotLight(0xffffff);
      this.scene.add(ambientLight);
      this.scene.add(directionalLight);
      this.scene.add(light);

      ambientLight.intensity = 0.4;
      directionalLight.position.set(100, 100, 500);
      directionalLight.intensity = 0.2;
      light.position.set(200, 500, 500);
    },
    addCubes() {
      var cubeSize = 30;

      var i = -300;
      while (i < 300) {
        this.makeCube(cubeSize, i, -100, 0, this.colorArray[Math.floor(this.colorArray.length*Math.random())]);
        this.makeCube(cubeSize, i, -50, 0, this.colorArray[Math.floor(this.colorArray.length*Math.random())]);
        this.makeCube(cubeSize, i, 0, 0, this.colorArray[Math.floor(this.colorArray.length*Math.random())]);
        this.makeCube(cubeSize, i, 50, 0, this.colorArray[Math.floor(this.colorArray.length*Math.random())]);
        this.makeCube(cubeSize, i, 100, 0, this.colorArray[Math.floor(this.colorArray.length*Math.random())]);
        i = i + 50;
      }
    },

    makeCube(cubeSize, posX, posY, posZ, color) {
      const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      const material = new THREE.MeshPhongMaterial({ color: color });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(posX, posY, posZ);
      this.scene.add(cube);
    },
    onMouseDown() {
      this.canvasRect = this.$refs.canvasRemove.getBoundingClientRect();
      var mouse = new THREE.Vector3();
      mouse.x =
        ((event.clientX - this.canvasRect.left) / this.canvasRect.width) * 2 -
        1;
      mouse.y =
        -((event.clientY - this.canvasRect.top) / this.canvasRect.height) * 2 +
        1;
      mouse.z = 0.5;

      var raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, this.camera);
      var intersects = raycaster.intersectObjects(this.scene.children);
      if (intersects.length > 0) {
        this.scene.remove(intersects[0].object);
      }
      this.animate();
    },
    animate() {
      // requestAnimationFrame(this.animate);
      console.log("anim");
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
