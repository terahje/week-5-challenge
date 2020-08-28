// set variable for current day
var today = moment().format("dddd, MMMM Do");

// current hour
var now = moment().format("H A");

// set variable for day planner in H A format
var planDay = [
    { time: "7 am", event: ""},
    { time: "8 am", event: ""},
    { time: "9 am", event: ""},
    { time: "10 am", event: ""},
    { time: "11 am", event: ""},
    { time: "12 pm", event: ""},
    { time: "1 pm", event: ""},
    { time: "2 pm", event: ""},
    { time: "3 pm", event: ""},
    { time: "4 pm", event: ""},
];

// show current day in header
$("#currentDay").text(today);

// Day planner, color code timeblock
planDay.forEach(function(timeBlock,index) {
    // time block label
    var timeLabel = timeBlock.time;

    // color in text area
    var blockColor = colorMe(timeLabel);

    // user entry including label, user even and save button
    var block =
        '<div class="time-block" id="' +
        index +
        '"><div class="row no-gutters input-group"><div class="col-sm-2 col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">' +
        timeLabel +
        '</div><textarea class="form-control ' +
        blockColor +
        ' description">' +
        timeBlock.event +
        '</textarea><div class="col-sm-2 col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="far fa-save"></i></button></div></div></div>';

        // show timeblock 
        $(".container").append(block);
});

// function for color coding
function colorMe(time) {
    // compare timeblock time to current time
    var testNow = moment(now, "H A");
    var testBlock = moment(time, "H A");

    // return color for timeblock
    if (testNow.isBefore(testBlock) === true) {
        return "future";
    } else if (testNow.isAfter(testBlock) === true) {
        return "past";
    } else {
        return "present";
    }
}