<template>
  <div>
    <base-dialog :show="!!error" @close="closeDialog">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <base-card>
        <header><h2>Requests Recieved</h2></header>
        <base-spinner v-if="isLoading" />
        <ul v-else-if="hasRequests && !isLoading">
          <request-item
            v-for="request in requests"
            :key="request"
            :message="request.message"
            :email="request.email"
          />
        </ul>
        <h3 v-else>No Requests have been recieved</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import BaseCard from '../../components/ui/BaseCard.vue';
import { mapGetters } from 'vuex';
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: { BaseCard, RequestItem, BaseSpinner, BaseDialog },
  computed: {
    ...mapGetters('requests', ['hasRequests', 'requests']),
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
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
  created() {
    this.loadRequests();
  },
};
</script>

<style scoped>
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
