<template>
  <div>
    <NavigationBar></NavigationBar>
    <v-container>
      <v-row>
        <v-col cols="4" align="center">
          <h1>{{ username }} 's home</h1>
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
        ></Card>
      </v-row>
      <!--Test-->
      <v-row></v-row>
      <v-row>
        <v-dialog v-model="dialog" max-width="400px">
          <v-card>
            <v-card-title>New Room</v-card-title>
            <v-container>
              <v-row>
                <v-col cols="1"></v-col>
                <v-col cols="5">
                  <v-text-field label="Room name" v-model="newRoomName"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <v-text-field label="Device ID" v-model="newDeviceID"></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4"></v-col>
                <v-col>
                  <v-radio-group v-model="dialogm1" column label="Room type">
                    <v-radio label="Living room" value="l"></v-radio>
                    <v-radio label="Bedrooom" value="b"></v-radio>
                    <v-radio label="Kitchen" value="k"></v-radio>
                    <v-radio label="Kids room" value="r"></v-radio>
                  </v-radio-group>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="4"></v-col>
                <v-col>
                  <v-btn @click="newRoom">Add Room</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import jwt from "jsonwebtoken";
import Card from "./Card";
import NavigationBar from "./NavigationBar";
//const config = require("../../../config");

const url = "http://localhost:3000/users/";
const roomUrl = "http://localhost:3000/users/room/";
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
      newDeviceID: ""
    };
  },
  components: {
    Card, 
    NavigationBar
  },
  methods: {
    newRoom: function() {
      //console.log(config);
      const token = localStorage.getItem("token");
      axios
        .put(
          roomUrl + this.username,
          { name: this.newRoomName, deviceID: this.newDeviceID },
          { headers: { authorization: `Bearer ${token}` } }
        )
        .then(res => {
          console.log(res);
          axios
            .get(url + this.username, {
              headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
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
    }
  },
  //   mounted: async function() {
  //     const resp = await axios.get(url);
  //     this.user = resp.data;
  //     if (this.user) this.dataReady = true;
  //   }
  mounted: function() {
    const SECRET_KEY = process.env.VUE_APP_SECRET_KEY;
    console.log("SECRET KEY JE : " + SECRET_KEY);
    const token = localStorage.getItem("token");
    //console.log(token);
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      this.username = decoded.username;
      console.log("DECODED TOKEN " + JSON.stringify(decoded));
      if (err) {
        console.log(err);
      }
    });
    axios.get(url + this.username).then(res => {
      this.user = res.data;
      this.dataReady = true;
    });
   // navBar.loggedIn();
   // navBar.logOut();
  }
};
</script>

<style>
li {
  text-decoration: black;
}
</style>
