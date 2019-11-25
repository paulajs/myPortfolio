<template>
  <button class="home-button">
    <p class="home-button-text" :data-text="buttonText">{{buttonText}}</p>
  </button>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
$transition: all 0.1s ease-in;

.home-button {
  border-radius: 100%;
  width: 115px;
  height: 115px;
  border: none;
  background: black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  color: white;
  /* border: 1px solid black; */
  font-family: "Poppins", sans-serif;
  font-size: 31px;
  font-weight: 800;
  position: relative;
  transition: $transition;
  cursor: pointer;


  &:focus {
    outline: 0;
  }
  p {
    position: relative;
    /* transition: $transition; */
  }
  &:hover {
    background: linear-gradient(#ff90ff, #00ffc8);
    box-shadow: 23px 18px 14px #c7c7c7;
    transition: $transition;
  }
  &:hover p {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ff00ff;
  }
  &:hover p:after {
    content: attr(data-text);
    left: 50%;
    top: 50%;
    transform: translate(-48%,-48%);
    position: absolute;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #00ffc8;
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
</style>
<script>
export default {
  name: "HomeButton",
  props: {
    buttonText: String
  }
};
</script>
