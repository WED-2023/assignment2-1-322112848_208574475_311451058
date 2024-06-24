<template>
  <div>
    <h1>My Favorites</h1>
    <RecipePreviewList title="My Favorites" :recipes="favoriteRecipes" />
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
      favoriteRecipes: [] // Assuming these are populated separately
    };
  }
};
</script>

<style scoped>
/* Add scoped styles as needed */
</style>