<template>
  <div class="case-skansing">
    <CasesAboveTheFold
    caseTitle="Skansing IT"
    description="Visual Identity &amp; website"
    aboutText="Independent hacker searching for vulnerabilities in web applications."
    challangeText="Create a visual identity and a website to promote and explain the hacking services available. "
    thoughtsText=" Most of the inspiration was found in the hacking series of today, Mr Robot, and in general
        the cyber punk universe. The hacker cliches were kept to a minimum. Since the brand is not with suit-and-ties company,
        but a freelance hacker in a hoodie, the pop culture inspiration feels suitable."
    />
    <CasesResultSkansing/>
    <CasesProcessSkansing />
  </div>
</template>
<script>
import CasesAboveTheFold from "@/views/partials/CasesAboveTheFold.vue";
import CasesResultSkansing from "@/views/partials/CasesResultSkansing.vue";
import CasesProcessSkansing from "@/views/partials/CasesProcessSkansing.vue"

export default {
  name: "Skansing",
  components: {
    CasesAboveTheFold,
    CasesResultSkansing,
    CasesProcessSkansing
  }
};
</script>
