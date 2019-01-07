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
                /*let my_gradient = ctx.createLinearGradient(this.x, this.y, 220, 0);
                my_gradient.addColorStop (0 , color);
                my_gradient.addColorStop(1, "white")
                ctx.fillStyle = my_gradient;*/
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y , this.width ,this.height);
                ctx.clearRect(this.x + 6, this.y + 6  , 10  ,10);
            }
}
/*

    let my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
    my_gradient.addColorStop(0, "red");
    my_gradient.addColorStop(1, "blue");
    ctx.fillStyle = my_gradient;<!--from  www.j av a  2 s.c om-->
    ctx.fillRect(20, 20, 150, 100);

*/




const Boundaries = function (){
 //offsetX value of the border position on X
    this.offsetXmin = 0;
    this.offsetXmax = 250;
    this.offsetYmin = 0;
    this.offsetYmax = 400;

}

   // create the Game cunstructor   
const Game = function(){
    this.score= 0 ;
    this.sphapeArray = [];
    //iniciatilation the matrix with 0
    this.setAllShapes = [];
     for(var i=0; i<19; i++) {
        this.setAllShapes[i] = [];
        for(var j=0; j<10; j++) {
            this.setAllShapes[i][j] = 0;
        }
    }
}
// Game prototype: here we create de array of square 
Game.prototype.createSomeShapes = function(){
    console.log("creating")
    // x initial position 
    let x = 0;
    // y initial position
    let y = 450;
    // create the counter to run the while
    let counter= 4 ;
    // empty the squares of array 
    this.sphapeArray= []
    //game.sphapeArray = [];
    // creating the three squares on the array
    while(this.sphapeArray.length <= counter){
            //instance the ShapeSquare sending three arguments 
            //x = x initial position
            //y = y initial position
            //randomColor = function that bring a color from an array

        let square = new ShapeSquare(x,y,randomColor());
         // add the square into the array
        this.addShape = this.sphapeArray.push(square);
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
    // console.log(event.keyCode);
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
        for(i =0; i < game.sphapeArray.length ; i ++){
            game.sphapeArray[i].draw = "pink";
            }
       
           /* let firstColor = game.sphapeArray[0].color
            let secondColor = game.sphapeArray[1].color
            game.sphapeArray[0].color = game.sphapeArray[2].color ;
            game.sphapeArray[1].color = firstColor ;
            game.sphapeArray[2].color = secondColor;
            console.log(game.sphapeArray);*/
            
        
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
    drawMatrix();
    showScore();
    // check if the sphapeArray on the posisiton Y reach 0  && collition is true  
    // stop the movement
    if(game.sphapeArray[0].y  === 0 || checkCollision()){ 
         stopAnimation();
         return;
        }
    //star moving the square by changing the y cordinator 
        for(i=0; i < game.sphapeArray.length; i++){
         // value on y to speed the movement   
         game.sphapeArray[i].y -= 1 ;  
         
         // calling the draw function on the ShapeSquare constructor
         game.sphapeArray[i].draw();
        }
    requestAnimationFrame (function(){
    movementShape();
   });
}

/************************************************/
/********* function that checkCollision *********/
// this function check "Y" position of the array
// one position below on the matrix 
// if 
/********************************************** */
function checkCollision(){
   let collision = false;
   //console.log('game.setAllShape', game.setAllShapes);
   //console.log('game.shapeArray', game.sphapeArray);
   //console.log(game.sphapeArray[0].y);
   let shapeArrayY= Math.floor(game.sphapeArray[0].y/25);
   let shapeArrayX = Math.floor(game.sphapeArray[0].x/25);
 
        let shapeArrayYT;
        if (shapeArrayY-1 < 0){
            shapeArrayYT= shapeArrayY;
        } else{
            shapeArrayYT = shapeArrayY-1;
        }
    if(game.setAllShapes[shapeArrayYT][shapeArrayX]){
         collision = true; 
    };

    return collision;
}


//*************************************************************** */
//******************* stopAnimatin Fuction ********************** */
// This function draw the background, insert the color on the matrix 
// Draw the matrix and call the movementShape function to drop other
// array of squares.
//**************************************************************** */

function stopAnimation(){
    
    //draw background
    drawBackground();

    // Function that insert the colors on the matrix
    insertArrayMatrix();
    deleteEqualColor();
    // Function that draw the matrix
    showScore();
    drawMatrix()
    showScore();
    // Calling the createSomeShapes Game prototype
    game.createSomeShapes();
    movementShape();

}
// Delete the squares when there is one on the last array siting on the same X value
// works also when the all squares are save on Y = 0 it will disapire the tree squares
function deleteTwoFromOne(shapeArrayX,shapeArrayYT){

    if(game.setAllShapes[shapeArrayYT][shapeArrayX] === game.setAllShapes[shapeArrayYT + 1][shapeArrayX] 
        && game.setAllShapes[shapeArrayYT + 1][shapeArrayX] === game.setAllShapes[shapeArrayYT + 2][shapeArrayX]){
        console.log("es igual");
         game.setAllShapes[shapeArrayYT][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT + 1][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT + 2][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT][shapeArrayX]= game.setAllShapes[shapeArrayYT + 3][shapeArrayX];
         game.setAllShapes[shapeArrayYT + 3][shapeArrayX]=0;
         game.score += 100;
    }
}

// Delete the squares when there is one on the last array siting on the same X value

function deleteOneFromTwo(shapeArrayX,shapeArrayYT){
 if(shapeArrayYT != 0) {
    if( game.setAllShapes[shapeArrayYT][shapeArrayX] === game.setAllShapes[shapeArrayYT - 1][shapeArrayX] 
        && game.setAllShapes[shapeArrayYT][shapeArrayX] === game.setAllShapes[shapeArrayYT + 1][shapeArrayX]){
          game.setAllShapes[shapeArrayYT][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT - 1][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT + 1][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT][shapeArrayX]= game.setAllShapes[shapeArrayYT + 2][shapeArrayX];
         game.setAllShapes[shapeArrayYT-1][shapeArrayX]= game.setAllShapes[shapeArrayYT + 3][shapeArrayX];
         game.setAllShapes[shapeArrayYT + 2][shapeArrayX] = 0;
         game.setAllShapes[shapeArrayYT + 3][shapeArrayX]= 0;
         game.score += 100;
    }
   }
}

function deleteHorizontalFromTheCenter(shapeArrayX,shapeArrayYT){
       console.log("shapeArrayX", shapeArrayX);
        
       if(    shapeArrayX > 0 
           && shapeArrayX < 10
           && game.setAllShapes[shapeArrayYT][shapeArrayX] === game.setAllShapes[shapeArrayYT][shapeArrayX + 1]
           && game.setAllShapes[shapeArrayYT][shapeArrayX] === game.setAllShapes[shapeArrayYT][shapeArrayX  - 1]){
           console.log("true");
            game.setAllShapes[shapeArrayYT][shapeArrayX] = 0;
            game.setAllShapes[shapeArrayYT][shapeArrayX - 1] = 0;
            game.setAllShapes[shapeArrayYT][shapeArrayX + 1] = 0;
            game.score += 100;
           // game.setAllShapes[shapeArrayYT][shapeArrayX]= game.setAllShapes[shapeArrayYT + 2][shapeArrayX];
          //  game.setAllShapes[shapeArrayYT-1][shapeArrayX]= game.setAllShapes[shapeArrayYT + 3][shapeArrayX];
         //   game.setAllShapes[shapeArrayYT + 2][shapeArrayX] = 0;
          //  game.setAllShapes[shapeArrayYT + 3][shapeArrayX]= 0;
        }
   }

function deleteEqualColor(){
   
        //console.log('game.setAllShape', game.setAllShapes);
        //console.log('game.shapeArray', game.sphapeArray);
       // console.log(Math.floor(game.sphapeArray[2].x/25));
        let shapeArrayY= Math.floor(game.sphapeArray[0].y/25);
        let shapeArrayX = Math.floor(game.sphapeArray[0].x/25);
      
             let shapeArrayYT;
             // if Y is -1 asing the value of shapeArrayY
             if (shapeArrayY-1 < 0){
                 shapeArrayYT= shapeArrayY;
             } else{
                 // 
                 shapeArrayYT = shapeArrayY-1;
             }
        if(game.setAllShapes[shapeArrayYT][shapeArrayX]){
            // console.log("Datos cuando colpasa",game.setAllShapes[shapeArrayYT][shapeArrayX]);
            // console.log("siguiente position",game.setAllShapes[shapeArrayYT + 1][shapeArrayX]);
            // console.log("dos position mas",game.setAllShapes[shapeArrayYT + 2][shapeArrayX]);
            // console.log("position x", shapeArrayX,"position y",shapeArrayYT);
             
            // console.log("anterior position",game.setAllShapes[shapeArrayYT -1][shapeArrayX]);

            deleteTwoFromOne(shapeArrayX,shapeArrayYT);
            deleteOneFromTwo(shapeArrayX,shapeArrayYT);
            deleteHorizontalFromTheCenter(shapeArrayX,shapeArrayYT);
              
         };
     
        // return collision;
     
}


function showScore(){
    document.getElementById("score").innerHTML = game.score;
 }
//****************************************************** */
//***** insertArrayMatrix Function********************** */
// Insert the array of colors into the setAllShapes matrix
//****************************************************** */


function insertArrayMatrix(){
   //console.log("forArray", game.sphapeArray);
    for(i=0;i < game.sphapeArray.length; i++){
        let x = Math.floor(game.sphapeArray[i].x/25);
        let y = Math.floor(game.sphapeArray[i].y/25);
        game.setAllShapes[y][x]= game.sphapeArray[i].color;
        game.sphapeArray[i].draw();
        // if y reach the bottom Game Over
        if (y === 18){
            gameOver();
        }
    
      //  }
    }
    
}

//*************************************************************** */
//******************* drawMatrix Function************************ */
// navegated the matrix and draw every squeare on the canvas
// We instace the constructor ShapeSquare that needs three parameter
//      x position
//      y position
//      color
//
//**************************************************************** */

function drawMatrix(){

   for (i=0; i < game.setAllShapes.length ; i ++){
       let canvasX = i * 25;

       for (j=0;j < game.setAllShapes.length; j++){

        if(game.setAllShapes[j][i]){   
           let canvasY = j * 25;
           let colorSaveMatrix = game.setAllShapes[j][i];
                //console.log("x= ", canvasX , "y=", canvasY, "color ",colorSaveMatrix);
                let squareInMatrix = new ShapeSquare(canvasX,canvasY,colorSaveMatrix);
                squareInMatrix.draw();
                //console.log("drawing the array=", square.draw());
           }
       }
       
   }

}

function gameOver(){
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER", 30,225);
}

game.createSomeShapes();
movementShape();
