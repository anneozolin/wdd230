const fruitDataUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json";

let submissionCount = Number(localStorage.getItem('drinkCount')) || 0;

fetch(fruitDataUrl)
  .then(response => response.json())
  .then(fruits => {
    // Populate the select elements with the available fruit options
    const fruitSelects = document.querySelectorAll('select[name^="fruit"]');
    fruitSelects.forEach(select => {
      fruits.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.textContent = fruit.name;
        select.appendChild(option);
      });
    });

    // Add an event listener for the form submission
    const form = document.getElementById('drink-form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      
      // Retrieve the input values of the form fields
      const firstName = document.getElementById('first-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;
      const specialInstructions = document.getElementById('special-instructions').value;

      // Calculate the total amount of carbohydrates, protein, fat, sugar, and calories based on the selected fruits
      const selectedFruits = fruits.filter(fruit => [fruit1, fruit2, fruit3].includes(fruit.name));
      const totalCarbs = selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.carbohydrates, 0);
      const totalProtein = selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.protein, 0);
      const totalFat = selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.fat, 0);
      const totalSugar = selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.sugar, 0);
      const totalCalories = selectedFruits.reduce((sum, fruit) => sum + fruit.nutritions.calories, 0);

      // Display the output in a formatted area on the same page
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = `
        <h2>Your Drink Order</h2>
        <p><strong>Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Fruit 1:</strong> ${fruit1}</p>
        <p><strong>Fruit 2:</strong> ${fruit2}</p>
        <p><strong>Fruit 3:</strong> ${fruit3}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <h2>Nutritional Information</h2>
        <p><strong>Carbohydrates:</strong> ${totalCarbs}g</p>
        <p><strong>Protein:</strong> ${totalProtein}g</p>
        <p><strong>Fat:</strong> ${totalFat}g</p>
        <p><strong>Sugar:</strong> ${totalSugar}g</p>
        <p><strong>Calories:</strong> ${totalCalories}kcal</p>
      `;
    });

    submissionCount = submissionCount + 1;
    localStorage.setItem('drinkCount', submissionCount);

})