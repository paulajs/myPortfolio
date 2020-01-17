<template>
 <div class="icon-some" @mousemove="showSoMeCursor" @mouseleave="hideSoMeCursor">
   <div class="icon-cursor" ref="iconcursor"></div>

<slot></slot>
 </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
 .icon-some {
cursor: none;
  width: 3vw;
  height: 3vw;
  }

 .icon-cursor{
    width: 25px;
    height: 25px;
    background: -webkit-gradient(linear, left top, left bottom, from(#ff90ff), to(#00ffc8));
    mix-blend-mode: luminosity;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: absolute;
    z-index: 1000;
    border-radius: 100%;
    display: none;
    border: 1px solid black;
    box-shadow: 5px 5px 10px #333;
  }
</style>
<script>
export default {
  name: "SoMeIcon",
  methods:{
    showSoMeCursor(e){
      const cursorAdjust = this.$refs.iconcursor.getBoundingClientRect().width/2;
      this.$refs.iconcursor.style.display = "block";
      this.$refs.iconcursor.style.top = `${e.pageY -cursorAdjust}px`;
      this.$refs.iconcursor.style.left = `${e.pageX -cursorAdjust}px`;
    },
    hideSoMeCursor(){
      this.$refs.iconcursor.style.display = "none";
    }
  }
};
</script>
