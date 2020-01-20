<template>
  <div class="about">
    <img class="about-test" src="@/assets/img/about.png" alt="">
  </div>
</template>
<style lang="scss" scoped>
  .about-test{
    width: 100%;
  }
</style>
<script>
import ShapeOverlays from "@/components/ShapeOverlays.vue";
export default {
  name: "about",
  components:{
    ShapeOverlays
  }
}
</script>
