<template>
  <base-dialog :show="!!error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
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
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: { CoachForm, BaseCard, BaseDialog },
  methods: {
    async saveData(formData) {
      try {
        await this.$store.dispatch('coaches/registerCoach', formData);
        this.$router.replace('/coaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      // Redirect to coach route
    },
    closeDialog() {
      this.error = null;
    },
  },
  data() {
    return {
      error: null,
    };
  },
};
</script>
<style scoped></style>
