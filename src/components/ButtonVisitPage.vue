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
  font-size: 21px;
  position: relative;
  &::before {
    content: "";
    width: 320px;
    height: 70px;
    border: 2px solid black;
    transform: translate(-150px, -12px);
    position: absolute;
    z-index: -1;
    transition: $transition;
  }
  &:hover::before {
    background: $gradient;
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
    left: 98px;
    color: $color-green;
    animation: rumble 0.3s ease-in infinite;
  }
}
</style>
<script>
export default {
  name: "ButtonVisitPage"
};
</script>
