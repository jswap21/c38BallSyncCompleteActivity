var ball;
var dbball;
var position;
function setup(){
    database=firebase.database();
    console.log(database);

    dbball=database.ref('ball/position');
    dbball.on("value",readPosition,showError);



    createCanvas(500,500);
    dbball = createSprite(250,250,10,10);
    dbball.shapeColor = "red";
}

function draw(){
    background("white");
   if(position !== undefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
}
    drawSprites();
}

function writePosition(x,y){

database.ref('ball/position').set({
    'x':position.x+x,
    'y':position.y+y
})
}

function readPosition(data){
position=data.val();
console.log(position.x);
dbball.x=position.x;
dbball.y=position.y;

}

function showError(){
    console.log("This function is called when any eror occurs")
}