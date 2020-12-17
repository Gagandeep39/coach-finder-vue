<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="firstName.value"
        @blur="clearValidity('firstName')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        v-model.trim="lastName.value"
        @blur="clearValidity('lastName')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        rows="5"
        id="description"
        v-model.trim="description.value"
        @blur="clearValidity('description')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !hourlyRate.isValid }">
      <label for="hourlyRate">Rate</label>
      <input
        type="number"
        id="hourlyRate"
        v-model.number="hourlyRate.value"
        @blur="clearValidity('hourlyRate')"
      />
    </div>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of Expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model.trim="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model.trim="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model.trim="areas.value"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career Development</label>
      </div>
    </div>
    <p v-if="!formIsValid" style="color: red">
      Please fix all errors and submit again!
    </p>
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
      firstName: {
        value: '',
        isValid: true,
      },
      lastName: {
        value: '',
        isValid: true,
      },
      hourlyRate: {
        value: null,
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      areas: {
        value: [],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) return;
      const formData = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        hourlyRate: this.hourlyRate.value,
        description: this.description.value,
        areas: this.areas.value,
      };
      this.$emit('save-data', formData);
    },
    validateForm() {
      this.formIsValid = true;
      if (this.firstName.value === '') {
        this.firstName.isValid = false;
        this.formIsValid = false;
      }
      if (this.lastName.value === '') {
        this.lastName.isValid = false;
        this.formIsValid = false;
      }
      if (this.description.value === '') {
        this.description.isValid = false;
        this.formIsValid = false;
      }
      if (!this.hourlyRate.value || this.hourlyRate.value < 0) {
        this.hourlyRate.isValid = false;
        this.formIsValid = false;
      }
      if (this.areas.value.length === 0) {
        this.areas.isValid = false;
        this.formIsValid = false;
      }
    },
    clearValidity(input) {
      this[input].isValid = true;
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
