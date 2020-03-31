<template>
  <div>
    <v-container>
      <v-row>
        <h1>Login</h1>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field outlined label="Username" v-model="username"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field outlined label="Password" v-model="password" type="password"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link to="/forgotPass">Forgot your password?</router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col>
          <v-btn v-on:click="loginUser">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
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
