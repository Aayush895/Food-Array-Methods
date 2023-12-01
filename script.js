const food = require('./food.json')

function getAllFoodItems(foodItems) {
  foodItems.forEach((food) => {
    // This statement prints each food object
    console.log(food)

    // This statement prints the name of each food in the json file
    console.log(food?.foodname)
  })
}

function getVegetables(foodItems) {
  // This piece of code filters out the food which is of category vegetable
  const vegetables = foodItems.filter((food) => {
    return food?.category == 'Vegetable'
  })

  // This piece of code prints all the vegetables that we got after filtering the food array
  vegetables.forEach((vegetable) => {
    console.log(vegetable)
  })
}

function getFruits(foodItems) {
  // This piece of code filters out the food which is of category fruit
  const fruits = foodItems.filter((food) => {
    return food?.category == 'Fruit'
  })

  // This piece of code prints all the fruits that we got after filtering the food array
  fruits.forEach((fruit) => {
    console.log(fruit)
  })
}

function getProtein(foodItems) {
  // This piece of code filters out the food which is of category protein
  const proteins = foodItems.filter((food) => {
    return food?.category == 'Protein'
  })

  // This piece of code prints all the proteins that we got after filtering the food array
  proteins.forEach((protein) => {
    console.log(protein)
  })
}

function getNuts(foodItems) {
  // This piece of code filters out the food which is of category nuts
  const nuts = foodItems.filter((food) => {
    return food?.category == 'Nuts'
  })

  // This piece of code prints all the nuts that we got after filtering the food array
  nuts.forEach((nut) => {
    console.log(nut)
  })
}

function getGrains(foodItems) {
  // This piece of code filters out the food which is of category grain
  const grains = foodItems.filter((food) => {
    return food?.category == 'Grain'
  })

  // This piece of code prints all the grains that we got after filtering the food array
  grains.forEach((grain) => {
    console.log(grain)
  })
}

function getDairy(foodItems) {
  // This piece of code filters out the food which is of category dairy
  const dairyProducts = foodItems.filter((food) => {
    return food?.category == 'Dairy'
  })

  // This piece of code prints all the dairy items that we got after filtering the food array
  dairyProducts.forEach((dairy) => {
    console.log(dairy)
  })
}

function getCalorieAbv100(foodItems) {
  // This piece of code filters out the food which has a calorie of more than 100
  const calorieAbv100 = foodItems.filter((food) => {
    return food?.calorie > 100
  })

  // This piece of code prints all the food items with a calorie of more than 100 that we got after filtering from the food array
  calorieAbv100.forEach((food) => {
    console.log(food)
  })
}

function getCalorieBlw100(foodItems) {
  // This piece of code filters out the food which has a calorie of less than 100
  const calorieBlw100 = foodItems.filter((food) => {
    return food?.calorie < 100
  })

  // This piece of code prints all the food items with a calorie of less than 100 that we got after filtering from the food array
  calorieBlw100.forEach((food) => {
    console.log(food)
  })
}

function sortProteinContent(foodItems) {
  // This function sorts food items based on the protein content in descending order
  foodItems.sort(function (item1, item2) {
    return item2?.protiens - item1?.protiens
  })

  foodItems.forEach((food) => {
    console.log(food)
  })
}

function sortCabContent(foodItems) {
  // This function sorts food items based on the cab content in ascending order
  foodItems.sort(function (item1, item2) {
    return item1?.cab - item2?.cab
  })

  foodItems.forEach((food) => {
    console.log(food)
  })
}

getAllFoodItems(food)
getVegetables(food)
getFruits(food)
getProtein(food)
getNuts(food)
getGrains(food)
getDairy(food)
getCalorieAbv100(food)
getCalorieBlw100(food)
sortProteinContent(food)
sortCabContent(food)
