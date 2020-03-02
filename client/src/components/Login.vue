<template>
  <div>
    <h1>LOGIN</h1>Username
    <input type="text" v-model="username" />
    <br />Password
    <input type="text" name id v-model="password" />
    <br />
    <br />
    <v-btn v-on:click="loginUser">Login</v-btn>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:3000/users/login";

export default {
  name: "Login",
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    async loginUser() {
      console.log("Logging in...");
      try {
        let token = await axios.get(url, {
          username: this.username,
          password: this.username
        });
        console.log(token);
        localStorage.setItem("token", token);
      } catch (err) {
        console.log("ERROR KOD AXIOSA" + err);
      }
    }
  }
};
</script>

<style></style>
