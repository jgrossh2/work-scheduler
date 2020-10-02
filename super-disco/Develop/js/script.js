$(document).ready(function() {

var currentDayEl = document.getElementById('currentDay');
// var toDo = [];
var input = [];
// var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

var displayDay= moment().format("dddd MMMM do YYYY");
console.log(displayDay);
currentDayEl.textContent = displayDay;
// $(".btn").on("click", function() {
//     var value = $(this).siblings(".description").val()
//     var time = $(this).parent().attr("id")
//     localStorage.setItem(value, time);
// });
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

    // $("#hour1").append(value1);

    localStorage.setItem("input", JSON.stringify(input));

});
$(".hour2").on("click", function(event) {
    event.preventDefault();
    var hour1 = $("#hour2")
        .val()
        .trim();
    input.push(hour1)

    // $("#hour2").append(hour2);

    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour3").on("click", function(event) {
    event.preventDefault();
    var hour3 = $("#hour3")
        .val()
        .trim();
    input.push(hour3)

    // $("#hour3").append(hour3);
    localStorage.setItem("input", JSON.stringify(input));

});
$(".hour4").on("click", function(event) {
    event.preventDefault();
    var hour4 = $("#hour4")
        .val()
        .trim();
    input.push(hour4)

    // $("#hour4").append(hour4);
    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour5").on("click", function(event) {
    event.preventDefault();
    var hour5 = $("#hour5")
        .val()
        .trim();
    input.push(hour5)

    // $("#hour5").append(hour5);
    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour6").on("click", function(event) {
    event.preventDefault();
    var hour6 = $("#hour6")
        .val()
        .trim();
    input.push(hour6)

    //  $("#hour6").append(hour6);
     localStorage.setItem("input", JSON.stringify(input));
});
$(".hour7").on("click", function(event) {
    event.preventDefault();
    var hour7 = $("#hour7")
        .val()
        .trim();
    input.push(hour7)

    // $("#hour7").append(hour7);    
    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour8").on("click", function(event) {
    event.preventDefault();
    var hour8 = $("#hour8")
        .val()
        .trim();
    input.push(hour8)

    // $("#hour8").append(hour8);
    localStorage.setItem("input", JSON.stringify(input));
});
$(".hour9").on("click", function(event) {
    event.preventDefault();
    var hour9 = $("#hour9")
        .val()
        .trim();
    input.push(hour9)

    // $("#hour9").append(hour9);
    localStorage.setItem("input", JSON.stringify(input));
    displayInput();
});

// set text to page
// // todos on the page
function displayInput() {
    
    // $(".content").empty();
     console.log("noway")
    
    //iterates over the input list
    for (var i = 0; i < input.length; i++) {
        // console.log("yipee")
        var toDoText = $("<span>")
            .addClass("task")
            .text(input);
            console.log("soclose")
        toDoText.text(input[i]);
        console.log("working")

    //adds input to the text
    $(".content").append(toDoText);
    
        // replace textarea with p element
        $(".block-0").replaceWith();
        $(".block-1").replaceWith();
        $(".block-2").replaceWith();
        $(".block-3").replaceWith();
        $(".block-4").replaceWith();
        $(".block-5").replaceWith();
        $(".block-6").replaceWith();
        $(".block-7").replaceWith();
        $(".block-8").replaceWith();
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
        // saveInput();
    });
}

// when page loads
displayInput();
nowTime();
});
// $("#hour1 .content").val(localStorage.getItem("input1"));
// console.log('input1')
// $("#hour2 .content").val(localStorage.getItem("input2"));
// $("#hour3 .content").val(localStorage.getItem("input3"));
// $("#hour4 .content").val(localStorage.getItem("input4"));
// $("#hour5 .content").val(localStorage.getItem("input5"));
// $("#hour6 .content").val(localStorage.getItem("input6"));
// $("#hour7 .content").val(localStorage.getItem("input7"));
// $("#hour8 .content").val(localStorage.getItem("input8"));
// $("#hour9 .content").val(localStorage.getItem("input9"));

//saving storage through refresh
//how to get buttons bigger/icon
//hot to get text box bigger





