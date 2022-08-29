class lead_letter
{
  constructor(x,y,r,g,b)
  {
    this.r = r;
    this.g = g;
    this.b = b;

    this.x = x;
    this.y = y;

    this.next_char = this.y + 20;

    this.delay = 0;

    this.delete = false;

    this.letter = String.fromCharCode(0X30A0 + round(random(0,96)));
  }


  draw()
  {
    textSize(25/ws);
    stroke (this.r,this.g,this.b);
    fill(this.r,this.g,this.b);

    text(this.letter,this.x,this.y);
  }

  update()
  {

    this.chance = Math.floor(Math.random() * 3);

    if(this.chance == 0)
    {
      this.letter = String.fromCharCode(0X30A0 + round(random(0,96)));
    }

    if(this.delay == 5)
    {
      letters.push(new trail_letter(this.x,this.y,0,155,0));
      this.y += 20;
      this.delay = 0;
    }
    else
    {
      this.delay ++;
    }

    if(this.y > HEIGHT)
    {
      this.y = Math.floor(random() * -1000);
    }

  }
}
