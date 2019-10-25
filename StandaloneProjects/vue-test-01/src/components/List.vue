<template>
  <div>
    <h1>To Do</h1>
    <ul>
      <input v-model="newItem">
      <button type="button" class="btn btn-success" @click="addToList">Add</button>
      <li v-for="item in listItems" v-bind:key="item">
        <p>{{ item }}</p>
      
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  created() {
    console.clear();
  },
  data() {
    return {
      newItem: "",
      listItems: ["red", "white", "blue"]
    };
  },
  methods: {
    addToList() {
      this.listItems.unshift(this.newItem);
      this.newItem = "";
    }
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
