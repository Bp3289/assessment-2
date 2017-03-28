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
        
        if (direction == 39) {
            $("#plane1").animate({left: "+=5"}, 0);  
        }
        
        if (direction == 68) {
            $("#plane2").animate({left: "+=5"}, 0);  
        }
    }
}

var startGame = function() {
    document.getElementById('plane');
};