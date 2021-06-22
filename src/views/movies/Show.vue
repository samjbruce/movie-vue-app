<template>
  <div class="movies-show">
    <h3>Title: {{ movie.title }}</h3>
    <p>Plot: {{ movie.plot }}</p>
    <p>Release Date: {{ movie.year }}</p>
    <p>Director: {{ movie.director }}</p>
    <p>English: {{ movie.english }}</p>
    <router-link :to="`/movies/${movie.id}/edit`">
      <button>Edit</button>
    </router-link>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>
