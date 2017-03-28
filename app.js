var myVar = setInterval(movePlane, 70);
var keys = {};


var pos1 = $('#plane1').position().left;
    pos2 = $('#plane2').position().left;   

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
            $("#plane1").animate({left: "+=5"}, 70);
             pos1 = $('#plane1').position().left;
           }
        
        if (direction == 68) {
            $("#plane2").animate({left: "+=5"}, 70); 
             pos2 = $('#plane2').position().left;
                 console.log(pos2);
        }
      checkForWinner();
    }

}

function checkForWinner() {
   console.log("checkforwinner");
   console.log(pos1);
   if (pos1 >= 500) {
    //alert("Plane 1 wins!");
    reset(1);
   } else if (pos2 >= 500) {
    //alert("Plane 2 wins!");
    reset(2);

   }
   
}


function reset(winner) {
 alert("Player " + winner + " You won!");
  clearInterval(myVar);
  $('#plane1').position().left = 0;
  $('#plane2').position().left = 0;  
  
}






var startGame = function() {
    document.getElementById('plane');
};