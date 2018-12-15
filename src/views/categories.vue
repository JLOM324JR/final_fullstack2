<template>
    <div>
        <h1>Categoties List</h1>
        <b-row>
      <b-col md="10" class="my-1">
        <b-form-group horizontal class="mb-2">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
        </b-row>
        <b-table  striped hover 
        :items="categories" 
        :fields="fields" 
        :filter="filter"
        :per-page="pageSize"
        :current-page="pageIndex"></b-table>
        <b-pagination align = "center" size="md" :total-rows="categories.length" v-model="pageIndex" :per-page="pageSize"></b-pagination>
    </div>
</template>
<script>
import axios from "axios";
export default {
  name: "categories",
  data() {
    return {
      message: "Project2",
      categories: [],
      pageSize: 10,
      pageIndex: 1,
      filter: null,
      fields: [
        {
          key: "category_id",
          sortable: true
        },
        {
          key: "category_name",
          sortable: true
        },
        {
          key: "description",
          sortable: true,
          
        }
      ]
    };
  },
  computed: {
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => { return { text: f.label, value: f.key } })
    }
  },
  mounted() {
    var instance = this;
    //this.categories อ้างถึง instance
    axios
      .get("https://shrouded-escarpment-93918.herokuapp.com/api/categories")
      .then(function(response) {
        console.log(response.data);
        instance.categories = response.data.data;
      });
  }
};
</script>

