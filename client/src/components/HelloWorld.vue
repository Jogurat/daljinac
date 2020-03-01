<template>
  <div>
    <v-card class="mx-auto" max-width="344">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

      <v-card-title>Top western road trips</v-card-title>

      <v-card-subtitle>1,000 miles of wonder</v-card-subtitle>

      <v-card-actions>
        <v-btn text>Share</v-btn>

        <v-btn color="purple" text>Explore</v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-btn icon>
            <v-icon>mdi-power</v-icon>
          </v-btn>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
//import Login from "./Login";
//import Register from "./Register";

export default {
  name: "HelloWorld",

  data: () => ({
    show: false
  }),
  components: {
    //Register
  }
};
</script>
