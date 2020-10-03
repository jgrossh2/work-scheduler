$(document).ready(function() {

var currentDayEl = document.getElementById('currentDay');
var input = [];

var displayDay= moment().format("dddd MMMM do YYYY");
console.log(displayDay);
currentDayEl.textContent = displayDay;

// sets inputs to array
var input = JSON.parse(localStorage.getItem("input")) || [];

// //save entered comment
$(".hour1").on("click", function(event) {
    event.preventDefault();
    var value1= $("#hour1")
        .val()
        .trim();
        console.log(value1)

    input.push(value1);

    localStorage.setItem("input", JSON.stringify(input));

});
$(".hour2").on("click", function(event) {
    event.preventDefault();
    var hour1 = $("#hour2")
        .val()
        .trim();
    input.push(hour1)

    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour3").on("click", function(event) {
    event.preventDefault();
    var hour3 = $("#hour3")
        .val()
        .trim();
    input.push(hour3)

    localStorage.setItem("input", JSON.stringify(input));

});
$(".hour4").on("click", function(event) {
    event.preventDefault();
    var hour4 = $("#hour4")
        .val()
        .trim();
    input.push(hour4)

    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour5").on("click", function(event) {
    event.preventDefault();
    var hour5 = $("#hour5")
        .val()
        .trim();
    input.push(hour5)

    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour6").on("click", function(event) {
    event.preventDefault();
    var hour6 = $("#hour6")
        .val()
        .trim();
    input.push(hour6)

     localStorage.setItem("input", JSON.stringify(input));
});
$(".hour7").on("click", function(event) {
    event.preventDefault();
    var hour7 = $("#hour7")
        .val()
        .trim();
    input.push(hour7)

    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour8").on("click", function(event) {
    event.preventDefault();
    var hour8 = $("#hour8")
        .val()
        .trim();
    input.push(hour8)

    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour9").on("click", function(event) {
    event.preventDefault();
    var hour9 = $("#hour9")
        .val()
        .trim();
    input.push(hour9)

    localStorage.setItem("input", JSON.stringify(input));
    displayInput();
});

// set text to page
function displayInput() {
    
    // $(".content").empty();
     console.log("noway")
    
    //iterates over the input list
    for (var i = 0; i < input.length; i++) {
        var toDoText = $("<span>")
            .addClass("task")
            .text();

    //adds input to the text
    $(".content").append(toDoText);
    
        // replace textarea with p element
        $(".block-0").replaceWith(input[0]);
        $(".block-1").replaceWith(input[1]);
        $(".block-2").replaceWith(input[2]);
        $(".block-3").replaceWith(input[3]);
        $(".block-4").replaceWith(input[4]);
        $(".block-5").replaceWith(input[5]);
        $(".block-6").replaceWith(input[6]);
        $(".block-7").replaceWith(input[7]);
        $(".block-8").replaceWith(input[8]);
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
        // console.log("yes")
        }else if(
        setTime<compareTime){
        $(this).addClass("past");    
        // console.log("no")
        }else { 
        $(this).addClass("future");
        // console.log("ok")
        }
    });
}

// when page loads
displayInput();
nowTime();
});








