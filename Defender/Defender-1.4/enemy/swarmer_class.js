class swarmer extends enemy
{

  constructor(x,y)
  {
    super();

    this.id = 4;
    this.x = x;
    this.y = y;

    this.y = random(y-75,y+75);

    this.speed = random(3.0/ws,5.0/ws);
    this.firing_speed = this.speed + 3;

    //shoot bullets towards player
    if(player.dir == 0)
    {
      this.dir = 1;
    }
    else {
      this.dir = 0;
    }

    this.score = 150;

    this.anim = false;

    this.fire = true;
    this.fire_min = 0;
    this.fire_max = 990  - player.level_difficulty;;

    //perlin noise variables
    this.temp = random(0,5);
    this.perlinY_max = this.y;
    this.perlinY_min = this.y;
  }

  draw()
  {
    image(swarmer_img,this.x,this.y);
  }

  shoot()
  {
    if(super.shoot())
    {
       obj1_to_obj2_angle(this.x,this.y,player.x,player.y);
       enemys.push(new moving_bullet(this.x,this.y,angle,this.firing_speed,col_white,10));
       swarmer_shoot_sound.play();
     }
  }

}
