<template>
  <div class="container-fluid">
        <h1>Shopping Time!</h1>
        <img src="../assets/adult-beautiful-clothes-291762.jpg" width="100%"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    setTimeout(() => {
      this.$router.push("Shop");
    }, 3000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
