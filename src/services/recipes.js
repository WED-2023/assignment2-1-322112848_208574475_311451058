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
    return { data: { recipe: recipe_full_view } } ;
  }

export function mockSearchRecipes(amountToFetch =1,query) {
  let recipes = [];
  for(let i = 0; i < amountToFetch; i++){
    recipes.push(recipe_preview[i]);
  }

  return { data: { recipes: recipes } };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
  
