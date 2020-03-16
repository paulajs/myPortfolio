<template>
  <div class="case-hesehus">
    <CasesAboveTheFold
      caseTitle="Hesehus"
      description="Motion graphics and React"
      aboutText="Hesehus is the largest e-commerce solution provider
        in Denmark. This project was part of my exam at MMD, and additional
        freelance work after the exam."
      challangeText="Hesehus had 2 concerns: they needed to display their cases at e-commerce fairs and
        their work process to new clients in a proper way.
        Usually at fairs, cases from their website are shown on a large screen, however those
        contain a lot of text. The cases should be shown in a manner more
        suitable for a fair, while their work process should give an overview for new
        customers."
      thoughtsText="At fairs Hesehus is present among many other brands. To bring attention to their work, the power of
        colors and movements are useful, therefore the cases will be shown with motion graphics videos instead.
        The videos should be an appetizer of Hesehus’ work. At the fair users can control the videos with
        an interface."
    />
    <CasesResultHesehus />
    <CasesProcessHesehus />
    <Footer nextText="Next case" prevText="Go to lab" linkToNext="/norremadegaard" linkToPrev="/lab"/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
.case-hesehus {
  animation: page-opacity 0.6s ease forwards;
  overflow-x: hidden;
}
</style>
<script>
import CasesAboveTheFold from "@/views/partials/CasesAboveTheFold.vue";
import CasesResultHesehus from "@/views/partials/CasesResultHesehus.vue";
import CasesProcessHesehus from "@/views/partials/CasesProcessHesehus.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Hesehus",
  components: {
    CasesAboveTheFold,
    CasesResultHesehus,
    CasesProcessHesehus,
    Footer
  }
};
</script>
