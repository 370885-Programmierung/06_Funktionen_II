
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : erledigt
3. Fkt. Grundrechenarten : erledigt
4. Ausgabe in Konsole : erledigt
*/

// module: application | test:
// startApp();
function startApp() {
    output(calculator(getNumber("eins"),getNumber("zwei"),getOperator()))
}
function getNumber(figure){
return Number(prompt("Zahl " + figure + " eingeben : "));
}
// module: insert operator | test:
output(getOperator());
function getOperator(){
    let operator = prompt("Operator (+,-,*,/): ");
    if (isOperatorValid(operator)) {
        return "Die Eingabe ist ein gültiger Operator";
    } else {
        return "Die Eingabe ist kein gültiger Operator";
    }  
}
function isOperatorValid(operator) {
    // Lösung über switch-case;
    // switch (operator) {
    //     case "+":
    //     case "-":
    //     case "*":
    //     case "/":
    //     case ":":
    //         return true;
    //     default:
    //         return false;
    // };

   // Lösung über return des Ergebnisses eines logischen Ausdrucks;
    return operator == "+" || operator == "-" || operator == "*" ||operator == "/" || operator == ":";
}
// module: calculator | test:
// output(calculator(1,2,"+"));
// output(calculator(3,12,"-"));
// output(calculator(4,4,"*"));
// output(calculator(7,0,"/"));
// output(calculator(5,0,"?"));
function calculator(a,b,operator) {
    switch (operator) {
        case "+":
            return addAB(a,b);
        case "-":
            return subtractAB(a,b);
        case "*":
            return multiplyAB(a,b);
        case "/":
            return divideAB(a,b);
        case ":":
        default:
            return "Something went wrong!";
    }
}
// module: console output | test:
// output("Hallo");
// output(2);
function output(outputData) {
    if (typeof outputData == "number") {
        return console.log ("ergebnis = " + outputData) 
    } 
        return console.log ("error " + outputData);
}
// module: addition | test:
// output(addAB(1,2));
// output(addAB(3,12));
// output(addAB(4,4));
// output(addAB(7,0));
function addAB(a,b) {
    return a + b;
}
// module: subtraktion | test:
// output(subtractAB(1,2));
// output(subtractAB(3,12));
// output(subtractAB(4,4));
// output(subtractAB(7,0));
function subtractAB(a,b) {
    return a - b;
}
// module: multiplikation | test:
// output(multiplyAB(1,2));
// output(multiplyAB(3,12));
// output(multiplyAB(4,4));
// output(multiplyAB(7,0));
function multiplyAB(a,b) {
    return a * b;
}
// module: division | test:
// output(divideAB(1,2));
// output(divideAB(3,12));
// output(divideAB(4,4));
// output(divideAB(7,0));
function divideAB(a,b) {
    if (b == 0) {
        return "Teilung durch 0 nicht möglich."
    } 
        return a / b;
}

