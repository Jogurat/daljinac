<template>
<v-card>



<v-card>
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
  </v-card>



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
  </v-card>
</template>

<script>
import axios from "axios";

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
      axios.post("http://localhost:3000/users", {
        username: this.username,
        password: this.password,
        email: this.email
      });
    }
  }
};
</script>

<style scoped></style>
