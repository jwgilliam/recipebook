import { useMeals } from "../meals/mealProvider.js"
import { saveRecipe, getRecipes, editRecipes, useRecipes } from "./recipeProvider.js"



const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".recipe-form")

const recipeFormComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveRecipe") {
      const newRecipe = {
        title: document.querySelector("#recipe-title").value,
        author: document.querySelector("#recipe-author").value,
        meal: document.querySelector("#recipe-meal").value,
        ingredients: document.querySelector("#recipe-ingredients").value,
        directions: document.querySelector("#recipe-directions").value
      }

      saveRecipe(newRecipe).then(
        () => {
          const message = new CustomEvent("recipeCreated")
          eventHub.dispatchEvent(message)
        }
      )
    }
  })

  eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "show-recipes") {
      const message = new CustomEvent("showRecipeButtonClicked")
      eventHub.dispatchEvent(message)

    }
  })




  const render = () => {
    const meals = useMeals()
    contentTarget.innerHTML = `
    <div class="recipe-form">
    <button id="saveRecipe">add recipe</button>
    <button id="show-recipes">show recipes</button>
    <div>
    <input type="hidden" id="recipe-id"/>
    <label for="recipe-title">Title: </label>
    <input type="text" id="recipe-title"/>
    <label for="recipe-author">Author: </label>
    <input type="text" id="recipe-author"/>
    <label for="recipe-meal">Meal: </label>
    <select class="dropdown" id="recipe-meal">
    <option value="0">Please select a meal...</option>
    ${optionList((meals))}
    </select>
    <label for="recipe-ingredients">Ingredients: </label>
    <input type="text" id="recipe-ingredients"/>
    <label for="recipe-directions">Directions: </label>
    <input type="text" id="recipe-directions"/>
    </div>
    </div>
    `
  }
  const optionList = (meals) => {
    let mealOptions = ""
    meals.map(currentMeal => {
      mealOptions += `<option value=${currentMeal.name}>${currentMeal.name}</option>`

    })
    return mealOptions
  }
  render()
}








export default recipeFormComponent