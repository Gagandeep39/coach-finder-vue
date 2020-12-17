<template>
  <section>
    <base-card>
      <h2>Register as Coach</h2>
      <coach-form @save-data="saveData" />
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
export default {
  components: { CoachForm, BaseCard },
  methods: {
    saveData(formData) {
      this.$store.dispatch('coaches/registerCoach', formData);
      // Redirect to coach route
      this.$router.replace('/coaches');
    },
  },
};
</script>
<style scoped></style>
