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
import { config } from "../../config";

let url = `${config.DB_HOST}:${config.PORT}`;
console.log(url);
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
      console.log(url);
      axios.post(`${url}/users`, {
        username: this.username,
        password: this.password,
        email: this.email
      });
    }
  }
};
</script>

<style scoped></style>
