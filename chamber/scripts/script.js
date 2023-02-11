let date = new Date();

let currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;


let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    ];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
    ]
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + "," + " " + d.getDate() + " " + monthName + " " + year;

document.getElementById('date').textContent = fulldate;

const weekDay = date.getDay();
//const weekDay = 1

if (weekDay === 1 || weekDay === 2){
    document.querySelector("#message").style.display = "block";
    }
else {
    document.querySelector("#message").style.display = "none";
    }


function toggleMenu () {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;