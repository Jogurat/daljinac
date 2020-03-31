<template>
  <div>
    <v-container>
      <v-row>
        <v-text-field v-model="username"></v-text-field>
      </v-row>

      <v-row>
        <v-btn @click="sendEmail">Send E-mail</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ForgotPass",
  data: function() {
    return {
      username: ""
    };
  },
  methods: {
    sendEmail: async function() {
      const url = "http://localhost:3000/users/forgotPass/";
      try {
        const res = await axios.get(url + this.username);
        console.log(res);
        //const user = res.data;
        //const email = user.email;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style>
</style>