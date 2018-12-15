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
    drawMatrix()
    // Calling the createSomeShapes Game prototype
    game.createSomeShapes();
    movementShape();

}


function deleteEqualColor(){
   
        //let collision = false;
        //console.log('game.setAllShape', game.setAllShapes);
        //console.log('game.shapeArray', game.sphapeArray);
        console.log(Math.floor(game.sphapeArray[2].x/25));
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
             console.log("Datos cuando colpasa",game.setAllShapes[shapeArrayYT][shapeArrayX]);
             console.log("siguiente position",game.setAllShapes[shapeArrayYT + 1][shapeArrayX]);
             console.log("dos position mas",game.setAllShapes[shapeArrayYT + 2][shapeArrayX]);
             console.log("position x", shapeArrayX,"position y",shapeArrayYT);
             
            // console.log("anterior position",game.setAllShapes[shapeArrayYT -1][shapeArrayX]);
             if(game.setAllShapes[shapeArrayYT][shapeArrayX] === game.setAllShapes[shapeArrayYT + 1][shapeArrayX] 
                && game.setAllShapes[shapeArrayYT + 1][shapeArrayX] === game.setAllShapes[shapeArrayYT + 2][shapeArrayX]){
                console.log("es igual");
                 game.setAllShapes[shapeArrayYT][shapeArrayX] = 0;
                 game.setAllShapes[shapeArrayYT + 1][shapeArrayX] = 0;
                 game.setAllShapes[shapeArrayYT + 2][shapeArrayX] = 0;
                 
                if (game.setAllShapes[shapeArrayYT + 3][shapeArrayX]){
                    console.log("Hay otro cuadro");
                    game.setAllShapes[shapeArrayYT][shapeArrayX]= game.setAllShapes[shapeArrayYT + 3][shapeArrayX];
                    game.setAllShapes[shapeArrayYT + 3][shapeArrayX]=0;
                 }
                 /* if (game.setAllShapes[shapeArrayYT + 4][shapeArrayX]){
                    game.setAllShapes[shapeArrayYT][shapeArrayX]=game.setAllShapes[shapeArrayYT +3][shapeArrayX];
                    game.setAllShapes[shapeArrayYT +4][shapeArrayX]=0;
                }*/

             }
     
     
              
         };
     
        // return collision;
     
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
     //console.log("array length ==" , game.sphapeArray.length );
   /* if(y === 18 && i === 0) {  
         i = game.sphapeArray.length;
         gameOver();
         
    }
    else{*/
        //console.log("x /25=", x , "y/25=" , y );
        //console.log(game.sphapeArray[i].y);
        //console.log("i =", i);
        game.sphapeArray[i].draw();
        game.setAllShapes[y][x]= game.sphapeArray[i].color;
    // console.log(" = == = = =  =",game.setAllShapes[x][y], x, y)
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
   
    console.log("Game over");
   // return true;
}

game.createSomeShapes();
movementShape();
