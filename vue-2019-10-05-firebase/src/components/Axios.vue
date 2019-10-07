<template>
  <div class="axios">
    <h1>Axios Getting Data</h1>
    <div>{{jsondata}}</div>
    <div>{{jsondata[0]}}</div>
    <div>
      <ul>
        <li
          v-for="customer in jsondata"
          :key="customer.CustomerID"
        >{{customer.CustomerName}} lives at {{customer.Address}}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "es6-promise/auto";
import Vuex from "vuex";
import axios from "axios";
class Customer {
  CustomerID: number;
  constructor(CustomerID: number) {
    this.CustomerID = CustomerID;
  }
}
export default Vue.extend({
  name: "Axios",
  props: {
    componentprop: String
  },
  methods: {
    increment() {
      console.log("about to increment");
      this.$store.commit("increment");
      console.log(this.$store.state.count);
      localStorage.setItem("vuex-counter", this.$store.state.count.toString());
    }
  },
  computed: Vuex.mapState(["count"]),
  mounted() {
    axios
      .get(
        "https://raw.githubusercontent.com/philanderson888/data/master/customers.json"
      )
      .then(response => {
        console.log(response.data);
        localStorage.setItem("jsondata", response.data);
        this.jsondata = response.data;
        let localArray = Array.from(this.jsondata);
        for (var item in localArray) {
          console.log(
            "index is " +
              item +
              " for object " +
              JSON.stringify(localArray[item]) +
              localArray[item].CustomerID +
              " " +
              localArray[item].Address +
              localArray[item].CustomerName
          );
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      jsondata: ""
    };
  }
});
</script>