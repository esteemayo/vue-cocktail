<template>
  <Loading v-if="loading" />

  <div v-else>
    <h2 v-if="!cocktail" className="section-title">No cocktail to display</h2>

    <section v-else class="section cocktail-section">
      <router-link to="/" class="btn btn-primary"> Back Home </router-link>
      <h2 class="section-title">{{ cocktail.name }}</h2>
      <div class="drink">
        <img :src="cocktail.image" :alt="cocktail.name" />
        <div class="drink-info">
          <p>
            <span class="drink-data">Name :</span>
            {{ cocktail.name }}
          </p>
          <p>
            <span class="drink-data">Category :</span>
            {{ cocktail.category }}
          </p>
          <p>
            <span class="drink-data">Info :</span>
            {{ cocktail.info }}
          </p>
          <p>
            <span class="drink-data">Glass :</span>
            {{ cocktail.glass }}
          </p>
          <p>
            <span class="drink-data">Instructions :</span>
            {{ cocktail.instructions }}
          </p>
          <p>
            <span class="drink-data">Ingredients :</span>
            <span
              v-for="(ingredient, index) in cocktail.Ingredients"
              :key="index"
              >{{ ingredient ? ingredient : null }}</span
            >
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getCocktail } from '@/services/cocktailService';
import Loading from '@/components/Loading.vue';

export default {
  name: 'SingleCockTail',
  components: {
    Loading,
  },
  data() {
    return {
      cocktail: {},
      loading: false,
    };
  },
  computed: {
    cocktailId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async fetchCocktail() {
      this.loading = true;

      try {
        const { data } = await getCocktail(this.cocktailId);
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const Ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            Ingredients,
          };

          this.cocktail = newCocktail;
          this.loading = false;
        } else {
          this.cocktail = {};
        }
      } catch (err) {
        console.log(err);
        this.loading = false;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchCocktail();
  },
};
</script>

<style></style>
