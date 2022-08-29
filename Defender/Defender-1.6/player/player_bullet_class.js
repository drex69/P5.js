class player_bullet_class
{

  constructor()
  {

    this.dir = player.dir;

    if(this.dir == 1)
    {
      this.xpos = player.x + 20;
    }
    else
    {
      this.xpos = player.x - 40;
    }

    //this.xpos = player.x;
    this.ypos = player.y + 4/ws;
    this.width = 50;
    this.height = 0.5/ws;

    this.left_max = WIDTH/10;
    this.right_max = WIDTH-this.left_max;


    this.start = this.xpos;

    this.id = 0;


    this.r_on_off = Math.floor(random(0,2));
    this.g_on_off = Math.floor(random(0,2));
    this.b_on_off = Math.floor(random(0,2));

    this.r = this.r_on_off*255;
    this.g = this.g_on_off*255;
    this.b = this.b_on_off*255;

    this.alpha = 255;
    this.colour_change = 60;

    this.x = [];
    this.y = [];
    this.w = [];
    this.h = [];

    for(this.i = 0; this.i<15; this.i++)
    {
      this.x.push(this.xpos);
      this.y.push(this.ypos);
      this.w.push(this.width);
      this.h.push(this.height);

      this.width = this.width/1.5;

      if(this.dir == 1)
      {
        this.xpos = this.xpos - this.width-25;
      }
      else
      {
        this.xpos = this.xpos + this.width+25;
      }
    }


  } //END OF CONSTRUCTOR

  draw()
  {

    stroke(this.r,this.g,this.b,this.alpha);
    fill(this.r,this.g,this.b,this.alpha);

    //draw all segments of laser
    for(this.i=0; this.i<15; this.i++)
    {
      //draw laser right
      if(this.dir ==1)
      {
        if(this.x[this.i] > this.start)
        {
          rect(this.x[this.i],this.y[this.i],this.w[this.i],this.h[this.i]);
        }
      }

      //draw laser left
      if(this.dir == 0)
      {
        if(this.x[this.i] < this.start)
        {
          rect(this.x[this.i],this.y[this.i],this.w[this.i],this.h[this.i]);
        }
      }
    }

  } //END OF DISPLAY

  update()
  {

    //select random colour for laser
    if(this.colour_change == 0)
    {
      this.r_on_off = Math.floor(random(0,2));
      this.g_on_off = Math.floor(random(0,2));
      this.b_on_off = Math.floor(random(0,2));

      this.r = this.r_on_off*255;
      this.g = this.g_on_off*255;
      this.b = this.b_on_off*255;

      this.colour_change = 60;
    }
    else
    {
      this.colour_change -=30;
    }

    //Increment laser segments by 1, and check for collisions
    for (this.loop1=0; this.loop1<25; this.loop1++)
    {
      //this.y = player.y + 4/ws;

      //decrement in the left direction
      if (this.dir == 0)
      {
        for(this.i=0; this.i<15; this.i++)
        {
          this.x[this.i] = this.x[this.i] -= 1;
        }
      }

      //increment in the right direction
      if (this.dir == 1)
      {
        for(this.i=0; this.i<15; this.i++)
        {
          this.x[this.i] = this.x[this.i] += 1;
        }
      }

      //if reached left hand side of screen, delete !
      if (this.dir == 0 && this.x[0] <= this.left_max)
      {
        this.id = 100;
      }

      //if reached right hand side of screen, delete !
      if (this.dir == 1 && this.x[0] >= this.right_max)
      {
        this.id = 100;
      }

      //////////HAS PLAYER BULLETS COLLIDED WITH ENEMYS ?

      for (this.j=enemys.length-1; this.j >= 0; this.j--)
      {
        if (this.x[0] >= enemys[this.j].x-50 &&
          this.x[0] <= enemys[this.j].x+50)
          {
            if (this.y[0] >= enemys[this.j].y-20 &&
              this.y[0] <= enemys[this.j].y+20)
              {

                if(enemys[this.j].id != 11)
                {
                  //NO explosion, for static bullets
                  enemy_explosions.push(new enemy_explosion_class
                  (enemys[this.j].x,enemys[this.j].y,enemys[this.j].id,enemys[this.j].col))
                }

                  //NO score for destroying humans
                  if(enemys[this.j].id != 9)
                  {
                    player.score = player.score + enemys[this.j].score;
                  }

                  //if killed  a stealer, then release human, if captured
                  if(enemys[this.j].id == 5)
                  {
                    if(enemys[this.j].captured == 2)
                    {
                      for(this.i=enemys.length-1; this.i>=0; this.i--)
                      {
                        if(enemys[this.i].id == 9 && enemys[this.i].captured == 2)
                        {
                          enemys[this.i].captured = 0;
                          human_falling_sound.play();
                        }
                      }
                    }
                  }

                  //if killed a human, which is captured by a stealer
                  if(enemys[this.j].id == 9 && enemys[this.j].captured == 2)
                  {
                    for(this.i=enemys.length-1; this.i>=0; this.i--)
                    {
                      if(enemys[this.i].id == 5 && enemys[this.i].captured == 2)
                      {
                        enemys[this.i].id = 100;
                        enemys.push(new lander(enemys[this.i].x,enemys[this.i].y))
                      }
                    }
                  }


                  //if enemy is a pod
                  if(enemys[this.j].id == 3)
                  {
                    for(this.i=0; this.i<3; this.i++)
                    {
                      enemys.push(new swarmer(enemys[this.j].x,enemys[this.j].y));
                    }
                    pod_explode_sound.play();
                  }

                  //splice all enemys, apart from static bullets
                  if(enemys[this.j].id != 11)
                  {

                    if(enemys[this.j].id == 9)
                    {
                      human_destroyed_sound.play();
                    }
                      else if(enemys[this.j].id == 2)
                      {
                        bomber_destroyed_sound.play();
                      }
                      else
                      {
                        enemy_explosion_sound.play();
                      }

                    enemys.splice(this.j,1);
                    this.id = 100;
                  }

                  //}

                }
              }
            }

          }  //end of loop
        } //end of update
      }  //end of class
