let circles=[];
let max_circles;
let i;

function setup()
{
  createCanvas(windowWidth, windowHeight);

  angleMode(DEGREES);

  frameRate(60); 

  max_circles=50;
   
  for (i=0; i < max_circles; i++)
  {
  circles[i] = new circle();
  }
}


function draw()
{
  background(0);
  //stroke (255);
  //fill(255);
  //strokeWeight(2);
  //textSize(50);
  //textAlign(CENTER);
  //text ('Welcome to Drexs Corner',windowWidth/2,100);
    
  for (i=0; i < max_circles; i++)
  {
  circles[i].display();
  circles[i].move();
  }
}
