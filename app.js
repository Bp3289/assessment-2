setInterval(movePlane, 20);
var keys = {};

var plane1 = $('#plane1').position().left;
    plane2 = $('#plane2').position().left;

var pos1 = $('#plane1').position();
    pos2 = $('#plane2').position();   

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
            $("#plane1").animate({left: "+=5"}, 20);
             pos1 = $('#plane1').position().left;
          
        
        }
        
        if (direction == 68) {
            $("#plane2").animate({left: "+=5"}, 20); 
             pos2 = $('#plane2').position().left;
        }
      checkForWinner();
    }
}

function checkForWinner() {
    console.log(pos1);
    console.log("HEY");
    if (pos1 >= 300) {
        alert("You Win!");
    }
   
}











var startGame = function() {
    document.getElementById('plane');
};