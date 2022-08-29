class lander extends enemy
{
  constructor(x,y)
  {
    super();
    //variables
    this.id = 0;
    this.x = x;
    this.y = y;
    this.speed = random(2,3);
    this.speed = this.speed/ws;
    this.dir = Math.floor(Math.random()*2);
    this.score = 150;

    this.anim = true;

    this.fire = true;
    this.fire_min = 0;
    this.fire_max = 995 - player.level_difficulty;


    //perlin noise variables
    this.temp = random(0,5);
    this.perlinY_max = this.y;
    this.perlinY_min = this.y;

    //ANIMATION VARIABLES

    //current frame
    this.frame = 0;
    //max frame
    this.max_frame = 5
    //60 fps divide by 6
    this.fps = fps/20;
    //store current frameCount
    this.framecount = frameCount;
    //to check against enemy framecount
    this.count = this.framecount + this.fps;

  }

  draw()
  {
    image(lander_anim[this.frame],this.x,this.y)
  }

  shoot()
  {
    if(super.shoot())
    {
      obj1_to_obj2_angle(this.x,this.y,player.x,player.y);//returns angle to player
      enemys.push(new moving_bullet(this.x,this.y,angle,this.speed,col_green,10));
      enemy_shoot_sound.play();
    }
  }

} // lander class
