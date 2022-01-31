import { createStore } from 'vuex';
import cocktails from './modules/cocktails';

const store = createStore({
  modules: {
    cocktails,
  },
});

export default store;
