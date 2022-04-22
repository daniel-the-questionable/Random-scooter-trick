let x, z, trick, grind, amount, input, button1, button2, fullTrick;
let a = 20;
let b = 40;
let grinds = ['Feeble', 'Smith', '5050', '5-0', 'Board slide', 'Lip slide']
let combo = [];
let comboIndex = ['Easy Trick', 'Medium Trick', 'Hard Trick', 'Grind'];
let easyTricks = ['Tailwhip', 'Heelwhip', 'Bar', 'Oppo bar', 'FS 180', 'BS 180'];
let mediumTricks = ['Bartwist', 'Fingerwhip', 'FS 360', 'BS 360'];
let hardTricks = ['Briflip', 'Inward', 'FS 540', 'BS 540'];
let ledgeGrinds = [];
let railGrinds = [];
let greeting1;

function setup() {
    removeElements();
    createCanvas(400, 400);
    background(136,216,192);
    combo = [];
    greeting = createElement('h2', 'Do you want a ledge');
    greeting.position(20, 5);
    greeting = createElement('h2', 'or rail trick?');
    greeting.position(20, 30);
    button1 = createButton('Ledge');
    button1.position(20, 85);
    button1.mousePressed(ledge);
    button2 = createButton('Rail');
    button2.position(80, 85);
    button2.mousePressed(rail);
    greeting = createElement('A2', 'Ledge vs. rail is Work in progress');
    greeting.position(130, 85);
  
    button11 = createButton('Edit trick list');
    button11.position(20, 110);
    button11.mousePressed(trickList);
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

function trickList(){
    removeElements();
    greeting = createElement('h2', 'Edit trick lists here');
    greeting.position(20, 5);
    
    greeting = createElement('a2', 'Add to easy trick list');
    greeting.position(20, 65);
    easyTrickInput = createInput();
    easyTrickInput.position(20, 85);
    easyTrickInput.size(65);
    button11 = createButton('Add to list');
    button11.position(96, 85);
    button11.mousePressed(editEasyTrickList);
    button21 = createButton('Remove from list');
    button21.position(174, 85);
    button21.mousePressed(removeEasyTrickList);
  
    greeting = createElement('a2', 'Add to medium trick list');
    greeting.position(20, 115);
    mediumTrickInput = createInput();
    mediumTrickInput.position(20, 135);
    mediumTrickInput.size(65);
    button12 = createButton('Add to list');
    button12.position(96, 135);
    button12.mousePressed(editMediumTrickList);
    button22 = createButton('Remove from list');
    button22.position(174, 135);
    button22.mousePressed(removeMediumTrickList);
  
    greeting = createElement('a2', 'Add to hard trick list');
    greeting.position(20, 165);
    hardTrickInput = createInput();
    hardTrickInput.position(20, 185);
    hardTrickInput.size(65);
    button13 = createButton('Add to list');
    button13.position(96, 185);
    button13.mousePressed(editHardTrickList);
    button23 = createButton('Remove from list');
    button23.position(174, 185);
    button23.mousePressed(removeHardTrickList);
  
    greeting = createElement('a2', 'Add to grind list');
    greeting.position(20, 215);
    grindInput = createInput();
    grindInput.position(20, 235);
    grindInput.size(65);
    button14 = createButton('Add to list');
    button14.position(96, 235);
    button14.mousePressed(editGrindTrickList);
    button24 = createButton('Remove from list');
    button24.position(174, 235);
    button24.mousePressed(removeGrindTrickList);
  
    opt = createSelect();
    opt.position(20, 265);
    opt.option('View Trick Lists');
    opt.option('View Easy Trick List');
    opt.option('View Medium Trick List');
    opt.option('View Hard Trick List');
    opt.option('View Grind List');
    opt.selected('View Trick lists');
    opt.changed(trickListViewer);
  
    button15 = createButton('Back to home');
    button15.position(20, 365);
    button15.mousePressed(setup);
}

function trickListViewer(){
    if (opt.value() == 'View Easy Trick List'){
        removeElements();
        trickList();
        greeting1 = createElement('a2', easyTricks);
        greeting1.position(20, 300);
    }
    if (opt.value() == 'View Medium Trick List'){
        removeElements();
        trickList();
        greeting1 = createElement('a2', mediumTricks);
        greeting1.position(20, 300);
    }
    if (opt.value() == 'View Hard Trick List'){
        removeElements();
        trickList();
        greeting1 = createElement('a2', hardTricks);
        greeting1.position(20, 300);
    }
    if (opt.value() == 'View Grind List'){
        removeElements();
        trickList();
        greeting1 = createElement('a2', grinds);
        greeting1.position(20, 300);
    }
}


function editEasyTrickList(){
    const easyValue = easyTrickInput.value();
    append(easyTricks, easyValue); 
    easyTrickInput.value('');
}

function removeEasyTrickList(){
    const easyValue = easyTrickInput.value();
    if (easyTricks[0] == easyValue){
        easyTricks.shift();
    }
  
    for (let i = 0; i < 9; i++) {
        if (easyTricks[i] == easyValue){
            easyTricks.splice(i, i);
        }
    }
    easyTrickInput.value('');
}

function editMediumTrickList(){
    const mediumValue = mediumTrickInput.value();
    append(mediumTricks, mediumValue); 
    mediumTrickInput.value('');
}


function removeMediumTrickList(){
    const mediumValue = mediumTrickInput.value();
    if (mediumTricks[0] == mediumValue){
        mediumTricks.shift();
    }
  
    for (let i = 0; i < 9; i++) {
        if (mediumTricks[i] == mediumValue){
            mediumTricks.splice(i, i);
        }
    }
    mediumTrickInput.value('');
  
}

function editHardTrickList(){
    const hardValue = hardTrickInput.value();
    append(hardTricks, hardValue); 
    hardTrickInput.value('');
}


function removeHardTrickList(){
    const hardValue = hardTrickInput.value();
    if (hardTricks[0] == hardValue){
        hardTricks.shift();
    }
  
    for (let i = 0; i < 9; i++) {
        if (hardTricks[i] == hardValue){
            hardTricks.splice(i, i);
        }
    }
    hardTrickInput.value('');
  
}

function editGrindTrickList(){
    const grindValue = grindInput.value();
    append(grinds, grindValue); 
    grindInput.value('');
}


function removeGrindTrickList(){
    const grindValue = grindInput.value();
    if (grinds[0] == grindValue){
        grinds.shift();
    }
  
    for (let i = 0; i < 9; i++) {
        if (grinds[i] == grindValue){
            grinds.splice(i, i);
        }
    }
    grindInput.value('');
  
}


function comboAmount(){
    greeting = createElement('h2', 'How many tricks do you');
    greeting.position(20, 5);
    greeting = createElement('h2', 'want in the combo?');
    greeting.position(20, 30);
  
    sel1 = createSelect();
    sel1.position(20, 85);
    sel1.option('0');
    sel1.option('1');
    sel1.option('2');
    sel1.option('3');
    sel1.option('4');
    sel1.option('5');
    sel1.option('6');
    sel1.selected('0');
    sel1.changed(mySelectEvent);
  
  
    button3 = createButton('Confirm');
    button3.position(60, 85);
    button3.mousePressed(pageSelector);
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
    if (sel2.value() == 'Easy Trick'){
        append(combo, 'Easy Trick');
    }
    if (sel2.value() == 'Medium Trick'){
        append(combo, 'Medium Trick');
    }
    if (sel2.value() == 'Hard Trick'){
        append(combo, 'Hard Trick');
    }
    if (sel2.value() == 'Grind'){
        append(combo, 'Grind');
    }
    
}
function selectComboType2(){

    if (sel3.value() == 'Easy Trick'){
        append(combo, 'Easy Trick');
    }
    if (sel3.value() == 'Medium Trick'){
        append(combo, 'Medium Trick');
    }
    if (sel3.value() == 'Hard Trick'){
        append(combo, 'Hard Trick');
    }
    if (sel3.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType3(){
    if (sel4.value() == 'Easy Trick'){
        append(combo, 'Easy Trick');
    }
    if (sel4.value() == 'Medium Trick'){
        append(combo, 'Medium Trick');
    }
    if (sel4.value() == 'Hard Trick'){
        append(combo, 'Hard Trick');
    }
    if (sel4.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType4(){
    if (sel5.value() == 'Easy Trick'){
        append(combo, 'Easy Trick');
    }
    if (sel5.value() == 'Medium Trick'){
        append(combo, 'Medium Trick');
    }
    if (sel5.value() == 'Hard Trick'){
        append(combo, 'Hard Trick');
    }
    if (sel5.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType5(){
    if (sel6.value() == 'Easy Trick'){
        append(combo, 'Easy Trick');
    }
    if (sel6.value() == 'Medium Trick'){
        append(combo, 'Medium Trick');
    }
    if (sel6.value() == 'Hard Trick'){
        append(combo, 'Hard Trick');
    }
    if (sel6.value() == 'Grind'){
        append(combo, 'Grind');
    }
}
function selectComboType6(){
    if (sel7.value() == 'Easy Trick'){
        append(combo, 'Easy Trick');
    }
    if (sel7.value() == 'Medium Trick'){
        append(combo, 'Medium Trick');
    }
    if (sel7.value() == 'Hard Trick'){
        append(combo, 'Hard Trick');
    }
    if (sel7.value() == 'Grind'){
        append(combo, 'Grind');
    }
}




function page31(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want');
    greeting.position(20, 5);
    greeting = createElement('h2', 'to be a trick vs a grind?');
    greeting.position(20, 30);
    sel2 = createSelect();
    sel2.position(20, 85);
    sel2.option('Type');
    sel2.option('Easy Trick');
    sel2.option('Medium Trick');
    sel2.option('Hard Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    button4 = createButton('confirm');
    button4.position(20, 110);
    button4.mousePressed(page4);
}

function page32(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want');
    greeting.position(20, 5);
    greeting = createElement('h2', 'to be a trick vs a grind?');
    greeting.position(20, 30);
    sel2 = createSelect();
    sel2.position(20, 85);
    sel2.option('Type');
    sel2.option('Easy Trick');
    sel2.option('Medium Trick');
    sel2.option('Hard Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(20, 110);
    sel3.option('Type');
    sel3.option('Easy Trick');
    sel3.option('Medium Trick');
    sel3.option('Hard Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    button4 = createButton('confirm');
    button4.position(20, 135);
    button4.mousePressed(page4);
}
function page33(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want');
    greeting.position(20, 5);
    greeting = createElement('h2', 'to be a trick vs a grind?');
    greeting.position(20, 30);
    sel2 = createSelect();
    sel2.position(20, 85);
    sel2.option('Type');
    sel2.option('Easy Trick');
    sel2.option('Medium Trick');
    sel2.option('Hard Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(20, 110);
    sel3.option('Type');
    sel3.option('Easy Trick');
    sel3.option('Medium Trick');
    sel3.option('Hard Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(20, 135);
    sel4.option('Type');
    sel4.option('Easy Trick');
    sel4.option('Medium Trick');
    sel4.option('Hard Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    button4 = createButton('confirm');
    button4.position(20, 160);
    button4.mousePressed(page4);
}
function page34(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want');
    greeting.position(20, 5);
    greeting = createElement('h2', 'to be a trick vs a grind?');
    greeting.position(20, 30);
    sel2 = createSelect();
    sel2.position(20, 85);
    sel2.option('Type');
    sel2.option('Easy Trick');
    sel2.option('Medium Trick');
    sel2.option('Hard Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(20, 110);
    sel3.option('Type');
    sel3.option('Easy Trick');
    sel3.option('Medium Trick');
    sel3.option('Hard Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(20, 135);
    sel4.option('Type');
    sel4.option('Easy Trick');
    sel4.option('Medium Trick');
    sel4.option('Hard Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    sel5 = createSelect();
    sel5.position(20, 160);
    sel5.option('Type');
    sel5.option('Easy Trick');
    sel5.option('Medium Trick');
    sel5.option('Hard Trick');
    sel5.option('Grind');
    sel5.selected('Type');
    sel5.changed(selectComboType4);
    button4 = createButton('confirm');
    button4.position(20, 185);
    button4.mousePressed(page4);
}
function page35(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want');
    greeting.position(20, 5);
    greeting = createElement('h2', 'to be a trick vs a grind?');
    greeting.position(20, 30);
    sel2 = createSelect();
    sel2.position(20, 85);
    sel2.option('Type');
    sel2.option('Easy Trick');
    sel2.option('Medium Trick');
    sel2.option('Hard Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(20, 110);
    sel3.option('Type');
    sel3.option('Easy Trick');
    sel3.option('Medium Trick');
    sel3.option('Hard Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(20, 135);
    sel4.option('Type');
    sel4.option('Easy Trick');
    sel4.option('Medium Trick');
    sel4.option('Hard Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    sel5 = createSelect();
    sel5.position(20, 160);
    sel5.option('Type');
    sel5.option('Easy Trick');
    sel5.option('Medium Trick');
    sel5.option('Hard Trick');
    sel5.option('Grind');
    sel5.selected('Type');
    sel5.changed(selectComboType4);
    sel6 = createSelect();
    sel6.position(20, 185);
    sel6.option('Type');
    sel6.option('Easy Trick');
    sel6.option('Medium Trick');
    sel6.option('Hard Trick');
    sel6.option('Grind');
    sel6.selected('Type');
    sel6.changed(selectComboType5);
    button4 = createButton('confirm');
    button4.position(20, 210);
    button4.mousePressed(page4);
}
function page36(){
    removeElements();
    greeting = createElement('h2', 'Which tricks do you want');
    greeting.position(20, 5);
    greeting = createElement('h2', 'to be a trick vs a grind?');
    greeting.position(20, 30);
    sel2 = createSelect();
    sel2.position(20, 85);
    sel2.option('Type');
    sel2.option('Easy Trick');
    sel2.option('Medium Trick');
    sel2.option('Hard Trick');
    sel2.option('Grind');
    sel2.selected('Type');
    sel2.changed(selectComboType1);
    sel3 = createSelect();
    sel3.position(20, 110);
    sel3.option('Type');
    sel3.option('Easy Trick');
    sel3.option('Medium Trick');
    sel3.option('Hard Trick');
    sel3.option('Grind');
    sel3.selected('Type');
    sel3.changed(selectComboType2);
    sel4 = createSelect();
    sel4.position(20, 135);
    sel4.option('Type');
    sel4.option('Easy Trick');
    sel4.option('Medium Trick');
    sel4.option('Hard Trick');
    sel4.option('Grind');
    sel4.selected('Type');
    sel4.changed(selectComboType3);
    sel5 = createSelect();
    sel5.position(20, 160);
    sel5.option('Type');
    sel5.option('Easy Trick');
    sel5.option('Medium Trick');
    sel5.option('Hard Trick');
    sel5.option('Grind');
    sel5.selected('Type');
    sel5.changed(selectComboType4);
    sel6 = createSelect();
    sel6.position(20, 185);
    sel6.option('Type');
    sel6.option('Easy Trick');
    sel6.option('Medium Trick');
    sel6.option('Hard Trick');
    sel6.option('Grind');
    sel6.selected('Type');
    sel6.changed(selectComboType5);
    sel7 = createSelect();
    sel7.position(20, 210);
    sel7.option('Type');
    sel7.option('Easy Trick');
    sel7.option('Medium Trick');
    sel7.option('Hard Trick');
    sel7.option('Grind');
    sel7.selected('Type');
    sel7.changed(selectComboType6);
    button4 = createButton('confirm');
    button4.position(20, 235);
    button4.mousePressed(page4);
}

function page4(){
    b = 40;
    removeElements();
    greeting = createElement('h2', 'Your randomized trick.');
    greeting.position(20, 5);
  
    for (let j = 0; j < amount; j++) {
        if (combo[j] == comboIndex[0]){
            randomEasyTrick();
            fullTrick = createElement('h3', easyTrick);
            fullTrick.position(20,b);
            b+=20;
        }
        if (combo[j] == comboIndex[1]){
            randomMediumTrick();
            fullTrick = createElement('h3', mediumTrick);
            fullTrick.position(20,b);
            b+=20;
        }
        if (combo[j] == comboIndex[2]){
            randomHardTrick();
            fullTrick = createElement('h3', hardTrick);
            fullTrick.position(20,b);
            b+=20;
        }
        if (combo[j] == comboIndex[3]){
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

function randomEasyTrick(){
    easyTrick = random(easyTricks);
}

function randomMediumTrick(){
    mediumTrick = random(mediumTricks);
}

function randomHardTrick(){
    hardTrick = random(hardTricks);
}

function randomGrind(){
    grind = random(grinds);
}
