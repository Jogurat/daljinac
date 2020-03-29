<template>

  <div class="container">
    <v-hover>
    <template v-slot="{ hover }">
    <v-card 
    :elevation="hover ? 24 : 6"
    :loading="loading"
    class="mx-auto my-6"
    max-width="374"
  >
        
     
  
    <v-img
      height="250"
      src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    
    ></v-img>
   
  <v-card-title>{{ $props.title }}</v-card-title>
    
     <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="12">
          23&deg;C
        </v-col>
      </v-row>
    </v-card-text>


    <v-divider class="mx-4"></v-divider>


    <v-card-text>
       <div>

      <v-btn class="ma-4" color="green" dark>
        <v-icon dark>mdi-power</v-icon>
      </v-btn>

      <v-btn class="ma-4" color="red" dark>
        <v-icon dark>mdi-plus-circle-outline</v-icon>
      </v-btn>

      <v-btn class="ma-4" color="blue" dark>
        <v-icon dark>mdi-minus-circle-outline</v-icon>
      </v-btn>
    </div>
    </v-card-text>

    <v-card-actions>
    </v-card-actions>
     
      
  </v-card>
</template>
</v-hover>


     
      
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