<template>
  <v-app>
    <!--<v-toolbar-title>
       <div class="text-no-wrap text-example" style="width: 8rem;">
         Daljina.cc
       </div>
        </v-toolbar-title>-->

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import Vue from "vue";
  //import VueRouter from "vue-router";
  // import { library } from "@fortawesome/fontawesome-svg-core";
  // import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
  // import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  //import HelloWorld from "./components/HelloWorld";
  // library.add(faUserSecret);

  // Vue.component("font-awesome-icon", FontAwesomeIcon);

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
      },
    },
  };
</script>

<style scoped>
  .test {
    padding-left: 150px;
  }
  #bod {
    background-image: url("../assets/pexels-plavadevojka.jpeg");
    /* background-color: #8f2c2c; */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
