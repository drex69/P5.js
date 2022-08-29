class player_explosion_class
{

  constructor(x,y,radius,degrees)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.degrees = degrees;

    // this.r = 255;
    // this.g = this.r;
    // this.b = this.r;

    this.r = 255;
    this.g = 255;
    this.b = 0;

    this.random_colour = 0;

  }

  draw()
  {

    this.random_colour = Math.floor(Math.random()*2);

    if(this.random_colour == 0)
    {
      stroke(col_yellow);
      fill(col_yellow);
      rect(this.radius*sin(this.degrees)+this.x,this.radius*cos(this.degrees)+this.y,2/ws,2/ws);
    }
    if(this.random_colour == 1)
    {
      stroke(col_red);
      fill(col_red);
      rect(this.radius*sin(this.degrees)+this.x,this.radius*cos(this.degrees)+this.y,2/ws,2/ws);
    }


  }

  update()
  {
    // this.temp = 0
    // this.temp = 255 - this.radius
    //
    // this.r = this.temp;
    // this.g = this.r;
    // this.b = this.r;


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
