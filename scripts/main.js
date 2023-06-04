import recipeFormComponent from "./recipes/recipeForm.js";
import { getMeals } from "./meals/mealProvider.js"
import recipeListComponent from "./recipes/recipeList.js"
import { getRecipes } from "./recipes/recipeProvider.js"


const loadData = () => {
  return getMeals().then(getRecipes)
}

const renderInitialComponents = () => {
  recipeFormComponent()
  recipeListComponent()
}

loadData().then(renderInitialComponents)

