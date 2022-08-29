////////////////////////////////////////////////////////////////
///////////////////////// SETUP ////////////////////////////////
////////////////////////////////////////////////////////////////

function setup() {

  center_scale_window();
  frameRate(fps);
  imageMode(CENTER);
  angleMode(DEGREES);

  enemy_explosion_sound.setVolume(sfx_vol);
  enemy_spawn_sound.setVolume(sfx_vol-0.50);
  enemy_shoot_sound.setVolume(sfx_vol);
  swarmer_shoot_sound.setVolume(sfx_vol);
  mutant_shoot_sound.setVolume(sfx_vol);
  player_explosion_sound.setVolume(sfx_vol);
  player_bomb_sound.setVolume(sfx_vol);
  player_thrust_sound.setVolume(sfx_vol);
  player_laser_sound.setVolume(sfx_vol-0.50);
  level_completed_sound.setVolume(sfx_vol);
  game_start_sound.setVolume(sfx_vol-0.50);
  human_rescued_sound.setVolume(sfx_vol);
  human_captured_sound.setVolume(sfx_vol);
  teleport_sound.setVolume(sfx_vol);
  pod_explode_sound.setVolume(sfx_vol-0.50);
  menu_screen_sound.setVolume(sfx_vol-0.25);
  human_destroyed_sound.setVolume(sfx_vol);
  human_on_ground_sound.setVolume(sfx_vol);
  human_falling_sound.setVolume(sfx_vol);
  bomber_destroyed_sound.setVolume(sfx_vol);

  player_left.resize(player_left.width/ws*0.80,player_left.height/ws*0.80);
  player_right.resize(player_right.width/ws*0.80,player_right.height/ws*0.80);
  thrust_left.resize(thrust_left.width/ws*0.80,thrust_left.height/ws*0.80);
  thrust_right.resize(thrust_right.width/ws*0.80,thrust_right.height/ws*0.80);
  radar_player_img.resize(radar_player_img.width/ws*0.70,radar_player_img.height/ws*0.70);
  radar_bomb_img.resize(radar_bomb_img.width/ws*0.70,radar_bomb_img.height/ws*0.70);
  human_img.resize(human_img.width/ws*0.75,human_img.height/ws*0.75)


  //Scale lander png files to scale
  for(i=0;i<lander_anim.length;i++){
  lander_anim[i].resize(lander_anim[i].width/ws*0.80,lander_anim[i].height/ws*0.80);
  }

  //Scale mutant png files to scale
  for(i=0;i<mutant_anim.length;i++){
  mutant_anim[i].resize(mutant_anim[i].width/ws*0.80,mutant_anim[i].height/ws*0.80);
  }

  //Scale bomber png files to scale
  for(i=0;i<bomber_anim.length;i++){
  bomber_anim[i].resize(bomber_anim[i].width/ws*1.00,bomber_anim[i].height/ws*1.00);
  }

  //Scale pod png files to scale
  for(i=0;i<pod_anim.length;i++){
  pod_anim[i].resize(pod_anim[i].width/ws*1.00,pod_anim[i].height/ws*1.00);
  }

  //Scale baiter png files to scale
  for(i=0;i<baiter_anim.length;i++){
  baiter_anim[i].resize(baiter_anim[i].width/ws*1.00,baiter_anim[i].height/ws*1.00);
  }

  //Scale 500_score png files to scale
  for(i=0;i<score_anim.length;i++){
  score_anim[i].resize(score_anim[i].width/ws*1.00,score_anim[i].height/ws*1.00);
  }

  //Scale swarmer png files to scale
  for(i=0;i<swarmer_anim.length;i++){
  swarmer_anim[i].resize(swarmer_anim[i].width/ws*1.00,swarmer_anim[i].height/ws*1.00);
  }

  /////////////////INITIALISE HISCORE TABLE/////////////////////////////////

  //save_to_localstorage();

  read_from_localstorage();

  //convert strings to integers, and store in an array
  for(i=0; i<hiscores.length; i++)
  {
    temp = parseInt(hiscores[i])
    hiscores[i] = temp;
    i++;
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

  /////////////////INITIALISE RADAR DISPLAY////////////////////////////////////

  radar = new radar_class();

  ///////////////INITIALISE INSERT COINT SCREEN//////////////////////////////

  insert_coin_screen = new insert_coin_screen_class();

  ///////////////INITIALISE START SCREEN//////////////////////////////

  //start_screen = new start_screen_class();

  ///////////////INITIALISE END SCREEN////////////////////////////////

  end_screen = new end_screen_class();

  ///////////////INITIALISE LEVEL COMPLETED SCREEN/////////////////////

  level_screen = new level_completed_class();

  //menu_screen_sound.play();

} //END OF SETUP
