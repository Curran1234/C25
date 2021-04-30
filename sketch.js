const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var bgImg

function preload(){
bgImg = loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,700,70,70);
    box2 = new Box(1000,700,70,70);
    ground = new Ground(600,height,1200,20)
    pig = new Pig(900,700);
    log = new Log(900,650,300,PI/2)

    box3 = new Box(800,600,70,70);
    box4 = new Box(1000,600,70,70);
    pig2 = new Pig(900,600);
    log2 = new Log(900,550,300,PI/2)

    box5 = new Box(900,500,70,70);
    log3 = new Log(960,450,150,-PI/7);
    log4 = new Log(850,450,150,PI/7);


    bird = new Bird(100,150)
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();

}