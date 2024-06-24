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
    path: "   ",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "   ",
    name: "NewRecipe",
    component: () => import("./pages/AddRecipeModal"),
  },
  {
    path: "   ",
    name: "My Recipes",
    component: () => import("./pages/MyRecipePage"),
  },
  {
    path: "   ",
    name: "Family Recipes",
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
];

export default routes;
