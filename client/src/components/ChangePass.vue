<template>
  <div>
    <v-container>
      <v-row>
        <h1>Change Pass</h1>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field
            outlined
            label="New Password"
            v-model="newPass"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col>
          <v-btn v-on:click="changePass">Change password</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import axios from "axios";
  const jsonConfig = require("../../../config.json");
  const config = jsonConfig;
  let url = `${config.DB_HOST}/users/changePass`;

  // if (process.env.NODE_ENV === "development") {
  //   url = `${config.DB_HOST}`;
  // } else {
  //   url = "https://daljinac-api.herokuapp.com/users/changePass";
  // }

  export default {
    name: "ChangePass",
    data: function() {
      return {
        newPass: "",
      };
    },
    methods: {
      changePass: async function() {
        console.log(this.$route.params.token);
        try {
          await axios.put(url, {
            token: this.$route.params.token,
            newPass: this.newPass,
          });
        } catch (err) {
          console.log(err);
        }
      },
    },
  };
</script>

<style></style>
