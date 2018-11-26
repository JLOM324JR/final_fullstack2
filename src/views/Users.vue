<template>
    <div>
        <h1>Radtanaporn  Choeikan</h1>
        <b-table striped hover :items="users"></b-table>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'users',
  data(){
      return {
          message: 'Project2',
          users: []
      }
  },
  mounted () {
      var instance = this
      //this.users อ้างถึง instance
    axios
      .get('https://fathomless-wave-75295.herokuapp.com/api/purchase')
      .then(function(response){
            console.log(response.data)
            instance.users = response.data.data
      })
}}
    

</script>

