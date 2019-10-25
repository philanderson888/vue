<template>
    <div class="container">
        <h1>Shopping Time!</h1>
        <img src="../assets/adult-beautiful-clothes-291762.jpg" width="100%"/>
    </div>
</template>
<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push("shopping");
    }, 3000);
  },
  methods: {}
};
</script>