import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    movies: [],
    title: ""
  },

  mutations: {
    updateValue(state, title) {
      state.title = title;
    },
    FETCH_MOVIES(state, movies) {
      state.movies = movies;
      state.title = ""
    }
  },


  actions: {
    fetchData: function () {
      const myRequest = new Request(
        `http://www.omdbapi.com/?apikey=e62e1d19&s=${this.state.title}`
      );

      fetch(myRequest)
        .then(function (response) {
          return response.json();
        }).then((result) => {
          this.commit("FETCH_MOVIES", result.Search);
        });
    }
  }
});