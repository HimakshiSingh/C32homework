

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score =0

function preload() {
    backgroundImg = loadImage("Wall AB.jpg");
}

function setup(){
    //creating canvas
    var canvas = createCanvas(1200,400);
    //creating engine and putting world inside the engine
    engine = Engine.create();
    world = engine.world;
    //Making Ground
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    //Making Boxes
    box1 = new Box(6000,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(860,280,70,70);
    box5 = new Box(896,160,70,70);
    box6 = new Box(732,160,70,70);
    box7 = new Box(920,200,70,70);
    box8 = new Box(860,190,70,70);
    box9 = new Box(750,320,70,70);
    box10 = new Box(750,280,70,70);
    box11 = new Box(700,195,70,70);
    //Making Pigs 
    pig1 = new Pig(819,160);
    pig2 = new Pig(700,200);
    pig3 = new Pig(750,340);
    pig4 = new Pig(750,300);
    pig5 = new Pig(700,190);
    pig6 = new Pig(860,320);
    pig7 = new Pig(920,280);
    pig8 = new Pig(860,240);
    pig9 = new Pig(920,190)
    //Making Logs
    log1 = new Log(810,330,300,PI/1);
    log3 =  new Log(811,180,350,PI/2);
    log4 = new Log(920,180,50, PI/2);
    log5 = new Log(700,189,130,PI/2);
    //Making Bird
    bird = new Bird(200,50);
    //Making SlingShot
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    //setting a background
    background(backgroundImg);
    //updating engine
    Engine.update(engine);
    //displaying grounds
    ground.display();
    platform.display();
    //displaying Boxes
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    //displaying pigs
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    //displaying Logs
    log1.display();
    log3.display(); 
    log4.display();
    log5.display();
    //displaying Bird
    bird.display();
    //displaying SlingShot
    slingshot.display();  
    //displaying Score
     pig1.score();
     pig2.score();
     pig3.score();
     pig4.score();
     pig5.score();
     pig6.score();
     pig7.score();
     pig8.score();
     pig9.score();
     //showing texts
     textSize(22)
     fill ("purple")
     text ("score:"+score,1000,20)  
     text ("press 'space' to play an extra chance",250,20)

    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body,{x: 200 , y: 100});
        slingshot.attach(bird.body);
    }
}