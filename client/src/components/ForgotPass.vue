<template>
  <div>
    <NavigationBar></NavigationBar>
    <v-container>
      <br />
      <br />
      <br />
      <v-form>
        <v-row class="mb-6">
          <v-col md="3" sm="3" lg="3" offset-sm="4" offset-md="4" offset-lg="4">
            <v-text-field
              label="Enter your username"
              v-model="username"
              filled
              rounded
              dense
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <div>
          <v-row class="mb-6">
            <v-col md="3" sm="3" lg="3" offset-sm="4" offset-md="4" offset-lg="4" align="center">
              <v-btn color="blue accent-3" dark @click="sendEmail">Send E-mail</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import NavigationBar from "./NavigationBar";
export default {
  name: "ForgotPass",
  data: function() {
    return {
      username: ""
    };
  },
  components: { NavigationBar },
  methods: {
    sendEmail: async function() {
      try {
        const res = await axios.get(`/api/auth/forgotPass/${this.username}`);
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