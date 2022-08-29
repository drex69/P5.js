var ws = 1.0;

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
var spawn_sound_flag = 0;
var mutant_attack = false;
var mountains_enable = true;

var baiter_attack;
var baiter_attack_initial =  2500;
var baiter_attack_interval = 750;

var extra_landers;
var extra_landers_initial = 750;
var extra_landers_interval = 1250;

var flash_delay = 0;

var JOY_CONNECT = false;

sfx_vol = 1.0

var green_button_pressed = false;

game_state = -1;

stars = [];
mountains = [];
player_bullets = [];
player_explosions = [];
enemy_explosions = [];
spawns = [];
enemys = [];



scores = [];

lander_anim = [];
mutant_anim = [];
bomber_anim = [];
pod_anim = [];
swarmer_anim = [];
baiter_anim = [];
score_anim = [];

hiscores = [25000,"LEE",20000,"LJW",15000,"SLM",10000,"TOP",5000,"GUN",0,"TEMP"];

landers = [];
bombers = [];
pods = [];
humanoids = [];

for(i = 0; i < 100; i ++)
{
  landers[i] = 10;
  bombers[i] = 2;
  pods[i] = 2;
  humanoids[i] = 5
}

start_screen_move = ["r","l","l","r"]

//initials = [68,82,69];
initials = [76,69,69];
digit = 0;

col_yellow = [255,255,0];
col_green = [0,255,0];
col_dark_green = [0,150,0];
col_red = [255,0,0];
col_white = [255,255,255];
col_purple = [128,0,255];
col_pink = [255,0,255];
col_brown = [255,128,64];
col_blue = [0,0,255];
col_light_blue = [50,150,250]
col_black = [0,0,0];
col_orange = [255,150,0];
col_grey = [200,200,200];
col_dark_grey = [100,100,100];

var HI_SCORE = "";
var hiscore_sort_completed;

////////// HISCORE SORT ///////////////////////////////////////////////////////
function hiscore_sort()
{
  var counter = 0;

  while(counter < 9)
  {
    //if this score is lower than THE next score, then swap
    //the score, and the names around.
    if(hiscores[counter] < hiscores[counter+2])
    {
      var temp_score = hiscores[counter];
      var temp_name = hiscores[counter+1];

      hiscores[counter] = hiscores[counter+2];
      hiscores[counter+1] = hiscores[counter+3];

      hiscores[counter+2] = temp_score;
      hiscores[counter+3] = temp_name;
    }
    counter += 2;
  }

  //if all score are in descending order, then sort is complete.
  if(hiscores[0] > hiscores[2] && hiscores[2] > hiscores[4] && hiscores[4] > hiscores[6] &&
     hiscores[6] > hiscores[8])
     {
       hiscore_sort_completed = true;
       save_to_localstorage()
     }
}

////////// ZERO PADDING //////////////////////////////////////////////////////
//pad out score with extra zeros at the start
function zero_padding(num)
{
  return num.toString().padStart(8, "0");
}

////////// READ FROM LOCAL STORAGE ///////////////////////////////////////////
//read hiscore from local storage
function read_from_localstorage()
{
  for(i=localStorage.length-1; i>=0; i--)
  {
    temp_key = localStorage.key(i);
    //localstorage puts everything in a random order, so put it back into the
    //array in the correct order, using the key id no.
    hiscores[temp_key] = localStorage.getItem(temp_key);
  }
}

////////// SAVE TO LOCAL STORAGE /////////////////////////////////////////////
//save hiscore to local storage
function save_to_localstorage()
{
  for (i=0; i<hiscores.length; i++)
  {
    //store myarray in the key HI_SCORE0,1,2 etc.....
    localStorage.setItem(HI_SCORE+i,hiscores[i]);
  }
}

////////// IS LEVEL COMPLETE //////////////////////////////////////////////////
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

////////// MO HUMANS //////////////////////////////////////////////////////////
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

////////// KEY RELEASED //////////////////////////////////////////////////////
function keyReleased()
{
  if(game_state == 1)
  {
    if(keyCode == (LEFT_ARROW) || keyCode == (RIGHT_ARROW))
    {
      player_thrust_sound.stop();
    }
  }
}

////////// OBJ1 > OBJ2 DISTANCE ///////////////////////////////////////////////
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

////////// OBJ1 > OBJ2 ANGLE //////////////////////////////////////////////////
function obj1_to_obj2_angle(ex, ey, px, py)
{

    tempx = px-ex;
		tempy = py-ey;

    angle = atan2(tempx,tempy);

		return angle;
}

////////// CENTER TEXT ////////////////////////////////////////////////////////
function center_text(text)
{
  text_w = textWidth(text);
  text_x = WIDTH - text_w;
  text_x = text_x /2;
  return text_x;
}

////////// CENTER & SCALE WINDOW //////////////////////////////////////////////
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
