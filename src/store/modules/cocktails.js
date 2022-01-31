import { getCocktails } from '@/services/cocktailService';

const cocktails = {
  state: () => ({
    cocktails: [],
    loading: true,
    searchQuery: 'a',
  }),
  mutations: {
    setCocktails(state, payload) {
      state.cocktails = payload;
    },
    setSearchTerm(state, payload) {
      state.searchQuery = payload;
    },
  },
  actions: {
    async fetchCocktails({ commit, state }) {
      const { data } = await getCocktails(state.searchQuery);
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        commit('setCocktails', newCocktails);
        state.loading = false;
      } else {
        state.cocktails = [];
      }
    },
  },
  getters: {
    cocktails: (state) => state.cocktails,
    loading: (state) => state.loading,
    searchQuery: (state) => state.searchQuery,
  },
};

export default cocktails;
