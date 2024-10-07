import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipes/:recipe_id/preview",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/recipes/:user_id/myRecipes",
    name: "NewRecipe",
    component: () => import("./pages/AddRecipeModal"),
  },
  {
    path: "/recipes/:user_id/myRecipes",
    name: "My Recipes",
    component: () => import("./pages/MyRecipePage"),
  },
  {
    path: "recipes/family",
    name: "Family Recipes",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/recipes/:user_id/favorite",
    name: "Favorite Recipes",
    component: () => import("./pages/FavoritesPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/recipe/:recipe_id",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
    props: true, // Pass route params as props to the component
  }
];

export default routes;
