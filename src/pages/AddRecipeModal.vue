<template>
  <div class="container mt-5 border rounded shadow-sm p-4">
    <h1 class="title">Add Recipe</h1>
    <form @submit.prevent="submitRecipe">
      <div class="form-group">
        <label for="title">Recipe Title</label>
        <input type="text" id="title" v-model="recipe.title" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="description">Summary</label>
        <textarea id="description" v-model="recipe.description" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="time">Overall Time (In minutes)</label>
        <b-form-spinbutton id="sb-wrap" v-model="recipe.time" wrap min="0" max="999" placeholder="--"></b-form-spinbutton>
      </div>

      <div class="form-group">
        <label for="images">Image Link</label>
        <input type="text" id="title" v-model="recipe.image" @input="validateURL" 
        :class="{ 'is-invalid': !isURLValid }" class="form-control" />
        <small v-if="!isURLValid" class="text-danger">Please enter a valid URL.</small>
      </div>

      <div class="form-group">
        <b-form-group label="Ingredients" label-for="tags-validation" :state="state">
          <b-form-tags
            input-id="tags-validation"
            v-model="recipe.ingredients"
            :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
            @input="handleTagInput"
            :state="state"
            separator=" "
          ></b-form-tags>
          <template #invalid-feedback>
            You must provide at least 2 ingredients and no more than 15
          </template>
          <template #description>
            <div id="tags-validation-help">
              Enter ingredients.
            </div>
          </template>
        </b-form-group>
      </div>

  
      <div class="form-group">
        <label>Dietary Options</label>
        <div>
          <b-form-checkbox v-model="recipe.glutenFree">Gluten Free</b-form-checkbox>
          <b-form-checkbox v-model="recipe.vegetarian">Vegetarian</b-form-checkbox>
          <b-form-checkbox v-model="recipe.vegan">Vegan</b-form-checkbox>
        </div>
      </div>

      <button type="submit" class="btn btn-success" @click="submitRecipe()">Add Recipe</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {
        title: '',
        description: '',
        time: '',
        image: '',
        Likes: 0,
        ingredients: [],
        glutenFree: false, 
        vegetarian: false,
        vegan: false,
      },
      files: null,
      showImage: false,
      currentImage: null,
      IsValid: false
    };
  },
  computed: {
    state() {
      return this.IsValid ? (this.recipe.ingredients.length > 2 && this.recipe.ingredients.length < 16) : null;
    }
  },
  watch: {
    'recipe.ingredients'(newValue, oldValue) {
      this.IsValid = true;
    }
  },
  methods: {
    tagValidator(tag) {
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 15;
    },
    handleTagInput(tags) {
      this.recipe.ingredients = tags.map(tag => tag.toLowerCase());
      this.IsValid = this.recipe.ingredients.every(tag => this.tagValidator(tag));
    },
    validateURL() {
      // Regular expression to check for a valid URL format
      const urlPattern = new RegExp('^(https?://)?(www.)?([a-zA-Z0-9]+)\\.[a-z]{2,}(/.*)?$');
      this.isURLValid = urlPattern.test(this.recipe.image);
    },
    submitRecipe() {
      this.recipe.id = Math.floor(100000 + Math.random() * 900000); // Generate a unique ID for the recipe
      this.axios.post(
          this.$root.store.server_domain + "/users/myRecipes",
          {
            recipe : this.recipe,
            withCredentials: true
          }
        );

      // Reset the form
      this.recipe = {
        title: '',
        description: '',
        time: '',
        images: [],
        Likes: 0,
        ingredients: [],
        glutenFree: false, 
        vegetarian: false,
        vegan: false,
      };
      this.files = null;
      this.IsValid = false;
    }
  }
};
</script>

<style scoped>
.image-preview-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.image-thumbnail {
  position: relative;
}

.image-thumbnail img {
  max-width: 100px;
  max-height: 100px;
  cursor: pointer;
}

.image-thumbnail button {
  position: absolute;
  
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}
</style>