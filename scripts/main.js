import recipeFormComponent from "./recipes/recipeForm.js";
import { getMeals } from "./meals/mealProvider.js"


const loadData = () => {
  return getMeals()
}

const renderInitialComponents = () => {
  recipeFormComponent()
}

loadData().then(renderInitialComponents)