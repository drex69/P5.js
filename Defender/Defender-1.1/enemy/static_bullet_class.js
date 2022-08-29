class static_bullet extends enemy
{
  constructor(x,y,col,id)
  {
    super();
    this.x = x;
    this.y = y;
    this.tempx = this.x;
    this.tempy = this.y;

    this.col = col;
    this.id = id;//11

    this.speed = 0;
    this.score = 100;

    this.fire = false;
    this.anim = false;

    this.framecount = frameCount;
    this.time_out = this.framecount + 500;
  }

  draw()
  {
    stroke(this.col);
    fill(this.col);
    rect(this.x,this.y,6,0.5);
    rect(this.x+3,this.y-3,0.5,6);
  }

  update()
  {
    this.framecount = frameCount;
    this.tempx = this.x;
    this.tempy = this.y;
  }

  bullet_timeout()
  {
    if(this.framecount >= this.time_out)
    {
      return true;
    }
  }

}
