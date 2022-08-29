////////////////////////////////////////////////////////////////
/////////////////////////  DRAW  ///////////////////////////////
////////////////////////////////////////////////////////////////

function draw() {

  background(0,0,0);

  // total =stars.length+mountains.length+player_bullets.length+
  //      player_explosions.length+enemy_explosions.length+
  //      spawns.length+enemys.length;
  //
  // text(total,100,200);

  //////////////JOYSTICK ROUTINE/////////////

  if(JOY_CONNECT == false)
  {
  //listen for gamepad connection
  window.addEventListener("gamepadconnected", (event) => {
    console.log("A gamepad connected:");
    console.log(event.gamepad);
    gamepads = navigator.getGamepads();
    console.log(gamepads[0].id);
    JOY_CONNECT = true;
  });
  }

  if(JOY_CONNECT == true)
  {
  //listen for gamepad disconnection
  window.addEventListener("gamepaddisconnected", (event) => {
    console.log("A gamepad disconnected:");
    console.log(event.gamepad);
    JOY_CONNECT = false;
  });
  }
  ////////////////INSERT COIN SCREEN////////////////

  if (game_state == -1){
    insert_coin_screen.draw();
    insert_coin_screen.update();
  }

  ////////////////START SCREEN////////////////

  if (game_state == 0){
    start_screen.draw();
    start_screen.update();
  }

  ////////////LEVEL COMPLETED SCREEN///////////

  if (game_state == 2){
    level_screen.draw();
  }

  ////////////////END SCREEN////////////////

  if (game_state == 3){
    end_screen.draw();
  }

  //DRAW STARS///////////////////////////////////////////////////////////////
  //if(game_state != -1)
  //{
    for(i=stars.length-1;i>=0;i--){
      stars[i].boundaries();
      stars[i].movement();
      stars[i].update();
      stars[i].draw();
    }
  //}

  //RADAR//////////////////////////////////////////////////////////////
  //if(game_state != -1)
  //{
    radar.draw();
    radar.update();
  //}
  //MOUNTAINS/////////////////////////////////////////////////////////////////

  if(game_state == 0 || game_state == 2 || game_state == 3 || game_state == -1){
    for (i=mountains.length-1; i >= 0; i--){
      mountains[i].draw();
      mountains[i].update();
      player.dir = 1;
      player.x_speed = 3/ws;
    }
  }

  if(game_state == 1 && mountains_enable == true){

    for (i=mountains.length-1; i >= 0; i--){

      if(player_explosions.length < 1){
        mountains[i].draw();
        mountains[i].update();
      }
      else {
        mountains[i].draw();
      }
    }
  }

  //Scrolling Left

  first = 0;

  last = mountains.length-1;

  if(mountains[first].dir == 0){

    if(mountains[first].go_off_screen()){

      x3 = Math.abs(mountains[first].x3); //convert negative numbers to positive
      x1 = Math.abs(mountains[first].x1); //convert negative numbers to positive
      base = x1 - x3;

      mountains[first].x1 = mountains[last].x3;
      mountains[first].x2 = mountains[first].x1 + base/2;
      mountains[first].x3 = mountains[first].x1 + base;

      //splice first index of array, and place at end of array, with push
      //mountains.push(mountains.splice(first, 1)[0]);

      //shift off the start of the array, and push onto the end
      mountains.push(mountains.shift());
    }
  }

  //Scrolling Right

  last = mountains.length-1;

  if(mountains[last].dir == 1){

    if(mountains[last].go_off_screen()){

      x3 = mountains[last].x3;
      x1 = mountains[last].x1;
      base = x3 - x1;

      mountains[last].x3 = mountains[0].x1;
      mountains[last].x2 = mountains[last].x3 - base/2;
      mountains[last].x1 = mountains[last].x3 - base;

      //splice last index of array, and place at start of array, with unshift
      //mountains.unshift(mountains.splice(last, 1)[0]);

      //pop off the end of the array, and unshift onto the start
      mountains.unshift(mountains.pop());
    }
  }

  ///////////////////500/////////////////////

  if(game_state == 1)
  {
    for (i=scores.length-1; i >= 0; i--)
    {
      scores[i].draw();
      scores[i].update_fps();
    }

    for (i=scores.length-1; i >= 0; i--)
    {
      if(frameCount > scores[i].timeout)
      {
        scores.splice(i,1);
      }
    }

  }

  ///////////////////SPAWNS//////////////////

  if (game_state == 1){

    if(!game_start_sound.isPlaying()){

      if(spawn_sound_flag == 0){
        enemy_spawn_sound.play();
        spawn_sound_flag = 1;
      }

      for (i=spawns.length-1; i >= 0; i--)
      {
        spawns[i].draw();
        spawns[i].update();

        if (spawns[i].finished())
        {
          if(spawns[i].id == 0)
          {
            enemys.push(new lander(spawns[i].x,spawns[i].y));
          }

          if(spawns[i].id == 1)
          {
            enemys.push(new mutant(spawns[i].x,spawns[i].y));
          }

          if(spawns[i].id == 2)
          {
            enemys.push(new bomber(spawns[i].x,spawns[i].y));
          }

          if(spawns[i].id == 3)
          {
            enemys.push(new pod(spawns[i].x,spawns[i].y));
          }

          if(spawns[i].id == 12)
          {
            enemys.push(new baiter(spawns[i].x,spawns[i].y));
          }

          // if(spawns[i].id == 9)
          // {
          //   enemys.push(new human(spawns[i].x,spawns[i].y));
          // }

          spawns.splice(i,1);
        }
      }
    }
  }

  ////////////////ENEMYS//////////////////////////////////////////////////

  if(game_state == 1){

    for (i=enemys.length-1; i >= 0; i--)
    {
      if(player_explosions.length < 1){
        enemys[i].boundaries();
        enemys[i].movement();
        enemys[i].shoot();
        enemys[i].update();
      }
      enemys[i].draw();
      enemys[i].update_fps();
    }
  }

  //moving bullets
  for (i=enemys.length-1; i >= 0; i--)
  {
    if(enemys[i].id == 10)
    {
      if(enemys[i].goesoffscreen())
      {
        enemys.splice(i,1);
      }
    }
  }

  //static bullets
  for (i=enemys.length-1; i >= 0; i--)
  {
    if(enemys[i].id == 11)
    {
      if(enemys[i].bullet_timeout())
      {
        enemys.splice(i,1);
      }
    }
  }

  //lANDER TO STEALER ROUTINE////////////////////////////////////////////////

  if(game_state == 1)
  {
    //Are there any humans to steal ?
    temp = false;
    for (i=enemys.length-1; i >= 0; i--)
    {
      if(enemys[i].id == 9)
      {
        if(enemys[i].captured == 0)
        {
          temp = true;
        }
      }
    }

    //yes
    //is there already a stealer ?
    if(temp == true);
    {
      //temp = false;
      for (i=enemys.length-1; i >= 0; i--)
      {
        if(enemys[i].id == 5)
        {
          temp = false;
        }
      }

      if(temp == true)
      {
        //no, are there any landers to transform into a stealer ?
        for (i=enemys.length-1; i >= 0; i--)
        {
          if(enemys[i].id == 0)
          {
            //check all humans to see if lander is within range for pickup
            for (j=enemys.length-1; j >=0; j--)
            {
              shortest_distance = 1000;
              if(enemys[j].id == 9)
              {
                obj1_to_obj2_distance(enemys[i].x,enemys[i].y,enemys[j].x,enemys[j].y)
                if(length < shortest_distance)
                {
                shortest_distance = length;
                }
              }
              if(shortest_distance <= 200)
              {
                //probability of picking human up
                temp = round(random(0,500));
                if(temp == 450)
                {
                  //create a stealer
                  enemys.push(new stealer(enemys[i].x,enemys[i].y));  //new
                  //delete the lander
                  enemys.splice(i,1);
                  //break out of Loop
                  i=enemys.length-1;
                }
              }
            }
          } //NO landers
        } //NO landers to turn into a stealer
      } //Stealer already exists
    } //IF CONDITION = TRUE
  } // game_state <> 1

  ///////////////ENEMY EXPLOSIONS//////////////////

  for (i=enemy_explosions.length-1; i >= 0; i--)
  {
    enemy_explosions[i].draw();
    enemy_explosions[i].update();
  }

  for (i=enemy_explosions.length-1; i >= 0; i--)
  {
    if(enemy_explosions[i].finished()){
      enemy_explosions.splice(i,1);
    }
  }

  //////////////PLAYER EXPLOSIONS/////////////////

  for (i=player_explosions.length-1; i >= 0; i--)
  {
    player_explosions[i].draw();
    player_explosions[i].update();
  }

  for (i=player_explosions.length-1; i >= 0; i--)
  {
    if(player_explosions[i].finished()){
      player_explosions.splice(i,1);

    }
  }

  //PLAYER///////////////////////////////////////////////////////////////////

  if(game_state == 1)
  {
    //If player hasn't been killed
    if(player_explosions.length < 1)
    {
      player.draw();
      player.update();
    }
  }

  //update player bullets
  if(game_state == 1)
  {
    for(i=player_bullets.length-1;i >= 0; i--)
    {
      player_bullets[i].draw();
      player_bullets[i].update();
    }

    //check if bullets, need deleting
    for(i=player_bullets.length-1;i >= 0; i--)
    {
      if(player_bullets[i].id == 100)
      {
        player_bullets.splice(i,1);
      }
    }
  }

  //if enemys are dead, then remove
  if(game_state == 1)
  {
  for(i=enemys.length-1;i >= 0; i--)
  {
    if(enemys[i].id == 100)
    {
      enemys.splice(i,1);
    }
  }
}

  //check if humans, have been destroyed or captured
  No_Humans();

  //check for level completion
  Is_Level_Complete();

  //when to spawn extra landers
  if(game_state == 1)
  {
    if(frameCount == extra_landers)
    {
      for(i=0; i<5; i++)
      {
      spawns.push(new spawn(0));
      }
      extra_landers += extra_landers_interval;
      enemy_spawn_sound.play();
    }
  }

  //when to spawn baiters
  if(game_state == 1)
  {
    if(frameCount == baiter_attack)
    {
      baiter_attack += baiter_attack_interval;
      spawns.push(new spawn(12));
      enemy_spawn_sound.play();
    }
  }

} //END OF DRAW


function mousePressed() {

  if (WIDTH == 1536){
    fs = fullscreen();
    fullscreen(!fs);
  }
}
