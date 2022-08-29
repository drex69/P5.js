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
    this.score = 0;

    this.fire = false;
    this.anim = false;

    this.framecount = frameCount;
    this.time_out = this.framecount + 500;
  }

  draw()
  {

    // stroke(this.col);
    // fill(this.col);
    // rect(this.x,this.y,6,0.5);
    // rect(this.x+3,this.y-3,0.5,6);

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    stroke(this.r,this.g,this.b);
    fill(this.r,this.g,this.b);

    rect(this.x,this.y,5,1.0);
    rect(this.x+2,this.y-2,1.0,5);
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
