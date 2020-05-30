<template>
  <div>
    <NavigationBar></NavigationBar>
    <v-container>
      <br />
      <br />
      <br />
      <v-form ref="form" v-model="valid">
        <v-row class="mb-6">
          <v-col md="3" sm="3" lg="3" offset-sm="4" offset-md="4" offset-lg="4">
            <v-text-field
              v-model="newPass"
              :rules="rules"
              filled
              rounded
              dense
              required
              label="New Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mb-6">
          <v-col md="3" sm="3" lg="3" offset-sm="4" offset-md="4" offset-lg="4" align="center">
            <v-btn
              color="blue accent-3"
              dark
              :disabled="!valid"
              v-on:click="changePass"
            >Change password</v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-row class="mb-6">
        <v-col md="6" sm="5" lg="5" offset-sm="3" offset-md="3" offset-lg="3" align="center">
          <v-alert
            v-model="alertChange"
            color="green"
            icon="mdi-check-circle-outline"
            transition="scale-transition"
          >
            Your password is changed, now you can login with your new
            password!
          </v-alert>
        </v-col>
      </v-row>

      <v-row class="mb-6">
        <v-col md="6" sm="5" lg="5" offset-sm="3" offset-md="3" offset-lg="3" align="center">
          <v-alert
            v-model="alertError"
            :value="alert"
            color="red"
            icon="mdi-close-circle-outline"
            transition="scale-transition"
          >Server error!</v-alert>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import NavigationBar from "./NavigationBar";
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
      newPass: "",
      rules: [value => !!value || "Type your new password!"],
      alertChange: false,
      alertError: false,
      valid: true,
      show1: false
    };
  },
  components: { NavigationBar },
  methods: {
    changePass: async function() {
      this.$refs.form.validate();
      console.log(this.$route.params.token);
      try {
        let res = await axios.put(`/api/auth/changePass`, {
          token: this.$route.params.token,
          newPass: this.newPass
        });
        console.log(res);
        console.log(res.status);
        if (res.status === 200 || res.status === 201 || res.status === 202) {
          this.alertChange = true;
          console.log("Usao u status 200...");
        }
      } catch (err) {
        console.log(err);
        this.alertError = true;
        this.alertChange = false;
      }
    }
  }
};
</script>

<style></style>
