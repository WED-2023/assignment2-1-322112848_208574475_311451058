<template>
  <div>
    <h1>My Recipes</h1>
    <AddRecipeModal @addRecipe="handleAddRecipe" />
    <RecipePreviewList title="My Recipes" :recipes="recipes" />
  </div>
</template>

<script>
import RecipePreviewList from '../components/RecipePreviewList.vue';

export default {
  components: {
    // AddRecipeModal,
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