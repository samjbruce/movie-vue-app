<template>
  <div class="movies-new">
    <form v-on:submit.prevent="createMovie()">
      <h1>New Movie</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Title:</label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.title"
        />
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input type="text" class="form-control" v-model="newMovieParams.plot" />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input type="text" class="form-control" v-model="newMovieParams.year" />
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input
          type="text"
          class="form-control"
          v-model="newMovieParams.director"
        />
      </div>
      <div class="form-group">
        <label>English: </label>
        <label for="english">Yes</label>
        <input
          type="radio"
          name="english"
          id="english"
          value="true"
          v-model="newMovieParams.english"
        />
        <input
          type="radio"
          name="enlgish"
          id="english"
          value="false"
          v-model="newMovieParams.english"
        />
        <label for="enlgish">No</label>
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newMovieParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createMovie: function () {
      axios
        .post("/movies", this.newMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/movies");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
