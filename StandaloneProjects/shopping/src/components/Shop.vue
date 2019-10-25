<template>
  <div class="container">
    <h1>Shopping Items</h1>
    <div class="row">
      <div class="col-7">
        Item
      </div>
      <div class="col-3">
        Category        
      </div>
      <div class="col-1">
        Bought
      </div>
      <div class="col-1">
      </div>
    </div>
    <div class="row">
      <div class="col-7">
        <span><input class="fullWidth" v-model="newEntry.item"/></span>
      </div>
      <div class="col-3">
        <span><input class="fullWidth" v-model="newEntry.category"/></span>
      </div>
      <div class="col-1">
        <input type="checkbox" class="checkbox checkbox-success" v-model="newEntry.bought" />
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-success" @click="insertEntry(newEntry)">Add</button>
      </div>
    </div>
    <div class="row" v-for="(entry,index) in shoppingList" v-bind:key="index">
      <div class="col-7">
        <span><input class="fullWidth" v-model="entry.item"/></span>
      </div>
      <div class="col-3">
        <span><input class="fullWidth" v-model="entry.category"/></span>
      </div>
      <div class="col-1">
        <input type="checkbox" class="checkbox checkbox-success" v-model="entry.bought"/>
      </div>
      <div class="col-1">
        <button type="button" class="btn btn-danger" @click="removeEntry(index)">X</button>
      </div>
    </div>





  </div>
</template>

<script>
export default {
  data() {
    return {
      databaseUrl: "https://shopping-list-01.firebaseio.com/ShoppingList.json",
      newEntry: {
        id: "",
        item: "",
        category: "",
        bought: false
      },
      shoppingList: []
    };
  },
  created() {
    let databaseEntry = {
      id: "",
      item: "",
      category: "",
      bought: false
    };
    console.clear();
    console.log("");
    console.log("Reading Shopping List Data From Firebase");
    this.$http.get(this.databaseUrl).then(response => {
      console.log("");
      console.log("Http response status " + response.status);
      console.log("");
      if (response.status === 200) {
        for (var entryId in response.body) {
          if (response.body.hasOwnProperty(entryId)) {
            console.log("");
            console.log("Database index is " + entryId);
            console.log(
              "\tRecord is " + JSON.stringify(response.body[entryId])
            );
            databaseEntry = {
              id: entryId,
              item: response.body[entryId].item,
              category: response.body[entryId].category,
              bought: response.body[entryId].bought
            };
            this.shoppingList.push(databaseEntry);
          }
        }
      }
    });
  },
  methods: {
    insertEntry(newEntry) {
      let duplicate = false;
      let newEntryObject = {
        item: newEntry.item,
        category: newEntry.category,
        bought: newEntry.bought
      };
      this.shoppingList.forEach(entry => {
        if (entry.item === newEntry.item) {
          duplicate = true;
        }
      });
      if (!duplicate && newEntry.item.length > 0) {
        // insert to Firebase database
        this.$http.post(this.databaseUrl, newEntryObject).then(response => {
          newEntryObject.id = response.body.name;
          console.log("");
          console.log("New entry just inserted");
          console.log(response.body);
        });
        // insert to local array
        this.shoppingList.unshift(newEntryObject);
        this.newEntry = {
          id: "",
          item: "",
          category: "",
          bought: false
        };
      }
    },
    removeEntry(index) {
      this.shoppingList.splice(index, 1);
      // get the database id in order to remove the record from Firebase
      let id = this.shoppingList[index].id;
      console.log();
      console.log("Removing item with database index " + id);
      this.$http.delete(this.databaseUrl, { body: id });
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

.fullWidth {
  width: 100%;
  box-sizing: border-box;
  background-color: antiquewhite;
}
span {
  display: block;
  overflow: hidden;
}
.checkbox {
  height: 100%;
  width: 100%;
  background-color: antiquewhite;
}

.row {
  margin: 1rem 0;
}
</style>