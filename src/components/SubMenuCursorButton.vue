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
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/sass/_global.scss";

.menu-cases {
  grid-row-start: 1;
  grid-row-end: 8;
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
}
.cases-sub-menu li {
  writing-mode: vertical-lr;
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
</style>
<script>
import MyCursor from "@/components/MyCursor.vue";
export default {
  name: "SubMenuCursorButton",
  components: {
    MyCursor
  },
    data() {
    return {
      isVideoShown: false
    };
  },
  methods: {
    toggleCaseMenu: function(e) {
      var elem = this.$refs.casesmenu;
      if (elem.style.display === "flex") {
        elem.style.display = "none";
      } else {
        elem.style.display = "flex";
      }
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
    toggleIsVideoShown() {
      this.isVideoShown = !this.isVideoShown;
    },
    hoverOverLink: function() {
      this.toggleIsVideoShown();
    },
    leaveLink: function() {
      this.toggleIsVideoShown();
    }
  }
};
</script>
