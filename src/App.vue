<template>
  <div id="app">
    <transition
      mode="out-in"
      leave-active-class="animated fadeOut"
      enter-active-class="animated fadeInDown"
    >
      <!-- <keep-alive include="home"> -->
      <router-view />
      <!-- </keep-alive> -->
    </transition>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  color: #2c3e50;
}

//start - Starting state for enter
.fade-enter {
  opacity: 0;

  // transform: scale(0,0);
}
//Active state for enter. Applied during the entire entering phase
.fade-enter-active {
  transition: opacity 0.1s ease-in-out;
}
//Ending state for enter.
.fade-enter-to {
  opacity: 1;
}
//Starting state for leave
.fade-leave {
  opacity: 1;
  // transition-delay: 0.7s;
}
//Active state for leave. Applied during the entire leaving phase
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;

  // transition-delay: 0.7s;
}
//Ending state for leave
.fade-leave-to {
  // transition-delay: 0.7s;
  opacity: 0;
}
</style>
