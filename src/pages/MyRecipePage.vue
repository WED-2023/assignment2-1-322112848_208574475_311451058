<template>
  <div class="container mt-5 border rounded shadow-sm p-4">
    <h1>My Recipes</h1>
    <AddRecipeModal @addRecipe="handleAddRecipe" />
    <RecipePreviewList title="My Recipes" :recipes="recipes" />
  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue';

export default {
  components: {
    RecipePreviewList
  },
  data() {
    return {
      recipes: [],
      currentMaxId: 0
    };
  },
  methods: {
    handleAddRecipe(newRecipe) {
      newRecipe.id = Date.now();
      this.recipes.push(newRecipe);
      this.currentMaxId = newRecipe.id;
    }
  }
};
</script>

<style scoped>

</style>