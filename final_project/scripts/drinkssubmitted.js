
var drinkCount = localStorage.getItem('drinkCount');

if (drinkCount) {
  document.querySelector('#specialtyDrinksCount').innerHTML = drinkCount;
} else {
    document.querySelector('#specialtyDrinksCount').innerHTML = 0;
}