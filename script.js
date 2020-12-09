let dateEl = document.getElementById("currentDay");
// Create variabe that = moment
let timeVar = moment();
console.log(moment());
let currentTime = timeVar.format("LT");
console.log(currentTime);
dateEl.innerHTML = timeVar.format("dddd, MMMM Do");
const timeBlockEls = document.querySelectorAll(".timeblock")
// Create a for loop that loops through each time block. 
for (let i = 0; i < timeBlockEls.length; i++) {
console.log(timeBlockEls[i].id)
   
}


  
// // After we create for loops make if statement checking if the current hours is greater then the block hour. 

//     if (currentTime < "#id") {
        
//     } else if (currentTime > "#id" ) {

//     } else if (currentTime === "#id")

// }

// local storage

$(".saveBtn").on("click", function(){
    var title = $(this).parent().children("textarea").val();
    var currentHour = $(this).parent().attr("data-hour");
console.log(title);
console.log(currentHour);
// localStorage.setItem("appts" + currentHour, JSON.stringify(title));
});
