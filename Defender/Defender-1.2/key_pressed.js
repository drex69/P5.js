function keyPressed(){

  //KEYS FOR START SCREEN//////////////////////////////////////////////////////

  if (game_state == 0){

    if(keyCode == (RETURN))//'s') //Also works
    {
      game_state = 1;
      baiter_attack = frameCount + baiter_attack_initial;
      extra_landers = frameCount + extra_landers_initial;
      game_start_sound.play();


    }
  }

  //KEYS FOR GAME SCREEN///////////////////////////////////////////////////////

  //SMART BOMBS

  if (game_state == 1){

    if(keyCode == (SHIFT))
    {

      if (player_explosions.length < 1){

        if(player.bombs > 0){

          player.bombs --;
          player_bomb_sound.play();

          for (i=enemys.length-1; i >= 0; i--)
          {
            if (enemys[i].x > 0 && enemys[i].x < WIDTH)
            {
              enemys[i].captured = 0;
              if(enemys[i].id != 9)
              {
                player.score = player.score + enemys[i].score;
                enemy_explosions.push(new enemy_explosion_class(enemys[i].x,
                  enemys[i].y,
                  enemys[i].id,
                  enemys[i].col));
                  enemys.splice(i,1);
                }
              }
            }
          }
        }
      }

      //Hyperspace routine
      //if(key == 'h')
      if(keyCode == (32))
      {
        teleport_sound.play();
        new_x = round(random(world_min,world_max));

        for(i=enemys.length-1;i>=0;i--)
        {
            enemys[i].x -= new_x;
            if(enemys[i].x < world_min)
            {
              enemys[i].x += world_total;
            }
            if(enemys[i].x > world_max)
            {
              enemys[i].x -= world_total;
            }
          }
        }

    } //end of game state

  //KEYS FOR END SCREEN////////////////////////////////////////////////////////

  if (game_state == 3){

      if (player.score > player.hi_score){

        if(keyCode == (UP_ARROW)){
          if (initials[digit] > 89){
            initials[digit] = 90;
          }
          else{
            initials[digit]++;
          }
        }

        if(keyCode == (DOWN_ARROW)){
          if (initials[digit] < 66){
            initials[digit] = 65;
          }
          else{
            initials[digit]--;
          }
        }

        if(keyCode == (RIGHT_ARROW)){
          if(digit > 1){
            digit = 2;
          }
          else{
            digit++;
          }
        }

        if(keyCode == (LEFT_ARROW)){
          if (digit < 1){
            digit = 0;
          }
          else{
            digit--;
          }
        }
      }


      if (keyCode == (RETURN))//'s'){
        {

          if(player.score > player.hi_score){
            player.hi_score = player.score;
          }

          game_state = 0;
          player.dir = 1;
          player.lives = 3;
          player.score = 0;
          player.bombs = 3;
          player.level = 0;
          player.level_difficulty = 0;
          player.x = WIDTH/2;
          player.y = HEIGHT/2;
          spawn_sound_flag = 0;
          mountains_enable = true;
          mutant_attack = false;

          //Reset everything
          player_bullets = [];
          player_explosions = [];
          enemy_explosions = [];

          spawns = [];
          enemys = [];

          //Initialise spawns

          for (i=0; i < landers[player.level]; i++)
          {
            spawns.push(new spawn(0));  //id of lander
          }

          for (i=0; i < bombers[player.level]; i++)
          {
            spawns.push(new spawn(2));  //id of bomber
          }

          for (i=0; i < pods[player.level]; i++)
          {
            spawns.push(new spawn(3));  //id of pod
          }

          for (i=0; i < humanoids[player.level]; i++)
          {
            enemys.push(new human(9));  //id of human
          }
        }


    } // END OF STATE = 3

  } // END OF FUNCTION
