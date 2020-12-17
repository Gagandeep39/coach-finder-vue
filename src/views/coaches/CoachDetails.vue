<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>Coaching Price: Rs. {{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now.</h2>
        <base-button link :to="contactLink"> Contact </base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { BaseCard, BaseBadge, BaseButton },
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    contactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
  },
};
</script>

<style></style>
