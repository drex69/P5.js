class stealer extends enemy
{
  constructor(x,y)
  {
    super();

    this.id = 5;
    this.x = x;
    this.y = y;
    this.speed = 8/ws;
    this.firing_speed = 3;
    this.dir = 2;         //2 = going to human || 3 = taking human up !
    this.score = 150;

    this.anim = true;

    this.fire = true;
    this.fire_min = 0;
    this.fire_max = 995 - player.level_difficulty;

    this.radius = 0;
    this.angle = 0;

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
    this.tempx = this.radius*sin(this.angle)+this.x;
    this.tempy = this.radius*cos(this.angle)+this.y;
    image(lander_anim[this.frame],this.tempx,this.tempy)
  }

  shoot()
  {
    if(super.shoot())
    {
      obj1_to_obj2_angle(this.x,this.y,player.x,player.y);//returns angle to player
      enemys.push(new moving_bullet(this.x,this.y,angle,this.firing_speed,col_white,10));
      enemy_shoot_sound.play();
    }
  }

  update()
  {
    //MOVEMENT FOR STEALER/////////////////////////////////////////////////////

    if(this.dir == 2)     //movement towards human
    {
      //find nearest human
      this.bool = false;
      this.temp = 100000

      for(this.i=enemys.length-1;this.i>=0;this.i--)
      {
        if(enemys[this.i].id == 9 && enemys[this.i].captured == 0)
        {
          obj1_to_obj2_distance(this.x,this.y,enemys[this.i].x,enemys[this.i].y);
          if(length < this.temp)
          {
            this.temp = length;
            this.nearest = this.i;
            this.bool = true;
          }
        }
      }

      if(this.bool == false)
      {
        this.id = 100;
        enemys.push(new lander(this.x,this.y));
      }

      if(this.bool == true)
      {
        //move towards nearest human
        this.radius = this.radius + this.speed;

        obj1_to_obj2_angle(this.x,this.y,enemys[this.nearest].x,enemys[this.nearest].y);
        this.angle = angle;
        this.x = this.x + this.radius*sin(this.angle);
        this.y = this.y + this.radius*cos(this.angle);
        this.radius = 0;

        //check the distance between stealer and human for pick up
        obj1_to_obj2_distance(this.x,this.y,enemys[this.nearest].x,enemys[this.nearest].y);
        if(length < 30)
        {
          this.speed = 2/ws;
          this.dir = 3;
          this.captured = 2;
          enemys[this.nearest].captured = 2;
          human_captured_sound.play();
        }
      }
    }


    if(this.dir == 3)     //movement for stealer, if human has been picked up
    {
      for(this.i=enemys.length-1; this.i>=0; this.i--)
      {
        if(enemys[this.i].id == 9 && enemys[this.i].captured == 2)
        {
          this.y -= this.speed;
          enemys[this.i].x = this.x;
          enemys[this.i].y = this.y + human_img.height;

          if(this.y <= this.min)
          {
            enemys.push(new mutant(this.x,this.y));
            enemys[this.i].id = 100;
            this.id = 100;
          }
        }
      }
    }

  } // update
} // stealer class
