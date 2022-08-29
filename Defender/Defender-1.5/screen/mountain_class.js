class mountain_class
{

  constructor(shape,x1,y1,x2,y2,x3,y3)
  {

    this.shape = shape;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;

    this.speed = 0/ws;
    this.dir = 1;

  }

  draw()
  {

    strokeWeight(3);
    stroke(139,69,19);

    if(this.shape > 0){
      line(this.x1,this.y1,this.x3,this.y3);
    }

    else{
      line(this.x1,this.y1,this.x2,this.y2);
      line(this.x2,this.y2,this.x3,this.y3);
    }

  }

  update()
  {

    //MOVEMENT/////////////////////

    if(player.dir == 0){
    this.dir = 1;

      this.x1 += player.x_speed;
      this.x2 += player.x_speed;
      this.x3 += player.x_speed;

    }

    if(player.dir == 1){
    this.dir = 0;

      this.x1 -= player.x_speed;
      this.x2 -= player.x_speed;
      this.x3 -= player.x_speed;

    }
}

  go_off_screen(){

    if(this.dir == 0){

      if(this.x3 <= world_min){
        return true;
      }
      else{
        return false;
      }
    }

    if(this.dir == 1){

      if(this.x1 >= world_max){
        return true;
      }
      else{
        return false;
      }
    }

  }

} //END OF CLASS
