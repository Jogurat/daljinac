<template>
  <div class="container">
    <v-card>
      <v-card-title>{{ $props.title }}</v-card-title>
      <v-card-text>{{ $props.deviceID }}</v-card-text>
      <v-btn icon>
        <v-icon>mdi-alpha-r-circle-outline</v-icon>
      </v-btn>
    </v-card>
  </div>
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