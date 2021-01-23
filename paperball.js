class paperball{
constructor(x,y,radius){
var options={
  isStatic:false,
    restrictution:0.3,
    friction:0.5,
    density:1.2
}
this.radius=radius
this.body=bodies.circle(x,y,radius,options);
World.add(world,this.body);

display();{ 
fill("yellow");
ellipsMode(RADIUS);
ellipse(this.body.position.x,this.body.postion.y,this.radius)
}
}}










