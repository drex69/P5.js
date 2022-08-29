class star_class

{

  constructor()
  {

    this.min = HEIGHT/6
    this.max = HEIGHT - this.min;

    this.x = random(0,WIDTH);
    this.y = random(this.min,this.max);

    this.r = random(1,200);
    this.g = random(1,200);
    this.b = random(1,200);

    this.speed = random(1,2);

    this.counter = 0;
  }

  draw()
  {

    strokeWeight(2/ws);
    stroke (this.r,this.g,this.b);
    fill (this.r,this.g,this.b);
    rect (this.x,this.y,1/ws,1/ws);

  } //END OF DRAW

  update()
  {
    if (this.counter == 60)
    {
      this.r = random(1,200);
      this.g = random(1,200);
      this.b = random(1,200);
      this.counter = 0;
    }
    else
    {
      this.counter ++;
    }
  } //END OF UPDATE

  boundaries()
  {
    //check boundaries
    if (this.x < 0)
    {
      this.x = WIDTH;
      this.speed = round(random(1,2));
    }

    if (this.x > WIDTH)
    {
      this.x = 0;
      this.speed = round(random(1,2));
    }
  }

  movement()
  {
    //update movement
    if (player.dir == 0)
    {
      this.x += player.x_speed;
      this.x += this.speed;
    }

    if(player.dir ==1)
    {
      this.x -= player.x_speed;
      this.x -= this.speed;
    }
  }



} //END OF STAR CLASS
