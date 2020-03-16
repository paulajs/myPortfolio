<template>
  <div class="canvas-over-wrapper">
    <canvas
      ref="canvasOver"
      v-on:mousemove="onMouseOver"
      v-on:mouseenter="onMouseEnter"
      v-on:mouseleave="onMouseLeave"
    ></canvas>
  </div>
</template>
<style lang="scss" scoped>
.canvas-over-wrapper {
  grid-column-start: 4;
  grid-column-end: 22;
  grid-row-start: 104;
  grid-row-end: 114;

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
  name: "ThreeMouseOver",
  data() {
    return {
      canvasRect: null,
      aspectRatio: null,
      scene: new THREE.Scene(),
      camera: null,
      renderer: null,
      raycaster: null,
      colorArray: [0xff90ff, 0xff00ff, 0x00ffc8, 0x00cf78],
      isAnimating: false
    };
  },
  mounted() {
    this.renderer = rendererFactory({
      canvas: this.$refs.canvasOver
    });
    this.canvasRect = this.$refs.canvasOver.getBoundingClientRect();
    this.aspectRatio = this.canvasRect.width / this.canvasRect.height;

    window.setTimeout(() => {
      this.createScene();
      this.animate();
    }, 100);
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
      this.addBalls();
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
    addBalls() {
      var radius = 20;

      var i = -300;
      while (i < 300) {
        this.makeBall(
          radius,
          i,
          -100,
          0,
          this.colorArray[Math.floor(this.colorArray.length * Math.random())]
        );
        this.makeBall(
          radius,
          i,
          -50,
          0,
          this.colorArray[Math.floor(this.colorArray.length * Math.random())]
        );
        this.makeBall(
          radius,
          i,
          0,
          0,
          this.colorArray[Math.floor(this.colorArray.length * Math.random())]
        );
        this.makeBall(
          radius,
          i,
          50,
          0,
          this.colorArray[Math.floor(this.colorArray.length * Math.random())]
        );
        this.makeBall(
          radius,
          i,
          100,
          0,
          this.colorArray[Math.floor(this.colorArray.length * Math.random())]
        );
        i = i + 50;
      }
    },
    makeBall(radius, posX, posY, posZ, color) {
      const geometry = new THREE.SphereGeometry(radius, 12, 12);
      const material = new THREE.MeshPhongMaterial({ color: color });
      const ball = new THREE.Mesh(geometry, material);
      ball.position.set(posX, posY, posZ);
      this.scene.add(ball);
    },
    onMouseOver() {
      this.canvasRect = this.$refs.canvasOver.getBoundingClientRect();
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
        var ballscale = intersects[0].object.scale;
        new TWEEN.Tween(ballscale)
          .to(
            {
              x: 0.3 + 3 * Math.random(),
              y: 0.3 + 3 * Math.random()
            },
            1500
          )
          .easing(TWEEN.Easing.Elastic.Out)
          .start();
      }
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
