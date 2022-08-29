class spawn
{

  constructor(id)
  {

    this.id = id;
    this.min = HEIGHT/7;

    this.max = HEIGHT - this.min;

    this.x = random(world_min,world_max);
    this.y = random(this.min,this.max);

    this.radius = 1000/ws;
    this.degrees = 45;

    //spawn landers, at top of screen
    if(this.id == 0)
    {
      this.y = HEIGHT/6;
    }

    //spawn baiter in visible window
    if(this.id == 12)
    {
      this.x = random(0,WIDTH);
    }
  }

  draw()
  {
    stroke (0,255,0);

    while (this.degrees < 450)
    {
      rect (this.radius*sin(this.degrees) + this.x,
      this.radius*cos(this.degrees) + this.y,1/ws,1/ws);

      this.degrees += 90;
    }
    this.degrees = 45;
  }

  update()
  {
    //CHECK FOR PLAYER MOVEMENT

    if (player.dir == 0)
    {
      if (this.dir == 0)
      {
        this.x += player.x_speed;
      }
      else if (this.dir == 1)
      {
        this.x += player.x_speed;
      }
    }

    if (player.dir == 1)
    {
      if (this.dir == 0)
      {
        this.x -= player.x_speed;
      }
      else if (this.dir == 1)
      {
        this.x -= player.x_speed;
      }
    }
  }


  finished()
  {
    if (this.radius >= 0)
    {
      this.radius -= 12/ws;
      return false;
    }
    else
    {
      return true;
    }
  }

} //END OF CLASS
