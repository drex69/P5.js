function preload()
{
  myfont = loadFont("matrix_font.ttf");
}

function setup()
{

  CENTER_SCALE();

  frameRate(60);

  textFont(myfont);

  lead_char = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1];

    r = 0;
    g = 15;
    b = 0;

    x = 5;
    y = 25;

    for(i=0; i<26; i++)
    {
      for(j=0; j<47; j++)
      {
        letters.push(new trail_letter(x,y,r,g,b));
        x += 25;
      }
      x = 5;
      y += 25;
    }

  }

index = 0;
stream = false;


function draw()
{

  background(0,15,0);
  //textFont(myfont);



  for(i=letters.length-1; i>=0; i--)
  {
    letters[i].draw();
    letters[i].update();
  }

  for(i=0; i<20; i++)
  {
  index = round(random(letters.length-1));

  letters[index].r = 0;//255;
  letters[index].g = 255;
  letters[index].b = 0;//255;
  letters[index].light = true;
  }


  //textSize(100/ws);
  //stroke(150,255,150);
  //fill(150,255,150);
  //center_text("B I N A R Y");
  //text("B I N A R Y",text_x,400/ws);
  //center_text("M A T R I X");
  //text("M A T R I X",text_x,500/ws);
}

////////// CENTER TEXT ////////////////////////////////////////////////////////
function center_text(text)
{
  text_w = textWidth(text);
  text_x = WIDTH - text_w;
  text_x = text_x /2;
  return text_x;
}
