// Create the canvas
const mycanvas= document.getElementById("mycanvas");
const ctx = mycanvas.getContext("2d");

// draw the background
function drawBackground(){
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, mycanvas.width, mycanvas.height);
}


// create the square  
const ShapeSquare= function(x,y, color){
     this.x = x;
     this.y = y;
     this.width = 25;
     this.height = 25;
     //console.log(this.y);
     ctx.fillStyle = color;
    // console.log(ctx.fillStyle);
     ctx.fillRect(this.x, this.y , this.width ,this.height);
     
}

//instances of the constructur square
let square = new ShapeSquare(); 
square.x = 0;
square.y = 0;

// Date:  Dicember 4
//wrap squares adding every square to an array

const WrapSquares = function(){
     this.wrap = [];
     console.log(this.wrap);

}


//move the squares to the left or right
document.onkeydown = function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        // left
        case 37:
            square.x -= 25;
            break;
        // right
        case 39:
            square.x +=25;
            break;
    }
}

function randomColor(){
    const colorArray=["#CCCCCC","#333333","#990099"];
    let randColor = Math.floor(Math.random()*colorArray.length) ;
    //console.log(colorArray[randColor]);
    return colorArray[randColor];
}


// Star moving the square 
function movement(){
     // clear the background
   // ctx.clearRect(0,0,250,400);
   if(checkBoundaries(square.y)){
    console.log("llego al borde y = ", square.y);
        StopAnimation(square.x,square.y,)
     };

    //drawing the background
    drawBackground();
    //star moving the square by changing the y cordinator
    square.y -=1;
    //console.log(square.y);
    //loop the movement of the shape
  if(square.y < 0){
      square.y = 400;
      // The * 25 let me move the squares every 25 pixels
      square.x = Math.floor(Math.random() * 12)*25;
  }


    //draw the squares with  25 of differences on y
    ShapeSquare(square.x, square.y, randomColor());
    //console.log(square.x,square.y);
    ShapeSquare(square.x, square.y + 50, randomColor());
    //console.log(square.x,square.y);
    ShapeSquare(square.x, square.y + 25, randomColor());
    // call the movement function over and over
    requestAnimationFrame (function(){
        movement();
   })
   
}

function checkBoundaries(y){
    // checking if the square reach the top
    return  y === 0;
}

function StopAnimation(){
    drawBackground();


}

movement();
