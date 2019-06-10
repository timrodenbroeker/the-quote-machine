<template>
  <div id="app">
    <Quote/>
    <ReloadButton/>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import ReloadButton from "./components/ReloadButton.vue";

export default {
  name: "app",
  components: {
    Quote,
    ReloadButton
  }
};
</script>

<style lang="scss">
$variable: #f1f1f1;

#app {
  background: $variable;
}
</style>
