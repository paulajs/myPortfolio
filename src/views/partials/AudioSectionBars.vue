<template>
  <div class="audio-section-bars">
    <div id="audio-player">
      <div id="audio-box" ref="audiobox">
        <audio ref="theaudio" src="@/assets/audio/winter_mixdown.mp3" controls loop></audio>
      </div>
    </div>
    <div class="canvas-wrapper">
      <button id="audio-start" ref="audiostart" v-on:click="initMp3Player">Play</button>
      <canvas id="bars-render" ref="barsrenderer" v-on:click="audioControlPLay"></canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.audio-section-bars {
  @include place-in-grid(20, 30, 1, 25);
  justify-self: center;
  @include create-grid(20, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  #audio-player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    @include place-in-grid(1, 3, 1, 25);
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
    @include place-in-grid(3, 13, 1, 25);
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

    #bars-render {
      background: black;
      border: 1px solid black;
      cursor: pointer;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .audio-section-bars {
    grid-row-start: 13;
    grid-row-end: 27;
    #audio-player {
      #audio-box {
        audio {
          width: 98%;
        }
      }
    }
    .canvas-wrapper {
      #audio-start {
        font-size: 10vw;
        width: 40vw;
        height: 40vw;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .audio-section-bars {
    @include place-in-grid(22, 35, 1, 25);
  }
}
</style>
<script>
const music = require("@/assets/audio/chill_jim.mp3");
export default {
  name: "AudioSectionBars",
  data() {
    return {
      audio: new Audio(),
      canvas: null,
      ctx: null,
      analyser: null,
      bar_height: 2.5,
      bars: 200,
      bar_width: 3,
      bar_x: 8,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.barsrenderer;
      this.ctx = this.canvas.getContext("2d");
      if (window.innerWidth < 736) {
        this.canvas.width = window.innerWidth/1.1;
        this.canvas.height = window.innerHeight/4;
        this.bar_height = 1;
        this.bars = 50;
        this.bar_width = 3;
        this.bar_x = 7;
      } else {
        this.canvas.width = window.innerWidth / 1.5;
        this.canvas.height = window.innerHeight / 2;
      }
    },
    audioControlPLay() {
      if (this.$refs.theaudio.paused) {
        this.$refs.theaudio.play();
      } else {
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

      this.ctx.fillStyle = this.gradient("#ff90ff", "#00ffc8", "#ff00ff");
      this.createBars(fbc_array);
    },
    gradient(color1, color2, color3) {
      const grd = this.ctx.createLinearGradient(0, 0, 0, 1000);
      grd.addColorStop(1, color1);
      grd.addColorStop(0.6, color2);
      grd.addColorStop(0, color3);
      return grd;
    },
    createBars(fbc_array) {
      /* const bars = 200; */
      for (let i = 0; i < this.bars; i++) {
        const bar_x = i * this.bar_x;
        const bar_width = this.bar_width;
        const bar_height = -fbc_array[i] * this.bar_height;
        this.ctx.fillRect(bar_x, this.canvas.height, bar_width, bar_height);
      }
    }
  }
};
</script>
