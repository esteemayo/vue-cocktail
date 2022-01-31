<template>
  <article class="cocktail">
    <div class="img-container">
      <img :src="cocktail.image" :alt="cocktail.name" />
    </div>
    <div class="cocktail-footer">
      <h3>{{ cocktail.name }}</h3>
      <h4>{{ cocktail.glass }}</h4>
      <p>{{ cocktail.info }}</p>
      <router-link
        :to="`/cocktail/${cocktail.id}`"
        class="btn btn-primary btn-details"
      >
        Details
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CockTail',
  props: {
    cocktail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
