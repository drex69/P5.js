////////////////////////////////////////////////////////////////
///////////////////////// SETUP ////////////////////////////////
////////////////////////////////////////////////////////////////

function setup() {

  center_scale_window();
  frameRate(fps);

  enemy_explosion_sound.setVolume(sfx_vol);
  enemy_spawn_sound.setVolume(sfx_vol-0.25);
  enemy_shoot_sound.setVolume(sfx_vol);
  swarmer_shoot_sound.setVolume(sfx_vol);
  mutant_shoot_sound.setVolume(sfx_vol);
  player_explosion_sound.setVolume(sfx_vol);
  player_bomb_sound.setVolume(sfx_vol);
  player_thrust_sound.setVolume(sfx_vol-0.75);
  player_laser_sound.setVolume(sfx_vol-0.75);
  level_completed_sound.setVolume(sfx_vol);
  game_start_sound.setVolume(sfx_vol);
  human_rescued_sound.setVolume(sfx_vol);
  human_captured_sound.setVolume(sfx_vol);
  background_sound.setVolume(sfx_vol);
  pod_explode_sound.setVolume(sfx_vol);

  player_left.resize(player_left.width/ws*0.80,player_left.height/ws*0.80);
  player_right.resize(player_right.width/ws*0.80,player_right.height/ws*0.80);
  thrust_left.resize(thrust_left.width/ws*0.80,thrust_left.height/ws*0.80);
  thrust_right.resize(thrust_right.width/ws*0.80,thrust_right.height/ws*0.80);
  enemy_img.resize(enemy_img.width/ws*0.70,enemy_img.height/ws*0.70);
  radar_bomb_img.resize(radar_bomb_img.width/ws*0.70,radar_bomb_img.height/ws*0.70);
  radar_player_img.resize(radar_player_img.width/ws*0.70,radar_player_img.height/ws*0.70);
  human_img.resize(human_img.width/ws*0.75,human_img.height/ws*0.75)
  mutant_img.resize(mutant_img.width/ws*0.80,mutant_img.height/ws*0.80)
  swarmer_img.resize(swarmer_img.width/ws*0.80,swarmer_img.height/ws*0.80)
  //human_img.resize(human_img.width/ws*1.0,human_img.height/ws*1.0)
  //radar_player_img.resize(40/ws,0);


  imageMode(CENTER);
  angleMode(DEGREES);

  //Scale lander png files to scale
  for(i=0;i<lander_anim.length;i++){
  lander_anim[i].resize(lander_anim[i].width/ws*0.80,lander_anim[i].height/ws*0.80);
  }

  //Scale bomber png files to scale
  for(i=0;i<bomber_anim.length;i++){
  bomber_anim[i].resize(bomber_anim[i].width/ws*1.00,bomber_anim[i].height/ws*1.00);
  }

  //Scale pod png files to scale
  for(i=0;i<pod_anim.length;i++){
  pod_anim[i].resize(pod_anim[i].width/ws*1.00,pod_anim[i].height/ws*1.00);
  }

  /////////////////INITIALISE STARS//////////////////////////////////////////

  for(i=0;i<25;i++){
    stars.push(new star_class());
  }

  /////////////////INITIALISE MOUNTAINS//////////////////////////////////////

  baseline = HEIGHT/25;
  baseline = HEIGHT - baseline;

  x3 = world_min;

  while(x3 < world_max){

    shape = round(random(0,1));  //0 = line, 1 = triangle

    x1 = x3;
    y1 = baseline;

    my_min = baseline-baseline/50;
    my_max = baseline-baseline/7;

    y2 = round(random(my_min,my_max));
    base = baseline - y2;
    x2 = x1 + base;

    x3 = x1 + base*2;
    y3 = baseline;

    mountains.push(new mountain_class(shape,x1,y1,x2,y2,x3,y3));
  }

  /////////////////INITIALISE PLAYER////////////////////////////////////

  player = new player_class();

  /////////////////INITIALISE SPAWNS//////////////////////////////////////////

  for (i=0; i < landers[player.level]; i++)
  {
    spawns.push(new spawn(0));  //id of lander
  }

  for (i=0; i < mutants[player.level]; i++)
  {
    spawns.push(new spawn(1));  //id of mutant
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
    enemys.push(new human());  //id of human
    //spawns.push(new spawn(9));  //id of human
  }

  /////////////////INITIALISE RADAR DISPLAY////////////////////////////////////

  radar = new radar_class();

  ///////////////INITIALISE START SCREEN//////////////////////////////

  start_screen = new start_screen_class();

  ///////////////INITIALISE END SCREEN////////////////////////////////

  end_screen = new end_screen_class();

  ///////////////INITIALISE LEVEL COMPLETED SCREEN/////////////////////

  level_screen = new level_completed_class();

} //END OF SETUP
