<template>
<form >
     <h1 class="text-center">Form.</h1>
    <h2  style="margin-left: 70%;">{{datetime}}</h2>
  <br>
    Name: <input type = "text" name = "first_name" />
    <br>
    Age: <input type = "text" name = "Age" />
    <br>
    <input type="submit" value="submit">

   </form>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: [],
      datetime:'',
      datetime: []
    };
  },
  methods: {
    getUnit: function abc() {
      var currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();
        var datetime = day+'/'+month+'/'+year;
        console.log(datetime);
        this.datetime=datetime;

    },
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
      let url = "http://localhost:3000/data";
      axios
        .post(url, this.form)
        .then(res => {
          console.log("Success", res);
        })
        .catch(err => {
          console.log("Error", err);
        });
    }
  },
  mounted() {
    this.getUnit();
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
#content {
  margin: 10px;
}
</style>
