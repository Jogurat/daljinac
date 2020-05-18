<template>
  <v-dialog v-model="dialog" overlay-opacity="0.75" width="400px">
    <template v-slot:activator="{ on }">
      <v-btn class="ma-4" color="blue accent-3" dark v-on="on">Register</v-btn>
    </template>
    <v-form ref="form" v-model="valid">
      <v-card>
        <v-card-title class="justify-center">
          <v-row>
            <v-col cols="10">
              <span class="headline">Make user profile</span>
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
                <v-text-field
                  label="Email*"
                  v-model="email"
                  :rules="emailRules"
                  filled
                  rounded
                  dense
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Username*"
                  v-model="username"
                  :rules="usernameRules"
                  filled
                  rounded
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-alert
                v-model="alertFail"
                :value="alert"
                color="red"
                icon="mdi-close-circle-outline"
                transition="scale-transition"
                dissmisible
              >There is already a user with this username!</v-alert>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  required
                  filled
                  rounded
                  dense
                  v-model="password"
                  color="green"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  hint="At least 5 characters"
                  counter
                  @click:append="show1 = !show1"
                  @keyup.enter="registerUser"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!--<v-btn icon color="blue darken-1" text v-on:click="reset">
            <v-icon medium>mdi-restore</v-icon>
          </v-btn>-->

          <!--<v-btn  color="blue darken-1" text v-on:click="registerUser">
          Register</v-btn>-->
          <v-btn :disabled="!valid" color="blue darken-1" text v-on:click="registerUser">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
    <v-alert
      v-model="alertReg"
      :value="alert"
      color="green"
      icon="mdi-check-circle-outline"
      transition="scale-transition"
    >You are registred now!</v-alert>

    <v-alert
      v-model="alertFail2"
      :value="alert"
      color="yellow"
      icon="mdi-close-circle-outline"
      transition="scale-transition"
    >Server error!</v-alert>
  </v-dialog>

  <!--<v-container>
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
  </v-container>-->
</template>

<script>
import axios from "axios";
// import { config } from "../../../config";
const config = require("../../../config");
// const jsonConfig = require("../../../config.json");
// const config = jsonConfig;
let url = `${config.DB_HOST}`;
if (process.env.NODE_ENV === "development") {
  url = `${config.DB_HOST}`;
} else {
  url = "https://daljinac-api.herokuapp.com/api";
}
// const config2 = require("../../../config").config;
console.log(url);
export default {
  name: "Register",
  data: () => ({
    username: "",
    password: "",
    dialog: false,
    //showLoginForm:false,
    alertReg: false,
    alertFail: false,
    alertFail2: false,
    valid: true,
    show1: false,
    alert: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 5 || "Min 5 characters"
    },
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    usernameRules: [
      value => !!value || "Username is required.",
      value => value.length >= 4 || "Min 4 characters"
    ]
  }),
  methods: {
    registerUser: async function() {
      this.$refs.form.validate();
      //this.$refs.username.validate();
      let res;
      try {
        console.log(url);
        let res = await axios.post(`/api/auth`, {
          username: this.username,
          password: this.password,
          email: this.email
        });
        console.log(res);
        console.log(res.status);
        if (res.status === 201 || res.status === 202) {
          this.alertReg = true;
          this.alertFail = false;
          console.log("Usao u status 201");
        }
      } catch (err) {
        let res = err.response;
        //console.log("hello from catch");
        //console.log(err.response);
        if (res.status === 409) {
          this.alertFail = true;
          this.alertReg = false;
          this.alertFail2 = false;
          this.username = "";
          console.log("Usao u status 409");
        } else if (res.status === 500) {
          this.alertFail2 = true;
          this.alertFail = false;
          this.alertReg = false;
          console.log("Usao u status 500");
        }
      }
    },
    /*validate () {
        this.$refs.form.validate();
        
      },*/
    reset() {
      this.$refs.form.reset();
    },
    close() {
      this.$refs.form.reset();
      this.dialog = false;
      this.alertReg = false;
      this.alertFail = false;
      this.alertFail2 = false;
    }
  },
  close() {
    this.$refs.form.reset();
    this.dialog = false;
    this.alertReg = false;
    this.alertLos = false;
  }
};
</script>

<style scoped>
.headline {
  align-content: center;
  text-align: center;
}
</style>