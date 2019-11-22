<template>
  <div class="home">
    <router-link to="/about" class="menu menu-about">
      <button class="menu-button">
        <p data-text="About">About</p>
      </button>
    </router-link>
    <div class="frontpage-label top">Digital web ninja</div>
      <button class="menu menu-cases menu-button" @click="toggleCaseMenu">
      <p data-text="Cases">Cases</p>
    </button>
    <ul class="cases-sub-menu">
      <li @mouseover="hoverOverLink" @mouseout="leaveLink">
        <router-link to="/hesehus">Hesehus</router-link>
      </li>
      <li>
        <router-link to="/norremadegaard">Nørremadegaard</router-link>
      </li>
      <li>
        <router-link to="/skansing">Skansing IT</router-link>
      </li>
    </ul>
    <div class="menu menu-some">
      <a href="/">
        <img class="icon-linked" alt="icon-linkedein" src="../assets/img/SVG/icon-linked.svg" />
      </a>
      <a href="/">
        <img class="icon-linked" alt="icon-linkedein" src="../assets/img/SVG/icon-email.svg" />
      </a>
      <a href="/">
        <img class="icon-linked" alt="icon-linkedein" src="../assets/img/SVG/icon-insta.svg" />
      </a>
      <a href="/">
        <img class="icon-linked" alt="icon-linkedein" src="../assets/img/SVG/icon-pinterest.svg" />
      </a>
    </div>
    <div class="frontpage-label bottom">Web, design, animation</div>
    <router-link to="/misc" class="menu menu-misc">
      <button class="menu-button">
        <p data-text="Misc">Misc</p>
      </button>
    </router-link>
    <FrontpageEntertainment />
  </div>
</template>

<script>
import FrontpageEntertainment from "@/components/FrontpageEntertainment.vue";

export default {
  name: "home",
  components: {
    FrontpageEntertainment
  },
  methods: {
    toggleCaseMenu: function(e) {
      // @todo refactor thisss
      var elem = document.querySelector(".cases-sub-menu");
      if (elem.style.display === "flex") {
        elem.style.display = "none";
      } else {
        elem.style.display = "flex";
      }
    },
    hoverOverLink: function(){
      document.querySelector('.case-videos').style.display = "block";
      document.querySelector('.entertain-element').style.border = "1px solid black";
      document.querySelector('#container').style.display = "none";
      document.querySelector('.page-logo').style.display = "none";
    },
    leaveLink: function(){
      document.querySelector('.case-videos').style.display = "none";
      document.querySelector('.entertain-element').style.border = "none";
      document.querySelector('#container').style.display = "block";
      document.querySelector('.page-logo').style.display = "block";
    },
   }
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/_global.scss';
.cursor:hover + button p,
button:hover p {
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: $color-pink;
}
.cursor:hover + button p:after,
button:hover p:after {
  content: attr(data-text);
  position: absolute;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-green;
  left: 1.2%;
  top: 1.2%;
  animation: rumble-menu 0.25s ease-in infinite;
}

.cursor p {
  color: black;
  font-family: "Source Code Pro", monospace;
  font-weight: 500;
}
.cursor {
  cursor: none;
  user-select: none;
  display: none;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  mix-blend-mode: luminosity;
  box-shadow: 10px 10px 12px #333;
  border: 1px solid black;
  background: linear-gradient(rgb(255, 144, 255), rgb(82, 255, 151));
  border-radius: 100%;
  position: absolute;
  z-index: 0;
  transition-duration: 100ms;
  transition-timing-function: ease-out;
  animation: cursorAnim 0.5s infinite alternate;
}

.expand {
  animation: cursorAnim3 0.5s;
  border: 2px solid black;
}

@keyframes cursorAnim {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.93);
  }
}

@keyframes cursorAnim3 {
  0% {
    border: 1px solid black;
    background: black;
    opacity: 0.8;
  }
  50% {
    transform: translate(-20px, -20px);
    border: 20px solid black;
    background: black;
    opacity: 0.4;
  }
  90% {
    transform: translate(-10px, -10px);
    border: 10px solid black;
    opacity: 0.1;
  }
  100% {
    border: 1px solid black;
    opacity: 1;
  }
}
</style>
