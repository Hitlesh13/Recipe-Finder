
document.getElementById("btn").addEventListener("click", function () {
    const query = document.getElementById("recipe-search").value;
    if (query) {
        searchRecipes(query);
    }
});

function searchRecipes(query) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then(Response => Response.json())
    .then((data) => {
        displayRecipes(data.meals)
        console.log(data)
    })
    .catch("error")
}

function displayRecipes(meals) {
    const recipeContainer = document.querySelector(".recipe-cards");
    recipeContainer.innerHTML = ""; 

    if (meals) {
        meals.forEach(meal => {
            const recipeCard = document.createElement("div");
            recipeCard.innerHTML = `
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" width="100">
                <h3>${meal.strMeal}</h3>
                <a href="${meal.strYoutube}" target="_blank">
                    <button class="view-btn">View Recipe</button>
                </a>
            `;
            recipeContainer.appendChild(recipeCard);
        });
    } else {
        recipeContainer.innerHTML = "<p>No recipes found.</p>";
    }
}