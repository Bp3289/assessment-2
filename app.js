function Player(image, plane, margin) {
	this.image = image;
	this.plane = plane;
	this.marginTop = margin;

	this.prepare = function() {
		$(this.plane).css("background-image" , this.margin);
		$(this.plane).css("margin-top", this.marginTop);
	};

	this.move = function () {
		$(this.plane).css("margin-left", "+=10%");
	};
}

function Game() {
	var track = $['.container1'];

	var player1 = new Player('#plane1');
	var player2 = new Player('plane2');

}