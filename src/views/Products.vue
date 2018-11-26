<template>
    <div>
        <h1>Product List</h1>
       
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'products',
  data(){
      return {
          message: 'Project2'
      }
  },
  mounted () {
    axios
      .get('https://fathomless-wave-75295.herokuapp.com/api/products')
      .then(function(response){
            console.log(response.data)
      })
}}
    

</script>

