class player_bullet_class
{

  constructor()
  {

    this.y = player.y + 4/ws;
    this.dir = player.dir;
    this.laser_len = 2/ws;
    this.pointx = 0;

    this.r_on_off = 1;
    this.g_on_off = 0;
    this.b_on_off = 1;
    this.colour_change = 0;


    this.left_max = WIDTH/10;
    this.right_max = WIDTH-this.left_max;

    if (this.dir == 0){
      this.x = player.x - player_left.width*0.6;
      this.pointx = player.x;
    }
    else{
      this.x = player.x + player_right.width*0.6;
      this.pointx = player.x;
    }
  } //END OF CONSTURCTOR

  draw()
  {

    this.r = this.r_on_off*255;
    this.g = this.g_on_off*255;
    this.b = this.b_on_off*255;

    strokeWeight(1);
    stroke(this.r,this.g,this.b);

    if (this.dir == 0){
      line(this.pointx,this.y,this.x,this.y);
      this.x = player.x - player_left.width*0.6;
    }
    else {
      line(this.pointx,this.y,this.x,this.y);
      this.x = player.x + player_right.width*0.6;

    }
  } //END OF DISPLAY

  update()
  {

    if(this.colour_change > 0)
    {
      this.colour_change --;
    }
    else
    {
      this.r_on_off = 0;
      this.g_on_off = 0;
      this.b_on_off = 0;

      while(this.r_on_off + this.g_on_off + this.b_on_off == 0 ||
        this.r_on_off + this.g_on_off + this.b_on_off == 3)
        {
          this.r_on_off = Math.floor(random(0,2));
          this.g_on_off = Math.floor(random(0,2));
          this.b_on_off = Math.floor(random(0,2));
        }
        this.colour_change = 60;
      }


      for (this.loop1=0; this.loop1<49; this.loop1++) //Increment length of laser, and check for collisions
      {
        this.y = player.y + 4/ws;

        if (this.dir == 0){
          this.pointx -= this.laser_len;
        }
        if (this.dir == 1){
          this.pointx += this.laser_len;
        }

        if (this.dir == 0 && this.pointx <= this.left_max){
          player_bullets.splice(self);
        }

        if (this.dir == 1 && this.pointx >= this.right_max){
          player_bullets.splice(self);
        }

        ////////HAS PLAYER BULLETS COLLIDED WITH ENEMYS ?

        for (self.j=enemys.length-1; self.j >= 0; self.j--)
        {
          if (this.pointx >= enemys[self.j].x-50 &&
            this.pointx <= enemys[self.j].x+50)
            {
              if (this.y >= enemys[self.j].y-20 &&
                this.y <= enemys[self.j].y+20)
                {

                  if(enemys[self.j].id != 11)
                  {
                    //NO explosion, for static bullets
                    enemy_explosions.push(new enemy_explosion_class
                    (enemys[self.j].x,enemys[self.j].y,enemys[self.j].id,enemys[self.j].col))
                  }

                  //NO score for destroying humans
                  if(enemys[self.j].id != 9)
                  {
                    player.score = player.score + enemys[j].score;
                  }

                  //if killed  a stealer, then release human, if captured
                  if(enemys[self.j].id == 4)
                  {
                    if(enemys[self.j].captured == 2)
                    {
                      for(this.i=enemys.length-1; this.i>=0; this.i--)
                      {
                        if(enemys[this.i].id == 9 && enemys[this.i].captured == 2)
                        {
                          enemys[this.i].captured = 0;
                        }
                      }
                    }
                  }

                  //if killed a human, which is captured by a stealer
                  if(enemys[self.j].id == 9 && enemys[self.j].captured == 2)
                  {
                    for(this.i=enemys.length-1; this.i>=0; this.i--)
                    {
                      if(enemys[this.i].id == 4 && enemys[this.i].captured == 2)
                      {
                          enemys[this.i].id = 100;
                          enemys.push(new lander(enemys[this.i].x,enemys[this.i].y))
                      }
                    }
                  }



                    //if enemy is a pod
                    if(enemys[self.j].id == 3)
                    {
                      for(this.i=0; this.i<3; this.i++)
                      {
                        enemys.push(new swarmer(enemys[self.j].x,enemys[self.j].y));
                      }
                      pod_explode_sound.play();
                    }

                    //splice all enemys, apart from static bullets
                    if(enemys[self.j].id != 11)
                    {
                      //enemys[self.j].id = 100;
                      enemys.splice(self.j,1);
                      player_bullets.splice(self);
                      enemy_explosion_sound.play();

                    }
                  }
                }
              }

            }  //end of loop
          } //end of update
        }  //end of class
