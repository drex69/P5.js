class star_class

{

  constructor()
  {

    this.min = HEIGHT/6
    this.max = HEIGHT - this.min;

    this.x = random(0,WIDTH);
    this.y = random(this.min,this.max);

    this.r = random(1,255);
    this.g = random(1,255);
    this.b = random(1,255);

    this.counter = 0;
  }

  draw()
  {

    strokeWeight(1/ws);
    stroke (this.r,this.g,this.b);
    fill (this.r,this.g,this.b);
    rect (this.x,this.y,1/ws,1/ws);

  } //END OF DRAW

  update()
  {
    if (this.counter == 60)
    {
      this.r = random(1,255);
      this.g = random(1,255);
      this.b = random(1,255);
      this.counter = 0;
    }
    else
    {
      this.counter ++;
    }


  } //END OF UPDATE


} //END OF STAR CLASS
