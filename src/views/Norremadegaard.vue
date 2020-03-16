<template>
  <div class="case-nmg">
    <CasesAboveTheFold
    caseTitle="Nørremadeaard"
    description="Visual Identity and 3D"
    aboutText="Nørremadegaard is a farm on Funen known for their fresh
               organic free range pork and organic fruits grown on the farm."
    challangeText="Create a visual identity for their new attraction: A family course at
                  Nørremadegård, where families can gather and make marmalade the old fashion way, using
                  organic fruit from the farm. The course would take place at the farm during summer. "
    thoughtsText="Their organic fruits are among Nørremadegaards many strengths.
                  In developing the visual identity the focus was put on the fresh
                  organic ingredients available at the farm, and the family experience of the course.
                  It is considered a premium experience for the whole family, so the result should appeal
                  to both parents and the children."
    />
   <CasesResultNmg />
     <CasesProcessNMG />
     <Footer nextText="Next case" prevText="Previous case" linkToNext="/skansing" linkToPrev="/hesehus"/>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/sass/_global.scss";
.case-nmg{
  animation: page-opacity 0.6s ease forwards;
  overflow-x: hidden;
}
</style>
<script>
import CasesAboveTheFold from "@/views/partials/CasesAboveTheFold.vue";
import CasesResultNmg from "@/views/partials/CasesResultNmg.vue";
import CasesProcessNMG from "@/views/partials/CasesProcessNMG.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "nmg",
  components: {
    CasesAboveTheFold,
    CasesResultNmg,
    CasesProcessNMG,
    Footer
  }
};
</script>
