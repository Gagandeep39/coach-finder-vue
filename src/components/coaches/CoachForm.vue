<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firstName">First name</label>
      <input type="text" id="firstName" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea rows="5" id="description" v-model.trim="description" />
    </div>
    <div class="form-control">
      <label for="hourlyRate">Rate</label>
      <input type="number" id="hourlyRate" v-model.number="hourlyRate" />
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model.trim="areas"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model.trim="areas"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model.trim="areas"
        />
        <label for="career">Career Development</label>
      </div>
    </div>
    <base-button> Submit Button </base-button>
  </form>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  emits: ['save-data'],
  components: { BaseButton },
  data() {
    return {
      firstName: '',
      lastName: '',
      hourlyRate: null,
      description: '',
      areas: [],
    };
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        hourlyRate: this.hourlyRate,
        description: this.description,
        areas: this.areas,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
