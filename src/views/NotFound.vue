<template>
  <section>
    <base-card>
      <h2>Page Not Found</h2>
      <p>
        This page could not be found. Go back to
        <router-link to="/">home</router-link> page
      </p>
    </base-card>
  </section>
</template>
<script>
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { BaseCard },
};
</script>
<style scoped></style>
