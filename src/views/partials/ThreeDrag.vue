<template>
  <div class="canvas-drag-wrapper">
    <canvas ref="canvasDrag" v-on:mouseenter="onMouseEnter" v-on:mouseleave="onMouseLeave"></canvas>
  </div>
</template>
<style lang="scss" scoped>
.canvas-drag-wrapper {
  grid-column-start: 4;
  grid-column-end: 22;
  grid-row-start: 136;
  grid-row-end: 146;

  canvas {
    border: 2px solid black;
    height: 100%;
    width: 100%;
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
.canvas-drag-wrapper {
  grid-row-start: 138;
}
}
</style>
<script>
import * as THREE from "three";
import * as TWEEN from "tween";
import DragControls from "drag-controls";

DragControls.install({ THREE: THREE });

const rendererFactory = config =>
  new THREE.WebGLRenderer({
    antialias: true,
     alpha: true,
    ...config
  });

export default {
  name: "ThreeDrag",
  data() {
    return {
      canvasRect: null,
      aspectRatio: null,
      scene: new THREE.Scene(),
      camera: null,
      renderer: null,
      toDrag: [],
      colorArray: [0xff90ff,0xff00ff, 0x00ffc8, 0x00cf78],
      isAnimating: false
    };
  },
  mounted() {
    this.renderer = rendererFactory({
      canvas: this.$refs.canvasDrag
    });
    this.canvasRect = this.$refs.canvasDrag.getBoundingClientRect();
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
      this.addCube();
      this.animate();
    },
    addLights() {
      const ambientLight = new THREE.AmbientLight(0xcccccc);
      const directionalLight = new THREE.DirectionalLight(0xffffff);
      const light = new THREE.SpotLight(0xffffff);
      this.scene.add(ambientLight);
      this.scene.add(directionalLight);
      this.scene.add(light);

      ambientLight.intensity = 0.4;
      directionalLight.position.set(100, 300, 500);
      directionalLight.intensity = 0.2;
      light.position.set(200, 500, 500);
    },
    addCube() {
      var cubeSize = 70;
      var geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      var material = new THREE.MeshPhongMaterial({
        color: 0xff00ff,
        specular: 0xaeaeae,
        shininess: 2
      });
      var mesh = new THREE.Mesh(geometry, material);
      mesh.rotation.y = 45;
      this.scene.add(mesh);
      this.toDrag.push(mesh);
      var dragControls = new DragControls(
        this.toDrag,
        this.camera,
        this.renderer.domElement
      );

      dragControls.addEventListener("dragend", function(e) {
        //e.object.material.color.setHex(this.colorArray[Math.floor(this.colorArray.length*Math.random())]);
        new TWEEN.Tween(e.object.scale)
          .to(
            {
              x: 0.3 + Math.random() * 2,
              y: 0.3 + Math.random() * 2,
              z: 0.3 + Math.random() * 2
            },
            500
          )
          .easing(TWEEN.Easing.Elastic.InOut)
          .start();
      });
    },
    onMouseEnter() {
      this.isAnimating = true;
      this.animate();
    },
    onMouseLeave() {
      this.isAnimating = false;
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
