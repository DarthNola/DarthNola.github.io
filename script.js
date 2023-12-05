
let s="";
let operations = ["-", "+", "*", "/", "^"]

let functions = ["sin", "cos", "tan", "sqrt", "sqrt3"]


function getValue(s) {
    
    if (getOperators(s) != null && getFuncs(s) == null) {
        let operators = getOperators(s);
        let vals = s.split(operators);
        let result = getValue(vals[0]);

        for (let i = 1; i < vals.length; i++) {
            let val = getValue(vals[i]);
            result = operate(operators, result, val);
            console.log(result);
        }

        return result;
    }

    let f = getFuncs(s);

    if (f) {
        let funcInput = grabFuncInput(s, f);
        let val = getValue(funcInput);

        if (getOperators(s) == null && getFuncs(s) != null) {
            return functioning(f, val);
        } else {
            s = s.replace(new RegExp(`${f}\\(${grabFuncInput(s, f)}\\)`), functioning(f, val));
            console.log(s);
            return getValue(s);
        }
    }

    return s;
}

const getOperators = (s) => {
    const brackets = getMatchingBrackets(s);

    for (let i = 0; i < operations.length; i++) {
        let valid = true;

        for (let j = 0; j < s.length; j++) {
            const hasBracket = brackets.find(([start, end]) => j > start && j < end);
            if (hasBracket) {
                valid = false;
                break;
            }

            if (s[j] === operations[i] && valid) {
                return s[j];
            }
        }
    }

    return null;
}
const getFuncs = (s) => {
    for (let i = 0; i < functions.length; i++) {
        for (let j = 0; j <= s.length - functions[i].length; j++) {
            // Use substring for direct comparison
            const substring = s.substring(j, j + functions[i].length);
            if (substring === functions[i]) {
                return functions[i];
            }
        }
    }

    // Returns null if no match is found
    return null;
}




const grabFuncInput = (s) => {
    
    let first = s.indexOf("(")+1;
    let last = s.indexOf(")");
    let result =s.substring(first,last);
    return result;
}

let getMatchingBrackets = (s) => {
    let stack = [];
    let brackets = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === "("){
            stack.push(i);
        }
        else if(s[i] === ")"){
            brackets.push([stack.pop(), i]);
        }
    }
    if(stack.length > 0) return null;
    return brackets;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return new Number(a) + new Number(b);
        case '-':
            return new Number(a) - new Number(b);
        case '*':
            return new Number(a) * new Number(b);
        case '/':
            return new Number(a) / new Number(b);
        case '^':
            return  Math.pow(new Number(a),new Number(b));
        default:
            return null;
    }
}

function functioning(f, val) {
    switch (f) {
        case 'sin':
            return Math.sin(new Number(val) * Math.PI / 180);
        case 'cos':
            return Math.cos(new Number(val) * Math.PI / 180);
        case 'tan':
            return Math.tan(new Number(val) * Math.PI / 180);
        case '':
            return new Number(a) / new Number(b);
        case '^':
            return  Math.pow(new Number(a),new Number(b));
        default:
            return null;
    }
 }

 function checkBrackets(s) {
    if(s.includes("(")){
        let first = s.indexOf("(");
        let last = s.indexOf(")")+1;
        value = s.substring(first, last)
        console.log(value);
        let innervalue = getValue(grabFuncInput(value)) ;
        console.log(innervalue);
        s = s.replace(value,innervalue);
        console.log(s);
        return s
        
    }else{
        return s;
    }
    
 }

// function calculate(numbers, operators) {
//     if (numbers.length < 2 || operators.length < 1 || numbers.length !== operators.length + 1) {
//         console.error("Invalid input:", numbers, operators);
//         alert("Invalid input");
//         return null;
//     }

    
//     var result = numbers[0];

//     for (var i = 0; i < operators.length; i++) {
//         result = operate(operators[i], result, numbers[i + 1]);
//     }

//     return result;
// }

function sin(){
	document.Scientific_Calculator.result.value=Math.sin(document.Scientific_Calculator.result.value);
}

function cos(){
	document.Scientific_Calculator.result.value=Math.cos(document.Scientific_Calculator.result.value);
}

function tan(){
	document.Scientific_Calculator.result.value=Math.tan(document.Scientific_Calculator.result.value);
}

function BACKSPC(){
	var a = document.Scientific_Calculator.result.value;
	document.Scientific_Calculator.result.value = a.substr(0, a.length-1);
}

function square(){
	var userInput = document.Scientific_Calculator.result.value;
	document.Scientific_Calculator.result.value = userInput* userInput* userInput;
}

function cubed(){
    var userInput = document.Scientific_Calculator.result.value;
	document.Scientific_Calculator.result.value = userInput* userInput* userInput;
}

function sqrt2(){
	document.Scientific_Calculator.result.value = Math.pow(document.Scientific_Calculator.result.value, 1/2);
}

function sqrt3(){
	document.Scientific_Calculator.result.value = Math.pow(document.calcul.Scientific_Calculator.value, 1/3);
}

function number(value){

	document.Scientific_Calculator.result.value += value;
    
}
function getOperator(value) {
	
	document.Scientific_Calculator.result.value += value;
    
}

function remv(){
	document.Scientific_Calculator.result.value=" ";
    
}

function equal(){
    document.Scientific_Calculator.result.value = getValue(checkBrackets(document.Scientific_Calculator.result.value));
	
}

const darkModeToggle = document.getElementById('darkmode-toggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
});



