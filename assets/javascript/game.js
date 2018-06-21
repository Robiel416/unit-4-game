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

$("#red").on("click", function () {
    add(crystals.red);
});

$("#yellow").on("click", function () {

    add(crystals.yellow);
});

$("#blue").on("click", function () {

    add(crystals.blue);
});

$("#green").on("click", function () {

    add(crystals.green);
});


//All my functions

var startGame = function () {
    var current = 0;
    //var target = Math.floor(Math.random() * (120 - 19 + 1))
}

target = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

crystals.red.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
crystals.yellow.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
crystals.blue.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
crystals.green.value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;


$("#current").html(current);

$("#target").html(target);





var add = function (crystals) {
    current = current + crystals.value;

    $("#current").html(current);

    gameRules();

    $("#wins").html(wins);

    $("#losses").html(losses);

    startGame();

    
}

var gameRules = function () {

    if (current == target) {
        wins++;
        alert("You win.");

    }
    else if (current > target) {
        losses++;
        alert("You lose.");

    }
}



