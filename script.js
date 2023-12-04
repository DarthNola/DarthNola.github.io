let numberz =[];
let operatorz =[] ;
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return null;
    }
}
function calculate(numbers, operators) {
    if (numbers.length < 2 || operators.length < 1 || numbers.length !== operators.length + 1) {
        console.error("Invalid input:", numbers, operators);
        alert("Invalid input");
        return null;
    }

    
    var result = numbers[0];

    for (var i = 0; i < operators.length; i++) {
        result = operate(operators[i], result, numbers[i + 1]);
    }

    return result;
}

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
    numberz.push(parseFloat(value));
	document.Scientific_Calculator.result.value += value;
    
}
function getOperator(value) {
	operatorz.push(value);
	document.Scientific_Calculator.result.value += value;
    
}

function remv(){
	document.Scientific_Calculator.result.value=" ";
    numberz =[];
    operatorz=[];
}

function equal(){
    
	document.Scientific_Calculator.result.value=calculate(numberz,operatorz);
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



