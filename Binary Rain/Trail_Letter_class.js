class trail_letter
{
  constructor(x,y,r,g,b)
  {
    this.r = r;
    this.g = g;
    this.b = b;

    this.x = x;
    this.y = y;

    this.delete = false;

    this.random_number = Math.floor(Math.random() * 2) + 48;
    //this.random_number = Math.floor(Math.random() * 93) + 33;
    //this.letter = String.fromCharCode(0X30A0 + round(random(0,96)));

    this.light = false;
  }



  draw()
  {
    textSize(30/ws);
    stroke (0,15,0);

    fill(this.r,this.g,this.b);

    this.letter = char(this.random_number);
    //this.letter = char(57); //48 - 57 (numbers), 65 - 90 (letters)
    text(this.letter,this.x,this.y);
  }

  update()
  {
    if(this.light == true)
    {
      this.r = 0; this.g = 255; this.b = 0;
      this.light = false;
    }

    if(this.light == false)
    {
      if(this.g > 15)
      {
        this.g -= 5;
      }
      else {
        this.g = 15;
      }
    }

    this.chance = Math.floor(Math.random() * 25);

    if(this.chance == 0)
    {
      this.random_number = Math.floor(Math.random() * 2) + 48;
      //this.random_number = Math.floor(Math.random() * 93) + 33;
      this.letter = String.fromCharCode(0X30A0 + round(random(0,96)));
    }

  }
}
