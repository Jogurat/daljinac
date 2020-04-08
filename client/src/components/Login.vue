<template>
  <v-dialog v-model="dialog2" persistent overlay-opacity="0.75" width="400px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-4" color="blue accent-3" dark v-on="on">Log in</v-btn>
      </template>
      <v-form ref="form"
      v-model="valid">
      <v-card>
        <v-card-title class="justify-center">
          <span class="headline">Log in</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Username*" v-model="username" filled rounded dense required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" v-model="password" filled rounded dense required
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
             @click:append="show1 = !show1"></v-text-field>
              </v-col>
               <v-row>
                 <v-col class="text-center">
                  <router-link  to="/forgotPass">Forgot your password?</router-link>
                </v-col>
               </v-row>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn  icon color="blue darken-1" v-on:click="close">
            <v-icon medium>mdi-close</v-icon>
          </v-btn>
          <v-btn  color="blue darken-1" text v-on:click="loginUser">Log in</v-btn>
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
import { config } from "../../config";

let url = `${config.DB_HOST}:${config.PORT}/users/login`;
//const url = "http://localhost:3000/users/login";

export default {
  name: "Login",
  data: () => ({
    username: "",
    password: "",
    dialog2:false,
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
    },
    reset () {
        this.$refs.form.reset()
      },
    close(){
        this.$refs.form.reset();
        this.dialog2=false;
      }
  }
};
</script>

<style scoped></style>