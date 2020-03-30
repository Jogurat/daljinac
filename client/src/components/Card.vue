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
    max-width="300"
  >
    <v-img
      height="150"
     
      src="https://www.thespruce.com/thmb/_iITA9xgfLDWyLjzF5xwBDTzdgI=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-842254818-5bfc267446e0fb00260a3348.jpg"
    ></v-img>

    <v-card-title>{{ $props.title }}</v-card-title>
    <v-card-subtitle>Beograd, Srbija</v-card-subtitle>
    <v-card-text>
      <v-row align="center">
        <v-col class="display-2" cols="6">
          23&deg;C
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-row >
        
      <v-col cols="12" sm="3">
            <v-btn icon color="green">
              <v-icon large>mdi-power-standby</v-icon> <!--mdi-chevron-up-circle-->
            </v-btn>
          </v-col>

          <v-col cols="12" sm="3">
            <v-btn icon color="blue">
              <v-icon large>mdi-chevron-up-circle</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="3">
            <v-btn icon color="blue">
              <v-icon large>mdi-chevron-down-circle</v-icon>
            </v-btn>
          </v-col>
        
      </v-row>
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