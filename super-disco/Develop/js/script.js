var currentDayEl = document.getElementById('currentDay');
var toDoEl= document.getElementById('toDo');
var toDo = [];
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var displayDay= moment().format("MMMM Do YYYY");
console.log(displayDay);
currentDayEl.textContent = displayDay;

//save entered comment
$("#save-input").on("click", function() {
    event.preventDefault();
    var taskInput = $("#toDo")
        .val()
        .trim();
localStorage.setItem("toDo", taskInput);
});
//set current time to compare to scheduled time
var currentTime = moment().format('LT');
var compareTime = parseInt(currentTime);
console.log(compareTime);
var setTime=[];
var setTime = $("#time").attr("data-hour");

var nowTime = function() {
// for each time, determine past, present, future
    $(toDoEl).each(function() {
         setTime === compareTime 
        $(toDoEl).addClass("current"); 
        console.log("yes")
        
        setTime<compareTime
        $(toDoEl).addClass("past");    
        console.log("no")

        setTime>compareTime 
        $(toDoEl).addClass("future");
        console.log("ok")
    });
}


// when page loads
nowTime();
// futureTime();
// pastTime();
//when time passes, box shades out
//when time is current, box color
//when time is future, box color


