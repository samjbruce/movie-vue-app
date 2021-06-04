<template>
  <div class="home">
    <h1>Movies</h1>
    <button v-on:click="createProducts">Add Movie</button><br>
    Title: <input type="text" v-model="inputTitle"><br>
    Plot: <input type="text" v-model="inputPlot"><br>
    Year: <input type="text" v-model="inputYear"><br>
    Director: <input type="text" v-model="inputDirector"><br>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>Title: {{ movie.title }}</h3>
      <p> {{ movie.plot }}</p>
      <p>Release Date: {{ movie.year }}</p>
      <p>Director: {{ movie.director }}</p>
      <button v-on:click="showMovie(movie)">More Info</button>
    </div>
        <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info</h1>
        <img src="" alt="" />
        <p>Title: ...</p>
        <p>Plot: ...</p>
        <p>Year: ...</p>
        <p>Director: ...</p>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        movies: [],
        inputTitle: "",
        inputPlot: "",
        inputYear: "",
        inputDirector: ""
      };
    },
    created: function () {
      this.indexProducts();
    },
    methods: {
      indexProducts: function () {
        axios.get("http://localhost:3000/movies")
        .then((response) => {
          console.log(response.data);
          this.movies = response.data;
        });
      },
      createProducts: function () {
        var params = {
          title: this.inputTitle,
          plot: this.inputPlot,
          year: this.inputYear,
          director: this.inputDirector
        };
        axios.post("http://localhost:3000/movies", params)
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
      showMovie: function (movie) {
        console.log(movie);
        document.querySelector('#movie-details').showModal();
      }
    }
  }
</script>