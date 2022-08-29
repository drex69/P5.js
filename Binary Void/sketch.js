function preload()
{
  myfont = loadFont("matrix_font.ttf");
}

function setup() {

  CENTER_SCALE();
  cnv = createCanvas(WIDTH, HEIGHT);

  frameRate(15);
  //imageMode(CENTER);
  angleMode(DEGREES);

  textFont(myfont);

  streams = [];


  degree = 0;
  for(i=0; i < 36; i++)
  {
    streams.push(new stream(degree));
    degree += 10;
  }


}

function draw() {

  background(0,15,0);
  //text(Math.floor(frameRate()), 100,100);
  for(i = 0; i < 5; i++)
  {
    //chance = Math.floor(Math.random()*1);
    //if(chance == 0)
    //{
      id = Math.floor(Math.random()*36);
      if(streams[id].lit == false)
      {
        streams[id].lit = true;
      }
    //}
  }

  for(i=streams.length-1; i>=0; i--)
  {
      streams[i].draw();
      streams[i].update();
  }
}
