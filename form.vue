
<template>

<form >
<div id="app">
  <img src="logo.png" style="height: 40px; width: 30px;">
  
    <router-view/>
  </div>
    Name: <input type = "text" name = "first_name" />
    <br>
    Age: <input type = "text" name = "Age" />
    <br>
   <input type="submit" value="submit">
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button>Cancel</el-button>
   </form>
</template>
<script>
export default {
  data () {
    return {
	form:[]

      
    }
  },
  methods: {
  getUnit: function abc (){
	  var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth() + 1,
      year = currentDate.getFullYear();
      
	 },
   onSubmit () {
      console.log('submit!')
      console.log(this.form)
      let url = 'http://localhost:3000/data'
      axios.post(url, this.form).then(res => {
        console.log('Success', res)
      }).catch(err => {
        console.log('Error', err)
      })
    }
  },
 mounted () {
    this.getUnit()
  }
  
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
}
#content{
margin:10px;
}

</style>
