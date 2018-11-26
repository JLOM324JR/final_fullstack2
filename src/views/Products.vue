<template>
    <div>
        <h1>Product List</h1>
        <b-table striped hover :items="products" :fields="fields"></b-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'products',
  data(){
      return {
          message: 'Project2',
          products: [],
          fields: [
              {
                  key: 'id',
                  sortable : true
              },
              {
                  key: 'title',
                  sortable : true
              },
              {
                  key: 'price',
                  sortable : true,
                  variant: 'danger'
              },
          ],
      }
  },
  mounted () {
      var instance = this
      //this.products อ้างถึง instance
    axios
      .get('https://fathomless-wave-75295.herokuapp.com/api/products')
      .then(function(response){
            console.log(response.data)
            instance.products = response.data.data
      })
}}
    

</script>

