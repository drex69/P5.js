class level_completed_class
{

  constructor()

  {
    this.text1 = "ATTACK WAVE ";
    this.text2 = "COMPLETED";
    this.text3 = " BONUS x 100";

    this.black = color(0,0,0);
    this.blue = color(50,150,250);
  }

  draw()
  {
    this.level = player.level+1;
    player_thrust_sound.stop();

    // if(!player_thrust_sound.isPlaying()){
    //   player_thrust_sound.play();
    // }

    textFont(myfont);
    //textFont("linebeam");
    //stroke(this.blue);
    stroke(col_yellow);
    fill(this.blue);
    textSize(50/ws);

    //attack wave text
    center_text(this.text1);
    text(this.text1+this.level,text_x,300/ws);

    //completed text
    center_text(this.text2);
    text(this.text2,text_x,375/ws);

    // X 1000 text
    center_text(this.text3);
    text(this.text3,text_x,525/ws);

    //amount of humans rescued
    this.bonus = 0;

    for(i=enemys.length-1;i>=0;i--)
    {
      if(enemys[i].id == 9)
      {
        if(enemys[i].captured == 0 || enemys[i].captured == 1){
          this.bonus++;
        }
      }
    }

    this.temp = human_img.width * this.bonus;
    this.temp = WIDTH-this.temp;
    this.temp = this.temp/2;

    for (i=0;i < this.bonus;i++)
    {
      image (human_img,this.temp,600/ws);
      this.temp = this.temp + human_img.width*2;
    }



    if (level_completed_sound.isPlaying())
    {

    }
    else
    {
      game_state = 1;
      mutant_attack = false;
      mountains_enable = true;
      player.level ++;

      if(player.level == 100)
      {
        player.level = 0;
      }

      player.level_difficulty += 1;
      player.x = WIDTH/2;
      player.y = HEIGHT/2;
      player.dir = 1;
      player.score = player.score + this.bonus*100;
      enemy_spawn_sound.play();
      enemys = [];
      spawns = [];

      baiter_attack = frameCount + baiter_attack_initial;
      extra_landers = frameCount + extra_landers_initial;

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

      for (i=0; i < humanoids[player.level]; i++)
      {
        enemys.push(new human());  //id of human
      }
    }
  }

}
