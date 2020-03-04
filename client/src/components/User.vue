<template>
  <div v-if="dataReady">
    <ul>
      <li v-for="room in user.rooms" :key="room._id">{{ room.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:3000/users/Pera";

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
    axios.get(url).then(res => {
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