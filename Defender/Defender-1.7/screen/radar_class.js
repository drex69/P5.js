class radar_class

{

  constructor()
  {
    this.r = 255;
    this.g = 255;
    this.b = 0;

    this.fade = 1;
    this.fade_up = 12;
    this.fade_down = 8;

    this.yellow = color(255,255,0);
    this.blue = color(50,150,250);
    this.black = color(0,0,0);

  }

  draw()
  {
    strokeWeight(2);
    stroke(this.yellow);

    line(0,100/ws,WIDTH,100/ws);                    //bottom line

    line(WIDTH/4,0,WIDTH/4,100/ws);                 //left line
    line(WIDTH-WIDTH/4,0,WIDTH-WIDTH/4,100/ws);     //right line
    line(WIDTH/4,0,WIDTH-WIDTH/4,0);                //top line

    // //DRAW PLAYER LIVES
    this.x = 153/ws;
    this.y = 25/ws;
    this.counter = 0;

    while (this.counter < player.lives)
    {

      if(this.counter < 5){
        image(radar_player_img,this.x,this.y);
        this.x += 50/ws;
      }
        this.counter ++;
    }

    // //DRAW PLAYER BOMBS
    this.x = 365/ws;
    this.y = 50/ws;
    this.counter = 0;

    while (this.counter < player.bombs)
    {
      if(this.counter < 3){
        image(radar_bomb_img,this.x,this.y);
        this.y += 15/ws;
      }
      this.counter ++;
    }

    //DRAW PL1
    textFont(C64_PRO);
    textSize(27.5/ws);

    stroke(this.black);
    fill(col_light_blue);
    text("PL1",20/ws,78/ws);

    //DRAW SCORE//////////////////////////////////////////////////////////

    textFont(C64_PRO);
    textSize(27.5/ws);

    stroke(this.black);
    fill(col_yellow);

    this.padded_score = zero_padding(player.score);
    text(this.padded_score,130/ws,78/ws);


    // //DRAW HI_SCORE//////////////////////////////////////////////////////////
    stroke(this.black);
    fill(col_yellow);
    text(zero_padding(hiscores[0]),1175/ws,78/ws);

    //DRAW INITIALS FOR HI_SCORE////////////////////////////////////////////////

    fill(col_light_blue);
    text(hiscores[1],1425/ws,78/ws);//player.hi_score_name

  } //END OF DRAW

  update()
  {

    // //DISPLAY MOUNTAINS ON RADAR/////////////////////////////////////////////

    for (i=mountains.length-1; i >= 0; i--)
    {
      this.x1 = mountains[i].x1;
      this.y1 = mountains[i].y1;
      this.x2 = mountains[i].x2;
      this.y2 = mountains[i].y2;
      this.x3 = mountains[i].x3;
      this.y3 = mountains[i].y3;

      // this.x1 = this.x1/11.25/ws + 717/ws;
      // this.y1 = this.y1/9;
      // this.x2 = this.x2/11.25/ws + 717/ws;
      // this.y2 = this.y2/9;
      // this.x3 = this.x3/11.25/ws + 717/ws;
      // this.y3 = this.y3/9;

      this.x1 = this.x1/14.50/ws + 717/ws;
      this.y1 = this.y1/9;
      this.x2 = this.x2/14.50/ws + 717/ws;
      this.y2 = this.y2/9;
      this.x3 = this.x3/14.50/ws + 717/ws;
      this.y3 = this.y3/9;

      stroke (102,51,0);
      fill(102,51,0);

      if(mountains[i].shape > 0){
        line(this.x1,this.y1,this.x3,this.y3);
      }

      else{
        line(this.x1,this.y1,this.x2,this.y2);
        line(this.x2,this.y2,this.x3,this.y3);
      }

    }

    //DISPLAY ENEMYS ON RADAR/////////////////////////////////////////////////

    if(game_state ==1){

      for (i=enemys.length-1; i >= 0; i--)
      {
        this.x = enemys[i].x;
        this.y = enemys[i].y;

        //this.x = this.x/11.25/ws + 715/ws;
        this.x = this.x/14.50/ws + 715/ws;
        this.y = this.y/9.5;

        //lander
        if(enemys[i].id == 0)
        {
          stroke(0,255,0);
        }

        //mutant, baiter
        if(enemys[i].id == 1 || enemys[i].id == 12)
        {
          stroke(255,0,0);
        }

        //bomber
        if(enemys[i].id == 2)
        {
          stroke(0,150,255);
        }

        //pod
        if(enemys[i].id == 3)
        {
          stroke(255,0,255);
        }

        //swarmer
        if(enemys[i].id == 4)
        {
          stroke(255,0,255);
        }

        //stealer
        if(enemys[i].id == 5)
        {
          stroke(0,255,0);
        }

        //humans
        if(enemys[i].id == 9)
        {
          stroke(255,255,0);
        }

        //moving bullets, static bullets
        if(enemys[i].id == 10 || enemys[i].id == 11)
        {
          stroke(random(255),random(255),random(255));
        }

          rect (this.x,this.y,1.0/ws,1.0/ws);

      }
    }

    // //DISPLAY PLAYER ON RADAR/////////////////////////////////////////////////

    if (game_state == 1){
      this.x = player.x;
      this.y = player.y;

      //this.x = this.x/11.25/ws + 715/ws;
      this.x = this.x/14.50/ws + 715/ws;
      this.y = this.y/9.5;//10;

      //stroke(0,150,255);
      stroke(255,255,255);
      rect (this.x,this.y,1/ws,1/ws);
    }

    //FADE SCORE UP & DOWN

    // if (this.fade == 1){
    //
    //   if (this.r > 0){
    //     this.r = this.r - this.fade_down;
    //     this.g = this.g - this.fade_down;
    //     this.b = this.b - this.fade_down;
    //   }
    //   else{
    //     this.fade = -1;
    //   }
    // }
    //
    //
    // if (this.fade == -1){
    //
    //   if(this.r <255){
    //     this.r = this.r + this.fade_up;
    //     this.g = this.g + this.fade_up;
    //     this.b = this.b + this.fade_up;
    //   }
    //   else{
    //     this.fade = 1;
    //   }
    // }



  } //END OF UPDATE

} //END OF CLASS
