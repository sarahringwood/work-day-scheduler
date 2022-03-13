// display current date
var rightNow = moment().format("dddd, MMMM Do");
$("#currentDay").append(rightNow);

$(".saveBtn").on("click", function() {
    console.log(this);
    // get new user input from the correct time block
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    // save user input to local storage
    localStorage.setItem(time, text);
});

// load saved data from local storage into time blocks
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

var hourTracker = function() {
    // get the current hour
    var rightNow = moment().hour();

    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour-")[1]);

        // check if the time block is in the past
        if (blockHour < rightNow) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        // check if the time block is in the current hour
        if (blockHour === rightNow) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }

        // check if the time block is in the future
        if (blockHour > rightNow) {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
};

hourTracker();