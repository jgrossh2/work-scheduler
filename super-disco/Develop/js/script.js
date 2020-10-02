$(document).ready(function() {

var currentDayEl = document.getElementById('currentDay');
// var toDo = [];
// var input = [];
// var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var displayDay= moment().format("dddd MMMM do YYYY");
console.log(displayDay);
currentDayEl.textContent = displayDay;

//save entered comment
$(".hour1").on("click", function(event) {
    event.preventDefault();
    var hour1= $("#hour1")
        .val();
        // .trim();
        
    localStorage.setItem("input", hour1);
});
$(".hour2").on("click", function(event) {
    var hour2 = $("#hour2")
        .val()
        .trim();
    localStorage.setItem("input", hour2);
});
$(".hour3").on("click", function(event) {
    var hour3 = $("#hour3")
        .val()
        .trim();
    localStorage.setItem("input", hour3);
});
$(".hour4").on("click", function(event) {
    var hour4 = $("#hour4")
        .val()
        .trim();
    localStorage.setItem("input", hour4);
});
$(".hour5").on("click", function(event) {
    var hour5 = $("#hour5")
        .val()
        .trim();
    localStorage.setItem("input", hour5);
});
$(".hour6").on("click", function(event) {
    var hour6 = $("#hour6")
        .val()
        .trim();
    localStorage.setItem("input", hour6);
});
$(".hour7").on("click", function(event) {
    var hour7 = $("#hour7")
        .val()
        .trim();
    localStorage.setItem("input", hour7);
});
$(".hour8").on("click", function(event) {
    var hour8 = $("#hour8")
        .val()
        .trim();
    localStorage.setItem("input", hour8);
});
$(".hour9").on("click", function(event) {
    var hour9 = $("#hour9")
        .val()
        .trim();
    localStorage.setItem("input", hour9);
});
//going forward, new id's and inputs
//need to arrange in array to save and get?
// todos on the page
function displayInput(input) {
    var input = localStorage.getItem("input") || [];
     $('.text').empty();
     console.log("noway")
    
    //iterates over the input list
    for (var i = 0; i < input.length; i++) {
        console.log("yipee")
        var toDoText = $('<p>')
            .addClass("task")
            .text(".text");
            console.log("soclose")
        toDoText.text(input[i]);
    
        //replace textarea with p element
        $("<textarea>").replaceWith(toDoText);
        console.log("madeit")
    }

    };
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
        // saveInput();
    });
}
// when page loads
displayInput();
nowTime();
});





