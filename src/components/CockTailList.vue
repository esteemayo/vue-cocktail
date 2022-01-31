<template>
  <Loading v-if="loading" />

  <div v-else>
    <h2 v-if="cocktails.length < 1" class="section-title">
      No cocktails matched your search criteria
    </h2>

    <section v-else class="section">
      <h2 class="section-title">Cocktails</h2>
      <div class="cocktails-center">
        <CockTail
          v-for="cocktail in cocktails"
          :key="cocktail.id"
          :cocktail="cocktail"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CockTail from './CockTail.vue';
import Loading from './Loading.vue';

export default {
  name: 'CockTailList',
  components: {
    CockTail,
    Loading,
  },
  computed: mapGetters(['cocktails', 'loading']),
};
</script>

<style></style>
