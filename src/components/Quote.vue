<template>
  <div id="quote-wrapper">
    <h1>{{ quote.quote }}</h1>
    <p>{{ quote.author }}</p>
  </div>
</template>

<script>
export default {
  name: "Quote",
  props: {
    quote: Object
  }
};
</script>


<style scoped>
h1 {
  font-size: calc(16px + 3vw);
}
#quote-wrapper * {
  text-align: center;
  color: #201aa6;
}
</style>
