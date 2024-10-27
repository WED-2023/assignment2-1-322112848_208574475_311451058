<template>
  <b-container>
    <h3>
      {{ title }}
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
//import { mockGetRecipesPreview } from "../services/recipes.js";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    },
    recipeType: {
      type: String,
      required: true, // Must be 'random', 'my','lastWatched' or 'favorite'
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        // Decide the API URL based on the passed recipeType prop
        let apiUrl="";
        switch (this.recipeType) {
          case "random":
            apiUrl = this.$root.store.server_domain + "/recipes/random";
            break;
          case "my":
            apiUrl = this.$root.store.server_domain + "/users/myRecipes";
            break;
          case "favorite":
            apiUrl = this.$root.store.server_domain + "/users/favorites";
            break;
          case "lastWatched":
            apiUrl = this.$root.store.server_domain + "/users/lastWatched";
            break;
          default:
            throw new Error("Invalid recipe type");
        }

        // Fetch data based on the selected recipeType
        const response = await this.axios.get(apiUrl);


        console.log(response);
        const recipes = response.data.recipes;
        console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
