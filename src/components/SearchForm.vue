<template>
  <section class="section search">
    <form class="search-form" @submit.prevent="handleSubmit">
      <div class="form-control">
        <label htmlFor="name">Search your favorite cocktail</label>
        <input
          type="search"
          id="name"
          ref="searchInputRef"
          v-model="search"
          @change="onChange"
        />
      </div>
    </form>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SearchForm',
  data() {
    return {
      search: this.searchQuery,
    };
  },
  computed: mapGetters(['searchQuery']),
  methods: {
    ...mapMutations(['setSearchTerm']),
    onChange() {
      this.setSearchTerm(this.search);
    },
    searchRef() {
      this.$refs.searchInputRef.focus();
    },
  },
  mounted() {
    this.searchRef();
  },
};
</script>

<style></style>
