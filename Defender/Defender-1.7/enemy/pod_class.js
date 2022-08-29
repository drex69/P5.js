class pod extends enemy
{

  constructor(x,y)
  {
    super();

    this.id = 3;
    this.x = x;
    this.y = y;

    this.speed = 5.0/ws;
    this.dir = Math.floor(Math.random()*2);
    this.score = 1000;

    this.anim = true;

    this.fire = false;

    //perlin noise variables
    this.temp = random(0,5);
    this.perlinY_max = this.y;
    this.perlinY_min = this.y;

    //ANIMATION VARIABLES

    //current frame
    this.frame = 0;
    //max frame
    this.max_frame = 2;
    //60 fps divide by 6
    this.fps = fps/1;
    //store current frameCount
    this.framecount = frameCount;
    //to check against enemy framecount
    this.count = this.framecount + this.fps;

  }

  draw()
  {
    image(pod_anim[this.frame],this.x,this.y)
  }

}
