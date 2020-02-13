<template>
  <div class="audio-section-bubbles">
    <div id="audio-player">
      <div id="audio-box" ref="audiobox">
        <audio ref="theaudio" src="" controls loop></audio>
      </div>
    </div>
    <div class="canvas-wrapper">
      <button id="audio-start" ref="audiostart" v-on:click="initMp3Player">Play</button>
      <img class="bubbles-img" src="@/assets/img/audio/space.png" v-on:click="audioControlPLay" alt="" />
      <canvas id="bubbles-render" ref="bubblesrenderer" ></canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.audio-section-bubbles {
  @include place-in-grid(57, 67, 1, 25);
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
    @include place-in-grid(5, 18, 1, 25);
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
      z-index: 10;
      box-shadow: 27px 18px 38px #101010;
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
    .bubbles-img {
      position: absolute;
      width: 68.3%;
      top: 0;
      cursor: pointer;
    }
    #bubbles-render {
      background: black;
      border: 1px solid black;
    }
  }
}
</style>
<script>
export default {
  name: "AudioSectionBubbles",
  data() {
    return {
      audio: new Audio(),
      canvas: null,
      ctx: null,
      analyser: null,
      positionArray: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.bubblesrenderer;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth / 1.5;
      this.canvas.height = window.innerHeight / 1.7;
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
      this.$refs.theaudio.volume = 0.4;
      this.$refs.theaudio.play();
      for (let i = 0; i < 201; i++) {
        this.positionArray[i] = /* (this.canvas.width / 10) +  */ Math.floor(
          this.canvas.width * Math.random()
        );
      }
      this.frameLooper();
    },
    frameLooper() {
      window.requestAnimationFrame(this.frameLooper);
      const fbc_array = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(fbc_array);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.createBubbles(fbc_array);
    },
    createBubbles(fbc_array) {
      /*  this.ctx.strokeStyle = this.gradient("#ff90ff", "#00ffc8","#ff00ff","#ff90ff", "#00ffc8" ); */
      /* this.ctx.strokeStyle = this.gradient("#3250f7","#32f78f","#8bc34a","#2196f3","#f732dd" ); */
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.fillStyle = "#ffffff";

      const bars = 200; //75
      for (let i = 0; i < bars; i++) {
        const bar_x = this.positionArray[i]; //(10,30)
        const bar_y =
          -40 +
          i * 5 +
          i / 2; /* 1 + i * 10;   -5*i + this.canvas.height*(5/(i+1))*/
        let increment = i * 4; //2,3,4

        const bar_height = -(fbc_array[increment] / 10);
        //ctx.fillRect(bar_x*Math.random(), canvas.height*Math.random(), bar_width, bar_height);
        this.ctx.beginPath();
        this.ctx.shadowBlur = 6;
        this.ctx.shadowColor = "white";
        this.ctx.arc(bar_x, bar_y, -bar_height, 0, 2 * Math.PI, false);
        this.ctx.lineWidth = 2; /* -bar_height * 0.12; */ //5
        this.ctx.stroke();
        if (i % 2 == 0) {
          this.ctx.fill();
        }
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
      grd.addColorStop(0.25, color2);
      grd.addColorStop(0.5, color3);
      grd.addColorStop(0.75, color4);
      grd.addColorStop(1, color5);
      return grd;
    }
  }
};
</script>
