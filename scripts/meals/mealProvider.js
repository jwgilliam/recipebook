// create dropdown from list of meals in data

let meals = []

const setMeals = (mealsArray) => {
  meals = mealsArray
}

export const useMeals = () => {
  return meals.slice()
}

export const getMeals = () => {
  return fetch("http://localhost:8088/meals", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  }).then(response => response.json())
    .then((mealsArray) => {
      meals = mealsArray.slice()
    })

}