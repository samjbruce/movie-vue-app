<template>
  <div class="movies-index">
    <h1>Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h3>Title: {{ movie.title }}</h3>
      <p> {{ movie.plot }}</p>
      <p>Release Date: {{ movie.year }}</p>
      <p>Director: {{ movie.director }}</p>
      <router-link :to="`/movies/${movie.id}`">
        <button>More Info</button>
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";
  export default {
    data: function () {
      return {
        movies: []
      };
    },
    created: function () {
      this.indexProducts();
    },
    methods: {
      indexProducts: function () {
        axios.get("/movies")
        .then((response) => {
          console.log(response.data);
          this.movies = response.data;
        });
      },
    }
  }
</script>