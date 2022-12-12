// www.themealdb.com/api/json/v1/1/search.php?f=a
// function searchMeal() {
//     fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//     // console.log("click");
// }

// async function searchMeal() {
//     const name = document.getElementById("search-term").value;
//     console.log(name);
//     const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
//     );

//     var data = await response.json();
//     var meals = data.meals;
//     console.log(data);
//     let arr = [];
//     for (let i = 0; i < meals.length; i++) {
//         let obj = {
//             name: meals[i].strMeal,
//             desec: meals[i].strInstructions,
//             thumb: meals[i].strMealThumb,
//         };
//         arr.push(obj);
//     }
//     console.log(arr);
// }
// strInstructions: "Preheat the oven to 200C/180C Fan/Gas 6.\r\nPut the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and, using the back of a spoon, press over the base and sides of the tin to give an even layer. Chill in the fridge while you make the filling.\r\nCream together the butter and sugar until light and fluffy. You can do this in a food processor if you have one. Process for 2-3 minutes. Mix in the eggs, then add the ground almonds and almond extract and blend until well combined.\r\nPeel the apples, and cut thin slices of apple. Do this at the last minute to prevent the apple going brown. Arrange the slices over the biscuit base. Spread the frangipane filling evenly on top. Level the surface and sprinkle with the flaked almonds.\r\nBake for 20-25 minutes until golden-brown and set.\r\nRemove from the oven and leave to cool for 15 minutes. Remove the sides of the tin. An easy way to do this is to stand the tin on a can of beans and push down gently on the edges of the tin.\r\nTransfer the tart, with the tin base attached, to a serving plate. Serve warm with cream, crème fraiche or ice cream.";
// strMeal: "Apple Frangipan Tart";
// strMealThumb: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg";

// const mealsEl = document.getElementById("meals");
// const favoriteContainer = document.getElementById("fav-meals");
// const mealPopup = document.getElementById("meal-popup");
// const mealInfoEl = document.getElementById("meal-info");
// const popupCloseBtn = document.getElementById("close-popup");

// const searchTerm = document.getElementById("search-term");
// const searchBtn = document.getElementById("search");

// async function searchMeal() {
//     const name = document.getElementById("search-term").value;

//     const resp = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`
//     );
//     const respData = await resp.json();
//     const meals = respData.meals;

//     addMealFav(meals);
// }

// function addMealFav(mealsData) {
//     console.log(mealsData);
//     const ul = document.createElement("ul");
//     ul.style.listStyle = "none";

//     for (let i = 0; i < mealsData.length; i++) {
//         const favMeal = document.createElement("li");

//         favMeal.innerHTML = `
//                 <img
//                     src="${mealsData[i].strMealThumb}"
//                     alt="${mealsData[i].strMeal}"
//                 /><span>${mealsData[i].strMeal}</span>
//             `;
//         ul.appendChild(favMeal);
//     }
//     const btn = document.querySelector("#clear");

//     btn.addEventListener("click", () => {
//         removeMealLS(mealsData.idMeal);

//         fetchFavMeals();
//     });

//     // favMeal.addEventListener("click", () => {
//     //     // showMealInfo(mealsData);
//     // });

//     favoriteContainer.appendChild(ul);
// }

// //  What will the following code output?
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) {
//     setTimeout(function () {
//         console.log("Index: " + i + ", element: " + arr[i]);
//     }, 1000);
// }

// // var i =0

//todo ====>>> Start

// const searchForm = document.querySelector("form");
// const searchResultDiv = document.querySelector(".search-result");
// const container = document.querySelector(".container");
// let searchQuery = "";
// const APP_ID = "Use Your Own App ID Here";
// const APP_key = "Use Your Own App Key Here";
// // console.log(container)
// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     searchQuery = e.target.querySelector("input").value;
//     fetchAPI();
// });

// async function fetchAPI() {
//     const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=20`;
//     const response = await fetch(baseURL);
//     const data = await response.json();
//     generateHTML(data.hits);
//     console.log(data);
// }

// function generateHTML(results) {
//     container.classList.remove("initial");
//     let generatedHTML = "";
//     results.map((result) => {
//         generatedHTML += `
//       <div class="item">
//         <img src="${result.recipe.image}" alt="img">
//         <div class="flex-container">
//           <h1 class="title">${result.recipe.label}</h1>
//           <a class="view-btn" target="_blank" href="${
//               result.recipe.url
//           }">View Recipe</a>
//         </div>
//         <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
//         <p class="item-data">Diet label: ${
//             result.recipe.dietLabels.length > 0
//                 ? result.recipe.dietLabels
//                 : "No Data Found"
//         }</p>
//         <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
//       </div>
//     `;
//     });
//     searchResultDiv.innerHTML = generatedHTML;
// }
const mealsEl = document.getElementById("meals");
const mealPopup = document.getElementById("meal-popup");
const mealInfoEl = document.getElementById("meal-info");

const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");

async function getRandomMeal() {
    const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f`
    );
    const respData = await resp.json();
    const randomMeal = respData.meals[0];

    addMeal(randomMeal, true);
}

async function getMealsBySearch(term) {
    const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=` + term
    );

    const respData = await resp.json();
    const meals = respData.meals;

    return meals;
}

function addMeal(mealData, random = false) {
    console.log(mealData);

    const meal = document.createElement("div");
    meal.classList.add("meal");

    meal.innerHTML = `
        <div class="meal-header">
            ${
                random
                    ? `
            <span class="random"> Random Recipe </span>`
                    : ""
            }
            <img
                src="${mealData.strMealThumb}"
                alt="${mealData.strMeal}"
            />
        </div>
        <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    const btn = meal.querySelector(".meal-body .fav-btn");

    btn.addEventListener("click", () => {
        if (btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }

        fetchFavMeals();
    });

    meal.addEventListener("click", () => {
        showMealInfo(mealData);
    });

    mealsEl.appendChild(meal);
}

function addMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem(
        "mealIds",
        JSON.stringify(mealIds.filter((id) => id !== mealId))
    );
}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}

async function fetchFavMeals() {
    
    //? clean the container

    favoriteContainer.innerHTML = "";

    const mealIds = getMealsLS();

    for (let i = 0; i < mealIds.length; i++) {
        const mealId = mealIds[i];

        //? meal = await getMealById(mealId);

        addMealFav(meal);
    }
}

function addMealFav(mealData) {
    const favMeal = document.createElement("li");

    favMeal.innerHTML = `
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        /><span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    `;

    const btn = favMeal.querySelector(".clear");

    btn.addEventListener("click", () => {
        removeMealLS(mealData.idMeal);

        fetchFavMeals();
    });

    favMeal.addEventListener("click", () => {
        showMealInfo(mealData);
    });

    favoriteContainer.appendChild(favMeal);
}

function showMealInfo(mealData) {
    
    //? clean it up

    mealInfoEl.innerHTML = "";

    //? update the Meal info

    const mealEl = document.createElement("div");

    const ingredients = [];

    //? get ingredients and measures

    for (let i = 1; i <= 20; i++) {
        if (mealData["strIngredient" + i]) {
            ingredients.push(
                `${mealData["strIngredient" + i]} - ${
                    mealData["strMeasure" + i]
                }`
            );
        } else {
            break;
        }
    }

    mealEl.innerHTML = `
        <h1>${mealData.strMeal}</h1>
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        />
        <p>
        ${mealData.strInstructions}
        </p>
        <h3>Ingredients:</h3>
        <ul>
            ${ingredients
                .map(
                    (ing) => `
            <li>${ing}</li>
            `
                )
                .join("")}
        </ul>
    `;

    mealInfoEl.appendChild(mealEl);

    //? show the popup

    mealPopup.classList.remove("hidden");
}

searchBtn.addEventListener("click", async () => {
    //? clean container

    mealsEl.innerHTML = "";

    const search = searchTerm.value;
    const meals = await getMealsBySearch(search);

    if (meals) {
        meals.forEach((meal) => {
            addMeal(meal);
        });
    }
});
