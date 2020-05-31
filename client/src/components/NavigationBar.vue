<template>
  <v-card>
    <v-toolbar color="#546E7A" dark flat class="header">
      <v-container>
        <router-link to="/Homepage">
          <v-row>
            <v-col cols="8">
              <v-img src="../assets/e.svg" max-width="240px" max-height="70px"></v-img>
            </v-col>
          </v-row>
        </router-link>
      </v-container>
      <v-spacer></v-spacer>
      <v-card-text>
        <div align="right">
          <div v-if="!loggedIn()">
            <Login></Login>
          </div>
          <v-btn class="ma-4" color="blue accent-3" v-else @click="logOut">Log out</v-btn>
        </div>
      </v-card-text>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-card>
</template>

<script>
import Vue from "vue";
import Login from "./Login";
//import VueRouter from "vue-router";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// //import HelloWorld from "./components/HelloWorld";
// library.add(faUserSecret);
// Vue.component("font-awesome-icon", FontAwesomeIcon);
export default {
  name: "NavigationBar",
  components: { Login },
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
      localStorage.removeItem("username");
      if (localStorage.getItem("token") == null) {
        this.$router.push("Homepage"); // redirect to home, for example
      }
    }
  }
};
</script>

<style>
.header {
  position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  width: 100vw; /* take up the full browser width */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 100px; /* define height for content */
}
</style>