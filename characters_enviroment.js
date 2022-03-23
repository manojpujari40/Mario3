var mario,bricks,cloud,mountains,enemyMushrooms,pipe,platfor,coins;

var control={
    up: "UP_ARROW",
    right: "RIGHT_ARROW",
    left: "LEFT_ARROW",
    revive: 32
}

var gameConfig={
    status:"start",
    intailzeslife:4,
    MoveSpeed:5,
    enemyMoveSpeed:1,
    gravity:1,
    gravityenemy:10,
    jump:-15,
    startingPointX:600,
    startingPointY:0,
    screenX:1240,
    screenY:336,
    timeScore:0,
    score:0
}

noseX="";
noseY="";
GameStatus="";

function game(){
    console.log("nose X = " + noseX + ", nose Y = " + noseY);
    instailizeInDraw();
    moveEnviroment(mario);
    drawSprites();

    if(gameConfig.status = "start"){
        fill(0, 0, 0, 150);
        rect(0, 0, gameConfig.screenX, gameConfig.screenY);

        fill(0, 0, 150);
        textSize(40);
        textAlign(CENTER);
        text("Press Play Button to Start The Game", gameConfig.screenX/2, gameConfig.screenY/2);
        textSize(40);

        stroke(255);
        strokeWeight(7);
        nofill();

        changeGameStatud();
    }
    if(gameConfig.status="play"){
        positionOfCharacter(mario);
        enemys(enemyMushrooms);
        checkStatus(mario);
        scores(mario);
        manualControl(mario);
    }

    if(gameConfig.status="gameover"){
        fill(0, 0, 0, 150);
        rect(0, 0, gameConfig.screenX, gameConfig.screenY);

        fill(255, 255, 255);
        textSize(40);
        textAlgin(CENTER);
        text("GAME OVER", gameConfig.screenX/2, gameConfig.screenY/2);
        textSize(15);
        text("Space to Restart", gameConfig.screenX/2, gameConfig.screenY/2);
        textSize(40);
        text(round(gameConfig.scores), gameConfig.screenX/2, gameConfig.screenY/2+135);
        text("points", gameConfig.screenX/2, gameConfig.screenY/2);

        stroke(255);
        strokeWeight(7);
        nofill();
        ellispe(gameConfig.screenX/2, gameConfig.screenY/2-30,160,160);
        changeGameStatud(mario);
    }
}