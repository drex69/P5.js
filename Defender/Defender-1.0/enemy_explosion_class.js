class enemy_explosion_class
{

constructor(x,y)
{
  this.x1 = x;
  this.x2 = x;
  this.x3 = x;
  this.x4 = x;
  this.x5 = x;
  this.x6 = x;
  this.x7 = x;
  this.x8 = x;
  this.x9 = x;

  this.y1 = y;
  this.y2 = y;
  this.y3 = y;
  this.y4 = y;
  this.y5 = y;
  this.y6 = y;
  this.y7 = y;
  this.y8 = y;
  this.y9 = y;

  this.radius = 0;
  this.scale = 0.01/ws;
  this.speed = 4/ws;
}

draw()
{
  this.r = random(1,255);
  this.g = random(1,255);
  this.b = random(1,255);

  stroke(this.r,this.g,this.b);
  fill(this.r,this.g,this.b);

  rect (this.x1,this.y1,this.scale,this.scale);
  rect (this.x2,this.y2,this.scale,this.scale);
  rect (this.x3,this.y3,this.scale,this.scale);
  rect (this.x4,this.y4,this.scale,this.scale);
  rect (this.x5,this.y5,this.scale,this.scale);
  rect (this.x6,this.y6,this.scale,this.scale);
  rect (this.x7,this.y7,this.scale,this.scale);
  rect (this.x8,this.y8,this.scale,this.scale);
  rect (this.x9,this.y9,this.scale,this.scale);
}

update()
{
  if (player.dir == 0)
  {
    this.x1 += player.x_speed;
    this.x2 += player.x_speed;
    this.x3 += player.x_speed;
    this.x4 += player.x_speed;
    this.x5 += player.x_speed;
    this.x6 += player.x_speed;
    this.x7 += player.x_speed;
    this.x8 += player.x_speed;
    this.x9 += player.x_speed;
  }

  if (player.dir == 1)
  {
    this.x1 -= player.x_speed;
    this.x2 -= player.x_speed;
    this.x3 -= player.x_speed;
    this.x4 -= player.x_speed;
    this.x5 -= player.x_speed;
    this.x6 -= player.x_speed;
    this.x7 -= player.x_speed;
    this.x8 -= player.x_speed;
    this.x9 -= player.x_speed;
  }

} //END OF MOVE

finished()
{
  if(this.radius < 100){

    this.radius += 1;
    this.scale += 0.02/ws;

    this.x1 -= this.speed;
    this.y1 -= this.speed;

    this.y2 -= this.speed;

    this.x3 += this.speed;
    this.y3 -= this.speed;

    this.x4 -= this.speed;

    this.x6 += this.speed;

    this.x7 -= this.speed;
    this.y7 += this.speed;

    this.y8 += this.speed;

    this.x9 += this.speed;
    this.y9 += this.speed;

    return false;
  }
  else {
    return true;
  }
}


} //END OF CLASS
