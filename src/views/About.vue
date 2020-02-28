<template>
  <div class="about">
    <router-link class="case-home-button" to="/">
      <HomeButton buttonText="Home" />
    </router-link>
    <div class="about-header">
      <div class="about-background">
        <h1 data-text="About me">About me</h1>
      </div>
      <p class="about-text">
        Hello my name is Paula,
        <em>I am a web developer and designer</em>, with
        interests in all creative outlets on the web. I like the interplay of the visual and the technical.
        I like to learn, eat pasta, play Borderlands, watching American Horror Story,
        and adore everything with 4 legs and fur, and
        <em>I am currently looking for new opportunities.</em>
        Below are some the technoligies and tools that I am familiar with.
      </p>
    </div>
    <div class="about-skills">
      <div class="skill-section">
        <h3>Web</h3>
        <h4 class="skill-header header-js">Javascript</h4>
        <div class="skill-subset subset-js">
          <ul>
            <li>Vue.js</li>
            <li>React.js</li>
            <li>ES6</li>
            <li>Typescript</li>
          </ul>
        </div>
        <h4 class="skill-header header-css">CSS</h4>
        <div class="skill-subset subset-css">
          <ul>
            <li>SCSS</li>
            <li>CSS Grid</li>
            <li>Flexbox</li>
            <li>Responsive</li>
          </ul>
        </div>
      </div>
      <div class="skill-section">
        <h3>Design</h3>
        <h4 class="skill-header header-adobe">Adobe</h4>
        <div class="skill-subset subset-adobe">
          <ul>
            <li>Illustrator</li>
            <li>After Effects</li>
            <li>Photoshop</li>
            <li>InDesign</li>
            <li>Experience Design</li>
          </ul>
        </div>
        <h4 class="skill-header header-other">Other</h4>
        <div class="skill-subset subset-other">
          <ul>
            <li>Pen and paper</li>
            <li>Prototyping</li>
            <li>Design and user research</li>
          </ul>
        </div>
      </div>
      <div class="skill-section">
        <h3>Other</h3>
        <h4 class="skill-header header-3d">3D/games</h4>
        <div class="skill-subset subset-misc">
          <ul>
            <li>Three.js</li>
            <li>Blender 3D</li>
            <li>Unity</li>
          </ul>
        </div>
        <h4 class="skill-header header-contact">Contact</h4>
        <div class="skill-subset subset-contact">
          <ul>
            <li>
              <a href="mailto:paulajoannasobczak@gmail.com">
                <SoMeIcon>
                  <component :is="icon_mail_component"></component>
                </SoMeIcon>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/paulajoannasobczak/" target="_blank">
                <SoMeIcon>
                  <component :is="icon_linked_component"></component>
                </SoMeIcon>
              </a>
            </li>
            <img src alt />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
@import "@/assets/sass/_mixins.scss";

.about {
  animation: page-opacity 0.6s ease forwards;
  @include create-grid(16, 4.94vh, 24, 3.125vw, 1vh, 1vw);
  margin: 2vh 1vw;
  .case-home-button {
    grid-column-start: 24;
    grid-row-start: 1;
    justify-self: end;
    align-self: start;
    transform: translate(-9px, 1px);
  }
  .about-header {
    @include place-in-grid(1, 7, 2, 23);
    display: flex;
    justify-content: center;
    .about-background {
      width: 100%;
      margin-top: -3%;
      h1 {
        @include font-primary-and-less-fat;
        font-size: 7.5vw;
        text-align: center;
        margin-top: 5vh;
        color: black;
      }
    }
    .about-text {
      width: 85%;
      font-family: $font-secundary;
      font-weight: 100;
      position: absolute;
      top: 28vh;
      font-size: 1.5vw;
      text-align: center;
      em {
        border-bottom: 1px solid black;
        font-style: normal;
      }
    }
  }
  .about-skills {
    @include place-in-grid(9, 18, 1, 24);
    display: flex;
    flex-direction: row;
    .skill-section {
      width: 33.333%;
      @include create-grid(3, 25.333%, 2, 50%, 6%, 0);
      h3 {
        grid-row-start: 1;
        grid-column-start: 2;
        align-self: end;
        @include font-primary-and-fat;
        font-size: 3.5em;
        color: black;
      }
      .header-js {
        grid-row-start: 2;
        grid-column-start: 1;
      }
      .header-css {
        grid-row-start: 3;
        grid-column-start: 1;
      }
      .header-adobe {
        grid-row-start: 2;
        grid-column-start: 1;
      }
      .header-other {
        grid-row-start: 3;
        grid-column-start: 1;
      }
      .header-3d {
        grid-row-start: 2;
        grid-column-start: 1;
      }
      .header-contact {
        grid-row-start: 3;
        grid-column-start: 1;
      }
      .skill-header {
        @include font-primary-and-fat;
        color: black;
        justify-self: end;
        align-self: center;
        margin-right: 4%;
        font-size: 2em;
      }
      .subset-js {
        grid-row-start: 2;
        grid-column-start: 2;
      }
      .subset-css {
        grid-row-start: 3;
        grid-column-start: 2;
      }
      .subset-adobe {
        grid-row-start: 2;
        grid-column-start: 2;
      }
      .subset-other {
        grid-row-start: 3;
        grid-column-start: 2;
      }
      .subset-contact {
        grid-row-start: 3;
        grid-column-start: 2;
        ul {
          display: flex;
          flex-direction: row;
          width: 100%;
          li {
            width: 34%;
            a {
              .icon-some {
                width: 4vw;
                height: 4vw;
              }
            }
          }
        }
      }
      .subset-misc {
        grid-row-start: 2;
        grid-column-start: 2;
      }
      .skill-subset {
        display: flex;
        align-items: center;
        border-left: 1px solid black;
        ul {
          list-style: none;
          font-family: $font-secundary;
          margin-left: 4%;
          li {
            padding: 2% 0;
          }
        }
      }
    }
  }
}
@media screen and (max-device-width: 500px) and (max-device-height: 850px) and (-webkit-min-device-pixel-ratio: 2) {
  .about {
    grid-template-rows: repeat(44, 4.94vh);

    .about-header {
      grid-row-start: 5;
      grid-row-end: 15;
      flex-direction: column;
      .about-background {
        h1 {
          font-size: 16vw;
          position: relative;
          &:after {
            left: 4.5vw;
            top: 0.8vh;
          }
        }
      }
      .about-text {
        top: 0vh;
        margin-top: 3vh;
        font-size: 4.6vw;
        position: initial;
        width: 100%;
      }
    }
    .about-skills {
      grid-row-start: 15;
      grid-row-end: 67;
      flex-direction: column;
      .skill-section {
        width: 100%;
        grid-template-rows: repeat(3, 23vh);
        grid-template-columns: 35% 65%;
        grid-row-gap: 15%;
        grid-column-gap: 5%;
        margin-bottom: 20vh;
        h3 {
          grid-column-start: 1;
          grid-column-end: 3;
          align-self: end;
          justify-self: center;
          font-size: 2.3em;
        }
        .skill-header {
          justify-self: end;
          align-self: center;
          margin-right: 0;
          font-size: 1.4em;
        }
        .subset-contact {
          ul {
            li {
              width: 38%;
              a {
                .icon-some {
                  width: 18vw;
                  height: 18vw;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
<script>
import HomeButton from "@/components/HomeButton.vue";
import SoMeIcon from "@/components/SoMeIcon.vue";
import SoMeLinked from "@/components/svg/SoMeLinked.vue";
import SoMeMail from "@/components/svg/SoMeMail.vue";
export default {
  name: "about",
  components: {
    HomeButton,
    SoMeLinked,
    SoMeMail,
    SoMeIcon
  },
  data() {
    return {
      icon_mail_component: "SoMeMail",
      icon_linked_component: "SoMeLinked"
    };
  }
};
</script>
