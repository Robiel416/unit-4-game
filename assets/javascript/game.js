//All of my global variables

var target = 0;

var current = 0;

var crystals = {
    red:
    {
        name: "Red",
        value: 0
    },
    yellow:
    {
        name: "Yellow",
        value: 0
    },
    Green:
    {
        name: "Green",
        value: 0
    },
    Blue: "Blue",
    value: 0
};

var wins = 0;

var losses = 0;


//All my functions

var startGame = function() {
    var current = 0;
    var target = Math.floor(Math.random()*(120-19+1))
}

target = Math.floor(Math.random() * 12) + 19;

crystals.red.value = Math.floor(Math.random() * 12) + 19;
crystals.yellow.value = Math.floor(Math.random() * 12) + 19;
crystals.blue.value = Math.floor(Math.random() * 12) + 19;
crystals.green.value = Math.floor(Math.random() * 12) + 19;

$("#current").html(current);

$("#target").html(target);

var input = function(crystals) {
    currrent = current + crystals.value;
}


//User actions
$("#red").click(function() {
   input(crystals.red)
});

$("#Yellow").click(function() {
    alert("test");
    input(crystals.yellow)
});

$("#Blue").click(function() {
    alert("test");
    input(crystals.blue)
});

$("#Green").click(function() {
    alert("test");
    input(crystals.green)
});