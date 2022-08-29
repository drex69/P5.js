class player_bullet_class
{

  constructor()
  {

    this.y = player.y + 4/ws;
    this.dir = player.dir;
    this.laser_len = 2/ws;
    this.pointx = 0;

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

    this.r = random(1,255);
    this.g = random(1,255);
    this.b = random(1,255);

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

    for (my_loop=0; my_loop<49; my_loop++) //Increment length of laser, and check for collisions
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

      for (self.j=enemys.length-1; self.j >= 0; self.j--){

        if (this.pointx >= enemys[self.j].x-50 &&
          this.pointx <= enemys[self.j].x+50){

            if (this.y >= enemys[self.j].y-20 &&
              this.y <= enemys[self.j].y+20){

                enemy_explosions.push(new enemy_explosion_class(enemys[j].x,enemys[j].y));
                player.score = player.score + enemys[j].score;


              //   if(enemys[j].captured == 2){
              //     for(i=humans.length-1;i>=0;i--){
              //       humans[i].captured = 0;
              //     }
              // }

                enemys.splice(self.j,1);
                player_bullets.splice(self);
                enemy_explosion_sound.play();

                if(enemys.length == 0){//} && spawns.length == -1){
                  game_state = 2;
                  level_completed_sound.play();
                }

              }
            }
          }

          ////////HAS PLAYER BULLETS COLLIDED WITH ENEMY BULLETS ?

          for (self.j=enemy_bullets.length-1; self.j >= 0; self.j--){

            if (this.pointx >= enemy_bullets[self.j].tempx-50 &&
              this.pointx <= enemy_bullets[self.j].tempx+50){

                if (this.y >= enemy_bullets[self.j].tempy-15 &&
                  this.y <= enemy_bullets[self.j].tempy+15){

                    enemy_explosions.push(new enemy_explosion_class(enemy_bullets[j].tempx,enemy_bullets[j].tempy));
                    player.score = player.score + enemy_bullets[j].score;
                    enemy_bullets.splice(self.j,1);
                    player_bullets.splice(self);
                    enemy_explosion_sound.play();

                    if(enemys.length == 0){//} && spawns.length == -1){
                      game_state = 2;
                      level_completed_sound.play();
                    }

                  }
                }
              }


             }  //end of my_loop


          } //END OF MOVE

        }  //END OF CLASS
