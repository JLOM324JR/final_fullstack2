<template>
    <div>
        <h1>Product List</h1>
        <ol>
            <li v-for="item in products" :key="item.id">
                {{item.id}} {{item.title}} {{item.price}} 
            </li>
        </ol>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'products',
  data(){
      return {
          message: 'Project2',
          products: []
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

