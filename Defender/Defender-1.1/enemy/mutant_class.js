class mutant extends enemy
{
  constructor(x,y)
  {
    super();

    this.id = 1;
    this.x = x;
    this.y = y;
    this.speed = 5/ws; //5
    this.dir = -1;              //set to inactive
    this.score = 150;

    this.anim = false;

    this.fire = true;
    this.fire_min = 0;
    this.fire_max = 975 - player.level_difficulty; //990

    this.radius = 0;
    this.angle = 0;
    obj1_to_obj2_angle(this.x,this.y,player.x,player.y);
    this.angle = angle;
  }

  draw()
  {
    this.tempx = this.radius*sin(this.angle)+this.x;
    this.tempy = this.radius*cos(this.angle)+this.y;
    image(mutant_img,this.tempx,this.tempy);
  }

  shoot()
  {
    if(super.shoot())
    {
      obj1_to_obj2_angle(this.x,this.y,player.x,player.y);
      enemys.push(new moving_bullet(this.x,this.y,angle,this.speed,col_green,10));
      mutant_shoot_sound.play();
    }
  }

  update()
  {
    //MOVEMENT FOR MUTANT/////////////////////////////////////////////////////

    //check when to move towards player
    this.radius = this.radius + this.speed;

    this.temp = Math.floor(Math.random()*999);

    if (this.temp > 500)
    {
      obj1_to_obj2_angle(this.x,this.y,player.x,player.y);
      this.angle = angle;
      this.x = this.x + this.radius*sin(this.angle);
      this.y = this.y + this.radius*cos(this.angle);
      this.radius = 0;
    }

    //Adjust Y movement
    this.temp = Math.floor(Math.random()*3);
    if (this.temp == 0){
      this.y+=5/ws;
    }

    if(this.temp == 1){
      this.y-=5/ws;
    }
  }
}
