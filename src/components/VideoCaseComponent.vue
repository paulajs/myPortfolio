<template>
  <div :class="videoSection">
    <div class="video-section-header">
      <h4>{{videoName}}</h4>
    </div>
    <video controls muted :src="videoSrc" :poster="videoPoster"></video>
  </div>
</template>
<style lang="scss" scoped>
.section-matas {
  grid-row-start: 4;
}
.section-fristads {
  grid-row-start: 25;
}
.section-inspiration {
  grid-row-start: 46;
}
.section-danoffice {
  grid-row-start: 67;
}
.section-kunderejse {
  grid-row-start: 88;
}
.video-section {
  display: grid;
  grid-template-rows: repeat(18, 4.94vh);
  grid-row-gap: 1vh;
  grid-template-columns: repeat(24, 3.125vw);
  grid-column-gap: 1vw;
  video {
    grid-row-start: 3;
    grid-column-start: 4;
    grid-column-end: 22;
    width: 100%;
    border: 2px solid black;
    background: black;
    &:focus {
      outline: 0;
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
</style>
<script>
export default {
  name: "VideoCaseComponent",
  props: {
    videoHeaderClass: String,
    videoName: String,
    videoSrc: String,
    videoPoster: String,
    videoSection: String
  }
};
</script>
