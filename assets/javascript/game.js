//All of my variables

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
    green:
        {
            name: "Green",
            value: 0
        },
    blue:
        {
            name: "Blue",
            value: 0
        },
};

var wins = 0;

var losses = 0;


//All my functions

var startGame = function () {
    var current = 0;
    var target = Math.floor(Math.random() * (120 - 19 + 1))
}

target = Math.floor(Math.random() * 12) + 19;

crystals.red.value = Math.floor(Math.random() * 12) + 19;
crystals.yellow.value = Math.floor(Math.random() * 12) + 19;
crystals.blue.value = Math.floor(Math.random() * 12) + 19;
crystals.green.value = Math.floor(Math.random() * 12) + 19;

$("#current").html(current);

$("#target").html(target);

var add = function (crystals) {
    current = current + crystals.value;

    $("#current").html(current);
}



//User actions
$("#red").on("click", function () {
    add(crystals.red.value);
});

$("#yellow").on("click", function () {

    add(crystals.yellow.value);
});

$("#blue").on("click", function () {

    add(crystals.blue);
});

$("#green").on("click", function () {

    add(crystals.green);
});