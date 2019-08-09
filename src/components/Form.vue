<template>
  <div>
    <input v-model="title" placeholder="title" />
    <!-- <input v-model="value"  placeholder="year"/> -->
    <input type="button" value="submit" @click="fetchData" />

    <!-- <ul>
      <li v-for="movie in movies">
        {{movie.Title}} - {{movie.year}}
      </li>
    </ul>-->
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