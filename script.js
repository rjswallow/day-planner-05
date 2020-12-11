let dateEl = document.getElementById("currentDay");
// Create variabe that = moment
let timeVar = moment();
console.log(timeVar);
// let currentTime = parseInt(timeVar.format("k"));
let currentTime = 12
console.log(currentTime);
dateEl.innerHTML = timeVar.format("dddd, MMMM Do");
const timeBlockEls = document.querySelectorAll(".timeblock")
// Create a for loop that loops through each time block. 
for (let i = 0; i < timeBlockEls.length; i++) {
    let currentEl = timeBlockEls[i];

console.log("currentEl", currentEl.id);
let currentHour = parseInt(currentEl.getAttribute("data-hour"));
console.log("currentHour", currentHour);
// After we create for loops make if statement checking if the current hours is greater then the block hour. 

    if (currentTime < currentHour) {
        $(currentEl).addClass('future');
    } else if (currentTime > currentHour ) {
        $(currentEl).addClass('past');
    } else if (currentTime === currentHour) {
        $(currentEl).addClass('present');
    }

    let val = localStorage.getItem(currentHour);
    console.log(val);
    
    $(currentEl).children("textarea").val(val)
};   



  
// // After we create for loops make if statement checking if the current hours is greater then the block hour. 

//     if (currentTime < "#id") {
        
//     } else if (currentTime > "#id" ) {

//     } else if (currentTime === "#id")

// }

// local storage

$(".saveBtn").on("click", function(){
    var val = $(this).parent().children("textarea").val();
    var currentHour = $(this).parent().attr("data-hour");
console.log(val);
console.log(currentHour);
localStorage.setItem(currentHour, val);
});



