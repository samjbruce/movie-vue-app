<template>
  <div class="movies-edit">
    <form v-on:submit.prevent="editMovie()">
      <h1>Edit Movie</h1>
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
          v-model="editMovieParams.title"
        />
      </div>
      <div class="form-group">
        <label>Plot:</label>
        <input
          type="text"
          class="form-control"
          v-model="editMovieParams.plot"
        />
      </div>
      <div class="form-group">
        <label>Year:</label>
        <input
          type="text"
          class="form-control"
          v-model="editMovieParams.year"
        />
      </div>
      <div class="form-group">
        <label>Director:</label>
        <input
          type="text"
          class="form-control"
          v-model="editMovieParams.director"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <button v-on:click="destroyMovie">Delete Movie</button>
  </div>
</template>

<style></style>

<script>
  import axios from "axios";

  export default {
    data: function () {
      return {
        editMovieParams: {},
        errors: []
      };
    },
    created: function () {
      axios.get(`/movies/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editRecipeParams = response.data;
      });
    },
    methods: {
      editMovie: function () {
        axios.patch(`/movies/${this.$route.params.id}`, this.editMovieParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push(`/movies/${response.data.id}`);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
      },
      destroyMovie: function () {
        if (confirm("Are you sure you want to delete this movie?")) {
          axios.delete(`/movies/${this.$route.params.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/movies");
           })
        }
      }
    }
  };
</script>