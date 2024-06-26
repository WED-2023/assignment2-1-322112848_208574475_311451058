<template>
  <b-card
    :title="recipe.title"
    :img-src="recipe.image"
    img-alt="Recipe Image"
    img-top
    class="recipe-card mb-2"
  >
    <b-card-text class="recipe-description">
      {{ recipe.description }}
    </b-card-text>
    <ul class="recipe-overview">
      <li>{{ recipe.readyInMinutes }} minutes</li>
      <li>{{ recipe.aggregateLikes }} likes</li>
    </ul>
    <div class="buttons">
      <b-button 
        @click.stop="likeRecipe" 
        :disabled="recipe.liked" 
        :variant="recipe.liked ? 'danger' : 'outline-danger'" 
        class="like-button"
      >
        <i class="fas fa-heart"></i>
      </b-button>
      <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
        <b-button variant="primary">Open Recipe</b-button>
      </router-link>
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  methods: {
    likeRecipe() {
      this.recipe.aggregateLikes += 1;
      this.recipe.liked = true;
    }
  }
};
</script>

<style scoped>
.recipe-card {
  width: 15rem;
  height: 25rem;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.recipe-card img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  height: 9rem;
}

.recipe-description {
  font-size: 0.3rem;
  height: 0;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.recipe-overview {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
}

.recipe-overview li {
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
}

.like-button {
  margin-right: 5px;
}

.buttons .b-button {
  flex: 1;
}
</style>