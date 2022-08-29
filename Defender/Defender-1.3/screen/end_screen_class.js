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

  }

  draw()
  {

    player_thrust_sound.stop();

    textFont(myfont);
    //textFont("linebeam");

      stroke(this.pen_colour);
      fill(this.fill_colour);
      textSize(100/ws);
      center_text(this.text1);
      text(this.text1,text_x,350/ws);


    if(player.score > hiscores[8])
    {

      textSize(50/ws);
      center_text(this.text3);
      text(this.text3,text_x,435/ws);

      this.temp1 = String.fromCharCode(initials[0]);
      this.temp2 = String.fromCharCode(initials[1]);
      this.temp3 = String.fromCharCode(initials[2]);
      this.temp4 = String.fromCharCode(32);

      this.text = this.temp1 + this.temp4 + this.temp2 + this.temp4 + this.temp3;

      center_text(this.text);
      text (this.text,text_x,510/ws);

    }

  } // END OF DRAW

} //END OF CLASS
