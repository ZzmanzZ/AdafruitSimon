const red = light.rgb(255, 0, 0)
const yellow = light.rgb(255, 255, 0)
const green = light.rgb(0, 255, 0)
const blue = light.rgb(0, 0, 255)
const MAX_LEVEL = 100;
let sequence = [MAX_LEVEL];
let your_sequence = [MAX_LEVEL];
let level = 1;
let velocity = 1000;
let focus = 0


generateSequence();
input.buttonsAB.onEvent(ButtonEvent.Click, function() {
    showSequence();
    getSequence();
})

function showSequence() {   
    for (let i = 0; i < level; i++) {
        switch (sequence[i]) {
        case 1:
            light.setAll(red)
            pause(velocity/2);
            light.clear()
            pause(velocity);
            break;
        case 2:
            light.setAll(yellow)
            pause(velocity);
            light.clear()
            pause(velocity);
            break;
        case 3:
            light.setAll(green)
            pause(velocity);
            light.clear()
            pause(velocity);
            break;
        case 4:
            light.setAll(blue)
            pause(velocity);
            light.clear()
            pause(velocity);
            break;
        }
    }
}

function getSequence() {
    let flag = 0; //this flag indicates if the sequence is correct
    for (let i = 0; i < level; i++) {
        flag = 0;
        while (flag == 0){
        if (input.buttonA3.isPressed()) {
                light.setAll(red)
                your_sequence[i] = 1;
                flag = 1;
                pause(200);
                if (your_sequence[i] != sequence[i]) {
                    incorrect();
                    return;
                } else {
                    light.clear()
                }
            }
        if (input.buttonA4.isPressed()) {
                light.setAll(yellow)
                your_sequence[i] = 2;
                flag = 1;
                pause(200);
                if (your_sequence[i] != sequence[i]){
                    incorrect();
                    return;
                } else {
                    light.clear()
                }
            }
        if (input.buttonA7.isPressed()) {
                light.setAll(green)
                your_sequence[i] = 3;
                flag = 1;
                pause(200);
                if (your_sequence[i] != sequence[i]) {
                    incorrect();
                    return;
                } else {
                    light.clear()
                }
            }
        if (input.buttonA0.isPressed()) {
            light.setAll(blue)
            your_sequence[i] = 4;
            flag = 1;
            pause(200);
            if (your_sequence[i] != sequence[i]){
                incorrect();
                return;
            }
        }
     }
}
correct();
}

function generateSequence() {
    for (let i = 0; i < MAX_LEVEL; i++){
        sequence[i] = randint(1, 4);
    }
    console.log(sequence)
}

function incorrect() {
    for (let i = 0; i < 3; i++) {
        light.showAnimation(light.rainbowAnimation, 1000)
        light.clear()
        music.wawawawaa.playUntilDone()
    }
    level = 1;
    velocity = 1000;
    generateSequence()
    pause(1000)
    showSequence();
    getSequence();
}

function correct() {
//put some animation here
//put a sound or smth
    if (level < MAX_LEVEL) {
    level++;
    velocity -= 25; //increase difficult
    pause(1000)
    showSequence();
    getSequence();
    } else {
    //you win
    }
}