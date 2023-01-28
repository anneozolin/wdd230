let date = new Date();

let currentYear = date.getFullYear();
document.querySelector('#current-year').textContent = currentYear;

let lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
document.getElementById('date').textContent = fulldate;


function toggleMenu () {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-button").classList.toggle("open");
}

const x = document.getElementById('hamburger-button')
x.onclick = toggleMenu;