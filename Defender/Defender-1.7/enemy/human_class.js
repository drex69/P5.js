class human extends enemy
{

  constructor()
  {
    super();
    //variables
    this.id = 9;          //type of enemy

    this.min = HEIGHT/7;
    this.max = HEIGHT-human_img.height;

    this.x = random(world_max);
    this.y = this.max;

    this.captured = 0;  //0 = NOT captured
                        //1 = captured by player
                        //2 = captured by enemy

    this.speed = 1;
    this.gravity = 0.01;
    this.dir = -1;

    this.score = 500;

    this.col = col_white;

    this.anim = false;
    this.fire = false;

  }

  draw()
  {
    image(human_img,this.x,this.y);
  }

  update()
  {

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

    // if (this.y < this.min)
    // {
    //   this.y = this.min;
    // }
    //
    // if (this.y > this.max)
    // {
    //   this.y = this.max;
    // }
  }

  movement()
  {
    //IF NOT CAPTURED BY PLAYER
    if(this.captured == 0)
    {
      //movement affected by player
      if (player.dir == 0)
      {
        this.x += player.x_speed;
      }
      if (player.dir == 1)
      {
        this.x -= player.x_speed;
      }

      //gravity pulling human down to ground
      if(this.y < this.max)
      {
        this.y += this.speed + this.gravity;
        this.gravity += 0.01;
      }

      //if dropped from too high, then destroy
      if(this.y >= this.max)
      {
        if(this.gravity > 2.0)
        {
          enemy_explosions.push(new enemy_explosion_class
                        (this.x,this.y,this.id,this.col))

          human_destroyed_sound.play();

          this.id = 100;
        }
        else
        {
          this.gravity = 0.1;
        }
      }

      //check if player has captured human
      if(this.y < this.max)
      {
        obj1_to_obj2_distance(this.x,this.y,player.x,player.y);

        if(length < 30)
        {
          this.captured = 1;
          player.score += this.score;
          human_rescued_sound.play();
          scores.push(new score(player.x,player.y-50));
        }
      }

    } //end of captured = 0

    //IF CAPTURED BY PLAYER
    if(this.captured == 1)
    {
      //movement affected by player
      this.x = player.x;
      this.y = player.y + human_img.height+5;

      //if player drops off human
      if(this.y >= this.max)
      {
        this.y = this.max;
        this.captured = 0;
        player.score += this.score;
        human_on_ground_sound.play();
        scores.push(new score(player.x,player.y-50));
      }
    }//end of captured = 1

    //reset the gravity
    if(this.captured == 2)
    {
      this.gravity = 0.01;
    }

  }//end of movement
}//end of class
