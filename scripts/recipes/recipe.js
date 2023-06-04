const recipeComponent = (recipe) => {
  console.log(recipe)

  return `
  <section class="recipe_card">
  <div class="recipe_header">
   <div class ="recipe_title">title: ${recipe.title}</div>
   <div class ="recipe_author">author: ${recipe.author}</div>
   <div class ="recipe_meal">meal: ${recipe.meal}</div>
   <div class ="recipe_ingredients">ingredients: ${recipe.ingredients}</div>
   <div class ="recipe_directions">directions: ${recipe.directions}</div>
 </div>
  `
}

export default recipeComponent