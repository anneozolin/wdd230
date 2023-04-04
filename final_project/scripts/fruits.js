const source = 'json/data.json';

async function getFruitData() {
    const response = await fetch(source);
    const data = await response.json();
    // console.table(data);
    displayFruit(data);
}

getFruitData()

const displayFruit = (fruits) => {
    const selects = document.querySelector("select.fruit-select");
    const select1 = document.querySelector("select.fruit-select1");
    const select2 = document.querySelector("select.fruit-select2");
    fruits.forEach((fruit) => {
        let option = document.createElement("option");
        let option1 = document.createElement("option");
        let option2 = document.createElement("option") 
        option.textContent = `${fruit.name}`;
        option1.textContent = `${fruit.name}`;
        option2.textContent = `${fruit.name}`;


        selects.appendChild(option);
        select1.appendChild(option1);
        select2.appendChild(option2);
    })
}