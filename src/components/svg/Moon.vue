<template>
  <svg
    version="1.1"
    id="moon"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 442 431.5"
    style="enable-background:new 0 0 442 431.5;"
    xml:space="preserve"
  >
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1="632.5877"
      y1="357.1269"
      x2="-29.0629"
      y2="256.984"
    >
      <stop offset="0" style="stop-color:#00FFB6" />
      <stop offset="1" style="stop-color:#FF90FF" />
    </linearGradient>
    <path class="st0" d="M220,124.5L1,338.5l-1,93h442l-69-281C363.1,140.7,229.3,133.9,220,124.5z" />
    <g>
      <circle class="st1" cx="302.5" cy="103.5" r="98" />
      <circle class="st2" cx="274.9" cy="58.2" r="20.3" />
      <circle class="st2" cx="328.4" cy="79.7" r="13.3" />
      <circle class="st2" cx="321.8" cy="44.9" r="10.7" />
      <circle class="st2" cx="366.1" cy="73.8" r="7.4" />
      <circle class="st2" cx="234.3" cy="86.8" r="8.3" />
      <circle class="st2" cx="358.7" cy="138.3" r="7.9" />
    </g>
  </svg>
</template>
<style lang="scss" scoped>
#moon {
  position: absolute;
  width: 100%;
  bottom: 4vw;
  left: 0;
  z-index: 10;
}
#horror-win:hover .st0 {
  fill: white;
  opacity: 0.35;
  transition: all 1.2s ease-in;
}
#horror-mac:hover .st0 {
  fill: white;
  opacity: 0.35;
  transition: all 1.2s ease-in;
}
#horror-linux:hover .st0 {
  fill: white;
  opacity: 0.35;
  transition: all 1.2s ease-in;
}
.st0 {
  transition: all 1.2s ease-in;
  opacity: 0.55;
  fill: url(#SVGID_1_);
}
.st1 {
  fill: #ffffff;
  stroke: #000000;
  stroke-width: 0.65;
  stroke-miterlimit: 10;
}
.st2 {
  fill: #cccccc;
  stroke: #000000;
  stroke-width: 0.5;
  stroke-miterlimit: 10;
}
</style>
<script>
export default {
  name: "Moon"
};
</script>
