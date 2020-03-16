<template>
  <div class="footer">
    <router-link :to="linkToNext" class="button next">
      <p class="text">{{nextText}}</p>
      <p class="arrow">&rarr;</p>
    </router-link>
    <router-link :to="linkToPrev" class="button prev">
      <p class="arrow">&larr;</p>
      <p class="text">{{prevText}}</p>
    </router-link>
    <img src="@/assets/img/SVG/footer-asset.svg" class="footer-img-desk" alt="footer" />
    <img src="@/assets/img/SVG/footer-asset-mob.svg" class="footer-img-mob" alt="footer" />
    <div class="so-me">
      <a href="https://www.linkedin.com/in/paulajoannasobczak/" target="_blank">
        <SoMeIcon>
          <component :is="icon_linked_component"></component>
        </SoMeIcon>
      </a>
      <a href="mailto:paulajoannasobczak@gmail.com" class="some-mail">
        <SoMeIcon>
          <component :is="icon_mail_component"></component>
        </SoMeIcon>
      </a>
      <a href="https://www.pinterest.dk/paulajoannasobc/" target="_blank">
        <SoMeIcon>
          <component :is="icon_pin_component"></component>
        </SoMeIcon>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";
.footer {
  width: 100%;
  height: 70vh;
  background: linear-gradient(white, $color-pink);
  @include create-grid(8, 10.5%, 12, 7.25%, 2%, 1%);
  padding: 0 1%;
  position: relative;
  overflow: hidden;
  .button {
    grid-row-start: 1;
    grid-row-end: 2;
    width: 100%;
    background: white;
    color: black;
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    &:hover {
      background: black;
      color: white;
    }
  }
  .prev {
    grid-column-start: 2;
    grid-column-end: 5;
    .text {
      width: 70%;
      font-family: $font-secundary;
      font-size: 136%;
      margin-right: 9%;
      text-align: end;
    }
    .arrow {
      width: 21%;
      font-size: 238%;
      text-align: end;
    }
  }
  .next {
    grid-column-start: 9;
    grid-column-end: 12;
    .text {
      width: 70%;
      font-family: $font-secundary;
      font-size: 136%;
      margin-left: 9%;
    }
    .arrow {
      width: 21%;
      font-size: 238%;
    }
  }
  .footer-img-desk {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .footer-img-mob {
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .so-me {
    grid-row-start: 7;
    grid-row-end: 9;
    grid-column-start: 5;
    grid-column-end: 9;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 100;
    padding: 0 6%;
    .icon-some {
      .svg-wrapper {
        fill: white;
      }
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .footer {
    height: 84vh;
    .footer-img-desk {
      display: none;
    }
    .footer-img-mob {
      display: block;
    }
    .button {
      grid-row-start: 1;
      grid-row-end: 3;
      justify-content: center;
    }
    .next {
      grid-column-start: 8;
      grid-column-end: 13;
      flex-direction: column;
      margin-left: -6%;
      .arrow {
        align-self: end;
        margin-left: 20%;
      }
    }
    .prev {
      grid-column-start: 1;
      grid-column-end: 6;
      flex-direction: column;
      margin-left: 6%;
      .text {
        overflow: 1;
      }
      .arrow {
        order: 2;
        align-self: flex-end;
        margin-right: 21%;
      }
    }
    .so-me {
      grid-column-start: 1;
      grid-column-end: 13;
      padding: 0 0%;
      a {
        .icon-some {
          width: 14.3vw;
          height: 14.3vw;
        }
      }
    }
  }
}
</style>
<script>
import SoMeIcon from "@/components/SoMeIcon.vue";
import SoMeLinked from "@/components/svg/SoMeLinked.vue";
import SoMePin from "@/components/svg/SoMePin.vue";
import SoMeMail from "@/components/svg/SoMeMail.vue";
export default {
  name: "Footer",
  data() {
    return {
      icon_pin_component: "SoMePin",
      icon_mail_component: "SoMeMail",
      icon_linked_component: "SoMeLinked"
    };
  },
  components: {
    SoMeIcon,
    SoMeLinked,
    SoMePin,
    SoMeMail
  },
  props: {
    nextText: String,
    linkToNext: String,
    prevText: String,
    linkToPrev: String
  }
};
</script>
