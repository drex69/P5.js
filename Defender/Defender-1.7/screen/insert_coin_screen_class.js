class insert_coin_screen_class
{
  constructor()
  {

    this.text1 = "INSERT COIN";
    this.text2 = "PRESS 'S' TO CONTINUE";

    textFont(myfont);
    //textSize(100/ws);
    //center_text(this.text1);
    //this.text_x = text_x;

  }

  draw()
  {

    textFont(myfont);
    strokeWeight(5);
    stroke(col_yellow);
    fill(col_dark_grey);

    textSize(125/ws);
    center_text(this.text1);
    text(this.text1,text_x,375/ws);

    stroke(col_yellow);
    fill(col_light_blue);

    textSize(55/ws);
    center_text(this.text2);
    text(this.text2,text_x,450/ws);

  }

  update()
  {

  }
}
