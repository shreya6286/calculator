let screenNumber = 0;
let result = 0;
let num1 = 0;
let num2 = 0;
let level = 1;
let action = '';
function btnClick(a){
    if ( parseInt(screenNumber) === 0){
         screenNumber = a;
         if (level===1){
             num1 = a;
         }
         else {
             num2 = a;
         }
    } else {
        screenNumber += a;
        if (level===1){
            num1 += a;
        }
        else {
            num2 += a;
        }
    }
    document.getElementById('screen').innerHTML = screenNumber;
}
document.getElementById('screen').innerHTML = screenNumber;

function clearScreen(){
    screenNumber = 0;
    result = 0;
    num1 = 0;
    num2 = 0;
    level = 1;
    document.getElementById('screen').innerHTML = screenNumber;
    document.getElementById('result').innerHTML = '';
}

function addNumbers (){
    level = 2;
    action = "addition";
    screenNumber += "+";     
    document.getElementById('screen').innerHTML = screenNumber;
}

function multiply() {
    level = 2;
    action = 'multiply';
    screenNumber += "x";
    document.getElementById('screen').innerHTML = screenNumber;
}

function subtract(){
    level = 2;
    action = "subtract";
    screenNumber += "-";
    document.getElementById('screen').innerHTML = screenNumber;
}

function division(){
    level = 2;
    action = "division";
    screenNumber += "÷"
    document.getElementById("screen").innerHTML = screenNumber;
}

function modulas(){
    level = 2;
    action = "modulas";
    screenNumber += "%"
    document.getElementById("screen").innerHTML = screenNumber;
}

function sqrt(){
    level = 2;
    action = "sqrt";
    screenNumber += "^"
    document.getElementById("screen").innerHTML = screenNumber;
}

function del(){
    level = 1;
    action = "del";
    document.getElementById("screen").innerHTML = screenNumber;
}

function submit() {
    if (action==='multiply'){
        document.getElementById('result').innerHTML = num1 * num2
        level = 1;
        num1 = 0;
        num2 = 0;
    } else if (action === "addition"){
        document.getElementById("result").innerHTML = num1 + num2;
        level = 1;
        num1 = 0;
        num2 = 0;
    } else if (action === "subtract"){
        document.getElementById("result").innerHTML = num1 - num2;
        level = 1;
        num1 = 0;
        num2 = 0;
    } else if (action === "division"){
        document.getElementById("result").innerHTML = num1 / num2;
        level = 1;
        num1 = 0;
        num2 = 0;
    } else if (action === "modulas"){
        document.getElementById("result").innerHTML = num1 % num2;
        level = 1;
        num1 = 0;
        num2 = 0;
    } else if (action === "sqrt"){
        document.getElementById("result").innerHTML = num1 ** num2;
        level = 1;
        num1 = 0;
        num2 = 0;
    } //else if (action === "del"){
       // screenNumber -= ;
        //document.getElementById("result").innerHTML = screenNumber;
       // level = 1;
        //num1 = 0;
       // num2 = 0;
    //}
}