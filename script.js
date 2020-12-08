let dateEl = document.getElementById("currentDay");
let timeVar = moment();
let currentTime = timeVar.format("HH");
console.log(currentTime);
dateEl.innerHTML = timeVar.format("dddd, MMMM Do");