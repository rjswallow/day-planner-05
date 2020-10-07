// var timeEl = moment();
// var currentDate = timeEl.format('MMMM Do YYYY');
// var dateEl = document.getElementById("currentDay");
// dateEl.innerHTML=currentDate;
// console.log(currentDate);

let dateEl = document.getElementById("currentDay");
let timeVar = moment();
let currentTime = timeVar.format("HH");
console.log(currentTime);
dateEl.innerHTML = timeVar.format("dddd, MMMM Do");