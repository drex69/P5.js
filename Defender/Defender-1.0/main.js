function preload() {

  //IMAGES
  player_left = loadImage('assets/graphics/defender_left.png');
  player_right = loadImage('assets/graphics/defender_right.png');
  thrust_left = loadImage('assets/graphics/thrust_left.png');
  thrust_right = loadImage('assets/graphics/thrust_right.png');
  enemy_img = loadImage('assets/graphics/enemy2.png');
  radar_player_img = loadImage ('assets/graphics/defender_right.png');
  radar_bomb_img = loadImage ('assets/graphics/bomb.png');
  human_img = loadImage ('assets/graphics/humanoid.png');

  //FONTS
  myfont = loadFont ('assets/fonts/Computerfont.ttf');
  //myfont = loadFont ('assets/fonts/abduction2002.ttf');
  //myfont = loadFont ('assets/fonts/xevious.ttf');
  //myfont1 = loadFont ('assets/fonts/Linebeam.ttf');

  //SOUNDS
  enemy_explosion_sound = loadSound('assets/sounds/enemy_explosion.wav');
  enemy_spawn_sound = loadSound('assets/sounds/enemy_spawn1.wav');
  enemy_shoot_sound = loadSound('assets/sounds/enemy_shoot.wav');
  player_explosion_sound = loadSound('assets/sounds/player_explosion.wav');
  player_bomb_sound = loadSound('assets/sounds/player_bomb.wav');
  player_thrust_sound = loadSound ('assets/sounds/thrust.wav');
  player_laser_sound = loadSound('assets/sounds/laser.wav');
  level_completed_sound = loadSound('assets/sounds/level_completed.wav');
  game_start_sound = loadSound('assets/sounds/game_start.wav');
  human_rescued_sound = loadSound('assets/sounds/human_rescued.wav');
  human_captured_sound = loadSound('assets/sounds/human_captured.wav');
  background_sound = loadSound('assets/sounds/background.wav');
}

function setup() { 
  
  while(WIDTH > windowWidth)
  {
    ws += 0.1;
    WIDTH = 1536/ws;
    HEIGHT = 864/ws;
  }
    
  while(HEIGHT > windowHeight)
  {
    
    ws += 0.1;
    WIDTH = 1536/ws;
    HEIGHT = 864/ws;
      
  }  
  
  
  //createCanvas (1024,576);
  cnv = createCanvas(WIDTH, HEIGHT);
  cnv.style('display', 'block');

  if(windowWidth > WIDTH){
    tempx = windowWidth-WIDTH;
    tempx = tempx/2;
    cnv.position(tempx,tempy);
  }

  if(windowHeight > HEIGHT){
    tempy = windowHeight-HEIGHT;
    tempy = tempy/2;
    cnv.position(tempx,tempy);
  }

  enemy_explosion_sound.setVolume(sfx_vol);
  enemy_spawn_sound.setVolume(sfx_vol-0.25);
  enemy_shoot_sound.setVolume(sfx_vol);
  player_explosion_sound.setVolume(sfx_vol);
  player_bomb_sound.setVolume(sfx_vol);
  player_thrust_sound.setVolume(sfx_vol-0.75);
  player_laser_sound.setVolume(sfx_vol-0.75);
  level_completed_sound.setVolume(sfx_vol-1.0);
  game_start_sound.setVolume(sfx_vol);
  human_rescued_sound.setVolume(sfx_vol);
  human_captured_sound.setVolume(sfx_vol);
  background_sound.setVolume(sfx_vol);


  player_left.resize(player_left.width/ws*0.80,player_left.height/ws*0.80);
  player_right.resize(player_right.width/ws*0.80,player_right.height/ws*0.80);
  thrust_left.resize(thrust_left.width/ws*0.80,thrust_left.height/ws*0.80);
  thrust_right.resize(thrust_right.width/ws*0.80,thrust_right.height/ws*0.80);
  enemy_img.resize(enemy_img.width/ws*0.70,enemy_img.height/ws*0.70);
  radar_bomb_img.resize(radar_bomb_img.width/ws*0.70,radar_bomb_img.height/ws*0.70);
  radar_player_img.resize(radar_player_img.width/ws*0.70,radar_player_img.height/ws*0.70);
  human_img.resize(human_img.width/ws*0.80,human_img.height/ws*0.80)
  //radar_player_img.resize(40/ws,0);
  //human_img.resize(35/ws,0);

  imageMode(CENTER);
  angleMode(DEGREES);

  /////////////////INITIALISE STARS//////////////////////////////////////////

  for(i=0;i<100;i++){
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

  for (i=0; i < wanderer[player.level]; i++)
  {
    spawns[i] = new spawn_class(0);
  }

  for (i=0; i < chaser[player.level]; i++)
  {
    spawns[i] = new spawn_class(1);
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

////////////////////////////////////////////////////////////////
/////////////////////////  DRAW  ///////////////////////////////
////////////////////////////////////////////////////////////////

function draw() {

  background(0,0,0);
  
  ////////////////START SCREEN////////////////

  if (game_state == 0){
    start_screen.draw();
  }

  ////////////LEVEL COMPLETED SCREEN///////////

  if (game_state == 2){
    level_screen.draw();
    //level_screen.update();
  }

  ////////////////END SCREEN////////////////

  if (game_state == 3){
    end_screen.draw();
    //end_screen.update();
  }


  //DRAW STARS///////////////////////////////////////////////////////////////

  for(i=stars.length-1;i>=0;i--){
    stars[i].draw();
    stars[i].update();
  }

  //RADAR//////////////////////////////////////////////////////////////

  radar.draw();
  radar.update();

  //MOUNTAINS/////////////////////////////////////////////////////////////////

  if(game_state == 0 || game_state == 2 || game_state == 3){
    for (i=mountains.length-1; i >= 0; i--){
      mountains[i].draw();
      mountains[i].update();
      player.dir = 1;
      player.x_speed = 3;
    }
  }

  if(game_state == 1){

    for (i=mountains.length-1; i >= 0; i--){

      if(player_explosions.length < 1){
        mountains[i].draw();
        mountains[i].update();
      }
      else {
        mountains[i].draw();
      }
    }
  }

  //Scrolling Left

  first = 0;

  last = mountains.length-1;

  if(mountains[first].dir == 0){

    if(mountains[first].go_off_screen()){

      x3 = Math.abs(mountains[first].x3); //convert negative numbers to positive
      x1 = Math.abs(mountains[first].x1); //convert negative numbers to positive
      base = x1 - x3;

      mountains[first].x1 = mountains[last].x3;
      mountains[first].x2 = mountains[first].x1 + base/2;
      mountains[first].x3 = mountains[first].x1 + base;

      //splice first index of array, and place at end of array, with push
      //mountains.push(mountains.splice(first, 1)[0]);

      //shift off the start of the array, and push onto the end
      mountains.push(mountains.shift());
    }
  }

    //Scrolling Right

    last = mountains.length-1;

    if(mountains[last].dir == 1){

      if(mountains[last].go_off_screen()){

        x3 = mountains[last].x3;
        x1 = mountains[last].x1;
        base = x3 - x1;

        mountains[last].x3 = mountains[0].x1;
        mountains[last].x2 = mountains[last].x3 - base/2;
        mountains[last].x1 = mountains[last].x3 - base;

        //splice last index of array, and place at start of array, with unshift
        //mountains.unshift(mountains.splice(last, 1)[0]);

        //pop off the end of the array, and unshift onto the start
        mountains.unshift(mountains.pop());
      }
    }

    ///////////////////SPAWNS//////////////////

    if (game_state == 1){

      if(!game_start_sound.isPlaying()){

        if(spawn_sound_flag == 0){
          enemy_spawn_sound.play();
          spawn_sound_flag = 1;
        }

        // if(!player_thrust_sound.isPlaying()){
        //   player_thrust_sound.play();
        // }

        for (i=spawns.length-1; i >= 0; i--)
        {
          spawns[i].draw();
          spawns[i].update();

          if (spawns[i].finished())
          {
            enemys.push(new enemy_class(spawns[i].x,spawns[i].y,spawns[i].id)); //id of enemy to spawn
            spawns.splice(i,1);
          }
        }
      }
    }



    ////////////////ENEMYS//////////////////////////////////////////////////

    if(game_state == 1){

      for (i=enemys.length-1; i >= 0; i--)
      {
        if(player_explosions.length < 1){
          enemys[i].update();
        }
        enemys[i].draw();
      }
    }

    ////////////////ENEMY BULLETS//////////////////////////////////////////////////

    if(game_state == 1){

      for (i=enemy_bullets.length-1; i >= 0; i--)
      {
        if(player_explosions.length < 1){
          enemy_bullets[i].update();
        }
        enemy_bullets[i].draw();
      }
    }

      for (i=enemy_bullets.length-1; i >= 0; i--)
      {
        if(enemy_bullets[i].goesoffscreen())
        {
          enemy_bullets.splice(i,1);
        }
      }

    ///////////////ENEMY EXPLOSIONS//////////////////

    for (i=enemy_explosions.length-1; i >= 0; i--)
    {
      enemy_explosions[i].draw();
      enemy_explosions[i].update();
    }

    for (i=enemy_explosions.length-1; i >= 0; i--)
    {
      if(enemy_explosions[i].finished()){
        enemy_explosions.splice(i,1);
      }
    }

    //////////////PLAYER EXPLOSIONS/////////////////

    for (i=player_explosions.length-1; i >= 0; i--)
    {
      player_explosions[i].draw();
      player_explosions[i].update();
    }

    for (i=player_explosions.length-1; i >= 0; i--)
    {
      if(player_explosions[i].finished()){
        player_explosions.splice(i,1);

      }
    }

    //PLAYER///////////////////////////////////////////////////////////////////

    if(game_state == 1)
    {
      if(player_explosions.length < 1){
        player.draw();
        player.update();
      }
    }

    if(game_state == 1)
    {
      for(i=player_bullets.length-1;i >= 0; i--){
        player_bullets[i].draw();
        player_bullets[i].update();
      }
    }

} //END OF DRAW

function mousePressed() {

  if (WIDTH == 1536){
    fs = fullscreen();
    fullscreen(!fs);
  }
}
