<template>
  <div>
    <v-container>
      <v-row>
        <h1>Change Pass</h1>
      </v-row>
      <v-row class="mb-6">
        <v-col md="3" sm="3" lg="3" offset-sm="4" offset-md="4" offset-lg="4">
          <v-text-field
            outlined
            label="New Password"
            v-model="newPass"
            filled
            rounded
            dense
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col md="3" sm="3" lg="3" offset-sm="4" offset-md="4" offset-lg="4" align="center">
          <v-btn v-on:click="changePass">Change password</v-btn>
        </v-col>
      </v-row>
      <v-row class="mb-6">
        <v-col md="6" sm="5" lg="5" offset-sm="3" offset-md="3" offset-lg="3" align="center">
          <v-alert
            v-model="alertForgot"
            :value="alert"
            color="green"
            icon="mdi-check-circle-outline"
            transition="scale-transition"
          >Your password is changed, now you can login with your new password!</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
const config = require("../../../config");
// const config = jsonConfig;
let url = `${config.DB_HOST}/users/changePass`;

if (process.env.NODE_ENV === "development") {
  url = `${config.DB_HOST}`;
} else {
  url = "https://daljinac-api.herokuapp.com/api/users/changePass";
}

export default {
  name: "ChangePass",
  data: function() {
    return {
      newPass: ""
    };
  },
  methods: {
    changePass: async function() {
      console.log(this.$route.params.token);
      try {
        await axios.put(`/api/auth/changePass`, {
          token: this.$route.params.token,
          newPass: this.newPass
        });
        if (res.status === 201) {
          this.alertChange = true;
          console.log("Usao u status 201");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style></style>
