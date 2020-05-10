<template>
  <div>
    <NavigationBar></NavigationBar>
    <h1>Oops... that doesn't seem to exist</h1>
    <img src="../../assets/404.svg" alt />
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar";
export default {
  name: "NotFound",
components: {
    NavigationBar
},
};
</script>
