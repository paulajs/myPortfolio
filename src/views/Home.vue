<template>
  <div class="home">
    <MenuCursorButton
      buttonText="About"
      linkTo="/about"
      menuClass="menu menu-about"
      v-bind:onMouseOver="mouseOverMain"
      v-bind:onMouseOut="hideVideo"
    />
    <div class="mobile-menu-button mobile-open" v-on:click="mobileMenuOpen">
      <p>Menu</p>
    </div>
    <div class="mobile-menu" ref="mobilemenu">
      <div class="mobile-menu-button mobile-close" v-on:click="mobileMenuClose">
        <p>Close</p>
      </div>
      <router-link to="/about">
        <p class="mobile-link">About</p>
      </router-link>
      <router-link to="/contact">
        <p class="mobile-link">Contact</p>
      </router-link>
      <div class="mobile-cases" v-on:click="submenuToggle">
        <p class="mobile-link submenu-link">Cases</p>
        <div class="submenu" ref="submenu">
          <ul ref="submenulist">
            <li>
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
        <div class="submenu-indicator" ref="indicator">+</div>
      </div>

      <p class="mobile-link" ref="linklab">
        <router-link to="/lab">Lab</router-link>
      </p>
    </div>
    <div class="frontpage-label top">Portfolio</div>
    <img class="mobile-logo" src="@/assets/img/SVG/logo.svg" alt />
    <SubMenuCursor
      v-bind:onMouseClick="showSplat"
      v-bind:onMouseOver="mouseOver"
      v-bind:onMouseOut="hideVideo"
    />
    <div class="menu menu-some" data-case="some">
      <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_linked_component"></component>
        </SoMeIcon>
      </a>
      <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_mail_component"></component>
        </SoMeIcon>
      </a>
      <!--       <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_insta_component"></component>
        </SoMeIcon>
      </a>-->
      <a href="/" @mouseover="mouseOverSoMe" @mouseout="onMouseOutSoMe">
        <SoMeIcon>
          <component :is="icon_pin_component"></component>
        </SoMeIcon>
      </a>
    </div>
    <div class="frontpage-label bottom">Web, design, animation</div>
    <MenuCursorButton
      buttonText="Lab"
      linkTo="/lab"
      menuClass="menu menu-misc"
      v-bind:onMouseOver="mouseOverMain"
      v-bind:onMouseOut="hideVideo"
    />
    <FrontpageEntertainment
      v-bind:isVideoShown="isVideoShown"
      v-bind:onGameEnd="showGameEndedVideo"
    />
    <div :class="{'entertain-element': true, 'show-border':isVideoShown}">
      <video
        v-show="isVideoShown"
        class="case-videos"
        ref="casevideo"
        muted
        autoplay
        preload="auto"
        src="../assets/videos/frontpage-entertain/noise.mp4"
        @ended="onVideoEnded"
      ></video>
    </div>
  </div>
</template>

<script>
import FrontpageEntertainment from "@/components/FrontpageEntertainment.vue";
import MenuCursorButton from "@/components/MenuCursorButton.vue";
import SubMenuCursor from "@/components/SubMenuCursor.vue";
import SoMeIcon from "@/components/SoMeIcon.vue";
import SoMeLinked from "@/components/svg/SoMeLinked.vue";
import MyCursor from "@/components/MyCursor.vue";
import SoMeMail from "@/components/svg/SoMeMail.vue";
import SoMeInsta from "@/components/svg/SoMeInsta.vue";
import SoMePin from "@/components/svg/SoMePin.vue";
const caseVideoHesehus = require("@/assets/videos/frontpage-entertain/hesehus.mp4");
const caseVideoNMG = require("@/assets/videos/frontpage-entertain/nmg.mp4");
const caseVideoSkansing = require("@/assets/videos/frontpage-entertain/skansingit.mp4");
const caseVideoContact = require("@/assets/videos/frontpage-entertain/contact1.mp4");
const caseVideoLab = require("@/assets/videos/frontpage-entertain/lab3.mp4");
const caseVideoAbout = require("@/assets/videos/frontpage-entertain/about1.mp4");
const noise = require("@/assets/videos/frontpage-entertain/noise3.mp4");
const endVideo = require("@/assets/videos/frontpage-entertain/applause1.mp4");

export default {
  name: "home",
  components: {
    FrontpageEntertainment,
    MenuCursorButton,
    SubMenuCursor,
    SoMeLinked,
    SoMeMail,
    SoMeInsta,
    SoMeIcon,
    MyCursor,
    SoMePin
  },
  data() {
    return {
      isVideoShown: false,
      icon_pin_component: "SoMePin",
      icon_insta_component: "SoMeInsta",
      icon_mail_component: "SoMeMail",
      icon_linked_component: "SoMeLinked",
      switchVideo: null,
      gameEnd: false
    };
  },
  watch: {
    isVideoShown: function() {
      if (!this.isVideoShown) {
        this.$refs.casevideo.src = noise;
        this.$refs.casevideo.loop = false;
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(42);
  },
  methods: {
    mobileMenuOpen() {
      this.$refs.mobilemenu.style.display = "flex";
    },
    mobileMenuClose() {
      this.$refs.mobilemenu.style.display = "none";
    },
    submenuToggle() {
      if (this.$refs.submenu.classList.contains("open-submenu")) {
        this.$refs.submenu.classList.add("close-submenu");
        this.$refs.submenu.classList.remove("open-submenu");

        this.$refs.indicator.classList.remove('ind-open');
        this.$refs.indicator.classList.add('ind-close');

        this.$refs.submenulist.classList.remove('submenulist');
        this.$refs.linklab.style.marginTop = "10vh";
      } else {
        this.$refs.submenu.classList.remove("close-submenu");
        this.$refs.submenu.classList.add("open-submenu");

        this.$refs.indicator.classList.remove('ind-close');
        this.$refs.indicator.classList.add('ind-open');

        this.$refs.submenulist.classList.add('submenulist');
        this.$refs.linklab.style.marginTop = "18vh";
      }
    },
    showGameEndedVideo() {
      this.gameEnd = true;
      this.$refs.casevideo.src = endVideo;
      this.$refs.casevideo.loop = true;
      this.showVideo();
    },
    mouseOverMain(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = noise;
        this.gameEnd = false;
        this.$refs.casevideo.loop = false;
      }
      this.switchVideo = e.target.dataset.case;
      this.showVideo();
    },
    mouseOverSoMe(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = noise;
        this.gameEnd = false;
        this.$refs.casevideo.loop = false;
      }
      this.switchVideo = "some";
      this.showVideo();
    },
    onMouseOutSoMe(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = null;
        this.gameEnd = false;
        this.$refs.casevideo.loop = false;
      }
      this.hideVideo();
    },
    mouseOver(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = noise;
        this.gameEnd = false;
      }
      this.switchVideo = e.target.dataset.case;
      this.showVideo();
    },
    showVideo() {
      this.isVideoShown = true;
    },
    hideVideo() {
      this.isVideoShown = false;
    },
    showSplat() {
      this.isSplatShown = true;
    },
    onVideoEnded(e) {
      switch (this.switchVideo) {
        case "hesehus":
          this.$refs.casevideo.src = caseVideoHesehus;
          console.log(caseVideoHesehus);
          break;
        case "nmg":
          this.$refs.casevideo.src = caseVideoNMG;
          console.log("nmg video");
          break;

        case "skansingit":
          this.$refs.casevideo.src = caseVideoSkansing;
          console.log("skansing it video");
          break;

        case "some":
          console.log("some video");
          this.$refs.casevideo.src = caseVideoContact;
          break;

        case "About":
          console.log("about video");
          this.$refs.casevideo.src = caseVideoAbout;
          break;

        case "Lab":
          console.log("lab video");
          this.$refs.casevideo.src = caseVideoLab;
          break;
      }
      //this.$refs.casevideo.src = this.switchVideo;
      this.$refs.casevideo.loop = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_global.scss";

/* .case-videos {
   width: 100%;
} */
.show-border {
  border: 1px solid black;
}
button:hover p {
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: $color-pink;
}

button:hover p:after {
  content: attr(data-text);
  position: absolute;
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: $color-green;
  pointer-events: none;
  left: 1.2%;
  top: 1.2%;
  animation: rumble-menu 0.25s ease-in infinite;
  pointer-events: none;
}
.entertain-element {
  grid-column-start: 2;
  grid-column-end: 12;
  grid-row-start: 2;
  grid-row-end: 9;
  overflow: hidden;
  /*  video{
    width: 100%;
  } */
}
</style>
