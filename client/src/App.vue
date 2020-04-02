<template>
  <v-app>
    <v-card>
      <v-toolbar color="#546E7A" dark flat>
        <!--<v-toolbar-title>
       <div class="text-no-wrap text-example" style="width: 8rem;">
         Daljina.cc
       </div>
        </v-toolbar-title>-->
        <v-container>
          <v-row>
            <v-col cols="4" padding-top="20px">
              <v-img
                src="../assets/Group 5.svg"
                max-width="240px"
                max-height="70px"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
        <v-spacer></v-spacer>
        <v-card-text>
          <div align="right">
            <v-btn
              class="ma-4"
              color="blue accent-3"
              v-if="!loggedIn()"
              to="/register"
              >Register</v-btn
            >
            <v-btn
              class="ma-4"
              color="blue accent-3"
              v-if="!loggedIn()"
              to="/login"
              >Login</v-btn
            >
            <v-btn
              class="ma-4"
              color="blue accent-3"
              v-else
              @click="logOut"
              to="/"
              >Log out</v-btn
            >

         
            <v-btn class="ma-4" color="blue accent-3">Contact us
            </v-btn>
   
        </div>
     
    </v-card-text>
    </v-toolbar>
 <!--<v-content>
      <v-btn to="/register">Register</v-btn>
      <v-btn to="/login">Login</v-btn>
      <v-toolbar-title>Daljinac</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn v-if="!loggedIn()">Login</v-btn>
      <v-btn v-else @click="logOut">Log out</v-btn>
      <v-btn class="ma-4" color="blue accent-3">Contact us</v-btn>
  </v-content>-->
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-card>  
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

    data: function() {
      return {};
    },
    methods: {
      loggedIn: function() {
        if (localStorage.getItem("token")) {
          //this.isLoggedIn = true;
          return true;
        } else {
          //this.isLoggedIn = false;
          return false;
        }
      },
      logOut: function() {
        localStorage.removeItem("token");
        // this.isLoggedIn = false;
      }
    }
  };
</script>

<style scoped>
  .test {
    padding-left: 150px;
  }
</style>
