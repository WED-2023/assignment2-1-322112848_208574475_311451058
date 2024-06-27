<template>
  <div class="container mt-5 border rounded shadow-sm p-4">
    <h1 class="title">Add Recipe</h1>
    <form @submit.prevent="submitRecipe">
      <div class="form-group">
        <label for="title">Recipe Title</label>
        <input type="text" id="title" v-model="recipe.title" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="recipe.description" required class="form-control"></textarea>
      </div>
      <div class="form-group">
        <label for="time">Overall Time (In minuets)</label>
        <b-form-spinbutton id="sb-wrap" v-model="recipe.time" wrap min="0" max="999" placeholder="--"></b-form-spinbutton>
      </div>

      <div class="form-group">
        <label for="images">Images</label>
        <b-form-file
          v-model="files"
          multiple
          :state="Boolean(files)"
          placeholder="Choose files or drop them here..."
          drop-placeholder="Drop files here..."
          @change="handleFileUpload"
        ></b-form-file>
        <div class="mt-3">Selected files: {{ files ? files.map(f => f.name).join(', ') : '' }}</div>
        <div class="image-preview-container">
          <div v-for="(image, index) in recipe.images" :key="index" class="image-thumbnail">
            <img :src="image" @click="popImage(image)" />
            <button type="button" @click="removeImage(index)">Remove</button>
          </div>
        </div>
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
      <button type="submit" class="btn btn-success">Add Recipe</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    // recipes:{
    //   type: Array,
    //   required: true
    // },
    addRecipe: {
      type: Function,
      required: true
    }
    // currentMaxId: {
    //   type: Number,
    //   required: true
    // }
  },
  data() {
    return {
      recipe: {
        title: '',
        description: '',
        time: '',
        images: [],
        Likes: 0,
        ingredients: []
      },
      files: null,
      showImage: false,
      currentImage: null,
      IsValid: false
    };
  },
  computed: {
    state() {
      // Overall component validation state
      return this.IsValid ? (this.recipe.ingredients.length > 2 && this.recipe.ingredients.length < 16) : null;
    }
  },
  watch: {
    'recipe.ingredients'(newValue, oldValue) {
      // Set the flag on first change to the ingredients array
      this.IsValid = true;
    }
  },
  methods: {
    tagValidator(tag) {
      // Individual ingredient validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 15;
    },
    handleTagInput(tags) {
      // Convert all tags to lowercase
      this.recipe.ingredients = tags.map(tag => tag.toLowerCase());
      // Validate tags
      this.IsValid = this.recipe.ingredients.every(tag => this.tagValidator(tag));
    },

    handleFileUpload(event) {
      const files = event.target.files || event;
      for (let i = 0; i < files.length; i++) {
        this.readFile(files[i]);
      }
    },
    readFile(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (!this.recipe.images) {
          this.recipe.images = [];
        }
        this.recipe.images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    },
    removeImage(index) {
      this.recipe.images.splice(index, 1);
    },
    popImage(image) {
      this.currentImage = image;
      this.showImageModal = true;
    },

    submitRecipe() {
      // this.recipe.id = this.currentMaxId + 1;
      // this.addRecipe(this.recipe);
      
      this.recipe.id = Date.now(); // Generate a unique ID for the recipe
      this.addRecipe(this.recipe); // Emit event to parent

      // Reset the form
      this.recipe = {
        title: '',
        description: '',
        time: '',
        images: [],
        Likes: 0,
        ingredients: []
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