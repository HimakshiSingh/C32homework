class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,70,70);
    this.image = loadImage("enemy.jpg");
    this.Visiblity = 255;
  }

 display(){
   console.log(this.Visiblity);
   if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
score(){
  if(this.Visiblity<=0&&this.Visiblity>=0){
    score = score+1
  }
}


};