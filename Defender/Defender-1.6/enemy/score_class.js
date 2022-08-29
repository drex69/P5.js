class score
{
  constructor(x,y)
  {

    this.x = x;
    this.y = y;

    this.timeout = frameCount + 150;
    this.anim = true;

    //ANIMATION VARIABLES

    //current frame
    this.frame = 0;
    //max frame
    this.max_frame = 2
    //60 fps divide by 6
    this.fps = fps/10;
    //store current frameCount
    this.framecount = frameCount;
    //to check against enemy framecount
    this.count = this.framecount + this.fps;

  }

  draw()
  {
    image(score_anim[this.frame],this.x,this.y)
  }


    update_fps()
    {
      //Loop animation
      if(this.anim == true)
      {
        // if(this.frame >= this.max_frame){
        //   this.frame = 0;
        // }

        //Split frames between frameRate
        this.framecount = frameCount;

        if(this.framecount >= this.count)
        {
          this.frame ++;
          this.count += this.fps;
        }

        if(this.frame > this.max_frame)
        {
          this.frame = 0;
        }
      }
      this.y = player.y - 50;
      this.x = player.x;
    }

} // score class
