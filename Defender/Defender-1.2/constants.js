var ws = 1.3;

const fps = 60;

var WIDTH = 1536/ws;
var HEIGHT = 864/ws;

var world_min = 0 - WIDTH*3;
var world_max = WIDTH * 4;
var world_total = WIDTH * 7;

var tempx;
var tempy;

var i;
var j;
var new_x;

var level_completed = false;
var mutant_attack = false;
var mountains_enable = true;

var baiter_attack;
var baiter_attack_initial = 2500; //1500
var baiter_attack_interval = 750;

var extra_landers;
var extra_landers_initial = 750;
var extra_landers_interval = 1250;

var flash_delay = 0;

sfx_vol = 1.0

spawn_sound_flag = 0;

game_state = 0;


stars = [];
mountains = [];
player_bullets = [];
player_explosions = [];
enemy_explosions = [];

spawns = [];
enemys = [];

lander_anim = [];
mutant_anim = [];
bomber_anim = [];
pod_anim = [];
baiter_anim = [];

landers = [10,10,10,10,10,10,10,10,10,10];
bombers = [0,1,1,1,2,2,2,3,3,3];
pods =    [0,1,1,1,2,2,2,3,3,3];
humanoids = [5,5,5,5,5,5,5,5,5,5];

initials = [68,82,69];
digit = 0;

col_yellow = [255,255,0];
col_green = [0,255,0];
col_red = [255,0,0];
col_white = [255,255,255];
col_purple = [128,0,255];
col_pink = [255,0,255];
col_brown = [255,128,64];
col_blue = [0,0,255];
col_black = [0,0,0];

function Is_Level_Complete()
{
  if(game_state == 1)
  {
    if(spawns.length == 0)
    {
      level_completed = true;
      for(i=enemys.length-1; i>=0; i--)
      {
        if(enemys[i].id < 9)  //don't include humans
        {
          level_completed = false;
        }
      }
    }

    if(level_completed == true)
    {
      game_state = 2;
      level_completed_sound.play();
      level_completed = false;
    }
  }
}

function No_Humans()
{
  if(game_state == 1)
  {
    if(mutant_attack == false)
    {
      bool = false;
      count = 0;
      for(i=enemys.length-1; i>=0 ;i--)
      {
        if(enemys[i].id == 9)
        {
          count ++;
          bool = true;
        }
      }

      if(bool == false && enemys.length - count > 0)
      {
        mutant_attack = true;
        mountains_enable = false;
        for(i=enemys.length-1; i>=0 ;i--)
        {
          if(enemys[i].id >= 0 && enemys[i].id <= 5)
          {
            //play sound
            for(j=0; j<2; j++)
            {
              enemy_explosions.push(new enemy_explosion_class
              (random(0,WIDTH),random(baseline,HEIGHT),10,col_brown))
            }

            enemys.push(new mutant(enemys[i].x,enemys[i].y));
            enemy_spawn_sound.play();

            enemys[i].id = 100;

          }
        }
      }
    }
    //check if any landers are still on screen
    if(mutant_attack == true)
    {
      for(i=enemys.length-1; i>=0 ;i--)
      {
        if(enemys[i].id == 0)
        {
          enemys.push(new mutant(enemys[i].x,enemys[i].y));
          enemys[i].id = 100;
        }
      }
    }
  }
}

function keyReleased()
{
  if(game_state == 1){

    if(keyCode == (LEFT_ARROW) || keyCode == (RIGHT_ARROW)){

      player_thrust_sound.stop();

    }
  }
}

function obj1_to_obj2_distance(ex,ey,px,py)
{
  length1 = ex - px;
  length2 = ey - py;

  length1 = length1 * length1   //square the number
  length2 = length2 * length2   //square the number

  total = length1 + length2;    //add them together
  length = sqrt(total);         //get the square root of them.

  return length;
}

function obj1_to_obj2_angle(ex, ey, px, py)
{

    tempx = px-ex;
		tempy = py-ey;

    angle = atan2(tempx,tempy);

		return angle;
}

function center_text(text)
{
  text_w = textWidth(text);
  text_x = WIDTH - text_w;
  text_x = text_x /2;
  return text_x;
}

function center_scale_window()
{
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
}
