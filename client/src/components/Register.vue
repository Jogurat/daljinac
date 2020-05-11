<template>
  <v-dialog v-model="dialog" overlay-opacity="0.75" width="400px">
    <template v-slot:activator="{ on }">
      <v-btn class="ma-4" color="blue accent-3" dark v-on="on">Register</v-btn>
    </template>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
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
                  label="Password*"
                  required
                  filled
                  rounded
                  dense
                  v-model="password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  hint="At least 5 characters"
                  counter
                  @click:append="show1 = !show1"
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

          <v-btn color="blue darken-1" text v-on:click="registerUser"
            >Register</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
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
  let url = `${config.DB_HOST}`;

  console.log(url);
  export default {
    name: "Register",
    data: () => ({
      username: "",
      password: "",
      //email: "",
      dialog: false,
      valid: true,
      show1: false,
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 5 || "Min 5 characters",
      },
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      lazy: false,
    }),
    methods: {
      registerUser: function() {
        console.log(url);
        console.log(config);
        axios.post(`${url}/users`, {
          username: this.username,
          password: this.password,
          email: this.email,
        });
      },
      /*validate () {
        this.$refs.form.validate()
      },*/
      /*reset () {
        this.$refs.form.reset();
      },*/
      close() {
        this.$refs.form.reset();
        this.dialog = false;
      },
    },
  };
</script>

<style scoped>
  .headline {
    align-content: center;
    text-align: center;
  }
</style>
