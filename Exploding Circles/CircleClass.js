class circle
{
  constructor()
  {
  
  this.w=windowWidth/4;
  this.h=windowHeight/4;
  
  this.x=random(this.h/2,windowWidth-this.h/2);
  this.y=random(this.h/2,windowHeight-this.h/2);
  
  this.max_radius=random(this.h-100,this.h);
  this.start_radius=random(0,this.max_radius);

  this.r=random(100,255);
  this.g=random(100,255);
  this.b=random(100,255);
  
  this.degrees=0;
  this.i=0; 
  
  }
  
  display()
  {
    stroke(this.r,this.g,this.b);
    strokeWeight(3);
    for (this.degrees=0; this.degrees < 360; this.degrees=this.degrees+10)
    {
    point(this.start_radius*sin(this.degrees)+this.x,this.start_radius*cos(this.degrees)+this.y);
    }  
    this.start_radius++;     
  }
  
  
  move()
  {
    if (this.start_radius > this.max_radius)
    {
      this.start_radius = 0;
      this.max_radius=random(this.h-100,this.h);
      this.x=random(this.h/2,windowWidth-this.h/2);
      this.y=random(this.h/2,windowHeight-this.h/2);
  
      this.r=random(100,255);
      this.g=random(100,255);
      this.b=random(100,255);
    }
  }
   
  
  
}
