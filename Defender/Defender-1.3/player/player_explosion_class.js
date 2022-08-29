class player_explosion_class
{

  constructor(x,y,radius,degrees)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.degrees = degrees;

    this.r = 255;
    this.g = this.r;
    this.b = this.r;

  }

  draw()
  {
    stroke(this.r,this.g,this.b);
    fill(this.r,this.g,this.b);
    rect(this.radius*sin(this.degrees)+this.x,this.radius*cos(this.degrees)+this.y,2/ws,2/ws);
  }

  update()
  {
    this.temp = 0
    this.temp = 255 - this.radius

    this.r = this.temp;
    this.g = this.r;
    this.b = this.r;

    // if (this.radius > 255){
    //   player_explosions.splice(self);
    // }
    // else {
    //   this.radius = this.radius + 2;
    // }


  } //END OF MOVE

  finished()
  {
    if ( this.radius > 255){
      return true;
    }
    else {
      this.radius = this. radius + 2;
      return false;
    }
  }


} //END OF CLASS
