<template>
  <div class="three-anim-canvas">
    <button class="try" v-on:click="playAnimation">Play animation</button>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
.three-anim-canvas {
  grid-row-start: 20;
  grid-column-start: 2;
  grid-column-end: 24;
  justify-self: center;
  display: flex;
  flex-direction: column;
  .try {
    width: 10vw;
    align-self: center;
    font-family: $font-secundary;
    padding: 1% 2%;
    color: black;
    background: white;
    border: 1px solid black;
    &:hover {
      cursor: pointer;
      background: black;
      color: white;
      transition: all 0.3s ease-in;
    }
    &:focus {
      outline: 0;
    }
  }
  canvas {
    bottom: 1px solid black;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .three-anim-canvas {
    grid-row-start: 12;
    button.try {
      width: 55vw;
      padding: 9% 5%;
      font-size: 5vw;
    }
  }
}
</style>
<script>
import * as THREE from "three";
import * as TWEEN from "tween";

export default {
  name: "ThreeAnim",
  data() {
    return {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        2000
      ),
      renderer: new THREE.WebGLRenderer({ antialias: true }),
      cube: null,
      isAnimating: false,
      animationDurationMS: 1000,
      distance: 200,
    };
  },
  methods: {
    createScene() {
      this.scene.background = new THREE.Color(0xffffff);
      this.scene.fog = new THREE.Fog(0xffffff);

      this.camera.position.z = 600;
      if(window.innerWidth < 736){
        this.renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
        this.distance = 80;
      }
      else{
        this.renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
      }

      document
        .querySelector(".three-anim-canvas")
        .appendChild(this.renderer.domElement);

      this.addLights();

      this.addCube(80, 0xff00ff);
      this.animate();
    },
    addLights() {
      var ambientLight = new THREE.AmbientLight(0xcccccc);
      ambientLight.intensity = 0.4;
      this.scene.add(ambientLight);

      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(100, 100, 500);
      directionalLight.intensity = 0.5;
      this.scene.add(directionalLight);

      var light = new THREE.SpotLight(0xffffff);
      light.position.set(200, 300, 0);
      this.scene.add(light);
    },
    addCube(size, color) {
      var cubeSize = size;
      var geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
      var material = new THREE.MeshPhongMaterial({ color: color });
      this.cube = new THREE.Mesh(geometry, material);
      this.cube.rotation.y = -45;
      this.cube.rotation.x = -15;
      this.cube.position.x = 0;
      this.scene.add(this.cube);
    },
    playAnimation() {
      if (this.isAnimating) {
        return;
      }
      var animA = new TWEEN.Tween(this.cube.position)
        .to(
          {
            x: this.distance,
            y: 0,
            z: 0
          },
          this.animationDurationMS
        )
        .easing(TWEEN.Easing.Elastic.In)
        .start();

      var animB = new TWEEN.Tween(this.cube.position)
        .to(
          {
            x: -this.distance,
            y: 0,
            z: 0
          },
          this.animationDurationMS
        )
        .easing(TWEEN.Easing.Elastic.In);

      animA.chain(animB);
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, this.animationDurationMS * 2);
      this.animate();
    },
    animate() {
      if (this.isAnimating) {
        requestAnimationFrame(this.animate);
      }
      TWEEN.update();
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
    window.setTimeout(()=>{
      this.createScene();
    }, 100);

  }
};
</script>
