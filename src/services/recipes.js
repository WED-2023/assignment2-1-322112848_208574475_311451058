// src/services/recipes.js
import recipe_full_view from "../assets/mocks/recipe_full_view.json";
import recipe_preview from "../assets/mocks/recipe_preview.json";


export function mockGetRecipesPreview(amount = 1) {
  let recipes = [];
  let max=recipe_preview.length-1;
  for(let i = 0; i < amount; i++){
    let num =getRandomInt(max);
    recipes.push(recipe_preview[num]);
  }

  return { data: { recipes: recipes } };
}

export function mockGetRecipeFullDetails(recipeId) {
    return { status: 200, response:  {data: { recipe: recipe_full_view } }} ;
  }

export function mockSearchRecipes(amountToFetch =5,query) {
  let recipes = [];
  for(let i = 0; i < 5; i++){
    if (recipe_preview[i].title.toLowerCase().includes(query.searchQuery.toLowerCase()) || query.searchQuery =='')
      recipes.push(recipe_preview[i]);
  }
  if (recipes.length==0)
    return { status: 204,response: { data: { recipes: recipes }} };
  return { status: 200,response: { data: { recipes: recipes }} };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  
