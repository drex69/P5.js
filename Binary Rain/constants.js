var ws = 1.3;

var WIDTH = 1536/ws;
var HEIGHT = 864/ws;

var tempx;
var tempy;

var temp;

var letters = [];

function CENTER_SCALE()
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
