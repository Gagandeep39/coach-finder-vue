<template>
  <div>
    <base-dialog :show="!!error" @close="closeDialog">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating..." fixed>
      <p>Authenticating...</p>
      <base-spinner />
    </base-dialog>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid" class="errors">
          Enter valid data. Password must be atleast 6 characters
        </p>
        <base-button> {{ submitButtonCaption }} </base-button>
        <base-button type="button" mode="flat" @click="switchFormMode">
          {{ switchButtonCaption }}
        </base-button>
      </form>
    </base-card>
  </div>
</template>
<script>
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
  components: { BaseButton, BaseCard, BaseDialog, BaseSpinner },
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      formMode: 'login',
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === '' ||
        this.password === '' ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;

      try {
        if (this.formMode === 'login') {
          //..
        } else {
          await this.$store.dispatch('signup', {
            email: this.email,
            password: this.password,
          });
        }
      } catch (error) {
        this.error = error.message || 'Something went wrong';
      }
      this.isLoading = false;
    },
    switchFormMode() {
      if (this.formMode === 'login') this.formMode = 'register';
      else this.formMode = 'login';
    },
    closeDialog() {
      this.error = null;
    },
  },
  computed: {
    submitButtonCaption() {
      if (this.formMode === 'login') return 'Login';
      else return 'Register';
    },
    switchButtonCaption() {
      if (this.formMode === 'login') return 'Register instead';
      else return 'Login Instead';
    },
  },
};
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
