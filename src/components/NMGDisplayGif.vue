<template>
  <div :id="displayID" class="displayImgWrap" :data-aos="animData" data-aos-easing="ease-out">
    <img
      :class="imgClass"
      :src="displayImgSrc"
      :alt="displayImgAlt"
    />
  </div>
</template>
<style lang="scss" scoped>
  .resultDisplay {
      width: 100%;
      border: 2px solid black;
    }
</style>
<script>
export default {
  name: "NMGDisplayGif",
  props: {
    displayID: String,
    imgClass: String,
    displayImgSrc: String,
    displayImgAlt: String,
    animData: String
  }
}
</script>
