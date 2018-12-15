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

const Boundaries = function (){
 //offsetX value of the border position on X
    this.offsetXmin = 0;
    this.offsetXmax = 250;
    this.offsetYmin = 0;
    this.offsetYmax = 400;

}

   // create the Game cunstructor   
const Game = function(){
   
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
            let j=0;
            for(i= 0 ; i < game.sphapeArray.length; i ++){
                let randomColor = Math.floor(Math.random()*4);
                // console.log("color ", game.sphapeArray[i].color);
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
    drawMatrix();
   
    if(game.sphapeArray[0].y  === 0 || checkCollision()){ 
        // console.log("matrix = ",game.setAllShapes[((game.sphapeArray[0].x)/25)+2][((game.sphapeArray[0].y)/25)+2]);
        //let lastPositionY = game.sphapeArray[0].y + 75;

        stopAnimation();
         return;
}


    // Finding the module of the y position, 
    //if the module is 0 means that the position on Y is the 25 square height of the matrix
    // matrix is 400 / 25 = 16
   /* let shapeYPosition =  game.sphapeArray[0].y % 25;
    let matrixPositionX = game.sphapeArray[0].x / 25;
    let matrixPositionY = (Math.floor(game.sphapeArray[0].y / 25))- 1;


   //console.log("module position ",game.sphapeArray[0].y % 25 );
  // console.log("y position = ", game.sphapeArray[0].y , "matrixPositionX =" , matrixPositionX, "matrixPositionY =" , matrixPositionY);
  // console.log("matrix ===" , game.setAllShapes[matrixPositionX][matrixPositionY])  ;
  // console.table(game.setAllShapes);
      if (shapeYPosition === 0)
      {   //console.log("===== entro al cero" )
          //console.log("matrixPositionY ===" ,matrixPositionY,"matrixPositionX", matrixPositionX )  ;
         
         // console.log("matrix = ", game.setAllShapes[matrixPositionX][matrixPositionY]);
       // for that check the matrix for 0 value on the X and Y sphapArray[0] position
       if(game.setAllShapes[matrixPositionX][matrixPositionY] != 0)
       {
       // console.log("===== matrix esta vacia" );
       // console.log("matrix legn",game.setAllShapes.length );
       // console.log("matrixPositionY ===" ,matrixPositionY,"matrixPositionX", matrixPositionX )  ;
            for (i=0; i < game.setAllShapes.length ; i ++){
                        
                for (j=0;j < game.setAllShapes.length; j++){
               //  console.log("matrixPositionY ===" ,matrixPositionX,"matrixPositionX", matrixPositionX )  ;
               //  console.log("i = ", i , "j == " , j);
                 if(matrixPositionY === j && matrixPositionX === i ){ 
                     if(game.setAllShapes[matrixPositionX][matrixPositionY] === 0)  
                     {
                    stopAnimation();
                    return;
                     }
                    }
                }
                
            }
        }

      }
    //console.log(game.setAllShapes[game.ShapeSquare[0].x][(game.ShapeSquare[0].y)]);
    //let inicialPosition;
    //inicialPosition = checkCollision(inicialPosition);
    
    //Stop animation if the postion y=0 of the first square reach the top 
   if(game.sphapeArray[0].y  === 0 ){
            // console.log("matrix = ",game.setAllShapes[((game.sphapeArray[0].x)/25)+2][((game.sphapeArray[0].y)/25)+2]);
            let lastPositionY = game.sphapeArray[0].y + 75;

            stopAnimation();
             return;
    }else if(game.setAllShapes[game.ShapeSquare[0].x][(game.ShapeSquare[0].y)-25] != 0 ){
            stopAnimation();
            return;
    }*/

       // console.log(game.sphapeArray[0].y);
        
        
    //star moving the square by changing the y cordinator 
        for(i=0; i < game.sphapeArray.length; i++){
         // value on y to speed the movement   
         game.sphapeArray[i].y -= 1 ;   
         // calling the draw function on the ShapeSquare constructor
         game.sphapeArray[i].draw();
         
    
        }

      /*  if(checkCollision()){
         //   console.log("entro collision true");
        }else{
          //  console.log("entro collision false");
    *
        }*/
       // checkCollision();

    requestAnimationFrame (function(){
    movementShape();
    
        
   })
   
}

function checkCollision(){
   // game.createSomeShapes();
   let collision = false;
    //console.log('game.setAllShape', game.setAllShapes);
   //console.log('game.shapeArray', game.sphapeArray);
   //console.log(game.sphapeArray[0].y);
   let shapeArrayY= Math.floor(game.sphapeArray[0].y/25);
   let shapeArrayX = Math.floor(game.sphapeArray[0].x/25);
  // console.log(shapeArrayY);
  // console.log(shapeArrayX);

        //console.log(game.setAllShapes[shapeArrayY][shapeArrayX]);
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
    // Function that draw the matrix
    drawMatrix()
    // Calling the createSomeShapes Game prototype
    game.createSomeShapes();
    movementShape();

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
       // console.log("x /25=", x , "y/25=" , y )
     game.sphapeArray[i].draw();
     game.setAllShapes[y][x]= game.sphapeArray[i].color;
   // console.log(" = == = = =  =",game.setAllShapes[x][y], x, y)
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

game.createSomeShapes();
movementShape();
