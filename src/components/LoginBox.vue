<template>
    <div class="card">
      <div class="card-header">{{ title }}</div>
      <div class="card-body">
        <b-form @submit.prevent="onLogin">
          <div class="form-group">
            <label for="username">Username</label>
            <b-form-input v-model="$v.form.username.$model" :state="validateState('username')" type="text" class="form-control" id="username" placeholder="Enter Username">
            </b-form-input>
            <b-form-invalid-feedback>
          Username is required
        </b-form-invalid-feedback>
        <b-form-invalid-feedback v-if="!$v.form.username.length">
          The username dont exicts try again
        </b-form-invalid-feedback>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <b-form-input v-model="$v.form.password.$model" type="password" :state="validateState('password')" class="form-control" id="password" placeholder="Password"></b-form-input>
            <b-form-invalid-feedback>
            Password is required
            </b-form-invalid-feedback>
            <b-form-invalid-feedback
            v-if="$v.form.password.required && !$v.form.password.length"
            >
            This can not be a passwork on our site try again please
            </b-form-invalid-feedback>
          </div>
          <button type="submit" class="btn btn-success">Sign in</button>
          <div class="mt-2">
        Do not have an account yet?
        <router-link to="register"> Register in here</router-link>
      </div>
        </b-form>
        <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    ></b-alert>
      </div>
    </div>
</template>

<script>
import { required,minLength,maxLength } from "vuelidate/lib/validators";
import {mockLogin} from "../services/auth.js"
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  validations: {
    form: {
      username: {
        required,
        length: (u) => minLength(3)(u) && maxLength(8)(u)
      },
      password: {
        required,
        length: (p) => minLength(5)(p) && maxLength(10)(p)
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        
        // const response = await this.axios.post(
        //   this.$root.store.server_domain +"/Login",


        //   {
        //     username: this.form.username,
        //     password: this.form.password
        //   }
        // );

        const success = true; // modify this to test the error handling
        const response = mockLogin(this.form.username, this.form.password, success);

        // console.log(response);
        // this.$root.loggedIn = true;
        console.log(this.$root.store.login);
        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },

    onLogin() {
      // console.log("login method called");
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("login method go");

      this.Login();
    }
  }
};
</script>
