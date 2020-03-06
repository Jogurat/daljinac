<template>
  <div v-if="dataReady">
    <h1>{{ username }}</h1>
    <ul>
      <li v-for="room in user.rooms" :key="room._id">{{ room.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import jwt from "jsonwebtoken";

const url = "http://localhost:3000/users/";

export default {
  name: "User",
  data: function() {
    return {
      user: null,
      username: "",
      rooms: [],
      dataReady: false
    };
  },
  methods: {},
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
  }
};
</script>

<style>
li {
  text-decoration: black;
}
</style>