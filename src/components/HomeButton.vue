<template>
  <button class="home-button" v-on:touchstart="touchAnim">
    <p class="home-button-text" :data-text="buttonText">{{buttonText}}</p>
  </button>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
$transition: all 0.1s ease-in;

.home-button {
  border-radius: 100%;
  width: 6vw;
  height: 6vw;
  border: none;
  background: black;
  /*   -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black; */
  color: white;
  /* border: 1px solid black; */
  font-family: $font-secundary;
  font-size: 28px;
  font-weight: 100;
  position: relative;
  transition: $transition;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
  p {
    position: relative;
    pointer-events: none;
    /* transition: $transition; */
  }
  &:hover {
    background: black;
    transform: scale(1.07);
  }
  &:hover p {
    color: #ff00ff;
  }
  &:hover p:after {
    content: attr(data-text);
    position: absolute;
    pointer-events: none;
    left: 50%;
    top: 50%;
    transform: translate(-48%, -48%);
    color: #00ffc8;
    animation: rumble 0.3s ease-in infinite;
  }
}
@keyframes buttonClickAnim {
  0% {
    transform: scale(0.2);
    border: 1px solid black;
    background: black;
    opacity: 0.8;
  }
  50% {
    border: 30px solid black;
    background: black;
    opacity: 0.4;
  }
  96% {
    border: 10px solid black;
    opacity: 0.1;
    background: black;
    transform: scale(1.2);
  }
  100% {
    border: 1px solid black;
    opacity: 1;
    background: white;
    transform: scale(1.2);
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .home-button {
    width: 71px;
    height: 71px;
    font-size: 21px;
    &:hover {
      background: black;
      transform: none;
    }
    &:hover p {
      color: white;
    }
    &:hover p:after {
      content: "";
      position: initial;
      left: auto;
      top: auto;
      transform: none;
      color: black;
      animation: none;
    }
    /*     &:active {
      background: black;
      transform: scale(1.07);
      p {
        color: #ff00ff;
        &:after {
          content: attr(data-text);
          position: absolute;
          pointer-events: none;
          left: 50%;
          top: 50%;
          transform: translate(-48%, -48%);
          color: #00ffc8;
          animation: rumble 0.3s ease-in infinite;
        }
      }
    } */
  }
  .home-button-touch {
    background: black;
    transform: scale(1.07);
    p {
      color: #ff00ff;
      &:after {
        content: attr(data-text);
        position: absolute;
        pointer-events: none;
        left: 50%;
        top: 50%;
        transform: translate(-48%, -48%);
        color: #00ffc8;
        animation: rumble 0.3s ease-in infinite;
      }
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .home-button {
    width: 100px;
    height: 100px;
  }
}
</style>
<script>
export default {
  name: "HomeButton",
  props: {
    buttonText: String
  },
  methods: {
    touchAnim(e) {
      e.target.classList.add("home-button-touch");
    }
  }
};
</script>
