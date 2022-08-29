class start_screen_class
{

  constructor()
  {
    this.text1 = "DEFENDER";
    //this.text2 = "CODING BY DREX"
    this.black = color(0,0,0);
    this.blue = color(50,150,250);
  }

  draw()
  {
    // if(!background_sound.isPlaying()){
    //   background_sound.loop();
    // }

    textFont(myfont);
    //textFont("linebeam");


    stroke(this.blue);
    fill(this.black);
    textSize(150/ws);
    center_text(this.text1);
    text(this.text1,text_x,450/ws);

    // stroke(100,100,100);
    // fill(100,100,100);
    // textSize(20/ws);
    // center_text(this.text2);
    // text(this.text2,text_x,330/ws);


  } //END OF DISPLAY

} //END OF CLASS
