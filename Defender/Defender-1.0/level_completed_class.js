class level_completed_class
{

  constructor()

  {
    this.text1 = "LEVEL COMPLETED"
    this.text2 = " X 1000";
    this.bonus = 0;
    this.bonus_x = 500;

    this.black = color(0,0,0);
    this.blue = color(50,150,250);

  }

  draw()
  {


    for (i=enemy_bullets.length; i>=0; i--){
      enemy_bullets.splice(i,1);
    }

    player_thrust_sound.stop();
    // if(!player_thrust_sound.isPlaying()){
    //   player_thrust_sound.play();
    // }

    textFont(myfont);
    //textFont("linebeam");
    stroke(this.blue);
    fill(this.black);
    textSize(75/ws);

    //level completed text

    center_text(this.text1);
    text(this.text1,text_x,300/ws);

    //amountof humans rescued


    this.bonus_x = 500;
    this.bonus = 0;

    for(i=humans.length-1;i>=0;i--){
      if(humans[i].captured == 1){
        this.bonus++;
      }
    }

    this.temp = human_img.width * this.bonus;
    this.temp = WIDTH-this.temp;
    this.temp = this.temp/2;

    for (i=0;i < this.bonus;i++){

      //image (human_img,this.bonus_x,350/ws)
      image (human_img,this.temp,350/ws);
      //this.bonus_x = this.bonus_x + human_img.width;
      this.temp = this.temp + human_img.width;
    }

    // X 1000 text

    center_text(this.text2);
    text(this.text2,text_x,440/ws);

    if (level_completed_sound.isPlaying()){

    }
    else{
      game_state = 1;
      player.level ++;
      player.level_difficulty += 5;
      player.x = WIDTH/2;
      player.y = HEIGHT/2;
      player.dir = 1;
      player.score = player.score + this.bonus*1000;
      enemy_spawn_sound.play();

      for (i=0; i < wanderer[player.level]; i++)
      {
        spawns[i] = new spawn_class(0);
      }


    //   for (i=0; i < humanoids[player.level]; i++)
    //   {
    //     humans[i] = new human_class();
    //   }
    //   spawns.push(new spawn_class(2));   //spawn stealer
    }
  }

  update(){

  }

}
