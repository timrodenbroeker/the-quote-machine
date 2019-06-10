<template>
  <div id="quote-wrapper">
    <h1>{{ quotes[index].quote }}</h1>
    <p>{{ quotes[index].author }}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  computed: {
    quotes() {
      return this.$store.state.quotes;
    },
    index() {
      return this.$store.state.index;
    }
  }
};
</script>


<style scoped>
h1 {
  font-size: calc(16px + 3vw);
  margin: 0;
}
#quote-wrapper * {
  text-align: center;
  color: #201aa6;
}
</style>
