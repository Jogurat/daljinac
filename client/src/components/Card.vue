
<template>
  <v-hover>
    <template v-slot="{ hover }">
      <v-card :elevation="hover ? 24 : 6" class="mx-auto my-12" max-width="300">
        <v-img height="150" :src="require(`../assets/${roomType}.jpeg`)"></v-img>
<div class="row">
<div class="col-md-8 col-sm-8 col-xs-4">
<v-card-title>{{ $props.title }}</v-card-title>
</div>
        
<div class="col-md-4 col-sm-4 col-xs-2">
          <v-btn class="ma-4" icon color="grey">
              <v-icon medium>mdi-pencil</v-icon>
              <!--mdi-chevron-up-circle-->
            </v-btn>
</div>
</div>
        <v-card-text>
          <v-row align="center">
            <v-col class="display-2" cols="6">23&deg;C</v-col>
          </v-row>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-card-text>
          <div align="center">
            <v-btn class="ma-4" icon color="green">
              <v-icon large>mdi-power-standby</v-icon>
              <!--mdi-chevron-up-circle-->
            </v-btn>

            <v-btn class="ma-4" icon color="blue">
              <v-icon large>mdi-chevron-up-circle-outline</v-icon>
            </v-btn>

            <v-btn class="ma-4" icon color="blue">
              <v-icon large>mdi-chevron-down-circle-outline</v-icon>
            </v-btn>
          </div>
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
  </v-hover>
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
    deviceID: Number,
    roomType: String
  }
};
</script>

<style scoped>
</style>