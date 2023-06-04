import { getRecipes, useRecipes, editRecipes, deleteRecipe } from "./recipeProvider.js";
import recipeComponent from "./recipe.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".recipe-list")

const recipeListComponent = () => {

  eventHub.addEventListener("showRecipeButtonClicked", event => {
    const recipes = useRecipes()
    render(recipes)
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete-recipe--")) {
      const [prefix, recipeId] = clickEvent.target.id.split("--")
      deleteRecipe(recipeId).then(
        () => {
          const theNewRecipes = useRecipes()
          render(theNewRecipes)
        }
      )
    }
  })

  const render = (element) => {
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