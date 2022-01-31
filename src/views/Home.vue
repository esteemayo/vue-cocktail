<template>
  <main>
    <SearchForm />
    <CockTailList />
  </main>
</template>

<script>
import { mapActions } from 'vuex';

import SearchForm from '@/components/SearchForm.vue';
import CockTailList from '@/components/CockTailList.vue';

export default {
  name: 'Home',
  components: {
    SearchForm,
    CockTailList,
  },
  methods: mapActions(['fetchCocktails']),
  mounted() {
    this.fetchCocktails();
  },
};
</script>

<style></style>
