<template>
  <v-dialog v-model="dialog2" overlay-opacity="0.75" width="400px">
    <template v-slot:activator="{ on }">
      <v-btn class="ma-4" color="blue accent-3" dark v-on="on">Log in</v-btn>
    </template>
    <v-form ref="form" v-model="valid">
      <v-card>
        <v-card-title class="justify-center">
          <v-row>
            <v-col cols="10">
              <span class="headline">Log in</span>
            </v-col>
            <v-col cols="2">
              <v-btn icon color="blue darken-1" v-on:click="close">
                <v-icon medium>mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Username*" v-model="username" filled rounded dense required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  v-model="password"
                  filled
                  rounded
                  dense
                  required
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  counter
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-row>
                <v-col class="text-center">
                  <router-link to="/forgotPass">Forgot your password?</router-link>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text v-on:click="loginUser">Log in</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>

  <!--<div>
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
  </div>-->
</template>

<script>
import axios from "axios";
//import router from "../main";
const config = require("../../../config");
// const config = jsonConfig;

let url = `${config.DB_HOST}/users/login`;

if (process.env.NODE_ENV === "development") {
  url = `${config.DB_HOST}/users/login`;
} else {
  url = "https://daljinac-api.herokuapp.com/api/users/login";
}

export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    dialog2: false,
    show1: false,
    valid: true
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
        console.log(url);
        const res = await axios.post("/api/auth/login", {
          username: this.username,
          password: this.password
        });
        const token = res.data;
        //console.log("TOKEN U LOGIN " + token);
        localStorage.setItem("token", token);
        localStorage.setItem("username", this.username);
        this.$router.push("/user");
      } catch (err) {
        console.log(err);
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    close() {
      this.$refs.form.reset();
      this.dialog2 = false;
    }
  }
};
</script>

<style scoped></style>
