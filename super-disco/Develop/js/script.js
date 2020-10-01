var currentDayEl = document.getElementById('currentDay');
var toDo = [];
var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var displayDay= moment().format("MMMM Do YYYY");
console.log(displayDay);
currentDayEl.textContent = displayDay;

//save entered comment
$("#save-input").on("click", function() {
    event.preventDefault();
    var taskInput = $(".text")
        .val();
var saveInput = function() {
        localStorage.setItem("input", taskInput);
    };
});

// var list = JSON.parse(localStorage.getItem("input")) || [];

//set current time to compare to scheduled time
var compareTime = moment().hours();  // give us the current hour in military format 
console.log(compareTime);

var nowTime = function() {

// for each time, determine past, present, future
// get the currentTime   and compare with 
    $(".content").each(function() {
        console.log(this)
                //  get the hour from the data-hour inside the row
     var setTime = parseInt($(this).attr("data-hour"));
     console.log("block time:", setTime)

        if( setTime === compareTime){
        $(this).addClass("current"); 
        console.log("yes")
        }else if(
        setTime<compareTime){
        $(this).addClass("past");    
        console.log("no")
        }else { 
        $(this).addClass("future");
        console.log("ok")
        }
    });
}

// when page loads
nowTime();



