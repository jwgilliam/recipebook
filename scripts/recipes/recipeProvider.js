let recipes = []
const setRecipes = (recipesArray) => {
  recipes = recipesArray.slice()
}

export const useRecipes = () => recipes.slice()

export const getRecipes = () => {
  return fetch("http://localhost:8088/recipes")
    .then(response => response.json())
    .then(setRecipes)
}

export const editRecipes = recipesObject => {
  return fetch(`http://localhost:8088/recipes/${recipesObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipesObject)
  }).then(getRecipes)
}

export const deleteRecipe = (recipeId) => {
  return fetch(`http://localhost:8088/recipes/${recipeId}`, {
    method: "DELETE"
  }).then(getRecipes)
}

export const saveRecipe = (recipe) => {
  return fetch("http://localhost:8088/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(recipe)
  }).then(getRecipes)
}
