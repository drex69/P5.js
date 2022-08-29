function preload()
{
  myfont = loadFont("matrix_font.ttf");
}

function setup()
{

  CENTER_SCALE();

  frameRate(15);

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


function draw()
{

  background(0,15,0);

  //textFont(myfont);

  for(i=letters.length-1; i>=0; i--)
  {
    letters[i].draw();
    letters[i].update();
  }

  stream();

}

function stream()
{
  stroke(255,255,255);
  fill(255,255,255);

  //Pick a random column (0 > 46)
  column = round(random()* 46);

  //Check if column is not in use,
  //If not, save the column number
  if(lead_char[column] == -1)
  {
    lead_char[column] = column;
  }

  //Check all columns, and update if necessary
  for(i=lead_char.length-1; i>=0; i--)
  {
    if(lead_char[i] > -1)
    {
      temp = lead_char[i];

      letters[temp].r = 0;//255;
      letters[temp].g = 255;
      letters[temp].b = 0;//255;
      letters[temp].light = true;

      lead_char[i] = lead_char[i] + 47;

      if(lead_char[i] >= 1222)
      {
        lead_char[i] = -1;
      }
    }
  }
}
