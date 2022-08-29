class enemy_class

{

  constructor(x,y,id)
  {


    this.id = id;

    if(this.id == 0)  //WANDERER
    {
      this.x = x
      this.y = y
      this.speed = random(2,3);
      this.speed = this.speed/ws;
      this.fire = 0;
      this.dir = Math.floor(Math.random()*2);
      this.score = 50;
      this.radius = 0;
      this.angle = 0;
      this.predict_fire = 995 - player.level_difficulty;
      this.temp = random(0,5);  //perlin noise
      this.perlinY_max = this.y;
      this.perlinY_min = this.y;
    }

    if(this.id == 1)  //CHASER
    {
      this.x = x
      this.y = y
      this.speed = 5/ws;
      this.fire = 0;

      this.score = 100;
      this.radius = 0;
      this.predict_fire = 950;//990

      enemy_player_vector(this.x,this.y,player.x,player.y);

      this.angle = angle;
    }

    if(this.id == 2){

      this.x = x;
      this.y = y;
      this.speed = 4.0/ws;
      this.fire = 0;
      this.score = 150;
      this.radius = 0;
      this.predict_fire = 995;

      this.captured = 0;
      this.human_id = 0;


      //enemy_player_vector(this.x,this.y,humans[0].x,humans[0]);

      //this.angle = angle;

    }

    this.min = HEIGHT/7;
    this.max = HEIGHT-human_img.height-enemy_img.height/2;

  }

  draw()
  {

    if (this.id == 0)
    {
      image(enemy_img,this.x,this.y);
    }

    if (this.id == 1)
    {

      this.tempx = this.radius*sin(this.angle)+this.x;
      this.tempy = this.radius*cos(this.angle)+this.y;
      image(enemy_img,this.tempx,this.tempy);
    }

    if (this.id == 2)
    {

      this.tempx = this.radius*sin(this.angle)+this.x;
      this.tempy = this.radius*cos(this.angle)+this.y;
      image(enemy_img,this.tempx,this.tempy);
    }

  }

  update()
  {

    //CHECK IF ENEMYS, HIT THE BOUNDARIES

    if (this.x < world_min)
    {
      this.x = world_max;
    }

    if (this.x > world_max)
    {
      this.x = world_min;
    }

    if (this.y < this.min)
    {
      this.y = this.min;
    }

    if (this.y > this.max)
    {
      this.y = this.max;
    }


    //UPDATE MOVEMENT

    if (player.dir == 0)
    {
      if (this.dir == 0)
      {
        this.x += player.x_speed;
        this.x -= this.speed;//

      }
      else if (this.dir == 1)
      {
        this.x += player.x_speed;
        this.x += this.speed;//
      }
      else{
        this.x += player.x_speed;
      }
    }

    if (player.dir == 1)
    {
      if (this.dir == 0)
      {
        this.x -= player.x_speed;
        this.x -= this.speed;//
      }
      else if (this.dir == 1)
      {
        this.x -= player.x_speed;
        this.x += this.speed;//
      }
      else{
        this.x -= player.x_speed;
      }
    }

    //CHECK WHEN ENEMYS WILL FIRE

    if (this.x > 0 && this.x < WIDTH)
    {
      this.fire = Math.floor(Math.random()*999);
      if (this.fire > this.predict_fire)
      {

        enemy_player_vector(this.x,this.y,player.x,player.y);
        enemy_bullets.push(new enemy_bullet_class(this.x,this.y,angle,this.speed));
        enemy_shoot_sound.play();

      }
    }

    //MOVEMENT FOR WANDERER////////////////////////////////////////////////////


    if(this.id == 0)
    {

      //Adjust Y movement

      // this.temp = Math.floor(Math.random()*3);
      // if (this.temp == 0){
      //   this.y+=1/ws;
      // }
      //
      // if(this.temp == 1){
      //   this.y-=1/ws;
      // }

      //Random y postioning with perlin noise
      //this.y = map(noise(this.temp),0,1,HEIGHT,HEIGHT-HEIGHT);
      this.y = map(noise(this.temp),0,1,this.perlinY_min,this.perlinY_max);
      this.temp += 0.003;

      if(this.perlinY_min > this.min){
        this.perlinY_min --;
      }
      if(this.perlinY_max < this.max){
        this.perlinY_max ++;
      }

    }

    //MOVEMENT FOR CHASER/////////////////////////////////////////////////////

    if (this.id == 1)
    {

      //CHECK WHEN TO MOVE TOWARDS PLAYER

      this.radius = this.radius + this.speed;

      this.temp = Math.floor(Math.random()*999);

      if (this.temp > 500)
      {

        enemy_player_vector(this.x,this.y,player.x,player.y);
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

    //MOVEMENT FOR STEALER/////////////////////////////////////////////////////

    // if(this.id == 2){
    //
    //   if (keyIsDown (LEFT_ARROW))
    //   {
    //     this.x = this.x + this.speed + player.speed;
    //   }
    //
    //   if (keyIsDown (RIGHT_ARROW))
    //   {
    //     this.x = this.x - this.speed - player.speed;
    //   }
    //
    //   if(this.captured == 0){
    //
    //     //Find nearest human
    //
    //     this.nearest = 1000;
    //     for(i=humans.length-1;i>=0;i--){
    //
    //       distance(this.x,this.y,humans[i].x,humans[i].y)
    //
    //       if(length < this.nearest){
    //         this.nearest = length;
    //         this.human_id = i;
    //       }
    //     }
    //
    //     this.radius = this.radius + this.speed;
    //
    //     //Get angle for path line to human
    //
    //     enemy_player_vector(this.x,this.y,humans[this.human_id].x,humans[this.human_id].y);
    //     this.angle = angle;
    //     this.x = this.x + this.radius*sin(this.angle);
    //     this.y = this.y + this.radius*cos(this.angle);
    //     this.radius = 0;
    //
    //     //Check if stealer has collided with human
    //
    //     distance(this.x,this.y,humans[this.human_id].x,humans[this.human_id].y)
    //
    //     if(length <= 30)
    //     {
    //       human_captured_sound.play();
    //       humans[this.human_id].captured = 2;
    //       this.captured = 2;
    //
    //     }
    //   }
    //
    //   if(this.captured == 2){
    //
    //     if(this.y <= 100){
    //       this.id = 1;
    //       this.speed = 8/ws;          //turn stealer into chaser
    //       this.predict_fire = 990;
    //       this.captured = 0;
    //       humans.splice(this.human_id,1);
    //     }
    //     else{
    //       this.y = this.y - this.speed;
    //       humans[this.human_id].y = humans[this.human_id].y - this.speed;
    //       humans[this.human_id].x = this.x;
    //     }
    //   }
    // }


  } // move

} // enemy class
