let x, z, trick, grind, amount, input, button1, button2, fullTrick;
let a = 20;
let b = 40;
let tricks = ['Tailwhip', 'Heelwhip', 'Bar', 'Oppo bar'];
let grinds = ['Feeble', 'Smith', '5050', '5-0', 'Board slide', 'Lip slide']
let combo = [];
let comboIndex = ['Trick', 'Grind'];

function setup() {
    removeElements();
    createCanvas(550, 400);
    background(216,191,216);
    greeting = createElement('h2', 'Do you want a ledge trick or rail trick?');
    greeting.position(20, 5);
    
    button1 = createButton('Ledge');
    button1.position(20, 65);
    button1.mousePressed(ledge);
  
    button2 = createButton('Rail');
    button2.position(80, 65);
    button2.mousePressed(rail);
}

function comboAmount(){
    greeting = createElement('h2', 'How many tricks do you want in the combo?');
    greeting.position(20, 5);
  
    sel1 = createSelect();
    sel1.position(20, 65);
    sel1.option('0');
    sel1.option('1');
    sel1.option('2');
    sel1.option('3');
    sel1.option('4');
    sel1.option('5');
    sel1.option('6');
    sel1.selected('0');
    sel1.changed(mySelectEvent);
  
  
    button3 = createButton('confirm');
    button3.position(60, 65);
    button3.mousePressed(pageSelector)
}
function pageSelector(){
    if (amount == 1){
        page31();   
    }
    if (amount == 2){
        page32();   
    }
    if (amount == 3){
        page33();   
    }
    if (amount == 4){
        page34();   
    }
    if (amount == 5){
        page35();   
    }
    if (amount == 6){
        page36();   
    }
}

function mySelectEvent() {
    amount = sel1.value();
}

function selectComboType1(){
    if (sel2.value() == 'Trick'){
        append(combo, 'Trick');
    }
    if (sel2.value() == 'Grind'){
        append(combo, 'Grind');
    }
    
}
function selectComboType2(){
    if (sel3.value() == 'Trick'){
        append(combo, 'Trick');
    }
    if (sel3.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType3(){
    if (sel4.value() == 'Trick'){
        append(combo, 'Trick');
    }
    if (sel4.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType4(){
    if (sel5.value() == 'Trick'){
        append(combo, 'Trick');
    }
    if (sel5.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType5(){
    if (sel6.value() == 'Trick'){
        append(combo, 'Trick');
    }
    if (sel6.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType6(){
    if (sel7.value() == 'Trick'){
        append(combo, 'Trick');
    }
    if (sel7.value() == 'Grind'){
        append(combo, 'Grind');
    }
}




function page31(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want to be tricks vs grinds?');
    greeting.position(20, 5);
    sel2 = createSelect();
    sel2.position(20, 65);
    sel2.option('Type');
    sel2.option('Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    button4 = createButton('confirm');
    button4.position(80, 65);
    button4.mousePressed(page4);
}

function page32(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want to be tricks vs grinds?');
    greeting.position(20, 5);
    sel2 = createSelect();
    sel2.position(20, 65);
    sel2.option('Type');
    sel2.option('Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(80, 65);
    sel3.option('Type');
    sel3.option('Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    button4 = createButton('confirm');
    button4.position(140, 65);
    button4.mousePressed(page4);
}
function page33(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want to be tricks vs grinds?');
    greeting.position(20, 5);
    sel2 = createSelect();
    sel2.position(20, 65);
    sel2.option('Type');
    sel2.option('Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(80, 65);
    sel3.option('Type');
    sel3.option('Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(140, 65);
    sel4.option('Type');
    sel4.option('Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    button4 = createButton('confirm');
    button4.position(200, 65);
    button4.mousePressed(page4);
}
function page34(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want to be tricks vs grinds?');
    greeting.position(20, 5);
    sel2 = createSelect();
    sel2.position(20, 65);
    sel2.option('Type');
    sel2.option('Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(80, 65);
    sel3.option('Type');
    sel3.option('Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(140, 65);
    sel4.option('Type');
    sel4.option('Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    sel5 = createSelect();
    sel5.position(200, 65);
    sel5.option('Type');
    sel5.option('Trick');
    sel5.option('Grind');
    sel5.selected('Type');
    sel5.changed(selectComboType4);
    button4 = createButton('confirm');
    button4.position(260, 65);
    button4.mousePressed(page4);
}
function page35(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want to be tricks vs grinds?');
    greeting.position(20, 5);
    sel2 = createSelect();
    sel2.position(20, 65);
    sel2.option('Type');
    sel2.option('Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(80, 65);
    sel3.option('Type');
    sel3.option('Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(140, 65);
    sel4.option('Type');
    sel4.option('Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    sel5 = createSelect();
    sel5.position(200, 65);
    sel5.option('Type');
    sel5.option('Trick');
    sel5.option('Grind');
    sel5.selected('Type');
    sel5.changed(selectComboType4);
    sel6 = createSelect();
    sel6.position(260, 65);
    sel6.option('Type');
    sel6.option('Trick');
    sel6.option('Grind');
    sel6.selected('Type');
    sel6.changed(selectComboType5);
    button4 = createButton('confirm');
    button4.position(320, 65);
    button4.mousePressed(page4);
}
function page36(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want to be tricks vs grinds?');
    greeting.position(20, 5);
    sel2 = createSelect();
    sel2.position(20, 65);
    sel2.option('Type');
    sel2.option('Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(80, 65);
    sel3.option('Type');
    sel3.option('Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(140, 65);
    sel4.option('Type');
    sel4.option('Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    sel5 = createSelect();
    sel5.position(200, 65);
    sel5.option('Type');
    sel5.option('Trick');
    sel5.option('Grind');
    sel5.selected('Type');
    sel5.changed(selectComboType4);
    sel6 = createSelect();
    sel6.position(260, 65);
    sel6.option('Type');
    sel6.option('Trick');
    sel6.option('Grind');
    sel6.selected('Type');
    sel6.changed(selectComboType5);
    sel7 = createSelect();
    sel7.position(320, 65);
    sel7.option('Type');
    sel7.option('Trick');
    sel7.option('Grind');
    sel7.selected('Type');
    sel7.changed(selectComboType6);
    button4 = createButton('confirm');
    button4.position(380, 65);
    button4.mousePressed(page4);
}

function page4(){
    b = 40;
    removeElements();
    greeting = createElement('h2', 'Your randomized trick.');
    greeting.position(20, 5);
  
    for (let j = 0; j < amount; j++) {
        if (combo[j] == comboIndex[0]){
            randomTrick();
            fullTrick = createElement('h3', trick);
            fullTrick.position(20,b);
            b+=20;
        }
        if (combo[j] == comboIndex[1]){
            randomGrind();
            fullTrick = createElement('h3', grind);
            fullTrick.position(20,b);
            b+=20;
        }
        if (j==amount-1){
            button5 = createButton('Randomize');
            button5.position(20, b + 25);
            button5.mousePressed(page4);
            button6 = createButton('Back to start');
            button6.position(20, b + 50);
            button6.mousePressed(setup);
        }
    }
}

function randomTrick(){
    trick = random(tricks);
    
}

function randomGrind(){
    grind = random(grinds);
}

function draw(){
    if (x==1){
        removeElements();
        x=3;
        comboAmount();
    }
    else if (x==2){
        removeElements();
        x=4;
        comboAmount();
    }
}

function ledge(){
    x = 1;
} 
function rail(){
    x = 2;  
}  
