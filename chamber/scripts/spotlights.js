
// const source1 = 'https://raw.githubusercontent.com/anneozolin/wdd230/main/chamber/json/data.json';
const source = 'json/data.json';

async function getBusinessData() {
    const response = await fetch(source);
    const data = await response.json();
    buildSpotlights(data.members);
}

getBusinessData();

const buildSpotlights = (spotlights) => {
    const cards = document.querySelector("section.spotlights"); 

    let buildCount = 0;

    const topSpotlights = spotlights.filter(spotlight => spotlight.membership == "Gold");

    const newSpotlights = [];

    while (buildCount < 3) {
        const currentChoice = topSpotlights[Math.floor(Math.random() * topSpotlights.length)];

        newSpotlights.push(currentChoice);
        let index = topSpotlights.indexOf(currentChoice);
        if (index > -1) {
          topSpotlights.splice(index, 1);
        }
        buildCount++;
    }
    let spotlightCount = 0;

    newSpotlights.forEach((spotlight) => {
        spotlightCount++;

        let card = document.createElement("div");
        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let website = document.createElement("p");
        let phone = document.createElement("p");
    
        logo.setAttribute("src", spotlight.image);
        logo.setAttribute("alt", `${name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "120");
        logo.setAttribute("height", "120");

        name.textContent = `${spotlight.name}`;
        website.textContent = `${spotlight.website}`;
        phone.textContent = `${spotlight.phone}`;

        if (spotlightCount == 3) {
            card.setAttribute("id","third-spotlight");
        }
    
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(website);
        card.appendChild(phone);
    
        cards.appendChild(card);
    })
}