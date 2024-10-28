<template>
  <b-card
    :title="recipe.title"
    :img-src="recipe.image"
    img-alt="Recipe Image"
    img-top
    class="recipe-card mb-2"
  >
    <b-card-text :v-html="recipe.summary" class="recipe-description" >
      {{ recipe.summary }}
    </b-card-text>
    <div class="icons">
      <i v-if="recipe.glutenFree" class="fas fa-ban" title="Gluten Free"></i>
      <i v-if="recipe.vegetarian" class="fas fa-carrot" title="Vegetarian"></i>
      <i v-if="recipe.vegan" class="fas fa-seedling" title="Vegan"></i>
    </div>
    <ul class="recipe-overview">
      <li>{{ recipe.readyInMinutes }} minutes</li>
      <li v-if="recipe.aggregateLikes">{{ recipe.aggregateLikes }} likes</li>
    </ul>
    <div class="buttons">
      <b-button
        v-if="recipe.aggregateLikes"
        @click.stop="likeRecipe" 
        :disabled="recipe.liked" 
        :variant="recipe.liked ? 'danger' : 'outline-danger'" 
        class="like-button"
      >
        {{ recipe.liked ? 'Liked' : 'Like' }}
      </b-button>
      <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }">
        <b-button variant="primary">Open Recipe</b-button>
      </router-link>
    </div>

    <b-modal :id="'like-modal-' + recipe.id" title="Added to Favorites" hide-footer>
      <p class="my-4">The recipe has been added to your favorites!</p>
    </b-modal>

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
    async likeRecipe() {

      this.recipe.aggregateLikes += 1;
      this.recipe.liked = true;
      this.$bvModal.show('like-modal-' + this.recipe.id);
      //console.log("recipe ID ="+this.recipe.id);
      const recipe_id = this.recipe.id;
      this.axios.post(
          this.$root.store.server_domain + "/users/favorites",
          {
            recipe_id : recipe_id,
            withCredentials: true
          }
        );
    }
  }
};
</script>

<style scoped>
.recipe-card {
  width: 14rem; 
  height: auto; 
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.recipe-card img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  height: 9rem;
}

.recipe-description {
  font-size: 0.8rem; 
  height: 80px;
  margin: 10px 0; 
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.icons {
  display: flex;
  justify-content: left;
  gap: 10px;
  margin: 3px;
}

.icons i {
  font-size: 1.2rem;
  margin: 0 5px;
}

.recipe-overview {
  list-style-type: none;
  padding: 0;
  margin: 3px 0; 
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem; 
}

.recipe-overview li {
  margin-top: 20px;
  margin-bottom: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover{
  background: #265df2;

}

.like-button {
  margin-right: 5px;
}

.buttons .b-button {
  flex: 1;
}

.recipe-card .card-title {
  font-size: 1.2rem;
  max-height: 3rem; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  }
</style>