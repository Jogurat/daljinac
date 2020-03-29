<!--<template>
  <div class="container">
    <v-card max width="500px" , max-height="450px">
      <v-card-title>{{ $props.title }}</v-card-title>
      <v-card-text>{{ $props.deviceID }}</v-card-text>

    </v-card>
  </div>
</template>-->
<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      src="client/assets/dnevna.jpg"
    ></v-img>

    <v-card-title>{{ $props.title }}</v-card-title>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">Beograd</v-list-item-title>
        <v-list-item-subtitle>Mon, 12:30 PM</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">
          23&deg;C
        </v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>mdi-chevron-up-circle</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

   <!-- <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>-->
  </v-card>
</template>


<script>
export default {
  name: "Card",
  data: function() {
    return {
      //title: ""
    };
  },
  props: {
    // props: {['title', 'deviceID']}
    title: String,
    deviceID: Number
  }
};
</script>

<style scoped>
</style>