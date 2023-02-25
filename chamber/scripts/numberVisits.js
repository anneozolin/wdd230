let date = new Date();

let currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

// initialize display elements
const visitsDisplay = document.querySelector("#visits");

function displayDaysSinceLastVisit() {
	// Retrieve the last visit time from local storage
	const lastVisit = localStorage.getItem('lastVisit');
	
	// Get the current time in milliseconds
	const currentTime = new Date().getTime();
	
	if (lastVisit) {
	  // Calculate the number of milliseconds since the last visit
	  const timeSinceLastVisit = currentTime - lastVisit;
	  
	  // Calculate the number of days since the last visit
	  const daysSinceLastVisit = Math.round(timeSinceLastVisit / (1000 * 60 * 60 * 24));
	  
	  // Store the current visit time in local storage
	  localStorage.setItem('lastVisit', currentTime);
	  
	  // Display the number of days since the last visit
	  visitsDisplay.textContent = `Days since last visit: ${daysSinceLastVisit}`;
	} else {
	  // Store the current visit time in local storage
	  localStorage.setItem('lastVisit', currentTime);
	  
	  // Display message for first-time visitors
	  visitsDisplay.textContent = "This is your first visit!";
	}
  }

  displayDaysSinceLastVisit()