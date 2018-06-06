var timerDiv = document.getElementById("timer");
var statusDiv = document.getElementById("status");
var t1ScoreDiv = document.getElementById("t1Score");
var t2ScoreDiv = document.getElementById("t2Score");
var t3ScoreDiv = document.getElementById("t3Score");
var t4ScoreDiv = document.getElementById("t4Score");

var MAXTS = 29;
var MAXTMS = 99;
var E_SCORE = 1;
var M_SCORE = 2;
var D_SCORE = 3;
var VD_SCORE = 5;


//counter variables
var secCounter;
var milCounter;
var state; //0 Standby, 1 Running , 2 Pause, 3 Reset

//scoreboard variables
var t1Score = 0;
var t2Score = 0;
var t3Score = 0;
var t4Score = 0;

function setup() {
    secCounter = MAXTS;
    milCounter = MAXTMS;
    document.onkeypress = checkKey;
    displayScore();
    state = 0;
    setInterval(() => {
        switch (state) {
            case 0:
                displayTime();
                displayStatus('StandBy');
                break;
            case 1:
                displayTime();
                displayStatus('Running');
                timerRoutine();
                break;
        }

    }, 10);
}

function timerRoutine() {

    if (milCounter == 0) {
        if (secCounter == 0) {
            secCounter = MAXTS + 1;
            milCounter = MAXTMS;
            state = 0;
        }
        secCounter--;
        milCounter = MAXTMS;
    }
    milCounter--;
}

function displayTime() {
    if (secCounter < 10)
        var locSecCounter = '0' + secCounter.toString();
    else
        var locSecCounter = secCounter.toString();

    if (milCounter < 10)
        var locMilCounter = '0' + milCounter.toString();
    else
        var locMilCounter = milCounter.toString();

    count = locSecCounter + '.' + locMilCounter;
    timerDiv.innerHTML = count;
}

function displayStatus(message) {
    statusDiv.innerHTML = message;
}

function displayScore() {
    t1ScoreDiv.innerHTML = t1Score;
    t2ScoreDiv.innerHTML = t2Score;
    t3ScoreDiv.innerHTML = t3Score;
    t4ScoreDiv.innerHTML = t4Score;
}

function processKey(key) {
    console.log(key);
    switch (key) {
        case ' ':
            pause();
            break;
        case 'Enter':
            reset();
            break;
        case '1':
            t1Score += E_SCORE;
            correct();
            break;
        case '2':
            t1Score += M_SCORE;
            correct();
            break;
        case '3':
            t1Score += D_SCORE;
            correct();
            break;
        case '4':
            t1Score += VD_SCORE;
            correct();
            break;
        //team 2
        case 'q':
            t2Score += E_SCORE;
            correct();
            break;
        case 'w':
            t2Score += M_SCORE;
            correct();
            break;
        case 'e':
            t2Score += D_SCORE;
            correct();
            break;
        case 'r':
            t2Score += VD_SCORE;
            correct();
            break;
        //team 3
        case 'a':
            t3Score += E_SCORE;
            correct();
            break;
        case 's':
            t3Score += M_SCORE;
            correct();
            break;
        case 'd':
            t3Score += D_SCORE;
            correct();
            break;
        case 'f':
            t3Score += VD_SCORE;
            correct();
            break;
        //team 4
        case 'z':
            t4Score += E_SCORE;
            correct();
            break;
        case 'x':
            t4Score += M_SCORE;
            correct();
            break;
        case 'c':
            t4Score += D_SCORE;
            correct();
            break;
        case 'v':
            t4Score += VD_SCORE;
            correct();
            break;
    }
    displayScore();
}

function correct() {

}

function wrong() {

}

function timesUp() {

}


function pause() {
    if (state == 0)
        state = 1;
    else if (state == 1)
        state = 0;
}

function reset() {
    secCounter = MAXTS;
    milCounter = MAXTMS;
    state = 0;
}

function checkKey(e) {
    e = e || window.event;
    processKey(e.key);

}


setup();