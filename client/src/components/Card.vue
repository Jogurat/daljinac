
<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card :elevation="hover ? 24 : 6" class="mx-auto my-12" max-width="300">
        <v-img height="150" :src="require(`../assets/${roomType}.jpeg`)"></v-img>
        <div class="row">
          <div class="col-md-6 col-sm-8 col-xs-4">
            <v-card-title>{{ $props.title }}</v-card-title>
          </div>
<<<<<<< HEAD
          <v-card-text>
            <v-row align="center">
              <v-col class="ma-4 display-2" cols="6">{{ temp }}&deg;C</v-col>
              <v-btn class="ma-8" icon color="green" @click="refreshTemp">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </v-row>
          </v-card-text>
=======
          <div class="ma-2 col-md-2 col-sm-4 col-xs-2">
            <v-btn icon color="red" @click="clearActions">
              <v-icon medium>mdi-broom</v-icon>
              <!--mdi-chevron-up-circle-->
            </v-btn>
          </div>
          <div class="ma-2 col-md-2 col-sm-4 col-xs-2 right-marg">
            <v-btn icon color="grey" @click="dialog = !dialog">
              <v-icon medium>mdi-pencil</v-icon>
              <!--mdi-chevron-up-circle-->
            </v-btn>
          </div>
        </div>
        <v-card-text>
          <v-row align="center">
            <v-col class="display-2" cols="6">23&deg;C</v-col>
          </v-row>
        </v-card-text>
>>>>>>> ea619114ee2c883fc665bfcae3e90a6a5c3baf9c

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div align="center">
            <v-btn class="ma-4" icon color="green" @click="sendPower">
              <v-icon large>mdi-power-standby</v-icon>
              <!--mdi-chevron-up-circle-->
            </v-btn>

            <v-btn class="ma-4" icon color="blue" @click="sendTempUp">
              <v-icon large>mdi-chevron-up-circle-outline</v-icon>
            </v-btn>

            <v-btn class="ma-4" icon color="blue" @click="sendTempDown">
              <v-icon large>mdi-chevron-down-circle-outline</v-icon>
            </v-btn>
          </div>
        </v-card-text>
        <v-dialog v-model="dialog" max-width="400px">
          <v-card>
            <v-card-title>Edit Room</v-card-title>
            <v-container>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="5">
                  <v-text-field label="Room name" v-model="title"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field label="Device ID" v-model="deviceID"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4"></v-col>
                <v-col>
                  <v-radio-group v-model="roomType" column label="Room type">
                    <v-radio label="Living room" value="livingroom"></v-radio>
                    <v-radio label="Bedrooom" value="bedroom"></v-radio>
                    <v-radio label="Kitchen" value="kitchen"></v-radio>
                    <v-radio label="Kids room" value="kidsroom"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4"></v-col>
                <v-col>
                  <v-btn>Edit Room</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
        <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
        </v-card-actions>-->
      </v-card>
    </template>
    <v-snackbar v-model="snackbar" :timeout="timeout" bottom left>
      {{ snackbarText }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-hover>
</template>


<script>
import axios from "axios";
import jwt from "jsonwebtoken";
const jsonConfig = require("../../../config");
const config = jsonConfig;

let url = `${config.DB_HOST}/users/`;
const roomUrl = `${url}/room/`;
export default {
  name: "Card",
  data: function() {
    return {
      //title: ""
      dialog1: false,
      dialogm2: null,
      editRoomName: "",
      editDeviceID: "",
      dialog: false,
      timeout: 2000,
      snackbar: false,
      snackbarText: "",
      temp: 26
    };
  },
  props: {
    // props: {['title', 'deviceID', roomType]}
    title: String,
    deviceID: Number,
    roomType: String
  },
  methods: {
    async sendPower() {
      // console.log("Power");
      // let code = await axios.get(`/api/codes/${this.deviceID}/Power`);
      // console.log(code);
      // code = code.data;
      // await axios.post(`/api/actions`, {
      //   deviceID: code.deviceID,
      //   bits: code.bits,
      //   code: 1
      // });

      this.sendCode("Power");
    },
    async sendTempUp() {
      this.sendCode("TempUp");
    },
    async sendTempDown() {
      this.sendCode("TempDown");
    },
    async sendCode(type) {
      console.log(type);
<<<<<<< HEAD

=======
      // this.snackbar = true;
>>>>>>> ea619114ee2c883fc665bfcae3e90a6a5c3baf9c
      let code = await axios.get(`/api/codes/${this.deviceID}/${type}`);
      //console.log(code);
      code = code.data;
      let res = await axios.post(`/api/actions`, {
        deviceID: code.deviceID,
        bits: code.bits,
        code: 1
      });
      if (res.status >= 200 && res.status <= 300) {
        this.snackbar = true;
        this.snackbarText = `Action ${type} sent!`;
        this.$emit("actionSent", type);
      }
    },
    async refreshTemp() {
      let tempRes = await axios.get(`/api/actions/oldest/${this.deviceID}`);
      console.log(tempRes);

      this.temp = tempRes.data.code;
    },
    async clearActions() {
      console.log("hi");

      let res = await axios.delete(`/api/actions/${this.deviceID}`);
      if (res.status >= 200 && res.status <= 300) {
        this.$emit("actionsCleared");
        this.snackbar = true;
        this.snackbarText = "Cleared all actions!";
      }
    }
  }
};
</script>

<style scoped>
</style>