class ball
{
  constructor()
  {
    
  this.x=random(50,windowWidth-50);
  this.y=random(50,windowHeight-50);
  this.xspeed=random(-5,5);
  this.yspeed=random(-5,5);
  this.radius=windowWidth/30;
  this.r=random(0,125);
  this.g=random(0,125);
  this.b=random(0,125);
  
 }
  
  display()
  {
    fill(this.r,this.g,this.b,200);
    stroke(this.r,this.g,this.b,200);
    circle(this.x, this.y, this.radius);
  }

  move()
  {
    
    this.x=this.x+this.xspeed;
    this.y=this.y+this.yspeed;
    
    if (this.x > windowWidth-this.radius/2 || this.x < this.radius/2)
    {
      this.xspeed= -this.xspeed;
    }
    
     if (this.y > windowHeight-this.radius/2 || this.y < this.radius/2)
    {
      this.yspeed= -this.yspeed;
    }   

  }

}
