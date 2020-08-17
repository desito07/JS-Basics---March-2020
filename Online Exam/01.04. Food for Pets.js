function foodForPets(input) {
  let days = Number(input.shift());
  let foodOwned = Number(input.shift());

  let catFood = 0;
  let dogFood = 0;
  let foodNeeded = 0;
  let biscuits = 0;

  for (let i = 1; i <= days; i++) {
    let currentDogFood = Number(input.shift());
    let currentCatFood = Number(input.shift());
    catFood += currentCatFood;
    dogFood += currentDogFood;
    foodNeeded += currentDogFood + currentCatFood;
    if (i % 3 === 0) {
      biscuits += (currentCatFood + currentDogFood) * 0.1;
    }
  }
  let percentageFoodNeeded = (foodNeeded / foodOwned) * 100;
  let percentageDogFood = (dogFood / foodNeeded) * 100;
  let percentageCatFood = (catFood / foodNeeded) * 100;
  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(
    `${percentageFoodNeeded.toFixed(2)}% of the food has been eaten.`
  );
  console.log(`${percentageDogFood.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentageCatFood.toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
