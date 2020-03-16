<template>
  <div :class="videoSection">
    <div class="video-section-header">
      <h4>{{videoName}}</h4>
    </div>
    <div class="video-wrapper" :data-aos="animData" data-aos-easing="ease-out">
      <PlayButton v-bind:isVisible="isVisible" />
      <video controls muted :src="videoSrc" :poster="videoPoster" v-on:click="isVideoPlaying"></video>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.section-matas {
  grid-row-start: 2;
}
.section-fristads {
  grid-row-start: 23;
}
.section-inspiration {
  grid-row-start: 44;
}
.section-danoffice {
  grid-row-start: 65;
}
.section-kunderejse {
  grid-row-start: 86;
}
.video-section {
  display: grid;
  grid-template-rows: repeat(18, 4.94vh);
  grid-row-gap: 1vh;
  grid-template-columns: repeat(24, 3.125vw);
  grid-column-gap: 1vw;
  .video-wrapper {
    grid-row-start: 3;
    grid-row-end: 17;
    grid-column-start: 4;
    grid-column-end: 22;
    position: relative;
    .play-button {
      position: absolute;
      width: 9vw;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    video {
      width: 100%;
      background: black;
      border: 2px solid black;
      &:focus {
        outline: 0;
      }
      &:hover {
        cursor: pointer;
        box-shadow: 26px 28px 14px #b6b6b6;
        transition: all 0.1s ease;
      }
    }
  }

  .video-section-header {
    color: white;
    background: black;
    grid-column-start: 1;
    grid-column-end: 6;
    display: grid;
    grid-template-columns: repeat(24, 3.125vw);
    grid-column-gap: 1vw;
    height: 3.4vh;
    transform: translateX(-1vw);
    font-family: "Source Code Pro", monospace;
    h4 {
      grid-row-start: 2;
      grid-column-start: 2;
      grid-column-end: 8;
      font-size: 18px;
      transform: translateX(1vw);
      font-weight: 300;
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .video-section{
    .video-wrapper{
      grid-row-end: 7;
      grid-column-start: 2;
      grid-column-end: 24;
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .video-section {
    .video-section-header {
      grid-column-end: 7;
      h4 {
        font-size: 16px;
      }
    }
  }
}
</style>
<script>
import PlayButton from "@/components/svg/PlayButton.vue";
export default {
  name: "VideoCaseComponent",
  data(){
    return{
      isVisible: false,
    }
  },
  props: {
    videoHeaderClass: String,
    videoName: String,
    videoSrc: String,
    videoPoster: String,
    videoSection: String,
    animData: String
  },
  components: {
    PlayButton
  },
  methods:{
    isVideoPlaying(e){
      if(e.target.paused){
        this.isVisible = true;
      }
      else{
        this.isVisible = false;
      }
    }
  }
};
</script>
