function keyPressed(){

  //KEYS FOR INSERT COIN SCREEN//////////////////////////////////////////////////////

  if (game_state == -1)
  {
    //if(keyCode == (RETURN))//'s') //Also works
    if(key == 's')
    {
      //start_screen.stop = frameCount + 250;
      start_screen = new start_screen_class();
      game_state = 0;
      menu_screen_sound.play();
    }
  } //end of game_state -1

  //KEYS FOR START SCREEN//////////////////////////////////////////////////////

  if (game_state == 0)
  {
    if(keyCode == (RETURN))//'s') //Also works
    {
      start_screen.start_game();

      if(menu_screen_sound.isPlaying())
      {
        menu_screen_sound.stop();
      }
    }
  } //end of game_state 0

  //KEYS FOR GAME SCREEN///////////////////////////////////////////////////////

  if (game_state == 1)
  {
    if(keyCode == (SHIFT))
    {
      player.bomb();
    }

    //if(key == 'h')
    if(keyCode == (32))
    {
      player.hyperspace();
    }

    // if (keyCode == (CONTROL))
    // {
    //   player.shoot_laser()
    //   if(game_start_sound.isPlaying())
    //   {
    //     game_start_sound.stop();
    //   }
    // }

  } //end of game_state 1

  //KEYS FOR END SCREEN////////////////////////////////////////////////////////

  if (game_state == 3)
  {

      if (player.score > hiscores[8])
      {

        if(keyCode == (UP_ARROW))
        {
          end_screen.digit_up();
        }

        if(keyCode == (DOWN_ARROW))
        {
          end_screen.digit_down();
        }

        if(keyCode == (RIGHT_ARROW))
        {
          end_screen.digit_right();
        }

        if(keyCode == (LEFT_ARROW))
        {
          end_screen.digit_left();
        }
      }


      if (keyCode == (RETURN))//'s'){
      {
        end_screen.reset_game();
      }



    } // end of game_state 3

  } // END OF KEY PRESSED
