// Create the canvas
const mycanvas= document.getElementById("mycanvas");
const ctx = mycanvas.getContext("2d");

// draw the background
function drawBackground(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, mycanvas.width, mycanvas.height);
}


// create the square  cusntructor
const ShapeSquare = function(x,y,color){
     this.x = x;
     this.y = y;
     this.width = 25;
     this.height = 25;
     this.color= color;
     //console.log(randomColor());
     ctx.fillStyle = color;
     //this.color = ctx.fillStyle ;
    // console.log(ctx.fillStyle);
     ctx.fillRect(this.x, this.y , this.width ,this.height);
}

   // create the Game cunstructor   
const Game = function(){
    this.sphapeArray = [];
    this.setAllShapes=[];
}
// Game prototype
Game.prototype.createSomeShapes = function(){
    let x= 0;
    let y= 300;
    let counter= 4 ;
    game.sphapeArray = [];
    // let square = new ShapeSquare(x,y,randomColor());
    //console.log("square= ", game.sphapeArray.length);
    // creating the three squares on the array
    while(game.sphapeArray.length <= counter){
        let square = new ShapeSquare(x,y,randomColor());
        this.addShape = game.sphapeArray.push(square);
       // console.log(square);
       // console.log("push squares = " ,this.addShape);
        y += 25;
        counter --;

    }  
    
}

const game = new Game();

function randomColor(){
    const colorArray=["red","yellow","green","blue"];
    let randColor = Math.floor(Math.random()*colorArray.length);

    //console.log(colorArray[randColor]);
    return colorArray[randColor];
}

/*          let x= 0;
            let y= 400;
            let counter= 4 ;
            // let square = new ShapeSquare(x,y,randomColor());
            console.log("square= ", game.sphapeArray.length);
            // creating the three squares on the array
            while(game.sphapeArray.length <= counter){
                let square = new ShapeSquare(x,y,randomColor());
                this.addShape = game.sphapeArray.push(square);
                console.log(square);
                console.log("push squares = " ,this.addShape);
                y += 25;
                counter --;

            }  
        }
 






function starGame(){
  
    console.log(game);
    game.createSomeShapes();
}

starGame();*/

//console.log("prototipe",Game.createSomeShapes);

//instances of the constructur square

    //square.x = 0;
    //square.y = 400;
   // let arraySquares = [];

/*function drawSquares(){
    //draw the squares with  25 of differences on y
    ShapeSquare(square.x, square.y);
    ShapeSquare(square.x, square.y + 25);
    ShapeSquare(square.x, square.y + 50);

    // saving the position  x,  y and the color
    let squarePosition = [
        [square.x, square.y, square.color],
        [square.x, square.y + 25, square.color],
        [square.x, square.y + 50, square.color]
    ];
    return squarePosition;
}*/

//move the squares to the left or right
document.onkeydown = function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        // left
        case 37:
        game.sphapeArray[0].x -= 25;
        console.log(game.sphapeArray[0].x);
            break;
        // right
        case 39:
        game.sphapeArray[0].x += 25;
            break;
    }
}





// Star moving the square 
function movementShape(){
     // clear the background
    ctx.clearRect(0,0,250,400);
    drawBackground();
    game.createSomeShapes();
    //console.log(game.sphapeArray);
    //Stop animation if y is 0
        if(game.sphapeArray[0].y === 0){
            console.log("llego al borde y = ", game.sphapeArray[0].y);
            StopAnimation();
            return;
        };
    //drawing the background
    //star moving the square by changing the y cordinator 
    //this is the speed 
    game.sphapeArray[0].y -= 1;
   
    //loop the movement of the shape
  if(game.sphapeArray[0].y < 0){
      // The * 25 let me move the squares every 25 pixels
      game.sphapeArray[0].x= Math.floor(Math.random() * 12)*25;
  }
    //game.sphapeArray[0];
    // call the movement function over and over
    requestAnimationFrame (function(){
    movementShape();
        
   })
   
}

function checkBoundaries(y){
    // checking if the square reach the top
    return  y === 0;
}

function StopAnimation(){
    //draw background
    drawBackground();
    // draw square
    let position=drawSquares();
    console.log(position);


}

movementShape();
