<template>
  <div class="movies-index">
    <input placeholder="Search" v-model="titleFilter" />
    <div
      class="row justify-content-center"
      v-for="movie in filterBy(movies, titleFilter, 'title')"
      v-bind:key="movie.id"
    >
      <div class="col-sm-7">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">
              {{ movie.plot }}
            </p>
            <p>Release Date: {{ movie.year }}</p>
            <p>Director: {{ movie.director }}</p>
            <p>English: {{ movie.english }}</p>
            <img :src="movie.image_url" class="img-fluid" /><br /><br />
            <a :href="`/movies/${movie.id}`" class="btn btn-primary"
              >More Info</a
            >
          </div>
        </div>
      </div>
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
