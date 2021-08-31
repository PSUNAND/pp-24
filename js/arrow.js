class arrow {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      isStatic: true
    };
    this. width = 10;
    this.height = 30;
    this.body = Bodies.rectangle(x, y, this.width,this.height, options);
   this.trajectory=[]
    this.image = loadImage("./assets/arrow.png");
    
    World.add(world, this.body);
  }

 
  shoot() {
    var velocity = p5.Vector.fromAngle(arrow.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
    if(this.body.velocity.x>0 &&this.body.position.x>300){
      var position=[this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
    for (var i=0;i<this.trajectory.length;i++){
    image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)
    
    }
    
   
  }
}