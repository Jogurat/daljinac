<template>
<!--<v-card>
    <v-toolbar
      color="rgb(0,0,0,0)"
      dark
      flat
    >

      <v-img
                src="../assets/Group 5.svg"
                max-width="240px"
                max-height="70px"
              ></v-img>


      <v-spacer></v-spacer>

      <v-btn icon color="blue">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="model"
          centered
          slider-color="yellow"
        >
          <v-tab
            v-for="i in 3"
            :key="i"
            :href="`#tab-${i}`"
          >
            Item {{ i }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="model">
      <v-tab-item
        v-for="i in 3"
        :key="i"
        :value="`tab-${i}`"
      >
        <v-card flat>
          <v-card-text v-text="text"></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>-->
  <v-form
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
    <v-dialog  v-model="dialog" persistent overlay-opacity="0.75" width="400px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-4" color="blue accent-3" dark v-on="on">Register</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Make user profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" >
                <v-text-field label="Email*" v-model="email" :rules="emailRules" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  label="Username*" v-model="username" 
                   required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field  label="Password*"  required
                v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              hint="At least 8 characters"
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
          <v-btn type="submit" color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text v-on:click="registerUser">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-form>

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
import { config } from "../../config";

let url = `${config.DB_HOST}:${config.PORT}`;
console.log(url);
export default {
  name: "Register",
  data: () => ({
      username: "",
      password: "'Password'",
      //email: "",
      dialog:false,
      valid: true,
      show1: false,
       rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false
    }),
  /*data: function() {
    return {
      username: "",
      password: "",
      email: "",
      dialog:false,
      valid: true,
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      lazy: false,
      
    };
  },*/
  methods: {
    registerUser: function() {
      console.log(url);
      axios.post(`${url}/users`, {
        username: this.username,
        password: this.password,
        email: this.email
        
      });
    },
    validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
  }
};
</script>

<style scoped></style>
