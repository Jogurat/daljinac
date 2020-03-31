<template>
  <div>
    <h1>REGISTER</h1>Username
    <input type="text" v-model="username" />
    <br />Password
    <input type="password" name id v-model="password"  />
    <br />
    <br />
    <v-btn v-on:click="registerUser">Register</v-btn>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    registerUser: function() {
      axios.post("http://localhost:3000/users", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style scoped></style>
