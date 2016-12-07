var imgFish; 
var fish = [];
var fish2 = [];
var imgs = [];
var weapon;
var status; 
var message;
var score;// keep score
var phase;// control game phase
var titlePage, introScreen;
var font; //declare font var
var newfont;
var table;

// var delay;
// var backgroundColor;
// var isOverRectangle;

function preload(){
  grenade=loadSound("grenade.mp3");
  creepyclown8=loadImage("creepyclown8.png");
  evil= loadImage ("evil.jpg");
   animal=loadImage("creepyclown13.png");
  melclown=loadImage("melclown.png");
  creepyclown7=loadImage("creepyclown7.png");
  videogame=loadImage("videogame.png");
  zenonback=loadImage("hotwarrior.png");
  newoutfit1=loadImage("newoutfit1.png");
   newoutfit2=loadImage("newoutfit2.png");
   newoutfit3=loadImage("newoutfit3.png");
   introsong=loadSound("introsong.mp3");
   zenon2=loadImage("melcharacter2edit.png");
  // alienintro=loadSound("alienintro.mp3");
  // grenade= loadSound("grenade.mp3");
  commander=loadImage("cat2.png");
  grenade2=loadImage("grenade.png");
  explode= loadImage("explode.png");
    introgun=loadImage('gun3.png');
   introgun1=loadImage('introgun1.png');
   introgun2=loadImage('gun4.png');
   introgun3=loadImage('gun6.png');
	imgFish = loadImage("alien9.png");
	 powerup=loadSound("powerup.mp3");
    weapon= loadImage("gun.png");
	polarbear= loadImage("spaceship4.png")
// 	imgFish3=loadImage("fish1.png");
melninja=loadImage("melninja.png");
ninja1=loadImage("ninja1.png");
ninja2=loadImage("ninja2.png");
car=loadImage("car.png");
justdance=loadImage("justdance2.png");
hacked=loadFont("DeathStar.otf");
  backgroundgif= loadImage("stars3.jpg");
  background1=loadImage("stars3.jpg");
  // monster = loadSound("monster.mp3");
 zenon=loadImage("melissagamecharacteredit.png");
sega=loadFont("sega.ttf");
  coral= loadImage("planet.png");
egyptianmel=loadImage("egyptmel.png");
egyptbackground=loadImage("egyptbackground.jpg");
   locked=loadImage('locked.png');
   unlocked=loadImage('unlocked.png');
   treasure=loadImage("alien7.png");
   treasure2=loadImage("alien7.png");
   shipview1=loadImage("inside3.png");
   stuff=loadImage("melspacewarrior.png");
   microbe=loadSound("microbe.mp3");
  // hotwarrior=loadImage("hotwarrior.png");
   //new
   newfont =loadFont("market.ttf");
   earth=loadImage("stars3.jpg");
   nelly= loadSound("rinzler.mp3");
   greencloud= loadImage("introgun1.png");
   bluecloud= loadImage("introgun1.png");
   redcloud=loadImage("introgun1.png");
      greencloud1= loadImage("introgun1.png");
   bluecloud1= loadImage("introgun1.png");
   redcloud1=loadImage("introgun1.png");
  laser= loadImage("laser.png");
  lasergun=loadSound("lasergun.mp3");
  stars=loadImage("stars.jpg");
map1=loadImage("stars.jpg");
}

function setup() {
	createCanvas(800,600);
	//set game status and score
	phase = 0; 
	textFont(newfont);
  score = 0;
  frameCount=0;
   x= width/ 2+150;
  y= 0;
	

	for(var i=0; i<8; i++){
		fish[i] = new Fish();
	}
	    for(var i=0; i<15; i++){
		fish2[i] = new Fish2();
	}

	 
 	this.x = random(0, width);
	this.y = random(0, height);

	this.display = function(){
		imageMode(CENTER);
		image(imgFish, this.x, this.y);
	}

	this.move = function(){
	
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}
	this.poke = function(){
		if(mouseX > (this.x -30) && mouseX < (this.x + 30) && mouseY > (this.y -60) && mouseY < (this.y + 60)){
				console.log(this.x + ", " + this.y);
				return true;
		}else{
			return false;
		}
	}
  
  // stop sound
  nelly.stop();
  
  // play button
  playbutton = createButton('Music');
  playbutton.position(25, 25);
  playbutton.mousePressed(playsound);
  
  // stop button
  stopbutton = createButton('No Music');
  stopbutton.position(75, 25);
  stopbutton.mousePressed(stopsound);

 
}
function draw() {
  
   if (phase === 0) {
    displayTitle();
    // introsong.play();
  } 
  // else if (phase == 1) {
  //   Intro0();
  //   introsong.pause();
  //       println(phase);
  // }
  else if (phase == 1) {
    Closet();
    // microbe.play();
        println(phase);
  }
  // else if (phase == 3) {
  //   Intro();
  //       println(phase);
  // } 
  // else if (phase == 2) {
  //   Intro();
  //       println(phase);
  // } 
  // else if (phase == 2) {
  //   Egypt();
  //       println(phase);
  // } 
  else if (phase == 2) {
    Game();
    println(phase);
    if(score > 5){
      Level2();
    }
  } 
  else if (phase == 3) {
    Level2();
        println(phase);
  } 
  else if (phase == 4) {
    Game2();
        println(phase);
if(score==12){
      Level3();
    }
  } 
  else if (phase == 5) {
    Level3();
        println(phase);
  } 
  else if (phase == 6) {
    Ninja();
        println(phase);
  }
  else if (phase == 7) {
    Game3(); 
    println(phase);
    // if(frameCount ==1500){
    //   GameOver();
    // }
  } 
  // else if (phase == 8) {
  //   Closet(); 
  //   println(phase);
  //   // if(frameCount ==1500){
  //   //   GameOver();
  //   // }
  // }
  else if (phase ==8){
    Closet2();
  }

  
}
function keyPressed(){
  if (keyIsDown (RIGHT_ARROW)) {
  phase++;
  } 
  if (keyIsDown (LEFT_ARROW)) {
  phase--;
  } 
  // if(phase == 7 &&  keyIsPressed){
  //   Closet2();
  //   phase=phase+1;
  // }
}
function Fish(){

	this.x = random(0, width);
	this.y = random(0, height);

	this.display = function(){
		imageMode(CENTER);
		image(imgFish, this.x, this.y);
	}

	this.move = function(){
	
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}
	this.poke = function(){
		if(mouseX > (this.x -30) && mouseX < (this.x + 30) && mouseY > (this.y -60) && mouseY < (this.y + 60)){
				console.log(this.x + ", " + this.y);
				return true;
		}else{
			return false;
		}
	}
}



function Fish2(){

	this.x = random(0, width);
	this.y = random(0, height);


	this.display = function(){
		imageMode(CENTER);
		image(creepyclown7, this.x, this.y);
	}


	this.move = function(){
	
		this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
	}


	this.poke = function(){
		if(mouseX > (this.x -30) && mouseX < (this.x + 30) && mouseY > (this.y -60) && mouseY < (this.y + 60)){
				console.log(this.x + ", " + this.y);
				return true;
		}else{
			return false;
		}
	}
}
function mousePressed() {
	for (var i = 0; i < fish.length; i++) {
    	if (fish[i].poke()) {
      		fish.splice(i, 1);
      		score++;
      		println(score);
      		image(laser, mouseX, mouseY);
      
    	}

  }
  	for (var i = 0; i < fish2.length; i++) {
    	if (fish2[i].poke()) {
      		fish2.splice(i, 1);
      		score++;
      		println(score);
      		image(laser, mouseX, mouseY);
      
    	}

  }

}
// function keyPressed() {
  // if (phase == 0 && keyCode == ENTER) {
  //   phase ==1;
  //   message = "";
  // }
  // if (keyIsDown (ENTER)) {
  // phase++;
  // } 
// if (keyIsDown (RIGHT_ARROW)) {
//   phase++;
//   } 
//   if (keyIsDown (LEFT_ARROW)) {
//   phase--;
//   } 
  // if (keyCode == SHIFT) {
  //   phase++;
  // println("shift");
  // } 
  // if (keyCode == LEFT_ARROW) {
  //   phase--;

  // } 
  // if (keyCode == TAB) {
  //   phase++;
  // } 
// }

function playsound() 
{
  if(nelly.isPlaying() == false) 
  {
    nelly.play();
  } 
}
 
 //a stop button in case that soundtrack gets too annoying
function stopsound() 
{
  if(nelly.isPlaying() == true) 
  {
    nelly.pause();
  } 
}

// Introduction
function displayTitle() {
	background(0);

// 	alienintro.play();
  image(videogame, 30, 35);
     textSize(32);
     fill(255);
     textFont(sega);
     textSize(32);
    text("Intergalactic Devastation:", 72, 135);
    textSize(35);
    textFont(hacked);
    text("By Melissa Moonie",110, 196);
    textSize(28);
    text("Press the RIGHT ARROW key to play.", 145, 385);

  
    image(zenon, 500, 75);
  // if (keyIsDown(RIGHT_ARROW)) {
  //   phase++;
    	
  	
  // }
  // if (keyIsDown(LEFT_ARROW)) {
  //   phase--;
    	
  	
  // }
}

function Egypt(){
  background(0);
  background(egyptbackground);
     textSize(32);
     fill(255);
     image(car, x, 0);
    image(commander, x, 350);
     x = x-1;
  if (x < 0){
    x = -300 ;
  } 
  
  // if (x < 200){
  //   x = x+2 ;
  // }
  image(egyptianmel, 100, 200);
  // text("A Message from Commander Plank", 300, 50);
  //   text("              Zenon Karr, we need your assistance!\n    Aliens are attacking the space station and we need\n you to destroy them! If you succeed, you'll get a private\n    concert with your favorite boy band, Microbe!\n ",10, 400);
  //   text("     Press the right arrow key to play.", 75, 560);
    fill(255);
    text(255);
  if (keyIsDown(RIGHT_ARROW)) {
    phase++;
}
 if (keyIsDown(LEFT_ARROW)) {
    phase--;
    	
  	
  }
}
function Game (){
	background(0);

	image (earth, 350, 450);
 

	
	for (var i = 0; i < fish.length; i++) {
    	fish[i].display();
    	fish[i].move();
    	
		fill(255);
	textSize(32);
	textFont(hacked);
	text("Score: " + score + "", 465, 60 );
	
    	 if(score > 2){
       image(coral, 100,500);
    this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);

}
	}    	 
    
    	 if(score>1){
    	   //translate(width/2, height/2);
// rotate(PI/3.0);
// rotateY(PI);
  push();

    translate(100, 100);
    rotate(radians(30));
    // scale(0.5);

  	    image(polarbear, x, y);
  pop();
    y = y-.2;
  if (y < 0){
    y = 700 ;
  }
  
  }


  
   


     	for (var i = 0; i < fish.length; i++) {
    	fish[i].display();
    	fish[i].move();
     	}
  		
	if(score > 5){
    	  phase++;
    	 // Level2();
    	  
    	}
  //   	 if (keyIsDown(LEFT_ARROW)) {
  //   phase=(phase-2);
    	
  	
  // }
    	image(shipview1, 380,400);
    	image(zenonback, 350,520);
    			cursor(HAND);
	image(greencloud,mouseX, mouseY);
	if(mouseIsPressed){
	image(laser, mouseX, mouseY);
	lasergun.play();
	}
	if(keyIsPressed){
	  phase--;
	}
    	}

function Game2 (){
background(0);
	image (evil, 390, 250);
 

	
	for (var i = 0; i < fish2.length; i++) {
    	fish2[i].display();
    	fish2[i].move();
    	 if(score > 2){
       image(creepyclown8, 100,500);
    this.x = this.x + random(-1, 1);
		this.y = this.y + random(-1, 1);
    	 }
    	 if(score>1){
  	    image(animal, x, y);
  
    y = y-.2;
  if (y < 0){
    y = 700 ;
  }
  }

	}
  
   


     	for (var i = 0; i < fish2.length; i++) {
    	fish2[i].display();
    	fish2[i].move();
     	}
  		
  	cursor(HAND);
	image(greencloud,mouseX, mouseY);
	if(mouseIsPressed){
	image(laser, mouseX, mouseY);
	lasergun.play();
	}
	fill(255);
	textSize(32);
	textFont(hacked);
	text("Score: " + score + "", 465, 60 );
// 	text("Time:" +frameCount+ "",300, 110);
	if(score ==14){
    	  Level3();
    	  
    	}
    	 if (keyIsDown(LEFT_ARROW)) {
    phase--;
    	
  	
  }
    // 	image(shipview1, 380,400);
    // 	image(zenonback, 350,520);
}

function Game3(){
	background(0,0,255);

	image (justdance, 400, 250);
	
	image(car, x, y);
  	 
    y = y-.5;
  if (y < 0){
    y = 700 ;
  }

	cursor(HAND);
	image(grenade2, mouseX, mouseY);

	
	if(mouseIsPressed){
	image(explode, mouseX, mouseY);
  grenade.play();
score = score + 4357;
}
	fill(255);
	textSize(32);
	textFont(hacked);
	text("Score: " + score + "", 465, 60 );
	text("Timer: "+frameCount+ "",300, 110);
// 	if(frameCount==1500){
//     	  phase++;
//     	  GameOver();
//     	 // tada.play();

// if(keyIsDown(DOWN_ARROW)){
//   background(0);
//   image(map1,200,200);
//   // scale(1.0);
//   phase=phase - 6;
//   // windowResized()
// scale(0.4);
// imageMode(CENTER);
// }
text("GAME OVER! Reload to play again!", 20, 508);
}
  function windowResized() {
  resizeCanvas(windowWidth, 1000);
}	

// function Intro(){
// 	background(0);
// // 	image (france, 0, 300);
//     image (background1, 0, 0);
//     textSize(24);
//     fill(255);
//     // textFont(newfont);
//     text("Aliens are threatening to enslave the human race\n The fate of humanity lies in your hands", 70, 100);
//     text("Click on a ray gun to continue!",70, 450);
//     textSize(40);
//     text("Choose your weapon!", 70, 390);
//     fill(220);
//     rect(99,183, 565, 90);
//     image(introgun,100, 200);
//     image (introgun1,210, 185);
//     image(introgun2, 490, 200);
//     image(introgun3, 330, 200);

//     image(locked, 333, 175);
//     image(locked, 494, 175);

//     image(unlocked,100, 180);
//     image (unlocked,210, 180);
    
//     if(mouseX > 100 && mouseX <200 && mouseIsPressed){
//       cursor(HAND);
// 	image(weapon,mouseX, mouseY);
// 		powerup.play();
// 	phase++;
// //delay(350);
//     }
//     if(mouseX > 210 && mouseX <310 && mouseIsPressed){
//       cursor(HAND);
// 	image(introgun,mouseX, mouseY);
	
// 	powerup.play();
// 	phase++;
// 	//delay(350);
//     }
    
  
  // if (keyIsDown(TAB)&& phase== 1) {
  //   phase++;
  
  // }
// }

    
//     if(mouseX > 100 && mouseX <200 && mouseIsPressed){
//       cursor(HAND);
// 	image(greencloud,mouseX, mouseY);
// 	phase++;
// 	//delay(350);
//     }
//     if(mouseX > 210 && mouseX <310 && mouseIsPressed){
//       cursor(HAND);
// 	image(greencloud,mouseX, mouseY);
	
// 	phase++;
// 	//delay(350);
//     }
    

function Level2(){
	background(0);
     textSize(30);
     fill(255);
     textFont(newfont);
    text("Congratulations! You destroyed "  + score +  " evil aliens.",10, 180);
    text("Press the RIGHT ARROW key to continue! Good luck!", 10, 480);
    image(treasure, x, 350);
    x = x-1;
  if (x < 0){
    x = -300 ;
  }
    imageMode(CENTER);
  if (keyIsDown(RIGHT_ARROW)) {
    // phase--;
    // Closet();
    phase++;
  
  }
  if (keyIsDown(ENTER)) {
    // phase--;
    // Closet();
    phase++;
  
  }
  if (keyIsDown(LEFT_ARROW)) {
    // phase--;
    // Closet();
    
    phase--;
  
  }
}

function Level3(){
	background(0);
     textSize(26);
     fill(255);
     textFont(newfont);
    text("Congratulations! You destroyed " + score + " murderous clowns.",10, 180);
    text("Press the RIGHT ARROW key to continue! Good luck!", 10, 480);
    image(treasure, x, 320);
    x = x-1;
  if (x < 0){
    x = -300 ;
  }
    imageMode(CENTER);
  // if (keyIsDown(UP_ARROW)) {
  //   phase++;
  //   Game3();
    
  
  
  // }
}

function GameOver(){
	background(0);
// 	trombone.play();
	noLoop();
  fill(255);
  text("Score: " + score + "", 465, 60 );
  text("Intergalactic Devastation! YOU LOSE! \n Thanks for playing!",0,300);
  	image(car, x, y);
  	 
    y = y-.5;
  if (y < 0){
    y = 700 ;
  }
  // phase ==0;
// if (keyIsDown(LEFT_ARROW)) {
//     phase--;
    	
  	
//   }
}
function Closet(){

    image(zenon, 100, 100);
  textSize(50);
    fill(173,0,199);
    text("Choose Your Glamorously Galactic Space-garb", 30, 30);
  textSize(20);
  // interactivity
  if (mouseX <= width/6 + 2 * (width/6) && mouseX >= width/6 + width/6) {
    background(map1);
    fill(17, 219, 0);
    textSize(40);
    // text(table.get(1, 1), 30, 205);
    // textSize(20);
    // text(table.get(2, 1), 30, 235);
    image(melclown, 310, 90);
    textSize(50);
    text("Circus Adventures", 290, 72);
    if(mouseIsPressed){
      phase= phase + 3;
      Game2();
    }
  } else if (mouseX <= width/6 + 3 * (width/6) && mouseX >= width/6 + 2 * (width/6)) {
    background(map1);
    fill(17, 219, 185);
    textSize(40);
    // text(table.get(1, 2), 30, 205);
    // textSize(20);
    // text(table.get(2, 2),30, 235);
    image(stuff, 310, 125);
    textSize(50);
    text("Space Wars", 190, 72);
     if(mouseIsPressed){
      phase= phase + 1;
      Game();
    }
  } else if (mouseX <= width/6 + 4 * (width/6) && mouseX >= width/6 + 3 * (width/6)) {
    background(map1);
    fill(255, 0, 119);
    // textSize(40);
    // text(table.get(1, 3), 35, 205);
    // textSize(20);
    // text(table.get(2, 3), 30, 235);
    image(egyptianmel, 390, 112);
    textSize(50);
    text("Egyptian Adventures", 190, 72);
    // if(mouseIsPressed){
    //   phase++;
    //   Egypt();
    // }
  } else if (mouseX <= width/6 + 5 * (width/6) && mouseX >= width/6 + 4 * (width/6)) {
    background(map1);
    fill(17, 219, 132);
    textSize(40);
    // text(table.get(1, 4), 30, 205);
    // textSize(20);
    // text(table.get(2, 4), 30, 235);
    image(zenon2, 510, 183);
    // scale(0.8);
   
  }  
  else if (mouseX <= width/6 + 6 * (width/6) && mouseX >= width/6 + 5 * (width/6)) {
    background(map1);
    textSize(40);
    fill(173,0,199);
    // text(table.get(1, 5), 30, 205);
    // textSize(20);
    // text(table.get(2, 5), 30, 235);
    image(zenon2, 420, 105);
  //     x = x-1;
  // if (x < 0){
  //   x = -300 ;
  // }
  } else {
    // background(7,176,173);
    // image(afghanistan, 50, 50);
    background(map1);
    // noFill();
     
  textSize(30);
  fill(0);
  //     text("Population:", 20, 175);
  // text("Literacy Rate:", 450, 175);
    
  textSize(40);
  fill(173,0,199);
    // text(table2.get(4, 2), 215, 175);
    // text(table2.get(4, 9), 650, 175);
  }
    // heading 
  
  textSize(30);
  fill(0);
  // text("Languages of Afghanistan...", 100, 130);
   
  textSize(15);
  fill(100, 100, 100);
  text("", width-505, height/2 + 105);
  text("Option 1", width-445, height/2 + 105);
  text("Option 2", width-345, height/2 + 105);
  text("Option 3", width-245, height/2 + 105);
  text("Option 4", width-115, height/2 + 105);
  image(zenon, 60, 200);
  // image(egyptianmel, 100, 200);
  // heading 
  
  textSize(30);
noStroke();
 fill(220,220,220, 39);
  rect(20, 65, 600, 100);
 fill(173,0,199);
    // text("Welcome to Zenon's Space Closet. Choose a cute\n outfit to wear to the Microbe concert!\nMouse over the outfit choices to see the options.", 30, 100);
text("Choose your adventure\nClick any adventure to continue!", 40, 100);
  // dates

  // image(arrow, width-405, height/2);
  // image(arrow, width-505, height/2);
  // image(arrow, width-605, height/2);
  
  line(10, windowHeight/2+105, windowWidth+10, windowHeight/2+105);
  
  // create timeline
  textSize(10);
  for (var i = 100; i < windowWidth-20; i += windowWidth/6) {
    // lineArray[i];
    // line(i, windowHeight/2+70, i, windowHeight/2+80);
  }
  // if (keyIsDown(DOWN_ARROW)) {
  //   phase++;
  // // 	alienintro.pause();
  // }
  // if (keyIsDown(LEFT_ARROW)) {
  //   phase--;
    	
  	
  // }
}
function Closet2(){

    image(zenon, 100, 100);
  textSize(50);
    fill(173,0,199);
    text("Choose Your Glamorously Galactic Space-garb", 30, 30);
  textSize(20);
  // interactivity
  if (mouseX <= width/6 + 2 * (width/6) && mouseX >= width/6 + width/6) {
    background(map1);
    fill(17, 219, 0);
    textSize(40);
    // text(table.get(1, 1), 30, 205);
    // textSize(20);
    // text(table.get(2, 1), 30, 235);
    image(melclown, 310, 90);
    textSize(50);
    text("Circus Adventures", 290, 72);
    if(mouseIsPressed){
      phase= phase + 3;
      Game2();
    }
  } else if (mouseX <= width/6 + 3 * (width/6) && mouseX >= width/6 + 2 * (width/6)) {
    background(map1);
    fill(17, 219, 185);
    textSize(40);
    // text(table.get(1, 2), 30, 205);
    // textSize(20);
    // text(table.get(2, 2),30, 235);
    image(stuff, 310, 125);
    textSize(50);
    text("Space Wars", 190, 72);
     if(mouseIsPressed){
      phase= phase + 1;
      Game();
    }
  } else if (mouseX <= width/6 + 4 * (width/6) && mouseX >= width/6 + 3 * (width/6)) {
    background(map1);
    fill(255, 0, 119);
    // textSize(40);
    // text(table.get(1, 3), 35, 205);
    // textSize(20);
    // text(table.get(2, 3), 30, 235);
    image(egyptianmel, 390, 112);
    textSize(50);
    text("Egyptian Adventures", 190, 72);
    // if(mouseIsPressed){
    //   phase++;
    //   Egypt();
    // }
  } else if (mouseX <= width/6 + 5 * (width/6) && mouseX >= width/6 + 4 * (width/6)) {
    background(map1);
    fill(17, 219, 132);
    textSize(40);
    // text(table.get(1, 4), 30, 205);
    // textSize(20);
    // text(table.get(2, 4), 30, 235);
    image(zenon2, 510, 183);
    // scale(0.8);
   
  }  
  else if (mouseX <= width/6 + 6 * (width/6) && mouseX >= width/6 + 5 * (width/6)) {
    background(map1);
    textSize(40);
    fill(173,0,199);
    // text(table.get(1, 5), 30, 205);
    // textSize(20);
    // text(table.get(2, 5), 30, 235);
    image(zenon2, 420, 105);
  //     x = x-1;
  // if (x < 0){
  //   x = -300 ;
  // }
  } else {
    // background(7,176,173);
    // image(afghanistan, 50, 50);
    background(map1);
    // noFill();
     
  textSize(30);
  fill(0);
  //     text("Population:", 20, 175);
  // text("Literacy Rate:", 450, 175);
    
  textSize(40);
  fill(173,0,199);
    // text(table2.get(4, 2), 215, 175);
    // text(table2.get(4, 9), 650, 175);
  }
    // heading 
  
  textSize(30);
  fill(0);
  // text("Languages of Afghanistan...", 100, 130);
   
  textSize(15);
  fill(100, 100, 100);
  text("", width-505, height/2 + 105);
  text("Option 1", width-445, height/2 + 105);
  text("Option 2", width-345, height/2 + 105);
  text("Option 3", width-245, height/2 + 105);
  text("Option 4", width-115, height/2 + 105);
  image(zenon, 60, 200);
  // image(egyptianmel, 100, 200);
  // heading 
  
  textSize(30);
noStroke();
 fill(220,220,220, 39);
  rect(20, 65, 600, 100);
 fill(173,0,199);
    // text("Welcome to Zenon's Space Closet. Choose a cute\n outfit to wear to the Microbe concert!\nMouse over the outfit choices to see the options.", 30, 100);
text("Choose your adventure\nClick any adventure to continue!", 40, 100);
  // dates

  // image(arrow, width-405, height/2);
  // image(arrow, width-505, height/2);
  // image(arrow, width-605, height/2);
  
  line(10, windowHeight/2+105, windowWidth+10, windowHeight/2+105);
  
  // create timeline
  textSize(10);
  for (var i = 100; i < windowWidth-20; i += windowWidth/6) {
    // lineArray[i];
    // line(i, windowHeight/2+70, i, windowHeight/2+80);
  }
  // if (keyIsDown(DOWN_ARROW)) {
  //   phase++;
  // // 	alienintro.pause();
  // }
  // if (keyIsDown(LEFT_ARROW)) {
  //   phase--;
    	
  	
  // }
}


function Ninja(){
  background(0);
  image(melninja,310,300);
  fill(0);
  text("Press the right arrow key to continue!", 100, 100);
  image(car, x, 500);
  // image(ninja2,100,y);
    x = x-1;
  if (x < 0){
    x = 900 ;
  } 
  
}
// function Intro0(){
//   background(0);
//   if(keyPressed){
//     phase++;
//   }
// }
// // // Delay function from online

// // //http://stackoverflow.com/questions/24849/is-there-some-way-to-introduce-a-delay-in-javascript/24488671#24488671
// function delay(ms) {
//   var cur_d = new Date();
//   var cur_ticks = cur_d.getTime();
//   var ms_passed = 0;
//   while (ms_passed < ms) {
//     var d = new Date(); // Possible memory leak?
//     var ticks = d.getTime();
//     ms_passed = ticks - cur_ticks;
//     // d = null;  // Prevent memory leak?
//   }