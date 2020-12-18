<template>
  <section>
    <base-card>
      <header><h2>Requests Recieved</h2></header>
      <ul v-if="hasRequests">
        <li v-for="request in requests" :key="request">cvf</li>
      </ul>
      <h3 v-else>No Requests have been recieved</h3>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
import { mapGetters } from 'vuex';
export default {
  components: { BaseCard },
  computed: {
    ...mapGetters('requests', ['hasRequests', 'requests']),
  },
};
</script>

<style>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
