<template>
  <div>
    <input v-model="title" placeholder="title" />
    <!-- <input v-model="value"  placeholder="year"/> -->
    <input type="button" value="submit" @click="fetchData" />

    <ul>
      <li v-for="movie in this.$store.state.movies" :key="movie.Title">
        {{movie.Title}} 
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Form",
  computed: {
    title: {
      get() {
        return this.$store.state.title;
      },
      set(value) {
        this.$store.commit("updateValue", value);
      }
    }
  },

  methods: {
    fetchData() {
      this.$store.dispatch("fetchData");
    }
  }
};
</script>