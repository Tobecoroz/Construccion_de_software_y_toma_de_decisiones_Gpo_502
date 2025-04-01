let fullOperation = '';
let Olog = [];

function addNumber(number) {
  let op = fullOperation.split('');
  console.log(op)
  if (op.includes('+') && number.toString() === '+') return;

  if(number === "="){
    calculate();
    return
  } else if(number === "C"){
    console.log(number)
    
    fullOperation= '';
    Olog = [];
    updateLogDisplay();
    showNumber();
    return
  }

  fullOperation = fullOperation + number.toString();

  showNumber();
}

function calculate(){
    // console.log(1)
    // Suma 
    let original = fullOperation;
    let number1 = fullOperation.split('+');
    let result1 = Number(number1[0]) + Number(number1[1]);
    if(fullOperation.includes('+')) {
        fullOperation = result1.toString();
        Olog.push(`${original}=${result1}`);
        updateLogDisplay();
    } 
    
    // Resta 
    original = fullOperation;
    let number2 = fullOperation.split('-');
    let result2 = Number(number2[0]) - Number(number2[1]);
    if (fullOperation.includes('-')){
        fullOperation = result2.toString();
        Olog.push(`${original}=${result2}`);
        updateLogDisplay();
    }
    
    // Multiplicacion 
    original = fullOperation;
    let number3 = fullOperation.split('x');
    let result3 = Number(number3[0]) * Number(number3[1]);
    if (fullOperation.includes('x')){
        fullOperation = result3.toString();
        Olog.push(`${original}=${result3}`);
        updateLogDisplay();
    }
    
    // Divicion 
    original = fullOperation;
    let number4 = fullOperation.split('/');
    let result4 = Number(number4[0]) / Number(number4[1]);
    if (fullOperation.includes('/')){
        fullOperation = result4.toString();
        Olog.push(`${original}=${result4}`);
        updateLogDisplay();
    }
    
    // Exponencial 
    original = fullOperation;
    let number5 = fullOperation.split('^');
    let result5 = Math.pow(Number(number5[0]), Number(number5[1]));
    if (fullOperation.includes('^')){
        fullOperation = result5.toString();
        Olog.push(`${original}=${result5}`);
        updateLogDisplay();
    } 
    
    showNumber();
}

function showNumber() {
  document.getElementById('operation').innerHTML = fullOperation;
}

function updateLogDisplay() {
    const logElement = document.getElementById('log');
    logElement.innerHTML = Olog.map(entry => `<div>${entry}</div>`).join('');
}