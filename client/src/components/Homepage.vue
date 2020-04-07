<template>
 <v-app style=" background: rgba(0,0,0,0);">
   <div id="bod">
      
        <!--<v-toolbar-title>
       <div class="text-no-wrap text-example" style="width: 8rem;">
         Daljina.cc
       </div>
        </v-toolbar-title>-->
        <v-container>
             <v-row>
            <v-col  cols="8" >
              <v-img
                src="../assets/Group 5.svg"
                max-width="240px"
                max-height="70px"
              ></v-img>
            </v-col>
            <v-col cols="4" padding-top="20px" align="right">
              
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
                <v-text-field label="Email*" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field 
                  label="Username*"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field  label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false" v-on:click="registerUser">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



  <v-dialog v-model="dialog2" persistent overlay-opacity="0.75" width="400px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-4" color="blue accent-3" dark v-on="on">Log in</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Log in</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Username*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog2 = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog2 = false" v-on:click="loginUser">Log in</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
            
            

            <!--<v-btn class="ma-4" color="blue accent-3">Contact us</v-btn>-->
          </v-col>
          </v-row>
        </v-container>
        <v-spacer></v-spacer>
        <v-card-text>
          
        </v-card-text>
  <v-content>
        <router-view></router-view>
      </v-content>
     
     </div>
  </v-app>

</template>

<script>
import axios from "axios";
  import Vue from "vue";
  const url = "http://localhost:3000";
  //import VueRouter from "vue-router";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
  //import HelloWorld from "./components/HelloWorld";
  library.add(faUserSecret);

  Vue.component("font-awesome-icon", FontAwesomeIcon);

  export default {
    name: "Homepage",

    components: {},

    data: function() {
      return {
         dialog:false,
         dialog2:false,
         notifications: false,
         sound: true,
         widgets: false,
      };
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
    }
    }
  };
</script>

<style scoped>
  .test {
    padding-left: 150px;
  }
  #bod{
background-image: url('../assets/pexels-plavadevojka.jpeg');
     /* background-color: #8f2c2c; */
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
