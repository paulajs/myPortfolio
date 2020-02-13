<template>
  <div class="home">
    <ShapeOverlays v-bind:runPaint="runPaint"></ShapeOverlays>
    <MenuCursorButton
      buttonText="About"
      linkTo="/about"
      menuClass="menu menu-about"
      v-bind:onMouseOver="mouseOverMain"
      v-bind:onMouseOut="hideVideo"
    />

    <div class="mobile-menu-button mobile-open" v-on:click="mobileMenuOpen">
      <p data-text="Menu">Menu</p>
    </div>

    <div class="mobile-menu" ref="mobilemenu">
      <div class="mobile-menu-button mobile-close" v-on:click="mobileMenuClose">
        <p data-text="Close">Close</p>
      </div>
      <div class="menu-wrapper">
        <router-link to="/about">
          <p class="mobile-link" data-text="About" v-on:touchstart="mobileMenuTouchAnim" v-on:touchend="mobileMenuTouchAnimEnd">About</p>
        </router-link>
        <router-link to="/contact">
          <p class="mobile-link" data-text="Contact" v-on:touchstart="mobileMenuTouchAnim"  v-on:touchend="mobileMenuTouchAnimEnd">Contact</p>
        </router-link>
        <div class="mobile-cases" ref="mobilecasesmenu" v-on:click="submenuToggle">
          <p class="mobile-link submenu-link" data-text="Cases">Cases</p>
          <div class="submenu" ref="submenu" v-on:click.stop>
            <ul ref="submenulist">
              <li>
                <router-link to="/hesehus">
                  <p class="submenu-cases" v-on:touchstart="submenuTouch" v-on:touchend="submenuTouchEnd">Hesehus</p>
                </router-link>
              </li>
              <li>
                <router-link to="/norremadegaard">
                  <p class="submenu-cases" v-on:touchstart="submenuTouch" v-on:touchend="submenuTouchEnd">Nørremadegaard</p>
                </router-link>
              </li>
              <li>
                <router-link to="/skansing">
                  <p class="submenu-cases" v-on:touchstart="submenuTouch" v-on:touchend="submenuTouchEnd">Skansing IT</p>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="submenu-indicator" ref="indicator">></div>
        </div>

        <router-link to="/lab">
          <p
            class="mobile-link link-lab"
            ref="linklab"
            data-text="Lab"
            v-on:touchstart="mobileMenuTouchAnim"
             v-on:touchend="mobileMenuTouchAnimEnd"
          >Lab</p>
        </router-link>
      </div>
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
        src=""
      ></video>
    </div>
  </div>
</template>

<script>
import FrontpageEntertainment from "@/components/FrontpageEntertainment.vue";
import ShapeOverlays from "@/components/ShapeOverlays.vue";
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
const caseVideoContact = require("@/assets/videos/frontpage-entertain/contact.mp4");
const caseVideoLab = require("@/assets/videos/frontpage-entertain/lab.mp4");
const caseVideoAbout = require("@/assets/videos/frontpage-entertain/about.mp4");
const endVideo = require("@/assets/videos/frontpage-entertain/applause.mp4");
const endVideoMob = require("@/assets/videos/frontpage-entertain/applausemob.mp4");

export default {
  name: "home",
  components: {
    FrontpageEntertainment,
    ShapeOverlays,
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
      gameEnd: false,
      openMobileMenu: false,
      runPaint: false
    };
  },
  watch: {
    openMobileMenu: function() {
      if (this.openMobileMenu) {
          this.$refs.submenu.classList.add("open-submenu");
          this.$refs.submenu.classList.remove("close-submenu");
      } else {
          this.$refs.submenu.classList.add("close-submenu");
          this.$refs.submenu.classList.remove("open-submenu");
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log(42);
  },
  methods: {
    mobileMenuOpen() {
      this.$refs.mobilemenu.style.display = "flex";
      this.$refs.mobilemenu.classList.add("open-mobile-menu");
      this.$refs.mobilemenu.classList.remove("close-mobile-menu");
      this.runPaint = true;
    },
    mobileMenuClose() {
      this.$refs.mobilemenu.classList.add("close-mobile-menu");
      this.$refs.mobilemenu.classList.remove("open-mobile-menu");
      this.runPaint = false;
      setTimeout(() => {
        this.$refs.mobilemenu.style.display = "none";
      }, 1300);
    },
    mobileMenuTouchAnim(e) {
      e.target.classList.add("mobile-menu-touch");
    },
    mobileMenuTouchAnimEnd(e){
      e.target.classList.remove("mobile-menu-touch");
    },
    submenuTouch(e) {
      e.target.classList.add('submenu-touch-anim');
    },
    submenuTouchEnd(e){
      e.target.classList.remove('submenu-touch-anim');
    },
    submenuToggle() {
      if (this.openMobileMenu) {
        this.openMobileMenu = false;

        this.$refs.indicator.classList.remove("ind-open");
        this.$refs.indicator.classList.add("ind-close");

        this.$refs.mobilecasesmenu.style.border = "none";
        /* this.$refs.mobilecasesmenu.style.background="transparent"; */
        this.$refs.mobilecasesmenu.classList.remove("submenu-active");

        this.$refs.submenulist.classList.add("hide-submenulist");
        this.$refs.submenulist.classList.remove("show-submenulist");
        this.$refs.linklab.style.marginTop = "0";
      } else {
        this.openMobileMenu = true;

        this.$refs.indicator.classList.remove("ind-close");
        this.$refs.indicator.classList.add("ind-open");

        this.$refs.mobilecasesmenu.style.border = "1px solid black";
        /* this.$refs.mobilecasesmenu.style.background="#ff00ff"; */
        this.$refs.mobilecasesmenu.classList.add("submenu-active");

        this.$refs.submenulist.classList.add("show-submenulist");
        this.$refs.submenulist.classList.remove("hide-submenulist");
        this.$refs.linklab.style.marginTop = "18vh";
      }
    },
    showGameEndedVideo() {
      this.gameEnd = true;
      if (window.innerWidth <= 736) {
        this.$refs.casevideo.src = endVideoMob;
        this.$refs.casevideo.style.width = "100%";
      } else {
        this.$refs.casevideo.src = endVideo;
      }
      this.$refs.casevideo.loop = true;
      this.showVideo();
    },
    mouseOverMain(e) {
      this.switchVideo = e.target.dataset.case;
      this.onVideoEnded();
      this.showVideo();
    },
    mouseOverSoMe(e) {
      this.switchVideo = "some";
      this.onVideoEnded();
      this.showVideo();
    },
    onMouseOutSoMe(e) {
      if (this.gameEnd) {
        this.$refs.casevideo.src = "";
        this.gameEnd = false;
        this.$refs.casevideo.loop = false;
      }
      this.hideVideo();
    },
    mouseOver(e) {
      this.switchVideo = e.target.dataset.case;
      this.onVideoEnded();
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
          break;
        case "nmg":
          this.$refs.casevideo.src = caseVideoNMG;
          break;

        case "skansingit":
          this.$refs.casevideo.src = caseVideoSkansing;
          break;

        case "some":
          this.$refs.casevideo.src = caseVideoContact;
          break;

        case "About":
          this.$refs.casevideo.src = caseVideoAbout;
          break;

        case "Lab":
          this.$refs.casevideo.src = caseVideoLab;
          break;
      }
      this.$refs.casevideo.loop = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_global.scss";
.show-border {
  border: 1px solid black;
  background: black;
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
}
</style>
