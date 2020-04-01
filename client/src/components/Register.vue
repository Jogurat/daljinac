<template>
  <div>
    <v-container>
      <v-row>
        <h1>Register</h1>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field outlined label="Email" v-model="email"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field outlined label="Username" v-model="username"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field outlined label="Password" v-model="password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn v-on:click="registerUser">Register</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data: function() {
    return {
      username: "",
      password: "",
      email: ""
    };
  },
  methods: {
    registerUser: function() {
      axios.post("http://localhost:3000/users", {
        username: this.username,
        password: this.password,
        email: this.email
      });
    }
  }
};
</script>

<style scoped></style>
