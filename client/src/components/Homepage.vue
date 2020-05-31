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
          <v-col cols="8">
            <router-link to="/Homepage">
              <v-img src="../assets/e.svg" max-width="240px" max-height="70px"></v-img>
            </router-link>
          </v-col>
          <v-col cols="4" padding-top="20px" align="right">
            <Register></Register>
            <Login></Login>
            <!--<v-btn class="ma-4" color="blue accent-3">Contact us</v-btn>-->
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
      <v-card-text>
        <v-row align="right">
          <v-col col-md-10 col-sm-8 col-xs-4 offset="7" align="center" id="nasl">
            <h1>Opametite svoju klimu!</h1>
          </v-col>
        </v-row>
        <v-row align="right">
          <v-col col-md-10 col-sm-8 col-xs-4 offset="7" align="center" id="paraf">
            <p>
              Svega ste dva klika udaljeni od uvek idealne temperature svog
              doma. Uvek!
            </p>
            <Register></Register>
          </v-col>
        </v-row>
      </v-card-text>
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Vue from "vue";
//import VueRouter from "vue-router";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Register from "./Register";
import Login from "./Login";
//import router from "../main";
// library.add(faUserSecret);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

/*data: function() {
      return {
         dialog:false,
         dialog2:false,
         notifications: false,
         sound: true,
         widgets: false,
         username: "",
         password: ""
      };
    },*/

export default {
  name: "Homepage",
  components: {
    Login,
    Register
  },

  data: () => ({
    //username: "",
    //password: "",
    dialog: false
    //dialog2:false
  })

  /*methods: {
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
  }*/
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
#nasl {
  padding-top: 40px;
  /*color: rgba(251, 22, 22);*/
  /*color: white;*/
}
#paraf {
  line-height: 1.6;
  padding-top: 20px;
  font-size: 22px;
  color: rgb(56, 53, 53);
  font-weight: 500;
}
</style>
