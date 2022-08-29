class enemy_explosion_class
{

  constructor(x,y,id,col) //id 0 to 9 for pattern colour explosion
  {                       //id 10     for static colour explosion using col


    this.xpos = x;
    this.ypos = y;
    this.id = id;

    this.x = [];
    this.y = [];

    for(this.i=0; this.i<9; this.i++)
    {
      this.x[this.i]=this.xpos;
      this.y[this.i]=this.ypos;
    }

    this.col = [];

    if(this.id == 0)  //lander
    {
      this.col[0] = col_green;
      this.col[1] = col_yellow;
      this.col[2] = col_green;
      this.col[3] = col_green;
      this.col[4] = col_black;
      this.col[5] = col_green;
      this.col[6] = col_green;
      this.col[7] = col_yellow;
      this.col[8] = col_green;
    }

    if(this.id == 1)  //mutant
    {
      this.col[0] = col_green;
      this.col[1] = col_pink;
      this.col[2] = col_green;
      this.col[3] = col_green;
      this.col[4] = col_black;
      this.col[5] = col_green;
      this.col[6] = col_green;
      this.col[7] = col_pink;
      this.col[8] = col_green;
    }

    if(this.id == 2)  //bomber
    {
      this.col[0] = col_blue;
      this.col[1] = col_pink;
      this.col[2] = col_blue;
      this.col[3] = col_blue;
      this.col[4] = col_black;
      this.col[5] = col_blue;
      this.col[6] = col_blue;
      this.col[7] = col_pink;
      this.col[8] = col_blue;
    }

    if(this.id == 3)  //pod
    {
      this.col[0] = col_yellow;
      this.col[1] = col_pink;
      this.col[2] = col_yellow;
      this.col[3] = col_pink;
      this.col[4] = col_black;
      this.col[5] = col_pink;
      this.col[6] = col_yellow;
      this.col[7] = col_pink;
      this.col[8] = col_yellow;
    }

    if(this.id == 4)  //swarmer
    {
      this.col[0] = col_red;
      this.col[1] = col_red;
      this.col[2] = col_red;
      this.col[3] = col_red;
      this.col[4] = col_black;
      this.col[5] = col_red;
      this.col[6] = col_red;
      this.col[7] = col_red;
      this.col[8] = col_red;
    }

    if(this.id == 5)  //stealer
    {
      this.col[0] = col_green;
      this.col[1] = col_yellow;
      this.col[2] = col_green;
      this.col[3] = col_green;
      this.col[4] = col_black;
      this.col[5] = col_green;
      this.col[6] = col_green;
      this.col[7] = col_yellow;
      this.col[8] = col_green;
    }

    if(this.id == 9) //humans
    {
      this.col[0] = col;
      this.col[1] = col;
      this.col[2] = col;
      this.col[3] = col;
      this.col[4] = col_black;
      this.col[5] = col;
      this.col[6] = col;
      this.col[7] = col;
      this.col[8] = col;
    }

    if(this.id == 10 || this.id == 11) //bullets
    {
      this.col[0] = col;
      this.col[1] = col;
      this.col[2] = col;
      this.col[3] = col;
      this.col[4] = col_black;
      this.col[5] = col;
      this.col[6] = col;
      this.col[7] = col;
      this.col[8] = col;
    }



    if(this.id == 12)  //baiter
    {
      this.col[0] = col_green;
      this.col[1] = col_green;
      this.col[2] = col_green;
      this.col[3] = col_yellow;
      this.col[4] = col_black;
      this.col[5] = col_yellow;
      this.col[6] = col_green;
      this.col[7] = col_green;
      this.col[8] = col_green;
    }

    this.radius = 0;
    this.vel = 1.0;
    this.scale = 1.00/ws;//0.01
    this.speed = 10/ws;//4
    this.flicker = 0;
  }

  draw()
  {
    this.r = random(1,255);
    this.g = random(1,255);
    this.b = random(1,255);

    stroke(this.r,this.g,this.b);
    fill(this.r,this.g,this.b);

    for(this.i=0; this.i<9; this.i++)
    {
      if(this.flicker == 0)
      {
        stroke(this.col[this.i]);
        fill(this.col[this.i]);
        rect (this.x[this.i],this.y[this.i],this.scale,this.scale);
        this.flicker = 1;
      }
      else
      {
        stroke(col_black);
        fill(col_black);
        rect (this.x[this.i],this.y[this.i],this.scale,this.scale);
        this.flicker = 0;
      }
    }
  }

  update()
  {
    if (player.dir == 0)
    {
      for(this.i=0; this.i<9; this.i++)
      {
        this.x[this.i] += player.x_speed;
      }
    }

    if (player.dir == 1)
    {
      for(this.i=0; this.i<9; this.i++)
      {
        this.x[this.i] -= player.x_speed;
      }
    }

  } //END OF MOVE

  finished()
  {
    if(this.radius < 25){

      //this.radius += 1;
      this.radius += this.vel;
      this.vel -= 0.01;


      this.scale += 0.02/ws;

      this.x[0] -= this.speed;
      this.y[0] -= this.speed;

      this.y[1] -= this.speed;

      this.x[2] += this.speed;
      this.y[2] -= this.speed;

      this.x[3] -= this.speed;

      this.x[5] += this.speed;

      this.x[6] -= this.speed;
      this.y[6] += this.speed;

      this.y[7] += this.speed;

      this.x[8] += this.speed;
      this.y[8] += this.speed;

      return false;
    }
    else {
      return true;
    }
  }


} //END OF CLASS
