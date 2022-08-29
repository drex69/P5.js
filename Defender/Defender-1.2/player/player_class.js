class player_class

{

  constructor()
  {
    this.x = WIDTH/2;
    this.y = HEIGHT/2;

    this.top_max = HEIGHT/8;
    this.temp = HEIGHT/50
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
    this.extra_life = 10000;
    this.extra_bomb = 10000;
    this.score = 0;
    this.hi_score = 0;
    this.level = 0;
    this.level_difficulty = 0;

    this.laser_delay = 60;
    this.laser_delay_count = this.laser_delay;

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

      if(this.laser_delay <= 0)
      {
        this.laser_delay = 15;
        player_bullets.push(new player_bullet_class());

        // if(!player_laser_sound.isPlaying()){
        //   player_laser_sound.play();
        // }
      }
    }
    //}
    this.laser_delay --;

    // // CHECK IF PLAYER COLLIDES WITH ENEMYS//////////////////////////////////////

    for (i=enemys.length-1; i >= 0; i--)
    {
      obj1_to_obj2_distance(enemys[i].x,enemys[i].y,player.x,player.y);

      if (length <= 30/ws)
      {
        //if player has captured humans, then release them.
        for(j=enemys.length-1; j>=0; j--)
        {
          if(enemys[j].id == 9 && enemys[j].captured == 1)
          {
            enemys[j].captured = 0;
          }
        }

        //if stealer has captured human, then release it.
        if(enemys[i].id == 5 && enemys[i].captured == 2)
        {
          for(j=enemys.length-1; j>=0; j--)
          {
            if(enemys[j].id == 9 && enemys[j].captured == 2)
            {
              enemys[j].captured = 0;
            }
          }
        }

        //do below for all enemys, accept humans
        if(enemys[i].id != 9)
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
        }
      }
    }

    //extra life
    if(this.score >= this.extra_life)
    {
      this.lives ++;
      this.extra_life += 1000;
    }

    //extra bomb
    if(this.score >= this.extra_bomb)
    {
      this.bombs ++;
      this.extra_bomb += 1000;
    }

  }  //bracket for update
}  //bracket for class
