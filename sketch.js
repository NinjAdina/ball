var setup = function() { // setup is called only when the sketch starts
  createCanvas(600, 400);
}

var draw = function() { // draw is called 60 times per second; animation goes here.
  background(100); // pay special attention to this line; what does it do?
  ball.display();
  ball.update();
}

var ball = {
  x: 20, // this is the horizontal (x) point at which ball will start moving.
  y: 200, // the vertical (y) point at which ball will start.
  size: 15, // this will be the length and width of the ball.
  speed: { // will reference this variable w/ 2 properties as speed.x or speed.y
    x: 3, // need this to move ball horizontally.
    y: 3 // need to add this to move ball vertically as it's moving horizontally = diagonally.
  },

  display: function () {
    // note that to access any of ball's properties, you must use dot notation, using the special keyword 'this'.
    ellipse(this.x, this.y, this.size, this.size);
  },

  update: function () {
    this.checkForBounce();
    this.move();
  },

  move: function () {
    this.x += this.speed.x; // this line is the same as: this.x = this.x + this.speed.x;
    this.y += this.speed.y; // this line is the same as: this.y = this.y + this.speed.y;
  },

  checkForBounce: function () {
    if (this.y > height - this.size / 2) this.bounceY();
    if (this.y < this.size / 2) this.bounceY();
    if (this.x > width - this.size / 2) this.bounceX();
    if (this.x < this.size / 2) this.bounceX();
  },

  bounceX: function () {
    // your code goes here; a hint: this will require making your own variable as well as defining this function
    // another hint: notice that ball is defined using object literal notation
    this.speed.x *= -1; // this line is the same as: this.speed.x = this.speed.x * -1;
  },

  bounceY: function() {
    this.speed.y *= -1; // this line is the same as: this.speed.y = this.speed.y * -1;
  }
};
