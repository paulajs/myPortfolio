<template>
  <div class="audio-section-img">
    <div id="audio-player">
      <div id="audio-box" ref="audiobox">
        <audio ref="theaudio" src="@/assets/audio/chill_jim.mp3" controls loop></audio>
      </div>
    </div>
    <div class="canvas-wrapper">
      <button id="audio-start" ref="audiostart" v-on:click="initMp3Player">Play</button>
      <img class="img-back" src="@/assets/img/audio/jim-bg.png" v-on:click="audioControlPLay" alt />
      <canvas id="img-render" ref="imgrenderer"></canvas>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.audio-section-img {
  @include place-in-grid(56, 69, 1, 25);
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
    @include place-in-grid(5, 16, 1, 25);
    justify-content: center;
    display: flex;
    #audio-start {
      position: absolute;
      top: -11vh;
      left: 50%;
      transform: translate(-50%, 0%);
      @include header-style(uppercase);
      background: black;
      font-size: 3.4vw;
      width: 68.4%;
      height: 6vw;
      border: 1px solid black;
      z-index: 8;
      -webkit-transition: all 0.15s ease-in;
      transition: all 0.15s ease-in;
      &:hover {
        cursor: pointer;
        background: $color-pink;
        /* color: black; */
        transition: all 0.2s ease-in;
      }
      &:active {
        background: black;
        color: white;
      }
    }
    .img-back {
      width: 68.5%;
      position: absolute;
      z-index: 1;
      margin-top: 0vh;
      cursor: pointer;
    }
    #img-render {
      background: linear-gradient(#262626, #6e65f6);
      border: 4px solid black;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .audio-section-img {
    grid-row-start: 50;
    grid-row-end: 60;
    #audio-player {
      #audio-box {
        audio {
          width: 98%;
        }
      }
    }
    #audio-player {
      grid-row-end: 4;
    }
    .canvas-wrapper {
      grid-row-start: 5;
      grid-row-end: 10;
      .img-back {
        width: 92.5%;
        z-index: 1;
        bottom: 0;
      }
      #audio-start {
        font-size: 7.4vw;
        width: 78.4%;
        height: 14vw;
      }
    }
  }
}
</style>
<script>
export default {
  name: "AudioSectionImg",
  data() {
    return {
      audio: new Audio(),
      canvas: null,
      ctx: null,
      analyser: null,
      bar_height: 6,
      bars: 200,
      bar_width: 7,
      bar_x: 8
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.canvas = this.$refs.imgrenderer;
      this.ctx = this.canvas.getContext("2d");
      if (window.innerWidth < 736) {
        this.canvas.width = window.innerWidth / 1.1;
        this.canvas.height = window.innerHeight / 2;
        this.bar_height = 2;
        this.bars= 50;
        this.bar_width = 6;
        this.bar_x = 7;
      } else {
        this.canvas.width = window.innerWidth / 1.5;
        this.canvas.height = window.innerHeight / 1.5;
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
      this.$refs.theaudio.volume = 0.4;
      this.$refs.theaudio.play();
      this.frameLooper();
    },
    frameLooper() {
      window.requestAnimationFrame(this.frameLooper);
      const fbc_array = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(fbc_array);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = this.gradient("#ff90ff", "#ff00ff", "#00ffc8");
      this.createBars(fbc_array);
    },
    createBars(fbc_array) {
      const bars = this.bars;
      for (let i = 0; i < bars; i++) {
        const bar_x = i * this.bar_x;
        const bar_width = this.bar_width;
        const bar_height = -fbc_array[i] * this.bar_height;
        this.ctx.fillRect(bar_x, this.canvas.height, bar_width, bar_height);
      }
    },
    gradient(color1, color2, color3) {
      const grd = this.ctx.createLinearGradient(0, 0, 0, 1000);
      grd.addColorStop(1, color1);
      grd.addColorStop(0.6, color2);
      grd.addColorStop(0, color3);
      return grd;
    }
  }
};
</script>
