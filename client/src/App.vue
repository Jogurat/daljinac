<template>
  <v-app>
    <router-view />
    <HelloWorld />
  </v-app>
</template>

<script>
import Vue from "vue";
//import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import HelloWorld from "./components/HelloWorld";
library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
