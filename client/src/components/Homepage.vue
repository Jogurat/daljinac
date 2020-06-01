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
          <v-col col-md-8 col-sm-4 col-xs-2>
            <router-link to="/Homepage">
              <v-img
                src="../assets/e.svg"
                max-width="240px"
                max-height="70px"
              ></v-img>
            </router-link>
          </v-col>
          <v-col col-md-4 col-sm-2 col-xs-2 padding-top="20px" align="right">
            <Register></Register>
            <Login></Login>
            <!--<v-btn class="ma-4" color="blue accent-3">Contact us</v-btn>-->
          </v-col>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
      <!-- <v-card-text>
        <v-row>
          <v-col col-md-10 col-sm-8 col-xs-4 align="center" id="nasl">
            <h1 id="adtitle">Opametite svoju klimu!</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col col-md-10 col-sm-8 col-xs-4 align="center" id="paraf">
            <p id="adcopy">
              Svega ste dva klika udaljeni od uvek idealne temeprature svog
              doma. Uvek!
            </p>

            <div id="btn">
              <Register></Register>
            </div>
          </v-col>
        </v-row>
      </v-card-text> -->
      <div class="wrapper">
        <div class="flex-container">
          <h1>Opametite svoju klimu!</h1>
          <p>
            Svega ste dva klika udaljeni od uvek idealne temeprature svog doma.
            Uvek!
          </p>
          <Register></Register>
        </div>
      </div>

      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
  </v-app>
</template>

<script>
  import Vue from "vue";
  import Register from "./Register";
  import Login from "./Login";
  export default {
    name: "Homepage",
    components: {
      Login,
      Register,
    },

    data: () => ({
      dialog: false,
    }),
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
    text-align: right;
    padding-right: 80px;
  }
  #paraf {
    line-height: 1;
    padding-top: 20px;
    font-size: 22px;
    color: rgb(56, 53, 53);
    font-weight: 500;
    text-align: right;
    padding-right: 80px;
  }
  #last {
    padding-right: 60px;
  }
  #btn {
    padding-right: 60px;
  }
  #adcopy {
    padding-left: 740px;
  }
  #adtitle {
    padding-right: 30px;
  }
  .wrapper {
    /* height: 100vh; */
    position: absolute;
    top: 30%;
    right: 7%;
  }
  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    width: 500px;
    /* width: 70%; */
  }
  .flex-container p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 0;
  }

  @media (max-width: 1600px) {
    .wrapper {
      right: 5%;
    }
    .flex-container {
      padding-left: 15px;
    }
  }
  @media (max-width: 826px) {
    #nasl {
      padding-top: 20px;
      text-align: center;
      padding-right: 20px;
    }
    #paraf {
      text-align: center;
      padding-right: 20px;
    }
    #bod {
      background-image: none;
      /*background-color: #d3d3d3;
    background-image: linear-gradient(315deg, #d3d3d3 0%, #7f8c8d 74%);*/
      background-color: #f1f2f6;
      background-image: linear-gradient(315deg, #f1f2f6 0%, #c9c6c6 74%);
    }
    #btn {
      padding-right: 0;
    }
    #adcopy,
    #adtitle {
      padding: 0;
    }
    .flex-container {
      width: 100vw;
    }

    .flex-container h1,
    p {
      text-align: center;
    }
    .wrapper {
      left: 0;
    }
  }
</style>
