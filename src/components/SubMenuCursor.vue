<template>
  <div class="menu menu-cases">
    <MyCursor cursorRef="cursor" />
    <button
      class="menu-button"
      @click="toggleCaseMenu"
      @mousemove="showCursor"
      @mouseleave="hideCursor"
    >
      <p data-text="Cases">Cases</p>
    </button>
    <ul class="cases-sub-menu" ref="casesmenu">
      <div class="sub-menu-cursor" ref="subcursor"></div>
      <li @mouseover="onMouseOver" @mouseout="onMouseOut" @mousemove="subCasesCursorShow" @mouseleave="subCasesCursorHide">
        <router-link  data-case="hesehus" to="/hesehus">Hesehus</router-link>
      </li>
      <li @mouseover="onMouseOver" @mouseout="onMouseOut" @mousemove="subCasesCursorShow" @mouseleave="subCasesCursorHide">
        <router-link data-case="nmg" to="/norremadegaard">Nørremadegaard</router-link>
      </li>
      <li @mouseover="onMouseOver" @mouseout="onMouseOut" @mousemove="subCasesCursorShow" @mouseleave="subCasesCursorHide">
        <router-link data-case="skansingit" to="/skansing">Skansing IT</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/_global.scss";
.sub-menu-cursor {
  width: 45px;
  height: 45px;
  background: black;
  mix-blend-mode: difference;
  pointer-events: none;
  user-select: none;
  position: absolute;
  border-radius: 100%;
  display: none;
}
.menu-cases {
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 12;
  background: none;
  border: none;
  &:focus {
    outline: 0;
  }
  &:active {
    outline: none;
    border: none;
  }
}

.cases-sub-menu {
  display: none;
  grid-row-start: 2;
  grid-row-end: 9;
  grid-column-start: 12;
  flex-direction: column;
  align-items: center;
  font-family: $font-secundary;
  font-size: 18px;
  font-weight: 300;
  justify-content: space-evenly;
  list-style: none;
  z-index: 1000;
  height: 75vh;
}

.cases-sub-menu li a {
  text-decoration: none;
  color: black;
  cursor: default;
  &:hover{
    color: #afafaf;
  }
}
.cases-sub-menu li {
  writing-mode: vertical-lr;
  animation: casesAnim 0.2s ease-in forwards;

}
@keyframes casesAnim {
  0% {
    opacity: 0;
    transform: scale(0.95);
    transform-origin: center;
  }
  100% {
    opacity: 1;
    transform: scale(1);
    transform-origin: center;
  }
}
.expand {
  animation: cursorAnim3 0.5s;
  border: 2px solid black;
}
.menu-button {
  cursor: none;
}
.cursor:hover + button p,
button:hover p {
  color: transparent;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: $color-pink;
}
.cursor:hover + button p:before,
button:hover p:before {
  content: attr(data-text);
  position: absolute;
  z-index: -50;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-green;
  pointer-events: none;
  left: 1.2%;
  top: 1.2%;
  animation: rumble-menu 0.15s ease-in infinite;
  pointer-events: none;
}
.expand {
  animation: cursorClickAnim 0.5s;
  border: 2px solid black;
}
@keyframes cursorClickAnim {
  0% {
    border: 1px solid black;
    background: black;
    opacity: 0.8;
  }
  50% {
    transform: translate(-20px, -20px);
    border: 30px solid black;
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
<script>
import MyCursor from "@/components/MyCursor.vue";
export default {
  name: "SubMenuCursor",
  components: {
    MyCursor
  },
  props: {
    onMouseOver: Function,
    onMouseOut: Function,
  },
  methods: {
    toggleCaseMenu: function(e) {
      var elem = this.$refs.casesmenu;
      if (elem.style.display === "flex") {
        elem.style.display = "none";
      } else {
        elem.style.display = "flex";
      }
      this.addClickAnimCursor();
    },
    showCursor(e) {
      this.$children[0].$refs.cursor.style.display = "flex";
      this.$children[0].$refs.cursor.style.zIndex = 42000;
      this.$children[0].$refs.cursor.style.top = `${e.pageY - 35}px`;
      this.$children[0].$refs.cursor.style.left = `${e.pageX - 35}px`;
    },
    hideCursor() {
      this.$children[0].$refs.cursor.style.display = "none";
    },
    addClickAnimCursor() {
      this.$children[0].$refs.cursor.classList.add("expand");
      setTimeout(() => {
        this.$children[0].$refs.cursor.classList.remove("expand");
      }, 500);
    },
    subCasesCursorShow(e){
      this.$refs.subcursor.style.display ="block";
      this.$refs.subcursor.style.top = `${e.pageY - 20}px`;
      this.$refs.subcursor.style.left = `${e.pageX - 25}px`;
    },
    subCasesCursorHide(){
      this.$refs.subcursor.style.display ="none";
    }
  }
};
</script>
