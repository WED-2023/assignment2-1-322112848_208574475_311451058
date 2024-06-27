<template>
  <div class="family-recipes">
    <h1>Family Recipes</h1>
    <div class="recipe-list">
      <b-card
        v-for="recipe in recipes"
        :key="recipe.id"
        :title="recipe.title"
        :img-src="recipe.images[0]" 
        img-alt="Recipe Image"
        img-top
        class="recipe-card mb-4"
      >
        <b-card-text class="recipe-description">
          {{ recipe.description }}
        </b-card-text>
        <ul class="recipe-overview">
          <li>{{ recipe.time }} minutes</li>
          <li>{{ recipe.aggregateLikes }} likes</li>
        </ul>
        <div class="buttons">
          <b-button 
            @click.stop="likeRecipe(recipe)" 
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
        <!-- Details -->
        <div class="recipe-details">
          <h2>{{ recipe.title }}</h2>
          <p><strong>Description:</strong> {{ recipe.description }}</p>
          <p><strong>Time:</strong> {{ recipe.time }} minutes</p>
          <p><strong>Ingredients:</strong></p>
          <ul>
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
          </ul>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: 'Cheesecake',
          description: 'A delicious creamy cheesecake with a graham cracker crust.',
          time: 90,
          images: ["https://www.cookingclassy.com/wp-content/uploads/2023/02/honey-mustard-chicken-01-1024x1536.jpg"],
          aggregateLikes: 0,
          liked: false,
          ingredients: ['cream cheese', 'sugar', 'eggs', 'petibar']
        },
        {
          id: 2,
          title: 'Chicken in Honey and Mustard',
          description: 'Juicy chicken breasts cooked in a sweet and tangy honey mustard sauce.',
          time: 30,
          images: ["assets/Images/chicken_honey_and_mustard.jpg"],
          aggregateLikes: 0,
          liked: false,
          ingredients: ['chicken breasts', 'honey', 'mustard', 'olive oil', 'garlic']
        },
        {
          id: 3,
          title: 'Salmon in Pesto Sauce',
          description: 'Tender salmon fillets topped with a flavorful pesto sauce.',
          time: 25,
          images: ["salmon_in_pesto.jpg"],
          aggregateLikes: 0,
          liked: false,
          ingredients: ['salmon fillets', 'pesto sauce', 'lemon', 'olive oil']
        }
      ]
    };
  },
  methods: {
    likeRecipe(recipe) {
      recipe.aggregateLikes += 1;
      recipe.liked = true;
    }
  }
};
</script>

<style scoped>
.family-recipes {
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 3rem;
  color: #333;
}

.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.recipe-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe-card img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  height: 150px;
}

.recipe-description {
  font-size: 1rem;
  margin: 10px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.recipe-overview {
  list-style-type: none;
  padding: 0;
  margin: 0 0 10px 0;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #555;
}

.recipe-overview li {
  margin-bottom: 5px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.like-button {
  margin-right: 5px;
}

.buttons .b-button {
  flex: 1;
}

.recipe-details {
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}

.recipe-details h2 {
  font-size: 1.5rem;
  margin-top: 0;
  color: #333;
}

.recipe-details p {
  margin: 5px 0;
}

.recipe-details ul {
  margin: 5px 0;
  padding-left: 20px;
}

.recipe-details .recipe-images {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.recipe-details .recipe-images img {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  border-radius: 10px;
}
</style>