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
     // create a fuction to draw the square
     this.draw = function() 
            { 
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y , this.width ,this.height);
            }
}

   // create the Game cunstructor   
const Game = function(){
    this.sphapeArray = [];
    this.setAllShapes = [];
}
// Game prototype: here we create de array of square 
Game.prototype.createSomeShapes = function(){
    // x initial position 
    let x = 0;
    // y initial position
    let y = 400;
    // create the counter to run the while
    let counter= 4 ;
    // empty the squares of array 
    game.sphapeArray = [];
    // creating the three squares on the array
    while(game.sphapeArray.length <= counter){
        //instance the ShapeSquare sending three arguments 
        //x = x initial position
        //y = y initial position
        //randomColor = function that bring a color from an array
        let square = new ShapeSquare(x,y,randomColor());
        // add the square into the array
        this.addShape = game.sphapeArray.push(square);
        // increase the y position 25 to create the next square on top of each other
        y += 25;
        // decrease the counter for the while statemente
        counter --;
   }  
   
}

//instace a the game
const game = new Game();

// create the random Color function
function randomColor(){
    const colorArray=["red","yellow","green","blue"];
    let randColor = Math.floor(Math.random()*colorArray.length);
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
 


starGame();*/


// Dom manipulation to move the squares of the array
document.onkeydown = function(event){
    console.log(event.keyCode);
    switch(event.keyCode){
        case 37:
            // move to the left all the squeare on the array, updatin the x position
            for(i =0; i < game.sphapeArray.length ; i ++){
                game.sphapeArray[i].x -= 25;
                }
        break;
        case 39:
            // move to the left all the squeare on the array, updatin the x position

            for(i =0; i < game.sphapeArray.length ; i ++){
                game.sphapeArray[i].x += 25;
                }
        break;
        case 40:
            let j=0;
            for(i= 0 ; i < game.sphapeArray.length; i ++){
                let randomColor = Math.floor(Math.random()*4);
                console.log("color ", game.sphapeArray[i].color);
                game.sphapeArray[i].color = game.sphapeArray[3].color;
            }
        
        break;

    }
}

//********************************************* */
// function that moves the squares to the top
//********************************************* */
function movementShape(){
    // clear the background
    ctx.clearRect(0,0,250,400);
    //drawing the background
    drawBackground();
    //Stop animation if the postion y=0 reach the top
     if(game.sphapeArray[0].y === 0){
            // call the function StopAnimation
            StopAnimation();
            return;
        };
   
    //star moving the square by changing the y cordinator 
    
        for(i=0; i < game.sphapeArray.length; i++){
         // value on y to speed the movement   
         game.sphapeArray[i].y -= 1 ;   
         // calling the draw function on the ShapeSquare constructor
         game.sphapeArray[i].draw();

       /*  // if the squeares hasnt reache the top move the x position 
          if(game.sphapeArray[i].y < 0){
           // The * 25 let me move the squares every 25 pixels
           // game.sphapeArray[i].x= Math.floor(Math.random() * 12)*25;
            }
        }*/
    //Recursive function that call itself to move the array
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
    forArray();
 
}

function forArray(){

    for(i=0;i < game.sphapeArray.length; i++){
     game.sphapeArray[i].draw();
    }
    
}

game.createSomeShapes();
movementShape();
