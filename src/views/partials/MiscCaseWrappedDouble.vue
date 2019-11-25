<template>
<router-link :class="miscCaseClass" :to="routerLink">
  <div class="wrap">
    <div class="misc-background"></div>
    <div :class="headerClass">
      <h2 :class="headerFirstClass">{{headerFirstText}}</h2>
      <h2 :class="headerSecondClass">{{headerSecondText}}</h2>
    </div>
    <slot></slot>
  </div>
</router-link>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
a .wrap{
  width: 100%;
  height: 100%;
}
div {
  .misc-background {
    width: 100%;
    height: 100%;
  }
}
.misc-case1 {
  @include place-in-grid(1, 5, 1, 4);
  background: $color-pink-light;
  border: 1px solid black;
  position: relative;
   transition: all 0.1s ease-in;
  &:hover{
    background: black;
  }
  .header-audio {
    bottom: 1vh;
    @include centerX();
    text-align: center;
    .text-audio {
      @include header-style(uppercase);
      font-size: 4vw;
    }
    .text-exp {
      @include header-style(lowercase);
      font-size: 5vh;
      margin-top: -4vh;
    }
  }
  .misc-background {
    @include misc-background(right, -70%, 160%, 0.6);
  }
  &:hover .misc-background {
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  &:hover{
    cursor: pointer;
  }
}

.misc-case5 {
  @include place-in-grid(5, 9, 7, 10);
  background: $color-pink;
  border: 1px solid black;
  position: relative;
    transition: all 0.1s ease-in;
  &:hover{
    background: black;
  }
  .header-three {
    position: absolute;
    top: 3vh;
    width: 100%;
    text-align: center;
    .text-three {
      @include header-style(uppercase);
      font-size: 3.5vw;
    }
    .text-exp {
      @include header-style(lowercase);
      font-size: 2vw;
      margin-top: -2.3vh;
    }
  }
  .misc-background {
    @include misc-background(right, -60%, 160%, 0.8);
  }
  &:hover .misc-background {
    opacity: 0;
    transition: all 0.1s ease-in;
  }
  &:hover{
    cursor: pointer;
  }
}
.misc-case7 {
  @include place-in-grid(9, 13, 1, 4);
  background: $color-pink-light;
  border: 1px solid black;
  position: relative;
    transition: all 0.1s ease-in;
  &:hover{
    background: black;
  }
  .header-css-anim {
    position: absolute;
    bottom: 2.5vh;
    width: 100%;
    text-align: center;
    .text-css {
      @include header-style(uppercase);
      font-size: 4vw;
    }
    .text-anim {
      @include header-style(lowercase);
      font-size: 2vw;
      margin-top: -2vh;
    }
  }
  .misc-background {
    @include misc-background(bottom, -40%, 140%, 0.7);
  }
  &:hover .misc-background {
    opacity: 0;
    transition: all 0.11s ease-in;
  }
  &:hover{
    cursor: pointer;
  }
}
</style>
<script>
export default {
  name: "MiscCaseWrappedDouble",
  props: {
    miscCaseClass: String,
    headerClass: String,
    headerFirstClass: String,
    headerSecondClass: String,
    headerFirstText: String,
    headerSecondText: String,
    routerLink: String
  }
};
</script>
