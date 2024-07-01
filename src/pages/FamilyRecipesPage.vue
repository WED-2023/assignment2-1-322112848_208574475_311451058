<template>
  <div class="container mt-5 border rounded shadow-sm p-4">
    <h1>Family Recipes</h1>
    <div class="recipe-list">
      <RecipePreview
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
        @like-recipe="likeRecipe"
      />
    </div>
  </div>
</template>

<script>
import RecipePreview from '../components/RecipePreview.vue';

export default {
  components: {
    RecipePreview
  },
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: 'Cheesecake',
          description: 'A delicious creamy cheesecake with a graham cracker crust.',
          readyInMinutes: 90,
          image: "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2019/05/15110539/Copy-of-%D7%A2%D7%95%D7%92%D7%AA-%D7%92%D7%91%D7%99%D7%A0%D7%94-%D7%A4%D7%99%D7%A8%D7%95%D7%A8%D7%99%D7%9D-%D7%9E%D7%A2%D7%9C%D7%A4%D7%AA.jpg",
          aggregateLikes: 0,
          liked: false,
          gluten: true,
          glutenFree: false,
          vegetarian: false,
          vegan: false
        },
        {
          id: 2,
          title: 'Chicken in Honey and Mustard',
          description: 'Juicy chicken breasts cooked in a sweet and tangy honey mustard sauce.',
          readyInMinutes: 30,
          image: "https://www.cookingclassy.com/wp-content/uploads/2023/02/honey-mustard-chicken-01-1024x1536.jpg",
          aggregateLikes: 0,
          liked: false,
          gluten: true,
          glutenFree: false,
          vegetarian: false,
          vegan: false
        },
        {
          id: 3,
          title: 'Salmon in Pesto Sauce',
          description: 'Tender salmon fillets topped with a flavorful pesto sauce.',
          readyInMinutes: 25,
          image: "https://www.garlicandzest.com/wp-content/uploads/2021/03/pesto-baked-salmon-16.jpg",
          aggregateLikes: 0,
          liked: false,
          gluten: false,
          glutenFree: true,
          vegetarian: false,
          vegan: false
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
</style>




<!--<template>
    
    <div class="card-warpper">
        <h1>Family</h1>
        <div class="card">
            <div class="image-content">
                <span class="overlay"></span>

                <div class="card-image">
                    <img src="src\assets\Images\cheesecake.jpg" alt="" class="card-img">
                </div>

                <div class="card-content">
                    <h2 class="Title"> Cheesecake</h2>
                    <p class="discription">A delicious creamy cheesecake with a graham cracker crust</p>

                    <b-button 
                        @click.stop="likeRecipe" 
                        :disabled="recipe.liked" 
                        :variant="recipe.liked ? 'danger' : 'outline-danger'" 
                        class="like-button"
                    >
                        {{ recipe.liked ? 'Liked' : 'Like' }}
                    </b-button>

                </div>

            </div>
        </div>
    </div>
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
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Times New Roman', Times, serif;
    }
    
    .card-warpper{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3px;
    }


    .card{
        width: 320px;
        border-radius: 25px;
        background-color: #fff;
    }

    .image-content,
    .card-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 14px;
    }

    .image-content{
        position: relative;
        row-gap: 5px;
    }

    .overlay{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        background: color #4070f4;
        border-radius: 25px 25px 0 25px; 
    }
    .card-image{
        position: relative;
        height: 150px;
        width: 150px;
        

    }

    .card-image.card-img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .discription{
        font-size: 14px;
        text-align: center;
    }

    .like-button{
        border: none;
        font-size: 16px;
        color: #fff;
        padding: 8px 16px;
        background-color: #4070F4;
        border-radius: 6px;
        margin: 14px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .like-button:hover{
        background: #265df2;
    }
</style>-->