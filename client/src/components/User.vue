<template>
  <div v-if="dataReady">
    <div v-if="user">
      <NavigationBar></NavigationBar>
      <v-container>
        <br />
        <br />
        <v-row>
          <v-col cols="4" align="center">
            <h1>{{ username }}'s home</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4" align="center">
            <v-btn @click="dialog = !dialog">New room</v-btn>
          </v-col>
        </v-row>

        <v-row>
          <Card
            hover
            v-for="room in user.rooms"
            :key="room._id"
            max-width="100px"
            v-bind:title="room.name"
            v-bind:deviceID="room.deviceID"
            v-bind:id="room._id"
            v-bind:username="username"
            :room-type="room.type"
            @actionSent="onActionSent"
            @actionsCleared="onActionClear"
          ></Card>
        </v-row>
        <!--Test-->
        <v-row></v-row>
        <v-row>
          <v-form ref="form" v-model="valid">
            <v-dialog v-model="dialog" max-width="400px">
              <v-card>
                <v-card-title>New Room</v-card-title>
                <v-container>
                  <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="5">
                      <v-text-field
                        label="Room name"
                        required
                        :rules="rules"
                        v-model="newRoomName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="5">
                      <v-text-field
                        label="Device ID"
                        required
                        :rules="rules"
                        v-model="newDeviceID"
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="4"></v-col>
                    <v-col>
                      <v-radio-group
                        v-model="dialogm1"
                        column
                        required
                        :rules="rules"
                        label="Room type"
                      >
                        <v-radio
                          label="Living room"
                          value="livingroom"
                        ></v-radio>
                        <v-radio label="Bedrooom" value="bedroom"></v-radio>
                        <v-radio label="Kitchen" value="kitchen"></v-radio>
                        <v-radio label="Kids room" value="kidsroom"></v-radio>
                      </v-radio-group>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="4"></v-col>
                    <v-col>
                      <v-btn :disabled="!dialog" @click="newRoom"
                        >Add Room</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </v-dialog>
          </v-form>
        </v-row>
      </v-container>
    </div>
    <div v-else>
      <h1>Please log in!</h1>
    </div>
    <v-snackbar v-model="snackbar" :timeout="timeout" bottom left>
      {{ snackbarText }}
      <v-btn color="blue" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  import axios from "axios";
  import jwt from "jsonwebtoken";
  import Card from "./Card";
  import NavigationBar from "./NavigationBar";
  const jsonConfig = require("../../../config");
  const config = jsonConfig;
  let url = `${config.DB_HOST}/users/`;
  //const url = "http://localhost:3000/users/";
  const roomUrl = `${url}/room/`;
  export default {
    name: "User",
    data: function() {
      return {
        user: null,
        username: "",
        rooms: [],
        dataReady: false,
        dialog: false,
        newRoomName: "",
        newDeviceID: "",
        type: "",
        dialogm1: null,
        rules: [(value) => !!value || "All fields are required."],
        valid: true,
        snackbar: false,
        timeout: 2000,
        snackbarText: "",
      };
    },
    components: {
      Card,
      NavigationBar,
    },
    methods: {
      newRoom: function() {
        this.$refs.form.validate();
        //console.log(config);
        const token = localStorage.getItem("token");
        axios
          .put(
            `/api/users/room/${this.username}`,
            {
              name: this.newRoomName,
              deviceID: this.newDeviceID,
              type: this.dialogm1,
            },
            { headers: { authorization: `Bearer ${token}` } }
          )
          .then((res) => {
            console.log(res);
            axios
              .get(`/api/users/${this.username}`, {
                headers: { Authorization: `Bearer ${token}` },
              })
              .then((res) => {
                this.user = res.data;
                this.dataReady = true;
                console.log(res.data.rooms);
              });
          });
      },
      loggedIn: function() {
        if (localStorage.getItem("token")) return true;
        else return false;
      },
      logOut: function() {
        localStorage.removeItem("token");
      },
      onActionSent: function(type) {
        console.log("hi from handler");
        this.snackbar = true;
        this.snackbarText = `Sent action ${type}!`;
      },
      onActionClear: function() {
        this.snackbar = true;
        this.snackbarText = "Cleared all actions!";
      },
    },
    //   mounted: async function() {
    //     const resp = await axios.get(url);
    //     this.user = resp.data;
    //     if (this.user) this.dataReady = true;
    //   }
    mounted: function() {
      this.username = localStorage.getItem("username");
      const token = localStorage.getItem("token");
      axios
        .get(`/api/users/${this.username}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          this.user = res.data;
          this.dataReady = true;
        });
    },
  };
</script>

<style>
  li {
    text-decoration: black;
  }
</style>
