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
  border: 2px solid black;
  background: white;
  font-family: $font-secundary;
  font-size: 23px;
  position: relative;
  &::before {
    content: "";
    width: 320px;
    height: 70px;
    border: 2px solid black;
    transform: translate(-147px, -9px);
    position: absolute;
    z-index: -1;
    transition: $transition;
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
      transform: translate(-152px, -13px);
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
