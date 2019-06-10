<template>
  <div id="btn-reload" @click="newQuote()">RELOAD</div>
</template>

<script>
import store from "../store/store";
export default {
  name: "ReloadButton",
  store,
  methods: {
    newQuote: function() {
      store.commit("increment");
    }
  }
};
</script>


<style scoped>
#btn-reload {
  background: #201aa6;
  color: white;
  padding: 15px 35px;
  margin: 25px;
  cursor: pointer;
  transition: all 1s ease;
}

#btn-reload:hover {
  transform: scale(1.1);
}
</style>
