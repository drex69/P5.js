class enemy_bullet_class

{

  constructor(x,y,angle,speed)
  {
    this.min = 101/ws;
    this.max = HEIGHT;
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.radius = 0;
    this.speed = 2 + speed/ws;//random(4,5)+speed;
    this.score = 100;
  }

  draw()
  {

    this.tempx = this.radius*sin(this.angle)+this.x;
    this.tempy = this.radius*cos(this.angle)+this.y;
    stroke(255,255,255);
    fill(255,255,255);
    rect(this.tempx,this.tempy,1/ws,1/ws);


  }

  update()
  {

    //MOVEMENT///////////////////

    this.radius += this.speed;

    if (player.dir == 0)
    {
      this.x += player.x_speed;
    }

    if (player.dir == 1)
    {
      this.x -= player.x_speed;
    }

    //EDGE OF WORLD//////////////

    // if(this.x < world_min)
    // {
    //   this.x = world_max;
    // }
    //
    // if(this.x > world_max)
    // {
    //   this.x = world_min;
    // }


  }

  goesoffscreen()
  {

    if (this.tempy <= this.min)
    {
      return true;
    }

    if (this.tempy >= this.max)
    {
      return true;
    }

    // if (this.tempx > 1500)
    // {
    //   return true;
    // }
    //
    // if (this.tempx < 0)
    // {
    //   return true;
    // }
    //
    // return false;

  }


}  //END OF CLASS
