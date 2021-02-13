class Bob {
    constructor(x, y,width,height) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(200,100,20,options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(color){
      fill(color);
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x,this.body.position.y,20,20);
      
      pop();
    }
  };
  