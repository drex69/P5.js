class player_class

{

  constructor()
  {
    this.x = WIDTH/2;
    this.y = HEIGHT/2;

    this.top_max = HEIGHT/8;
    this.temp = HEIGHT/25
    this.bot_max = HEIGHT - this.temp;

    this.left_max = WIDTH/4;
    this.right_max = WIDTH-this.left_max;

    this.x_speed = 0/ws;
    this.y_speed = 7/ws;

    this.max_speed = 20/ws;
    this.min_speed = 0/ws;

    this.inc_speed = 0.25/ws;
    this.dec_speed = 0.10/ws;

    this.turn_speed = 15/ws;
    this.dir = 0;

    this.lives = 3;
    this.bombs = 3;
    this.extra_life = 1000;
    this.extra_bomb = 1000;
    this.score = 0;
    this.hi_score = 0;
    this.level = 0;
    this.level_difficulty = 0;

  }

  draw()
  {

    if (this.dir == 0)
    {
      image(player_left,this.x,this.y);
    }
    else
    {
      image(player_right,this.x,this.y);
    }


    if (keyIsDown (LEFT_ARROW))
    {
      image(thrust_left,this.x+25/ws,this.y);
    }

    if (keyIsDown (RIGHT_ARROW))
    {
      image(thrust_right,this.x-25/ws,this.y);
    }

  }

  update()
  {

    //PLAYER LIVES

    if(player.lives == 0){
      game_state = 3;
      enemy_spawn_sound.stop();
    }

    if(player.lives > 9){
      player.lives = 9;
    }

    //TURNING DIRECTION OF SHIP//////////////////

    if (this.dir == 0 && this.x < this.right_max)
    {
      this.x += this.turn_speed;
      //this.x_speed = 10/ws;

      if(this.x_speed > this.min_speed){

        this.x_speed = this.inc_speed*20;

      }
    }

    if (this.dir == 1 && this.x > this.left_max)
    {
      this.x -= this.turn_speed;

      if(this.x_speed > this.min_speed){

        this.x_speed = this.inc_speed*20;

      }
    }

    //MOVEMENT////////////////////////////////////

    if (keyIsDown (LEFT_ARROW))
    {
      this.dir = 0;

      if(this.x_speed < this.max_speed){
        this.x_speed += this.inc_speed;
      }

      if(!player_thrust_sound.isPlaying()){
        player_thrust_sound.loop();
      }
    }
    else if(keyIsDown (RIGHT_ARROW))
    {
      this.dir = 1;

      if(this.x_speed < this.max_speed){
        this.x_speed += this.inc_speed;
      }
      if(!player_thrust_sound.isPlaying()){
        player_thrust_sound.loop();
      }
    }
    else{
      if(this.x_speed > this.min_speed){
        this.x_speed -= this.dec_speed;
      }
      else{
        this.x_speed = this.min_speed;
      }
    }



    if (keyIsDown (UP_ARROW))
    {
      if (this.y > this.top_max + player_left.height)
      {
        this.y -= this.y_speed;
      }
    }

    if (keyIsDown (DOWN_ARROW))
    {
      if (this.y < this.bot_max - player_left.height)
      {
        this.y += this.y_speed;
      }
    }


    //FIRING//////////////////////////////////////////////

    if (keyIsDown(CONTROL)){
      // if(!player_laser_sound.isPlaying()){
      //   player_laser_sound.play();
      // }
      if (player_bullets.length <= 0){
        player_bullets.push(new player_bullet_class());
      }
    }

    // // CHECK IF PLAYER COLLIDES WITH ENEMYS//////////////////////////////////////

    for (i=enemys.length-1; i >= 0; i--)
    {
      distance(enemys[i].x,enemys[i].y,player.x,player.y);

      if (length <= 30/ws)
      {
        //delete enemy
        enemys.splice(i,1);
        player_explosion_sound.play();
        player.lives --;
        player.x_speed = 0;

        //create player explosion
        this.radius = 0;
        for (this.i=0; this.i < 99; this.i++)
        {
          this.degrees = Math.floor(Math.random()*359);
          player_explosions.push(new player_explosion_class(this.x, this.y, this.radius, this.degrees));

          this.radius ++;
        }

        //delete any captured humans
        // for (i=humans.length-1; i>=0; i--){
        //   if (humans[i].captured == 1){
        //     humans.splice(i,1)
        //   }
        // }
      }
      //check if all enemys, have been killed
      if(enemys.length == 0){//} && spawns.length == -1){
        game_state = 2;
        //player_thrust_sound.stop();
        level_completed_sound.play();
      }
    }

    // // CHECK IF PLAYER COLLIDES WITH ENEMY BULLETS///////////////////////////////

    for (i=enemy_bullets.length-1; i >= 0; i--)
    {
      distance(enemy_bullets[i].tempx,enemy_bullets[i].tempy,player.x,player.y);

      if (length <= 30/ws)
      {
        //delete enemy bullet
        enemy_bullets.splice(i,1);
        player_explosion_sound.play();
        player.lives --;
        player.x_speed = 0;

        //create player explosion
        this.radius = 0;
        for (this.i=0; this.i < 99; this.i++)
        {
          this.degrees = Math.floor(Math.random()*359);
          player_explosions.push(new player_explosion_class(this.x, this.y, this.radius, this.degrees));

          this.radius ++;
        }

        //delete any captured humans
        // for (i=humans.length-1; i>=0; i--){
        //   if (humans[i].captured == 1){
        //     humans.splice(i,1)
        //   }
        // }
      }
    }

    // //CHECK IF PLAYER COLLIDES WITH HUMANS////////////////////////////////////
    //
    //   for (i=humans.length-1;i>=0;i--){
    //
    //     distance(player.x,player.y,humans[i].x,humans[i].y);
    //
    //     if (length <= 35)
    //     {
    //       if(humans[i].captured == 0){
    //         human_rescued_sound.play();
    //       }
    //       humans[i].captured = 1;
    //     }
    //   }
    //
    // for(i=humans.length-1;i>=0;i--){
    //   if(humans[i].captured == 1){
    //     humans[i].x = player.x;
    //     humans[i].y = player.y + human_img.height;
    //   }
    // }



  }  //bracket for move

}  //bracket for class
