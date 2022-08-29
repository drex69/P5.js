class end_screen_class
{

  constructor()
  {

    this.text1 = "GAME OVER";
    this.text2 = "P R E S S  ' S '  T O  S T A R T";
    this.text3 = 'E N T E R  Y O U R  I N I T I A L S'
    this.temp;

    this.fill_colour = color(0,0,0);
    this.pen_colour = color(50,150,250);

    this.left_pressed = false;
    this.right_pressed = false;
    this.up_pressed = false;
    this.down_pressed = false;

  }

  draw()
  {

    if(JOY_CONNECT == true)
    {
      this.gp = navigator.getGamepads()[0];

      if(this.gp.buttons[0].pressed == true)
      {
        if(green_button_pressed == false)
        {
          end_screen.reset_game();
          green_button_pressed = true;
        }
      }
      else
      {
          green_button_pressed = false;
      }

      //digit up
      if (this.gp.axes[1] < -0.2)
      {
        if(this.up_pressed == false)
        {
        end_screen.digit_up();
        this.up_pressed = true;
        }
      }
      else
      {
        this.up_pressed = false;
      }

      //digit down
      if (this.gp.axes[1] > 0)
      {
        if(this.down_pressed == false)
        {
        end_screen.digit_down();
        this.down_pressed = true;
        }
      }
      else
      {
        this.down_pressed = false;
      }

      //digit left
      if (this.gp.axes[0] < 0)
      {
        if(this.left_pressed == false)
        {
        end_screen.digit_left();
        this.left_pressed = true;
        }
      }
      else
      {
        this.left_pressed = false;
      }

      //digit right
      if(this.gp.axes[0] > 0.2)
      {
        if(this.right_pressed == false)
        {
        end_screen.digit_right();
        this.right_pressed = true;
        }
      }
      else
      {
        this.right_pressed = false;
      }


    }

    player_thrust_sound.stop();

    textFont(myfont);

    //stroke(this.pen_colour);
    //fill(this.fill_colour);


    stroke(col_yellow);
    fill(col_dark_grey);

    textSize(125/ws);
    center_text(this.text1);
    text(this.text1,text_x,350/ws);


    if(player.score > hiscores[8] && player.score != hiscores[6] &&
       player.score != hiscores[4] && player.score != hiscores[2] &&
       player.score != hiscores[0])
    {
      strokeWeight(3);

      //stroke(col_black);
      //fill(col_light_blue);
      stroke(col_yellow);
      fill(col_light_blue);

      textSize(50/ws);
      center_text(this.text3);
      text(this.text3,text_x,435/ws);

      this.temp1 = String.fromCharCode(initials[0]);
      this.temp2 = String.fromCharCode(initials[1]);
      this.temp3 = String.fromCharCode(initials[2]);
      this.temp4 = String.fromCharCode(32);

      this.text = this.temp1 + this.temp4 + this.temp2 + this.temp4 + this.temp3;

      //stroke(col_black);
      //fill(col_light_blue);
      stroke(col_yellow);
      fill(col_light_blue);
      center_text(this.text);
      text (this.text,text_x,510/ws);

    }

  } // END OF DRAW

  digit_up()
  {
    if (initials[digit] > 89){
      initials[digit] = 90;
    }
    else{
      initials[digit]++;
    }
  }

  digit_down()
  {
    if (initials[digit] < 66){
      initials[digit] = 65;
    }
    else{
      initials[digit]--;
    }
  }

  digit_right()
  {
    if(digit > 1){
      digit = 2;
    }
    else{
      digit++;
    }
  }

  digit_left()
  {
    if (digit < 1){
      digit = 0;
    }
    else{
      digit--;
    }
  }

  reset_game()
  {
    //if player score is greater than the lowest score
    //on the hi_score table.
    if(player.score > hiscores[8] && player.score != hiscores[6] &&
       player.score != hiscores[4] && player.score != hiscores[2] &&
       player.score != hiscores[0])
    {
      this.temp1 = String.fromCharCode(initials[0]);
      this.temp2 = String.fromCharCode(initials[1]);
      this.temp3 = String.fromCharCode(initials[2]);
      //temp4 = String.fromCharCode(32);
      this.temp_text = this.temp1 + this.temp2 + this.temp3;

      hiscores[10] = player.score;
      hiscores[11] = this.temp_text;

      //do the sort routine & save to local storage
      hiscore_sort_completed = false;
      while(hiscore_sort_completed == false)
      {
        hiscore_sort();
      }
    }

    game_state = 0;

    //global variables to reset
    spawn_sound_flag = 0;
    mountains_enable = true;
    mutant_attack = false;

    //Reset all arrays
    player_bullets = [];
    player_explosions = [];
    enemy_explosions = [];
    spawns = [];
    enemys = [];

    start_screen = new start_screen_class();
    player = new player_class();

    menu_screen_sound.play();

  }

} //END OF CLASS
