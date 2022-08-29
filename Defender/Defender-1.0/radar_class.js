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

    // //DRAW SCORE//////////////////////////////////////////////////////////
    textFont(myfont);
    
    textSize(50/ws);

    stroke(this.black);
    fill(this.yellow);

    if (player.score < 100000000 && player.score >= 10000000){
      this.offset = 133;
      text('',133/ws,78/ws);
    }

    if (player.score < 10000000 && player.score >= 1000000){
      this.offset = 161;
      text('0',133/ws,78/ws);
    }

    if (player.score < 1000000 && player.score >= 100000){
      this.offset = 189;
      text('00',133/ws,78/ws);
    }

    if (player.score < 100000 && player.score >= 10000){
      this.offset = 216;
      text('000',133/ws,78/ws);
    }

    if (player.score < 10000 && player.score >= 1000){
      this.offset = 244;
      text('0000',133/ws,78/ws);
    }

    if (player.score < 1000 && player.score >= 100){
      this.offset = 271;
      text('00000',133/ws,78/ws);
    }

    if (player.score < 100 && player.score > 0){
      this.offset = 298;
      text('000000',133/ws,78/ws);
    }

    if (player.score == 0){
      this.offset = 325;
      text('0000000',133/ws,78/ws);
    }
    text(player.score,this.offset/ws,78/ws);

    // //DRAW HI - SCORE//////////////////////////////////////////////////////////

    if (player.hi_score < 100000000 && player.hi_score >= 10000000){
      this.offset = 1175;
      text('',1175/ws,78/ws);
    }

    if (player.hi_score < 10000000 && player.hi_score >= 1000000){
      this.offset = 1203;
      text('0',1175/ws,78/ws);
    }

    if (player.hi_score < 1000000 && player.hi_score >= 100000){
      this.offset = 1231;
      text('00',1175/ws,78/ws);
    }

    if (player.hi_score < 100000 && player.hi_score >= 10000){
      this.offset = 1258;
      text('000',1175/ws,78/ws);
    }

    if (player.hi_score < 10000 && player.hi_score >= 1000){
      this.offset = 1286;
      text('0000',1175/ws,78/ws);
    }

    if (player.hi_score < 1000 && player.hi_score >= 100){
      this.offset = 1313;
      text('00000',1175/ws,78/ws);
    }

    if (player.hi_score < 100 && player.hi_score > 0){
      this.offset = 1340;
      text('000000',1175/ws,78/ws);
    }

    if (player.hi_score == 0){
      this.offset = 1367;
      text('0000000',1175/ws,78/ws);
    }
    text(player.hi_score,this.offset/ws,78/ws);

    //DRAW INITIALS FOR HI-SCORE

    this.temp1 = String.fromCharCode(initials[0]);
    this.temp2 = String.fromCharCode(initials[1]);
    this.temp3 = String.fromCharCode(initials[2]);

    this.text = this.temp1 + this.temp2 + this.temp3;

    fill(0,0,0);
    stroke(this.blue);
    text(this.text,1425/ws,78/ws);


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

      this.x1 = this.x1/11.25/ws + 717/ws;//1475
      this.y1 = this.y1/9;
      this.x2 = this.x2/11.25/ws + 717/ws;
      this.y2 = this.y2/9;
      this.x3 = this.x3/11.25/ws + 717/ws;
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

    // //DISPLAY ENEMYS ON RADAR/////////////////////////////////////////////////

    if(game_state ==1){

      for (i=enemys.length-1; i >= 0; i--)
      {
        this.x = enemys[i].x;
        this.y = enemys[i].y;

        this.x = this.x/11.25/ws + 715/ws;//14.5
        this.y = this.y/10;

        stroke(0,255,0);
        rect (this.x,this.y,0.1/ws,0.1/ws);
      }
    }

    // //DISPLAY PLAYER ON RADAR/////////////////////////////////////////////////

    if (game_state == 1){
      this.x = player.x;
      this.y = player.y;

      this.x = this.x/11.25/ws + 715/ws;//14.5
      this.y = this.y/10;

      //stroke(0,150,255);
      stroke(255,255,255);
      rect (this.x,this.y,1/ws,1/ws);
    }

    // //DISPLAY HUMANS ON RADAR/////////////////////////////////////////////////
    //
    // if (game_state == 1){
    //
    //   for (i=humans.length-1; i >= 0;i--){
    //
    //     this.x = humans[i].x;
    //     this.y = humans[i].y;
    //
    //     this.x = this.x/10 + 675/ws;
    //     this.y = this.y/10;//8+8;
    //
    //     stroke(0,255,0);
    //     rect (this.x,this.y,2/ws,2/ws);
    //   }
    // }


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
