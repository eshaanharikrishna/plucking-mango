class tree {
    constructor(x,y) {
      
      
      this.treewidth = 450;
      this.treeheight=550;
      this.x=x
      this.y=y
      this.leftbody = Bodies.rectangle(0,this.y-this.treeheight/2,10,this.treeheight,{isStatic:false});
      this.rightbody = Bodies.rectangle(this.x+this.treewidth/2,this.y-this.treeheight/2,10,this.treeheight,{isStatic:false});
      this.bottombody=Bodies.rectangle(this.x,this.y,this.treewidth,10,{isStatic:true})
      
      this.image=loadImage("images/tree.png")

      World.add(world, this.rightbody);
      World.add(world, this.bottombody);
      World.add(world, this.leftbody);
    }
    display(){
      var pos =this.bottombody.position;
      push()
      translate(pos.x,pos.y)
    
      
      imageMode(CENTER);
      fill("brown");
      image(this.image,0,-this.treeheight/2, this.treewidth, this.treeheight);
      
      pop()
    }
  };