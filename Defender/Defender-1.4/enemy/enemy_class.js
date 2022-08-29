//Template for all enemys
class enemy
{
  constructor(x,y)
  {
    //variables
    this.id;
    this.x;
    this.y;
    this.tempx;
    this.tempy;
    this.speed;
    this.speed;
    this.col;
    this.dir;
    this.score;
    this.radius;
    this.angle;
    this.anim;
    this.fire;
    this.fire_min;
    this.fire_max;
    this.captured = 0;
    this.nearest = -1;

    //perlin noise variables
    this.temp = random(0,5);
    this.perlinY_max = this.y;
    this.perlinY_min = this.y;

    //ANIMATION VARIABLES

    //current frame
    this.frame;
    //max frame
    this.max_frame;
    //60 fps divide by 6
    this.fps;
    //store current frameCount
    this.framecount;
    //to check against enemy framecount
    this.count;

    //top & bottom boundary variables
    this.min = HEIGHT/7;
    this.max = HEIGHT-human_img.height;//-enemy_img.height/2;

  }

  draw()
  {
    //Template
  }

  boundaries()
  {
    //check boundaries
    if (this.x < world_min)
    {
      this.x = world_max;
    }

    if (this.x > world_max)
    {
      this.x = world_min;
    }

    if (this.y < this.min)
    {
      this.y = this.min;
    }

    if (this.y > this.max)
    {
      this.y = this.max;
    }
  }

  movement()
  {
    //update movement
    if (player.dir == 0)
    {
      if (this.dir == 0)
      {
        this.x += player.x_speed;
        this.x -= this.speed;

      }
      else if (this.dir == 1)
      {
        this.x += player.x_speed;
        this.x += this.speed;
      }
      else{
        this.x += player.x_speed;
      }
    }

    if (player.dir == 1)
    {
      if (this.dir == 0)
      {
        this.x -= player.x_speed;
        this.x -= this.speed;
      }
      else if (this.dir == 1)
      {
        this.x -= player.x_speed;
        this.x += this.speed;
      }
      else{
        this.x -= player.x_speed;
      }
    }
  }

  shoot()
  {
    //check when/if enemys will fire
    if(this.fire == true)
    {
      if (this.x > 0 && this.x < WIDTH)
      {
        this.fire_min = Math.floor(Math.random()*999);
        if (this.fire_min > this.fire_max)
        {
          return true;
        }
      }
    }
  }

  update()
  {
    //Adjust Y movement with perlin noise
    this.y = map(noise(this.temp),0,1,this.perlinY_min,this.perlinY_max);
    this.temp += 0.003;

    if(this.perlinY_min > this.min){
      this.perlinY_min --;
    }
    if(this.perlinY_max < this.max){
      this.perlinY_max ++;
    }
  } // update

  update_fps()
  {
    //Loop animation
    if(this.anim == true)
    {
      if(this.frame >= this.max_frame){
        this.frame = 0;
      }

      //Split frames between frameRate
      this.framecount = frameCount;

      if(this.framecount >= this.count){
        this.frame ++;
        this.count += this.fps;
      }
    }
  }
} // lander class
