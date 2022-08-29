class bomber extends enemy
{

  constructor(x,y)
  {
    super();

    this.id = 2;
    this.x = x;
    this.y = y;

    this.speed = 5.0/ws;
    this.dir = Math.floor(Math.random()*2);
    this.score = 250;

    this.anim = true;

    this.fire = true;
    this.fire_min = 0;
    this.fire_max = 990 - player.level_difficulty;;

    //perlin noise variables
    this.temp = random(0,5);
    this.perlinY_max = this.y;
    this.perlinY_min = this.y;


    //current frame
    this.frame = 0;
    //max frame
    this.max_frame = 5
    //60 fps divide by 6
    this.fps = fps/10;
    //store current frameCount
    this.framecount = frameCount;
    //to check against enemy framecount
    this.count = this.framecount + this.fps;
  }

  draw()
  {
    image(bomber_anim[this.frame],this.x,this.y)
  }

  shoot()
  {
    if(super.shoot())
    {
      enemys.push(new static_bullet(this.x,this.y,col_white,11));
    }
  }

}
