<template>
  <div id="app">
    <Quote v-bind:quote="quotes[Math.floor(Math.random()*quotes.length)]"/>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import dataJSON from "./data/data.json";

export default {
  name: "app",
  components: {
    Quote
  },
  data: function() {
    return {
      quotes: dataJSON
    };
  }
};
</script>

<style>
body {
  box-sizing: border-box;
}
body,
html {
  margin: 0;
}
#app {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>
