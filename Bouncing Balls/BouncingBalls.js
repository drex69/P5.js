let max_balls;
let balls=[];
let i;

function setup()
{
  createCanvas(windowWidth, windowHeight);

  frameRate(60); 

  max_balls=100;
   
  for (i=0; i < max_balls; i++)
  {
  balls[i] = new ball();
  }

}


function draw()
{
  
  background(115,175,175);
    
  for (i=0; i < max_balls; i++)
  {
  balls[i].display();
  balls[i].move();
  }
 
}
