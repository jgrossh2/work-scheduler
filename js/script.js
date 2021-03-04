$(document).ready(function () {
  var currentDayEl = document.getElementById("currentDay");

  var displayDay = moment().format("dddd MMMM Do YYYY");
  console.log(displayDay);
  currentDayEl.textContent = displayDay;

  // //save entered comment
  $(".hour1").on("click", function (event) {
    event.preventDefault();
    var hour1 = $("#hour1").val().trim();
    localStorage.setItem("time1", JSON.stringify(hour1));
  });
  $(".hour2").on("click", function (event) {
    event.preventDefault();
    var hour2 = $("#hour2").val().trim();
    localStorage.setItem("time2", JSON.stringify(hour2));
  });
  $(".hour3").on("click", function (event) {
    event.preventDefault();
    var hour3 = $("#hour3").val().trim();
    localStorage.setItem("time3", JSON.stringify(hour3));
  });
  $(".hour4").on("click", function (event) {
    event.preventDefault();
    var hour4 = $("#hour4").val().trim();
    localStorage.setItem("time4", JSON.stringify(hour4));
  });
  $(".hour5").on("click", function (event) {
    event.preventDefault();
    var hour5 = $("#hour5").val().trim();
    localStorage.setItem("time5", JSON.stringify(hour5));
  });
  $(".hour6").on("click", function (event) {
    event.preventDefault();
    var hour6 = $("#hour6").val().trim();
    localStorage.setItem("time6", JSON.stringify(hour6));
  });
  $(".hour7").on("click", function (event) {
    event.preventDefault();
    var hour7 = $("#hour7").val().trim();
    localStorage.setItem("time7", JSON.stringify(hour7));
  });
  $(".hour8").on("click", function (event) {
    event.preventDefault();
    var hour8 = $("#hour8").val().trim();
    localStorage.setItem("time8", JSON.stringify(hour8));
  });
  $(".hour9").on("click", function (event) {
    event.preventDefault();
    var hour9 = $("#hour9").val().trim();
    localStorage.setItem("time9", JSON.stringify(hour9));
    displayInput();
  });

  // set text to page
  function displayInput() {
    // sets diret input to textarea
    var time1 = JSON.parse(localStorage.getItem("time1"));
    var time2 = JSON.parse(localStorage.getItem("time2"));
    var time3 = JSON.parse(localStorage.getItem("time3"));
    var time4 = JSON.parse(localStorage.getItem("time4"));
    var time5 = JSON.parse(localStorage.getItem("time5"));
    var time6 = JSON.parse(localStorage.getItem("time6"));
    var time7 = JSON.parse(localStorage.getItem("time7"));
    var time8 = JSON.parse(localStorage.getItem("time8"));
    var time9 = JSON.parse(localStorage.getItem("time9"));

    // input textarea with input
    $(".block-0").val(time1);
    $(".block-1").val(time2);
    $(".block-2").val(time3);
    $(".block-3").val(time4);
    $(".block-4").val(time5);
    $(".block-5").val(time6);
    $(".block-6").val(time7);
    $(".block-7").val(time8);
    $(".block-8").val(time9);
  }
  //set current time to compare to scheduled time
  var compareTime = moment().hours(); // give us the current hour in military format
  console.log(compareTime);

  var nowTime = function () {
    // for each time, determine past, present, future
    // get the currentTime and compare with
    $(".content").each(function () {
      //  get the hour from the data-hour inside the row
      var setTime = parseInt($(this).attr("data-hour"));

      if (setTime === compareTime) {
        $(this).addClass("current");
      } else if (setTime < compareTime) {
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
      }
    });
  };

  // when page loads
  displayInput();
  nowTime();
});
