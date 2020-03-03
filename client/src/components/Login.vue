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
      //PROMISE
      // axios
      //   .post(url, {
      //     data: { username: this.username, password: this.password }
      //   })
      //   .then(function(response) {
      //     console.log(response);
      //     let token = response;
      //     localStorage.setItem("token", token);
      //   })
      //   .catch(function(err) {
      //     console.log("NALAZIM SE U ERR" + err);
      //   });
      try {
        const token = await axios.post(url, {
          data: { username: this.username, password: this.password }
        });
        localStorage.setItem("token", token);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
