<template>
  <base-dialog :show="!!error" @close="closeDialog">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <keep-alive>
        <div v-if="isLoading">
          <base-spinner />
        </div>
        <div v-else>
          <h2>Register as Coach</h2>
          <coach-form @save-data="saveData" />
        </div>
      </keep-alive>
    </base-card>
  </section>
</template>
<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
  components: { CoachForm, BaseCard, BaseDialog, BaseSpinner },
  methods: {
    async saveData(formData) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('coaches/registerCoach', formData);
        this.$router.replace('/coaches');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
      // Redirect to coach route
    },
    closeDialog() {
      this.error = null;
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
};
</script>
<style scoped></style>
