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
    }
  },


  actions: {
    fetchData: function() {
      const myRequest = new Request(
        `http://www.omdbapi.com/?apikey=95f0a4a0&${this.state.title}`
      );

      fetch(myRequest)
        .then(success => {
          success.json();
        })
        .then(movies => {
          // eslint-disable-next-line
          console.log(movies);
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log(error);
        });
    }
  }
});
