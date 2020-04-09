<template>

  <v-card>
    <v-toolbar
      color="#546E7A"
      dark
      flat
      fixed
    >
    
     <!--<v-toolbar-title>
       <div class="text-no-wrap text-example" style="width: 8rem;">
         Daljina.cc
       </div>
    </v-toolbar-title>-->
      <v-container>
        <router-link to="/Homepage">
        <v-row>
          
          <v-col cols="4">
           
            <v-img src="../assets/e.svg"
          
                max-width="240px"
                max-height="70px" 
                 ></v-img>
          </v-col>
        </v-row>
         </router-link>
      </v-container>
     <v-spacer></v-spacer>
       <v-card-text>

          <div align="right">
      
            <v-btn class="ma-4" icon>
              <v-icon large>mdi-magnify</v-icon> <!--mdi-chevron-up-circle-->
            </v-btn>
        

         
            <v-btn class="ma-4" color="blue accent-3" v-if="!loggedIn()">Login</v-btn>
            <v-btn class="ma-4" color="blue accent-3" v-else @click="logOut">Log out</v-btn>

         
            <v-btn class="ma-4" color="blue accent-3">Contact us
            </v-btn>
   
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
//import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import HelloWorld from "./components/HelloWorld";
library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
export default {
  name: "NavigationBar",
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