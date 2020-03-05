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
//import router from "../main";
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
        const res = await axios.post(url, {
          username: this.username,
          password: this.password
        });
        const token = res.data;
        //console.log("TOKEN U LOGIN " + token);
        localStorage.setItem("token", token);
        this.$router.push("/user");
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
