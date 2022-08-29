class stream
{
  constructor(degree)
  {
    this.degree = degree;

    this.radius = [];
    this.char = [];
    this.r = [];
    this.g = [];
    this.b = [];

    this.i;

    this.lit = false;
    this.count = 0;

    this.x = WIDTH/2;
    this.y = HEIGHT/2;

    this.temp = 50;
    for(this.i = 0; this.i < 13; this.i ++)
    {
      this.radius[this.i] = this.temp;
      this.temp += 50;
    }

    for(this.i = 0; this.i < 13; this.i ++)
    {
      this.char[this.i] = Math.floor(Math.random()*2);
    }

    this.temp = 5;
    for(this.i = 0; this.i < 13; this.i ++)
    {
      this.r[this.i] = 0;
      this.g[this.i] = this.temp;
      this.b[this.i] = 0;
    }

  }

  draw()
  {

    for(this.i = 0; this.i < 13; this.i++)
    {

      stroke(this.r[this.i],this.g[this.i],this.b[this.i]);
      fill(this.r[this.i],this.g[this.i],this.b[this.i]);
      textSize(this.radius[this.i]/10);

      text(this.char[this.i],this.radius[this.i]*sin(this.degree) + this.x,
                             this.radius[this.i]*cos(this.degree) + this.y);
     }

  }

  update()
  {

    for(this.i=0; this.i < 13; this.i++)
    {
      this.chance = Math.floor(Math.random()*100);
      if(this.chance == 0)
      {
        this.char[this.i] = Math.floor(Math.random()*2);
      }
    }

    if(this.lit == true)
    {
      this.r[this.count] = 255;
      this.g[this.count] = 275;
      this.b[this.count] = 255;

      this.count ++;

      if(this.count == 13)
      {
        this.count = 0;
        this.lit = false;
      }
    }

    for(this.i = 0; this.i < 13; this.i ++)
    {
      this.r[this.i] = 0;
      this.g[this.i] = this.g[this.i] - 10;
      this.b[this.i] = 0;

      if(this.g[this.i] < 15)
      {
        this.g[this.i] = 15;
      }
    }

  }
}
