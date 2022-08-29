class start_screen_class
{

  constructor()
  {
    this.text1 = "DEFENDER";
    //this.text2 = "CODING BY DREX"
    this.text3 = "LANDER    MUTANT    BAITER";
    this.text4 = "  150       150       200";
    this.text5 = "BOMBER      POD     SWARMER";
    this.text6 = "  250      1000       150";

    this.text7 = "HI SCORES"

    this.black = color(0,0,0);
    this.blue = color(50,150,250);
    this.order = -1;
    this.counter = 0;
    this.move = false;

    this.stop = frameCount + 250;
    this.speed = 5/ws;

    textFont(myfont);
    textSize(150/ws);
    center_text(this.text1);

    this.text_x = text_x;
    this.start_x = text_x;

    ///INITIALISE ENEMYS FOR START SCREEN///

    enemys.push(new lander(-975/ws,250/ws));
    enemys.push(new mutant(-775/ws,250/ws));
    enemys.push(new baiter(-575/ws,250/ws));

    enemys.push(new bomber(-975/ws,450/ws));
    enemys.push(new pod(-775/ws,450/ws));
    enemys.push(new swarmer(-575/ws,450/ws));
    enemys[5].y = 450/ws;

  }

  draw()
  {
    // if(!background_sound.isPlaying()){
    //   background_sound.loop();
    // }

    //MIDDLE SCREEN
    textFont(myfont);
    strokeWeight(5);
    stroke(col_yellow);
    fill(col_dark_grey);


    textSize(150/ws);
    text(this.text1,this.text_x,450/ws);


    //LEFT SCREEN
    textSize(20/ws);
    strokeWeight(1);
    textFont(C64_PRO);
    stroke(col_black);

    fill(col_green);
    text(this.text3,this.text_x-1490/ws,300/ws);
    fill(col_yellow);
    text(this.text4,this.text_x-1490/ws,350/ws);
    fill(col_green);
    text(this.text5,this.text_x-1490/ws,500/ws);
    fill(col_yellow);
    text(this.text6,this.text_x-1490/ws,550/ws);

    for(i=enemys.length-1; i>=0; i--)
    {
    enemys[i].draw();
    enemys[i].update_fps();
    }

    //RIGHT SCREEN
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);

    strokeWeight(2);
    textFont(C64_PRO);
    textSize(30/ws);

    stroke(col_black);

    fill(this.r,this.g,this.b);
    text(this.text7,this.text_x+1720/ws,275/ws);

    fill(col_green);
    text(zero_padding(hiscores[0])+"  "+hiscores[1],this.text_x+1670/ws,350/ws);
    fill(col_yellow);
    text(zero_padding(hiscores[2])+"  "+hiscores[3],this.text_x+1670/ws,400/ws);
    fill(col_purple);
    text(zero_padding(hiscores[4])+"  "+hiscores[5],this.text_x+1670/ws,450/ws);
    fill(col_blue);
    text(zero_padding(hiscores[6])+"  "+hiscores[7],this.text_x+1670/ws,500/ws);
    fill(col_pink);
    text(zero_padding(hiscores[8])+"  "+hiscores[9],this.text_x+1670/ws,550/ws);

  } //END OF DRAW

  update()
  {
    //detect for green button to start game
    if(!menu_screen_sound.isPlaying())
    {

    if(JOY_CONNECT == true)
    {
      this.gp = navigator.getGamepads()[0];

      if(this.gp.buttons[0].pressed == true)
      {
        if(green_button_pressed == false)
        {
        start_screen.start_game()
        green_button_pressed = true;
        }
      }
      else
      {
        green_button_pressed = false;
      }
    }
  }

    //routine for scrolling screen
    if(this.move == true)
    {
      if(start_screen_move[this.order] == "r")
      {
        this.text_x += this.speed;
        for(i=enemys.length-1; i>=0 ;i--)
        {
        enemys[i].x += this.speed;
        }
        this.counter += this.speed;
      }
      else
      {
        this.text_x -= this.speed;
        for(i=enemys.length-1; i>=0 ;i--)
        {
        enemys[i].x -= this.speed;
        }
        this.counter += this.speed;
      }

      if(this.counter >= WIDTH)
      {
        this.move = false;
        this.stop = frameCount + 250;
      }
    }

    if(this.move == false)
    {
        if(frameCount == this.stop)
        {
          this.move = true;
          this.order ++;
          this.counter = 0;
        }
    }

    if(this.order == start_screen_move.length)
    {
      this.order = 0;
    }


  } //END OF UPDATE

  start_game()
  {
    game_state = 1;
    baiter_attack = frameCount + baiter_attack_initial;
    extra_landers = frameCount + extra_landers_initial;
    enemys = [];

    /////////////////INITIALISE SPAWNS//////////////////////////////////////////

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

    /////////////////INITIALISE HUMANS////////////////////////////////////

    for (i=0; i < humanoids[player.level]; i++)
    {
      enemys.push(new human(9));  //id of human
    }

    game_start_sound.play();
  }

} //END OF CLASS
