<template>
  <div>
    <h1>Family Recipes</h1>
    <div class="recipe-list">
      <b-card
        v-for="recipe in recipes"
        :key="recipe.id"
        :title="recipe.title"
        :img-src="recipe.images[0]" 
        img-alt="Recipe Image"
        img-top
        class="recipe-card mb-3"
      >
        <b-card-text class="recipe-description">
          {{ recipe.description }}
        </b-card-text>
        <ul class="recipe-overview">
          <li>{{ recipe.time }} minutes</li>
          <li>{{ recipe.aggregateLikes }} likes</li>
        </ul>
        <div class="buttons">
          <b-button @click.stop="likeRecipe(recipe)" variant="outline-danger" class="like-button">
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
          <p><strong>Images:</strong></p>
          <div class="recipe-images">
            <img v-for="(image, index) in recipe.images" :key="index" :src="image" alt="Recipe Image" class="recipe-image" />
          </div>
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
          ingredients: ['cream cheese', 'sugar', 'eggs', 'petibar']
        },
        {
          id: 2,
          title: 'Chicken in Honey and Mustard',
          description: 'Juicy chicken breasts cooked in a sweet and tangy honey mustard sauce.',
          time: 30,
          images: ["assets/Images/chicken_honey_and_mustard.jpg"],
          aggregateLikes: 0,
          ingredients: ['chicken breasts', 'honey', 'mustard', 'olive oil', 'garlic']
        },
        {
          id: 3,
          title: 'Salmon in Pesto Sauce',
          description: 'Tender salmon fillets topped with a flavorful pesto sauce.',
          time: 25,
          images: ["salmon_in_pesto.jpg"],
          aggregateLikes: 0,
          ingredients: ['salmon fillets', 'pesto sauce', 'lemon', 'olive oil']
        }
      ]
    };
  },
  methods: {
    likeRecipe(recipe) {
      recipe.aggregateLikes += 1;
      // You can add further logic here, such as sending the like to a server
    }
  }
};
</script>

<style scoped>
.recipe-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px; 
}

.recipe-card {
  border-radius: 20px;
  overflow: hidden;
}

.recipe-card img {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  object-fit: cover;
  height: 9rem; 
}

.recipe-description {
  font-size: 0.9rem; 
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
  margin-bottom: 5px;
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

.recipe-details {
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f0f0; 
  border-radius: 10px;
}

.recipe-details h2 {
  font-size: 1.2rem; 
  margin-top: 0;
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
}
</style>