<template>
  <form class="container mt-5 border rounded shadow-sm p-4" >
    <h1 class="title">Explore our recipes</h1>
    <div class="row mb-4">
      <div class="col-md-6">
        <b-form-input v-model="query.searchQuery" placeholder="Search by name"></b-form-input>
      </div>
      <div class="col-md-2"></div>
      <div class="col-sm-2">
        <h5>Sort by:</h5>
      </div>
      <div class="col-md-2">
        <b-form-select v-model="sortBy" :options="sortOptions"></b-form-select>
      </div>
    </div>
    <div class="row mb-2">
        <div class="col-md-4">
          <h4>Filter options:</h4>
        </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-2">
        <b-form-select id="cuisine" v-model="query.cuisine"  :options="cuisines" placeholder="Cuisine"></b-form-select>
      </div>
      <div class="col-md-2">
        <b-form-select id="diet" v-model="query.diet" :options="diets"  placeholder="Diet"></b-form-select>
      </div>
      <div class="col-md-2">
        <b-form-select id="intolerance" v-model="query.intolerance" :options="intolerances"  placeholder="Intolerances"></b-form-select>
      </div>
      <div class="col-sm-2">
        <b-button variant="success" @click="searchRecipes">Search</b-button>    
      </div>
      <div class="col-sm-2"></div>
      <div class="col-sm-2">
        <b-button type="reset" variant="danger" placeholder="Popularity" @click="onReset">Reset</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4" v-for="recipe in sortedRecipes" :key="recipe.id">
        <RecipePreview v-if="searched" class="recipePreview" :recipe="recipe" />
      </div>
    </div>
    <div class="row" v-if="searched && recipes.length===0">
      <h4>Sorry, maybe that recipe is from another planet</h4>
    </div>
  </form>
</template>

<script>
  import cuisines from "../assets/cuisines";
  import diets from "../assets/diets";
  import intolerances from "../assets/intolerances";
  import RecipePreview from '../components/RecipePreview.vue';
  import { mockSearchRecipes } from "../services/recipes.js";
export default {
  name:"searchPage",
  components: {
    RecipePreview
  },
  data() {
    return {
      query:{ searchQuery: '',
      cuisine: null,
      diet: null,
      intolerance: null
    },
      sortBy: 'popularity',
      sortOptions: [
        { value: 'popularity', text: 'Popularity' },
        { value: 'prep_time', text: 'Preperation time' }
      ],
      cuisines: [{ value: null, text: "Cuisines", disabled: false }],
      diets: [{ value: null, text: "Diets", disabled: false }],
      intolerances: [{ value: null, text: "Intolerances", disabled: false }],
      recipes: [],
      searched: false
    };
  },
  mounted() {
    console.log("mounted");
    this.cuisines.push(...cuisines);
    this.diets.push(...diets);
    this.intolerances.push(...intolerances);
    console.log($v);
  },
  computed: {
    sortedRecipes() {
      return this.recipes.slice(0).sort((a, b) => {
        if (this.sortBy === 'popularity') {
          return b.aggregateLikes - a.aggregateLikes;
        } else if (this.sortBy === 'prep_time') {
          return b.readyInMinutes - a.readyInMinutes;
        } else {
          return 0;
        }
      });
    }
    
  },
  methods: {
    async searchRecipes() {
      try {
        const response = await this.axios.get(
          this.$root.store.server_domain + "/recipes/random",
        );

        const amountToFetch = 3; // Set this to how many recipes you want to fetch
        //const response = mockSearchRecipes(amountToFetch,this.query);
        console.log(response);
        const recipes = response.response.data.recipes;
        console.log(recipes);
        this.recipes = [];
        this.recipes.push(...recipes);
        if (response.status==204)
          this.recipes = [];
        this.searched =true;
      } catch (error) {
        console.log(error);
      }
    },
    
    onReset() {
      this.query= {
      searchQuery: '',
      cuisine: { value: null, text: 'Cuisines' },
      diet: { value: null, text: 'Diets' },
      intolerance: { value: null, text: 'Intolerances' },
      sortBy: 'popularity'
      };
      this.searched =false;
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
}
.text-success {
  color: #28a745 !important;
}
</style>