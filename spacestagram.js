// Author: Awais Ahmad

// get information of NASA's APOD 
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=0rjtxaCmgAi5WyaZ5Bw9OTtmRmTkk5CZxhtDdHP4", function (data) {

    // access information from JSON and set to variable
    const image = data.url;
    const title = data.title;
    const date = data.date;
    const desc = data.explanation;

    // change html based on extracted data from NASA's API
    $('.image1').attr('src', image);
    $('.title1').append(title);
    $('.date1').append(date);
    $('.desc1').append(desc);

});

// copy above code but for NASA's Mars Rover photos
$.getJSON("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=rhaz&api_key=0rjtxaCmgAi5WyaZ5Bw9OTtmRmTkk5CZxhtDdHP4", function (data) {

    const image = data.photos[0].img_src;
    const title = "Photo taken by rover " + data.photos[0].rover.name + " using " + data.photos[0].camera.full_name;
    const date = data.photos[0].earth_date;
    const desc = "This photo was taken by the Mars Rover " + data.photos[0].rover.name + " on " + data.photos[0].earth_date + ". The rover was launched from Earth on " + data.photos[0].rover.launch_date + " and it landed on Mars on " + data.photos[0].rover.landing_date + ".";
    
    $('.image2').attr('src', image);
    $('.title2').append(title);
    $('.date2').append(date);
    $('.desc2').append(desc);

});

// create jQuery functions for use
$(document).ready(function () {
    clickButton1();
    clickButton2();
    loadButtons();
});

// create function to handle and save clicking events for the 2 'like' buttons
function clickButton1() {
    document.getElementById("like1").addEventListener("click", () => {
        if (localStorage.getItem("button1Clicked") != "true") {
            $('.like1').html("Unlike");
            $('.like1').css("background-color", "red");
            localStorage.setItem("button1Clicked", "true");
            localStorage.setItem("button1Color", "red");
        } else {
            $('.like1').html("Like");
            $('.like1').css("background-color", "white");
            localStorage.setItem("button1Clicked", "false");
            localStorage.setItem("button1Color", "white");
        }
    });
}

// same as function above but for second button
function clickButton2() {
    document.getElementById("like2").addEventListener("click", () => {
        if (localStorage.getItem("button2Clicked") != "true") {
            $('.like2').html("Unlike");
            $('.like2').css("background-color", "red");
            localStorage.setItem("button2Clicked", "true");
            localStorage.setItem("button2Color", "red");
        } else {
            $('.like2').html("Like");
            $('.like2').css("background-color", "white");
            localStorage.setItem("button2Clicked", "false");
            localStorage.setItem("button2Color", "white");
        }
    });
}

// load button states based on last item saved from user
function loadButtons() {
    let button1Value = localStorage.getItem("button1Clicked");
    let button2Value = localStorage.getItem("button2Clicked");

    if (button1Value === "true") {
        $('.like1').html("Unlike");
        $('.like1').css("background-color", "red");
    }
    if (button2Value === "true") {
        $('.like2').html("Unlike");
        $('.like2').css("background-color", "red");
    }
}
