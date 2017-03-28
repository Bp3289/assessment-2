setInterval(movePlane, 20);
var keys = {};

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});


function movePlane() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $("#plane").animate({left: "-=5"}, 0);                
        }
        if (direction == 38) {
            $("#plane").animate({top: "-=5"}, 0);  
        }
        if (direction == 39) {
            $("#plane").animate({left: "+=5"}, 0);  
        }
        if (direction == 40) {
            $("#plane").animate({top: "+=5"}, 0);  
        }
    }
}

var newGame = function() {
    document.getElementById('plane');
    movePlane();
};