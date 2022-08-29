function keyPressed(){

  //KEYS FOR START SCREEN//////////////////////////////////////////////////////

  if (game_state == 0){

    if(keyCode == (RETURN))//'s') //Also works
    {
      //if(keyCode == (CONTROL)){
      game_state = 1;
      background_sound.stop();
      //enemy_spawn_sound.play();
      game_start_sound.play();

    }
  }

  //KEYS FOR GAME SCREEN///////////////////////////////////////////////////////

  //SMART BOMBS

  if (game_state == 1){

    if(keyCode == (SHIFT)){

      if (player_explosions.length < 1){

        if(player.bombs > 0){

          player.bombs --;
          player_bomb_sound.play();

          for (i=enemys.length-1; i >= 0; i--){

            if (enemys[i].x > 0 && enemys[i].x < WIDTH){
              player.score = player.score + enemys[i].score;
              enemy_explosions.push(new enemy_explosion_class(enemys[i].x,enemys[i].y));
              enemys.splice(i,1);
            }
          }

          for (i=enemy_bullets.length-1; i >= 0; i--){

            if (enemy_bullets[i].tempx > 0 && enemy_bullets[i].tempx < WIDTH){
              player.score = player.score + enemy_bullets[i].score;
              enemy_explosions.push(new enemy_explosion_class(enemy_bullets[i].tempx,enemy_bullets[i].tempy));
              enemy_bullets.splice(i,1);
            }
          }
          // for(i=humans.length-1;i>=0;i--){
          //   if(humans[i].captured == 2 && humans[i].x > 0 && humans[i].x < WIDTH){
          //     humans[i].captured = 0;
          //   }
          // }
        }
      }

      if(enemys.length == 0){//} && spawns.length == -1){
        game_state = 2;
        level_completed_sound.play();
      }
    }

}

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

          // for (i=0; i < wanderer[player.level]; i++)
          // {
          //   spawn_id = 0;
          //   spawns[i] = new spawnclass(spawn_id);
          // }

          for(i=0;i<9;i++){
            spawns.push(new spawn_class(0));
          }



          for (i=0; i < humanoids[player.level]; i++)
          {
            humans[i] = new humanclass();
          }
          //enemy_spawn_sound.play();
        }
      //}

    } // END OF STATE = 3

  } // END OF FUNCTION
