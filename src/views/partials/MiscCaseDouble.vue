<template>
  <router-link :class="miscCaseClass" :to="routerLink">
    <div class="wrap" v-on:click="miscTouchAnim">
      <div class="misc-background"></div>
      <div :class="headerOneClass">
        <h2>{{headerOneText}}</h2>
      </div>
      <div :class="headerTwoClass">
        <h2>{{headerTwoText}}</h2>
      </div>
      <slot></slot>
    </div>
  </router-link>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
a .wrap {
  width: 100%;
  height: 100%;
}
div {
  .misc-background {
    width: 100%;
    height: 100%;
  }
}
.misc-case3 {
  @include place-in-grid(5, 9, 7, 10);
  background: $color-pink-light;
  border: 1px solid black;
  position: relative;
  transition: all 0.1s ease-in;
  &:hover {
    .misc-background {
      @include misc-background(right, -60%, 130%, 0.7);
    }
  }
  .header-adams-ill {
    @include centerX();
    @include header-style(lowercase);
    top: 0;
    font-size: 1.6vw;
    width: 80%;
    background: $color-green-dark;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    h2 {
      text-align: center;
    }
  }
  .header-adams {
    position: absolute;
    bottom: 0;
    @include header-style(uppercase);
    font-size: 2.3vw;
    width: 100%;
    background: $color-pink-light;
    border-top: 1px solid black;
    h2 {
      text-align: center;
    }
  }
  .misc-background {
    background: black;
  }
  &:hover .misc-background {
    transition: all 0.1s ease-in;
  }
  &:hover {
    cursor: pointer;
  }
}
.misc-case4 {
  @include place-in-grid(5, 9, 1, 7);
  background: $color-green;
  border: 1px solid black;
  position: relative;
  transition: all 0.1s ease-in;
  &:hover {
    .misc-background {
      @include misc-background(bottom, 0%, 180%, 0.7);
    }
  }
  .header-bunny-left {
    @include header-style(uppercase);
    @include bunny-header(left, border-right);
  }
  .header-bunny-right {
    @include header-style(uppercase);
    @include bunny-header(right, border-left);
  }
  .misc-background {
    background: black;
  }
  &:hover .misc-background {
    transition: all 0.1s ease-in;
  }
  &:hover {
    cursor: pointer;
  }
}
.misc-case9 {
  @include place-in-grid(9, 13, 1, 4);
  background: $color-green;
  border: 1px solid black;
  position: relative;
  transition: all 0.1s ease-in;
  &:hover {
    .misc-background {
      @include misc-background(right, 0%, 110%, 0.6);
    }
  }
  .header-wreck-top {
    @include header-style(uppercase);
    @include centerX();
    background: $color-pink-light;
    border-bottom: 1px solid black;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
    font-size: 1.8vw;
    z-index: 3;
  }
  .header-wreck-bottom {
    @include header-style(uppercase);
    @include centerX();
    background: $color-pink;
    border-top: 1px solid black;
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 1.8vw;
    z-index: 3;
  }
  .misc-background {
    background: black;
  }
  &:hover .misc-background {
    transition: all 0.1s ease-in;
  }
  &:hover {
    cursor: pointer;
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .misc-case4 {
    @include place-in-grid(16, 20, 1, 5);
    .header-bunny-left {
      font-size: 6.5vw;
      letter-spacing: -2vw;
    }
    .header-bunny-right {
      font-size: 6.5vw;
      letter-spacing: -2vw;
    }
    .misc-case-touch {
      @include misc-background(right, -70%, 160%, 0.6);
    }
  }
  .misc-case3 {
    @include place-in-grid(20, 25, 1, 5);
    .header-adams-ill {
      font-size: 5.6vw;
    }
    .header-adams {
      font-size: 9.3vw;
    }
    .misc-case-touch {
      @include misc-background(right, -70%, 160%, 0.6);
    }
  }
  .misc-case9 {
    @include place-in-grid(30, 35, 1, 5);
    .header-wreck-top {
      font-size: 9.8vw;
    }
    .header-wreck-bottom {
      font-size: 5.8vw;
    }
    .misc-case-touch {
      @include misc-background(right, -70%, 160%, 0.6);
    }
  }
}
</style>
<script>
export default {
  name: "MiscCaseDouble",
  props: {
    miscCaseClass: String,
    headerOneClass: String,
    headerTwoClass: String,
    headerOneText: String,
    headerTwoText: String,
    routerLink: String
  },
  methods: {
    miscTouchAnim(e) {
      console.log("click");
      this.$refs.miscbackground.classList.add("misc-case-touch");
    }
  }
};
</script>
