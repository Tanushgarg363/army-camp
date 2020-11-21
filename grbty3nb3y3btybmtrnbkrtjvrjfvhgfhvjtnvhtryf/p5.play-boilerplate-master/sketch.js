  var wall,speed,weight,bullet,thickness
  function setup() {
    createCanvas(1500,400);
    speed=random(22,83)
    weight=random(30,52)
    thickness=random(22,82)

  bullet=createSprite(50,350,50,50)
  bullet.velocityX=speed
  bullet.shapeColor="white"
  bullet.weight=weight
  bullet.thickness=thickness

  wall=createSprite(1500,200,60,400)
  wall.thickness=thickness
  }
  function draw() {
    background("black")
    var deformation=0.5*weight*speed*speed/thickness * thickness * thickness
  if (hasCollided(bullet,wall)){
    bullet.velocityX=0
    if(deformation>10){
      wall.shapeColor="red"
    }
    if(deformation<10){
      wall.shapeColor="blue"
    }
  }
  drawSprites()
  }
  function hasCollided(lbullet, lwall) 
  { bulletRightEdge=lbullet.x +lbullet.width
    ; 
    wallLeftEdge=lwall.x; 
    if (bulletRightEdge>=wallLeftEdge)
     { return true
    
    } 
     else {
       return false; 
     }
      }
