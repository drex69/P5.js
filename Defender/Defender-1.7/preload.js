////////////////////////////////////////////////////////////////
//////////////////////// PRELOAD ///////////////////////////////
////////////////////////////////////////////////////////////////

function preload() {

  //IMAGES
  player_left = loadImage('assets/graphics/defender_left.png');
  player_right = loadImage('assets/graphics/defender_right.png');
  thrust_left = loadImage('assets/graphics/thrust_left.png');
  thrust_right = loadImage('assets/graphics/thrust_right.png');
  radar_player_img = loadImage ('assets/graphics/defender_right.png');
  radar_bomb_img = loadImage ('assets/graphics/bomb.png');
  human_img = loadImage ('assets/graphics/human.png');


  //lander animation
  lander_anim[0] = loadImage("assets/graphics/lander_anim/lander4.png");
  lander_anim[1] = loadImage("assets/graphics/lander_anim/lander4.png");
  lander_anim[2] = loadImage("assets/graphics/lander_anim/lander1.png");
  lander_anim[3] = loadImage("assets/graphics/lander_anim/lander1.png");
  lander_anim[4] = loadImage("assets/graphics/lander_anim/lander2.png");
  lander_anim[5] = loadImage("assets/graphics/lander_anim/lander3.png");

  //mutant animation
  mutant_anim[0] = loadImage("assets/graphics/mutant_anim/mutant1.png");
  mutant_anim[1] = loadImage("assets/graphics/mutant_anim/mutant2.png");

  //bomber animation
  bomber_anim[0] = loadImage("assets/graphics/bomber_anim/bomber1.png");
  bomber_anim[1] = loadImage("assets/graphics/bomber_anim/bomber2.png");
  bomber_anim[2] = loadImage("assets/graphics/bomber_anim/bomber3.png");
  bomber_anim[3] = loadImage("assets/graphics/bomber_anim/bomber4.png");
  bomber_anim[4] = loadImage("assets/graphics/bomber_anim/bomber3.png");
  bomber_anim[5] = loadImage("assets/graphics/bomber_anim/bomber2.png");

  //pod animation
  pod_anim[0] = loadImage("assets/graphics/pod_anim/pod1.png");
  pod_anim[1] = loadImage("assets/graphics/pod_anim/pod2.png");
  pod_anim[2] = loadImage("assets/graphics/pod_anim/pod2.png");

  //baiter animation
  baiter_anim[0] = loadImage("assets/graphics/baiter_anim/baiter1.png");
  baiter_anim[1] = loadImage("assets/graphics/baiter_anim/baiter1.png");
  baiter_anim[2] = loadImage("assets/graphics/baiter_anim/baiter2.png");
  baiter_anim[3] = loadImage("assets/graphics/baiter_anim/baiter2.png");

  //500 animation
  score_anim[0] = loadImage("assets/graphics/500_anim/500_1.png");
  score_anim[1] = loadImage("assets/graphics/500_anim/500_2.png");
  score_anim[2] = loadImage("assets/graphics/500_anim/500_3.png");

  //swarmer animation
  swarmer_anim[0] = loadImage("assets/graphics/swarmer_anim/swarmer1.png");
  swarmer_anim[1] = loadImage("assets/graphics/swarmer_anim/swarmer2.png");
  swarmer_anim[2] = loadImage("assets/graphics/swarmer_anim/swarmer3.png");
  swarmer_anim[3] = loadImage("assets/graphics/swarmer_anim/swarmer4.png");

  //FONTS
  myfont = loadFont ('assets/fonts/Computerfont.ttf');
  C64_PRO = loadFont('assets/fonts/C64 Pro Mono Style.ttf');
  TT_2020 = loadFont('assets/fonts/TT2020Base-Regular.ttf');

  //SOUNDS
  player_thrust_sound = loadSound ('assets/sounds/player_ship_thrust_sound.wav');
  player_laser_sound = loadSound('assets/sounds/player_laser_sound.wav');
  human_destroyed_sound = loadSound('assets/sounds/human_destroyed_sound.wav');
  mutant_shoot_sound = loadSound('assets/sounds/mutant_shoot_sound.wav');
  enemy_explosion_sound = loadSound('assets/sounds/enemy_explosion_sound.wav');
  enemy_shoot_sound = loadSound('assets/sounds/enemy_shoot_sound.wav');
  enemy_spawn_sound = loadSound('assets/sounds/enemy_spawning_sound.wav');
  swarmer_shoot_sound = loadSound('assets/sounds/swarmer_shoot_sound.wav');
  player_explosion_sound = loadSound('assets/sounds/player_explosion_sound.wav');
  game_start_sound = loadSound('assets/sounds/game_start_sound.wav');
  human_captured_sound = loadSound('assets/sounds/human_captured_sound.wav');
  menu_screen_sound = loadSound('assets/sounds/title_screen_sound.wav');
  level_completed_sound = loadSound('assets/sounds/level_completed_sound.wav');
  human_on_ground_sound = loadSound('assets/sounds/human_on_ground_sound.wav');
  human_rescued_sound = loadSound('assets/sounds/human_rescued_sound.wav');
  human_falling_sound = loadSound('assets/sounds/human_falling_sound.wav');
  bomber_destroyed_sound = loadSound('assets/sounds/destroying_bomber_sound.wav');
  teleport_sound = loadSound('assets/sounds/teleport_sound.wav');
  pod_explode_sound = loadSound('assets/sounds/pod_explode_sound.wav');
  player_bomb_sound = loadSound('assets/sounds/player_bomb_sound.wav');
}
