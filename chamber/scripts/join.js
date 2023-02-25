
const dateLastLoaded = document.querySelector("#last-loaded");

const lastLoadedTime = localStorage.getItem("lastLoadedTime");

const currentTime = new Date().toLocaleString();

if (lastLoadedTime) {
    dateLastLoaded.textContent = lastLoadedTime;
} else {
    dateLastLoaded.textContent = 'This is the first time the form has been loaded.';
}

localStorage.setItem('lastLoadedTime', currentTime);

