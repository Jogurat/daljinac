<template>
  <v-app>
      
       <v-app-bar color="light-blue" dense >
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-img src="../assets/daljinac.png" aspect-ratio="1"></v-img>
          </v-col>
        </v-row>
      </v-container>
      <v-btn to="/register">Register</v-btn>
      <v-btn to="/login">Login</v-btn>
      <v-toolbar-title>Daljinac</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-if="!loggedIn()">Login</v-btn>
      <v-btn v-else @click="logOut">Log out</v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Vue from "vue";
//import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import HelloWorld from "./components/HelloWorld";
library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    loggedIn: function() {
      if (localStorage.getItem("token")) return true;
      else return false;
    },
    logOut: function() {
      localStorage.removeItem("token");
    }
  }
};
</script>
