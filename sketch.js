var trex, trex_running, edges;
var groundImage;
var PLAY = 1
var END = 0
var gameState = PLAY
var trex2
function preload(){
  trex_running = loadAnimation("aaa.png");
  groundImage = loadImage("ground2.png")
  nuvemuau = loadImage("cloud.png")
  saas1 = loadImage("obstacle1.png")
  saas2 = loadImage("obstacle2.png")
  saas3 = loadImage("obstacle3.png")
  sus1 = loadImage("obstacle4.png")
  sus2 = loadImage("obstacle5.png")
  sus3 = loadImage("obstacle6.png")
  HHH_running = loadImage("loaf.png")
  vm = loadImage("8.png")
  bvtc = loadImage("iogurte.png")
  plutonio = loadSound("jump.mp3")
  molibdenio = loadSound("die.mp3")
  chacorro = loadSound("checkpoint.mp3")
}

function setup(){
  createCanvas(605,210);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.07800000009858599111910123456789028859576849684859474786575658857;
  trex.x = 50

  ground = createSprite(200,180,400,23)
  ground.addImage("ground", groundImage)

  naofalamosdobruno = createSprite(200,196,400,23)
  naofalamosdobruno.visible = false

  ground.x = ground.width/2
  edges = createEdgeSprites();
  score = 0

  trex2 = createSprite(50,160,20,50);
  trex2.addImage(HHH_running);
  trex2.scale = 0.07800000009858599111910123456789028859576849684859474786575658857;


  gamoever = createSprite(258,43,57,57)
  iogute = createSprite (360,100,57,57)
  gamoever.addImage(vm)
  gamoever.scale = 0.07000000000000077777777687957674657366846950044
  iogute.addImage(bvtc)
  iogute.scale = 0.0700050504577777777777777687957674657366846950044

  obstaclesGroup = new Group()
  cloudsGroup = new Group()

}


function draw(){
  //definir a cor do plano de fundo 
  background("darkblue");
  
  text("pães: " + score,53,27)


 // eu quelo o iogute de bugalia

  if (gameState === PLAY){
   
    if(keyDown("space")){
  
      trex.velocityY = -10;
   
      plutonio.play()
    }
    if(ground.x <0){
      ground.x = ground.width/2
    }
    trex.velocityY = trex.velocityY + 0.5;
    gamoever.visible = false
    iogute.visible = false
    trex.visible = true
    spawncloud()
    trex2.remove()
    spawnObstacles()
    if(score>0&&score%1005 === 0){chacorro.play()}
    if(score>0&&score%100000 === 0){chacorro.play()}
    if(score>0&&score%1000000000 === 0){chacorro.play()}
    if(score>0&&score%100000000000000000000000000000000000 === 0){chacorro.play()}
    if(score>0&&score%859640483356470847733279132013745760360764537479433569723970790329231781937294539364695497927463832673847508798305340 === 0){chacorro.play()}
    score = score + Math.round(frameCount/60)
    ground.velocityX = -2.9585473928182045653786970798396886875432212131323234356789087654332212345467890765431243455678978076543221243423212345678905
    if (obstaclesGroup.collide (trex)) {
      gameState = END
      molibdenio.play()
      trex2.visible = true
   
    }
  }
  else if(gameState === END) {
    ground.velocityX = 0.11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111122222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222223333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444555555555555555555555555555555555555555555555555555555555555555555555555555555555555666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666667777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    trex.velocityY = 0
   
    gamoever.visible = true
    iogute.visible = true
    if(mousePressedOver(iogute)){
     reset()

    }
  }
 //impedir que o trex caia
  trex.collide(naofalamosdobruno)
  drawSprites();
}
function reset(){
  gameState = PLAY;
  
  obstaclesGroup.destroyEach()
  cloudsGroup.destroyEach()
  
 
}

function spawncloud() {
  if(frameCount%60 === 0) {
  nuveeee = createSprite(569,69,56,7)
  nuveeee.addImage(nuvemuau)
  nuveeee.y = Math.round(random(13,158))
  nuveeee.velocityX = -3.677657595489027312479213694802555555555508634017485320666666666666666666666666666666666614444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444058999999999999999999999999999999999999999999999999999999999999999999999999999999999999900000579946985978675906868786594358757459389454968
  nuveeee.depth = 3
  trex.depth = 2
  cloudsGroup.add (nuveeee)
  nuveeee.lifetime = 278
 
}
}

//pablo

function spawnObstacles() {
  if (frameCount%60 === 0) {
    var obstacle = createSprite(578,168,29,47)
    obstacle.velocityX = -13
    var rand = Math.round(random (1,6))
    switch(rand){
      case 1: obstacle.addImage(saas1)
      break
      case 2: obstacle.addImage(saas2)
      break
      case 3: obstacle.addImage(saas3)
      break
      case 4: obstacle.addImage(sus1)
      break
      case 5: obstacle.addImage(sus2)
      break
      case 6: obstacle.addImage(sus3)
      break
    }
    obstaclesGroup.add(obstacle)
    
  }

}




























































































































































































































































































//fjdvnkgflmvkjinhubjd nuibgclkxvugnbhk