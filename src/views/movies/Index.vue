<template>
  <div class="movies-index">
    <h1>Movies</h1>
    <input placeholder="Search" v-model="titleFilter" />
    <div
      v-for="movie in filterBy(movies, titleFilter, 'title')"
      v-bind:key="movie.id"
    >
      <h3>Title: {{ movie.title }}</h3>
      <p>{{ movie.plot }}</p>
      <p>Release Date: {{ movie.year }}</p>
      <p>Director: {{ movie.director }}</p>
      <p>English: {{ movie.english }}</p>
      <router-link :to="`/movies/${movie.id}`">
        <button>More Info</button>
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      titleFilter: "",
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/movies").then((response) => {
        console.log(response.data);
        this.movies = response.data;
      });
    },
  },
};
</script>
