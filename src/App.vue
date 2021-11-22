<template>
  <the-header />
  <router-view></router-view>
  <the-footer />
</template>


<script>
import "./assets/css/index.css";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}
</style>