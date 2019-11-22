<template>
  <div class="audio-section-circle">
    <div id="audio-player">
      <div id="audio-box" ref="audiobox">
        <audio ref="theaudio" src="@/assets/audio/spacy_jim.mp3" controls loop></audio>
      </div>
    </div>
    <div class="canvas-wrapper">
      <button id="audio-start" ref="audiostart" v-on:click="initMp3Player">Play</button>
      <canvas id="circle-render" ref="circlerenderer" v-on:click="audioControlPLay"></canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.audio-section-circle {
  @include place-in-grid(38, 48, 1, 25);
  justify-self: center;
  @include create-grid(20, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  #audio-player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @include place-in-grid(3, 5, 1, 25);
    #audio-box {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 2vh;
      audio {
        width: 52%;
        justify-self: center;
        display: none;
      }
    }
  }
  .canvas-wrapper {
    position: relative;
    @include place-in-grid(5, 15, 1, 25);
    justify-content: center;
    display: flex;
    #audio-start {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include header-style(uppercase);
      background: $gradient;
      font-size: 3vw;
      width: 10vw;
      height: 10vw;
      border-radius: 100%;
      border: none;
      transition: all 0.15s ease-in;
      &:hover {
        cursor: pointer;
        background: white;
        color: black;
        transition: all 0.2s ease-in;
      }
      &:active {
        background: black;
        color: white;
      }
    }

    #circle-render {
      background: black;
      border: 1px solid black;
      cursor: pointer;
    }
  }
}
</style>
<script>
export default {
  name: "AudioSectionCircle",
  data() {
    return {
      audio: new Audio(),
      canvas: null,
      ctx: null,
      analyser: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.circlerenderer;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth / 1.5;
      this.canvas.height = window.innerHeight / 2;
    },
      audioControlPLay(){
         if (this.$refs.theaudio.paused) {
        this.$refs.theaudio.play();
      }
      else{
        this.$refs.theaudio.pause();
      }
    },
    initMp3Player() {
      this.$refs.audiostart.style.display = "none";
      this.$refs.theaudio.style.display = "block";
      const context = new AudioContext();
      this.analyser = context.createAnalyser();

      const source = context.createMediaElementSource(this.$refs.theaudio);
      source.connect(this.analyser);
      this.analyser.connect(context.destination);
      this.$refs.theaudio.volume = 0.7;
      this.$refs.theaudio.play();
      this.frameLooper();
    },
    frameLooper() {
      window.requestAnimationFrame(this.frameLooper);
      const fbc_array = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(fbc_array);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.createCircles(fbc_array);
    },
    createCircles(fbc_array) {
      const circles = 200;
      for (let i = 0; i < circles; i++) {
        const increment = i * 3;
        const radius = -(fbc_array[increment] / 1.3);

        /* this.ctx.strokeStyle = this.gradient("#ff90ff", "#00ffc8","#ff00ff","#ff90ff", "#00ffc8"); */
        this.ctx.strokeStyle = this.gradient("#3250f7","#32f78f","#8bc34a","#2196f3","#f732dd");
        this.ctx.beginPath();
        this.ctx.arc(
          this.canvas.width / 2,
          this.canvas.height / 2,
          -radius * 3,
          0,
          2 * Math.PI,
          false
        );
        this.ctx.lineWidth = 3; //5
        this.ctx.stroke();
      }
    },
    gradient(color1, color2, color3, color4, color5) {
      var grd = this.ctx.createRadialGradient(
        this.canvas.width / 2,
        this.canvas.height / 2,
        50,
        this.canvas.width / 2,
        this.canvas.height / 2,
        300
      );
      grd.addColorStop(0, color1);
      grd.addColorStop(0.15, color2);
      grd.addColorStop(0.35, color3);
      grd.addColorStop(0.5, color4);
      grd.addColorStop(1, color5);
      return grd;
    }
  }
};
</script>
