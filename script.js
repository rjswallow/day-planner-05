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

const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.getElementById('dayPlanner')

let itemsArray = localStorage.getItem('items')
? JSON.parse(localStorage.getItem('items'))
: []




localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

const liMaker = (text) => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    liMaker(input.value)
    input.value = ''
});


data.forEach((dayPlanner) => {
    liMaker(dayPlanner)
  })

  button.addEventListener('click', function () {
      localStorage.clear()
      while (ul.firstChild) {
          ul.removeChild(ul.firstChild)
      }
  })

