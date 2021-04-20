<template>
  <main>
    <FemaleBody :avatar="avatar" />
    <!-- <MaleBody v-if="avatar.gender == 'male'" :avatar="avatar" /> -->
  </main>
</template>
<script>
import FemaleBody from "@/components/FemaleBody.vue";
// import MaleBody from "@/components/FemaleBody.vue";

export default {
  props: {
    avatar: Object,
  },
  components: {
    FemaleBody,
    // MaleBody,
  },
};
</script>