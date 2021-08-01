class Stone {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,restitution:0,friction:1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/Stone.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y)
    
      
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,0, this.width, this.height);
      pop()
    }
  };