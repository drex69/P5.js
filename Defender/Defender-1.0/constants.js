var ws = 1.3;

var WIDTH = 1536/ws;
var HEIGHT = 864/ws;

var world_min = 0 - WIDTH*3;
var world_max = WIDTH * 4;

var tempx;
var tempy;

var flash_delay = 0;

var i;
var j;
var my_loop;

sfx_vol = 1.0

spawn_sound_flag = 0;

game_state = 0;

stars = [];
mountains = [];
player_bullets = [];
player_explosions = [];
enemy_bullets = [];
enemy_explosions = [];
spawns = [];
enemys = [];
humans = [];

//stealer = [5,1,1,1,1];
wanderer = [10,11,12,13,14,15,16,17,18,19,20];
chaser = [0,5,5,5,5];
//humanoids = [2,2,2,2,2];

initials = [68,82,69];
digit = 0;


function keyReleased()
{
  if(game_state == 1){

    if(keyCode == (LEFT_ARROW) || keyCode == (RIGHT_ARROW)){

      player_thrust_sound.stop();

    }
  }
}

function distance(ex,ey,px,py)
{
  length1 = ex - px;
  length2 = ey - py;

  length1 = length1 * length1 //square the number
  length2 = length2 * length2 //square the number

  total = length1 + length2;  //add them together
  length = sqrt(total);       //get the square root of them.

  return length;
}

function enemy_player_vector (ex, ey, px, py)
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
