<template>
  <div :class="downloadClass" :id="downloadID">
    <div class="space-background"></div>
    <img class="space-stars" src="../assets/img/SVG/stars.svg" alt />
    <div class="top-text">
      <p>download for</p>
    </div>
    <slot></slot>
    <img class="os-logo" :src="logoImg" alt="windows logo" />
    <div class="download-choice-text">
      <p>{{operatingSystem}}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

#horror-win {
  grid-column-start: 3;
  grid-column-end: 9;
  background: black;
  &:hover {
    background: $color-pink;
    transition: all 0.7s ease;
  }
}
#horror-mac {
  grid-column-start: 10;
  grid-column-end: 16;
  background: black;
  &:hover {
    background: $color-pink;
    transition: all 0.7s ease;
  }
  .space-background {
    opacity: 0;
  }
  &:hover .space-background {
    opacity: 0.5;
    transition: all 0.4s ease-out;
  }
}
#horror-linux {
  grid-column-start: 17;
  grid-column-end: 23;
  background: black;
  &:hover {
    background: $color-pink;
    transition: all 0.7s ease;
  }
  .space-background {
    opacity: 0;
  }
  &:hover .space-background {
    opacity: 0.7;
    transition: all 0.4s ease-out;
  }
}
#wreck-win {
  grid-column-start: 3;
  grid-column-end: 9;
  background: $color-pink;
  overflow: hidden;
  .os-logo {
    @include centerX();
    top: 40%;
    width: 60%;
    transition: all 0.4s ease;
    opacity: 0.8;
  }
  &:hover .os-logo {
    animation: logo-anim 0.2s ease-in forwards;
    animation-delay: 0.48s;
  }
}
#wreck-mac {
  grid-column-start: 10;
  grid-column-end: 16;
  background: $color-green;
  .top-text {
    background: $color-green-dark;
  }
  .download-choice-text {
    background: $color-pink;
  }
  .os-logo {
    @include centerX();
    top: 38%;
    width: 53%;
    transition: all 0.4s ease;
    opacity: 0.8;
  }
  &:hover .os-logo {
    animation: logo-anim 0.2s ease-in forwards;
    animation-delay: 0.48s;
  }
}

#wreck-linux {
  .os-logo {
    @include centerX();
    top: 40%;
    width: 46%;
    transition: all 0.4s ease;
    opacity: 0.8;
  }
  &:hover .os-logo {
    animation: logo-anim 0.2s ease-in forwards;
    animation-delay: 0.48s;
  }
}

@keyframes logo-anim {
  0% {
    transform: translateX(-50%) scaleY(1);
  }
  100% {
    transform: translateX(-50%) scaleY(0.1);
    margin-top: 29%;
  }
}
#space-mac {
  .top-text {
    background: $color-green-dark;
  }
  .download-choice-text {
    background: $color-pink;
  }
}

.space-stars {
  position: absolute;
  height: 62%;
  width: 100%;
}
.horror-download {
  grid-row-start: 70;
  grid-row-end: 82;
  width: 100%;
  border: 1px solid black;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  .os-logo {
    @include centerX();
    top: 70%;
    width: 20%;
    opacity: 0;
    transition: all 0.4s ease;
  }
  &:hover .os-logo {
    opacity: 1;
    transition: all 0.4s ease;
  }
  &:hover .space-background {
    opacity: 0.8;
    transition: all 0.4s ease-out;
  }

  .space-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      $color-pink-light -70%,
      $color-green 120%
    );
    opacity: 0;
    transition: all 0.3s ease;
  }
  .top-text {
    @include header-style(lowercase);
    background: $color-pink;
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 1.8vw;
    padding: 1vh 0;
    border-bottom: 1px solid black;
  }
  .download-choice-text {
    @include header-style(uppercase);
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 3vw;
    text-align: center;
    background: $color-green-dark;
    border-top: 1px solid black;
    z-index: 10;
  }
}
.space-download {
  grid-row-start: 71;
  grid-row-end: 83;
  width: 100%;
  border: 1px solid black;
  position: relative;
  &:hover {
    cursor: pointer;
  }
  &:hover .space-background {
    background: linear-gradient(
      -45deg,
      $color-pink-light -70%,
      $color-green 120%
    );
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  .os-logo {
    @include centerX();
    top: 30%;
    width: 0%;
    transition: all 0.4s ease;
  }
  &:hover .os-logo {
    top: 70%;
    width: 20%;
    transition: all 0.4s ease;
  }
  .space-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 1;
    transition: all 0.3s ease;
  }
  .top-text {
    @include header-style(lowercase);
    background: $color-pink;
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 1.8vw;
    padding: 1vh 0;
    border-bottom: 1px solid black;
  }
  .download-choice-text {
    @include header-style(uppercase);
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 3vw;
    text-align: center;
    background: $color-green-dark;
    border-top: 1px solid black;
    z-index: 10;
  }
}

.wreck-download {
  grid-row-start: 64;
  grid-row-end: 76;
  width: 100%;
  border: 1px solid black;
  position: relative;
  &:hover {
    cursor: pointer;
  }

  .space-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -45deg,
      $color-pink-light -70%,
      $color-green 120%
    );
    opacity: 0.6;
    transition: all 0.2s ease;
  }

  .top-text {
    @include header-style(lowercase);
    background: $color-pink;
    width: 100%;
    text-align: center;
    position: relative;
    font-size: 1.8vw;
    padding: 1vh 0;
    border-bottom: 1px solid black;
  }
  .download-choice-text {
    @include header-style(uppercase);
    position: absolute;
    bottom: 0;
    width: 100%;
    font-size: 3vw;
    text-align: center;
    background: $color-green-dark;
    border-top: 1px solid black;
    z-index: 10;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  #space-win {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 80;
    grid-row-end: 93;
  }
  #space-mac {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 95;
    grid-row-end: 108;
  }
  #space-linux {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 110;
    grid-row-end: 123;
  }
  #wreck-win {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 65;
    grid-row-end: 78;
  }
  #wreck-mac {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 80;
    grid-row-end: 93;
  }
  #wreck-linux {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 95;
    grid-row-end: 108;
  }
  #horror-win {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 79;
    grid-row-end: 92;
  }
  #horror-mac {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 94;
    grid-row-end: 107;
  }
  #horror-linux {
    grid-column-start: 2;
    grid-column-end: 24;
    grid-row-start: 109;
    grid-row-end: 122;
  }
  .horror-download {
    .top-text {
      font-size: 7.8vw;
    }
    .download-choice-text {
      font-size: 10vw;
    }
  }
  .wreck-download {
    .top-text {
      font-size: 7.8vw;
    }
    .download-choice-text {
      font-size: 10vw;
    }
  }
  .space-download {
    .top-text {
      font-size: 6.8vw;
    }
    .download-choice-text {
      font-size: 10vw;
    }
  }
}
</style>
<script>
export default {
  name: "GameDownload",
  props: {
    downloadID: String,
    downloadClass: String,
    operatingSystem: String,
    logoImg: String,
    animData: String
  }
};
</script>
