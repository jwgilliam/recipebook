import { getRecipes, useRecipes } from "./recipeProvider.js";
import recipeComponent from "./recipe.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".recipe-list")

const recipeListComponent = () => {

  eventHub.addEventListener("showRecipeButtonClicked", event => {
    const recipes = useRecipes()
    render(recipes)
    console.log(recipes)
  })

  const render = (element) => {
    console.log(element)
    contentTarget.innerHTML = `
    <section class="recipe_box">
    <p class="recipe_thingy">????</p>
    <div class="recipe_cards">
     ${element.map(currentElement => {
      return recipeComponent(currentElement)
    }
    ).join("")
      }
   </div>
 </section>
    `
  }
}


export default recipeListComponent