<template>
  <button class="visit-page">
    <p data-text="Visit page">Visit page</p>
  </button>
</template>

<style lang="scss" scoped>
@import "../assets/sass/_global.scss";

$transition: all 0.1s ease-in;

.visit-page {
  width: 320px;
  height: 70px;
  margin-bottom: 30vh;
  border: 1px solid black;
  background: white;
  font-family: $font-secundary;
  font-size: 23px;
  position: relative;
 /*  animation: intro-button 0.3s ease-out forwards; */
  &::before {
    content: "";
    width: 320px;
    height: 70px;
    border: 1px solid black;
    position: absolute;
    left: 14px;
    top: 12px;
    z-index: -1;
    transition: $transition;
    /*  animation: intro-button 0.3s ease-out forwards; */
  }
  &:hover::before {
    background: white;
    transition: $transition;
  }
  &:focus {
    outline: 0;
  }
  &:hover {
    cursor: pointer;
    background: black;
    color: white;
    transition: $transition;
  }
  &:hover p {
    color: $color-pink;
    transform-origin: center;
  }
  &:hover p:after {
    content: attr(data-text);
    position: absolute;
    left: 91px;
    top: 19px;
    color: $color-green;
    animation: rumble 0.3s ease-in infinite;
  }
}

@keyframes intro-button {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 320px;
    height: 70px;
  }
}

@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .visit-page {
    width: 78vw;
    height: 68px;
    margin-bottom: 20vh;
    margin-left: -3vw;
    font-size: 23px;
    position: relative;
    &:hover {
      background: white;
      color: black;
      transition: none;
      p {
        color: black;
        &:after {
          content: "";
          position: initial;
          left: auto;
          top: auto;
          color: black;
          animation: none;
        }
      }
    }
    &:before {
      width: 77vw;
      height: 70px;
    }
    &:active {
      background: black;
      color: white;
      transition: $transition;
      p {
        color: $color-pink;
        transform-origin: center;
      }
    }
    &:active p:after {
      content: attr(data-text);
      left: 27%;
      top: 25.6%;
      position: absolute;
      color: $color-green;
      animation: rumble 0.3s ease-in infinite;
    }
  }
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
  .visit-page {
    margin-top: 9vh;
    margin-bottom: 31vh;
  }
}
@media screen and (min-device-width: 1900px) {
  .visit-page {
    width: 345px;
    height: 90px;
    font-size: 25px;
    &::before {
      width: 345px;
      height: 90px;
      left: 16px;
      top: 14px;
    }
    &:hover p:after {
      left: 92px;
      top: 26px;
    }
  }
}
</style>
<script>
export default {
  name: "ButtonVisitPage"
};
</script>
