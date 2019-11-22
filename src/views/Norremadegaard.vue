<template>
  <div class="case-nmg">
    <CasesAboveTheFold
    caseTitle="Nørremadeaard"
    description="Visual Identity"
    aboutText="Nørremadegaard is a farm on funen known for their fresh
               organic free range pork and organic fruits grown on the farm."
    challangeText="Create a visual identity for their new attraction: A family course at
                  Nørremadegård, where families can gather and make marmalade the old fashion way using
                  organic fruit grown on the farm. The course would take place at the farm during the summer. "
    thoughtsText="Their organic fruits grown on the farm are among Nørremadegaards many strengths.
                  In developing the visual identity the focus was put on the fresh
                  organic ingredients available at the farm, and the family experience of the course.
                  It is considered a premium experience for the whole family, so the result should appeal
                  to both parents and the children."
    />
    <CasesResultNmg />
    <CasesProcessNMG />
  </div>
</template>

<script>
import CasesAboveTheFold from "@/views/partials/CasesAboveTheFold.vue";
import CasesResultNmg from "@/views/partials/CasesResultNmg.vue";
import CasesProcessNMG from "@/views/partials/CasesProcessNMG.vue";
export default {
  name: "nmg",
  components: {
    CasesAboveTheFold,
    CasesResultNmg,
    CasesProcessNMG
  }
};
</script>
