<template>
  <div class="movies-new">
    <h1>Movies</h1>
    <button v-on:click="createProducts">Add Movie</button><br>
    Title: <input type="text" v-model="inputTitle"><br>
    Plot: <input type="text" v-model="inputPlot"><br>
    Year: <input type="text" v-model="inputYear"><br>
    Director: <input type="text" v-model="inputDirector"><br>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        movies: [],
        inputTitle: "",
        inputPlot: "",
        inputYear: "",
        inputDirector: ""
      };
    },
    created: function () {},
    methods: {
      createProducts: function () {
        var params = {
          title: this.inputTitle,
          plot: this.inputPlot,
          year: this.inputYear,
          director: this.inputDirector
        };
        axios.post("/movies/new", params)
        .then((response) => {
          console.log("Success!", response.data);
          this.movies.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors)
        }),
        this.inputTitle = "";
        this.inputPlot = "";
        this.inputYear = "";
        this.inputDirector = "";
      },
    }
  }
</script>