class moving_bullet extends enemy
{
  constructor(x,y,angle,speed,col,id) //col = colour of enemy bullet
  {
    super();
    this.x = x;
    this.y = y;
    this.tempx = this.x;
    this.tempy = this.y;
    this.angle = angle;
    this.speed = speed;
    this.col = col;
    this.id = id;

    this.score = 0;
    this.radius = 0;

    this.fire = false;
    this.anim = false;
  }

  draw()
  {
    this.tempx = this.radius*sin(this.angle)+this.x;
    this.tempy = this.radius*cos(this.angle)+this.y;
    this.x = this.tempx;
    this.y = this.tempy;
    stroke(this.col);
    fill(this.col);
    rect(this.tempx,this.tempy,1/ws,1/ws);
  }

  update()
  {
    this.radius = 0;
    this.radius += this.speed;
  }

  goesoffscreen()
  {
    //check for y boundaries
    if (this.tempy <= this.min)
    {
      return true;
    }

    if (this.tempy >= this.max)
    {
      return true;
    }
  }

}  //END OF CLASS
