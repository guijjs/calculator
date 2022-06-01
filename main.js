const numbers = document.querySelectorAll("#numbers div")
const operators = document.querySelectorAll('#operators div')
const operatorDelete = document.querySelector("#operators [alt='DEL']")
const operatorClear = document.querySelector("#operators [alt='CE']")
const operatorDivision = document.querySelector("#operators [alt='/']")
const operatorMultiple = document.querySelector("#operators [alt='*']")
const operatorMinus = document.querySelector("#operators [alt='-']")
const operatorPlus = document.querySelector("#operators [alt='+']")
const operatorEqual = document.querySelector("#operators [alt='=']")

const currentCalc = document.querySelector("#current-calc")
const currentCalcNew = document.querySelector("#current-calc-new")
const pastCalc = document.querySelector("#past-calc")

class Calculator{
    constructor(currentCalcNew, pastCalc, currentCalc){
        this.currentCalcTextNew = currentCalcNew;
        this.currentCalc = currentCalc;
        this.pastCalcText = pastCalc;
        this.clear();
    }
    operatorDelete(deletAction){
        this.currentCalcTextNew = ` ${deletAction.toString()}`
    }
    operatorClear(){
        this.currentCalcTextNew = ``
    }
    clear(){
        this.currentCalcTextNew.innerText = '';
        this.currentCalc.innerText = '';
        this.pastCalcText.innerText = '';
    }
    operationClick(operator){
        this.currentCalcTextNew = `${this.currentCalcTextNew}${operator.toString()}`
    }
    numberClick(number){
        this.currentCalcTextNew = ` ${this.currentCalc.innerText}${number.toString()}`
        
    }
    updateDisplay(){
        this.currentCalc.innerText = `${this.currentCalcTextNew}`
        this.pastCalcText = pastCalc;
    }
}

const calculadora = new Calculator(currentCalcNew, pastCalc, currentCalc);


//Check se o operador foi clickado
for(let operator of operators){
    operator.addEventListener('click', ()=>{
        switch(operator.innerHTML){
            case '+':
                if(String(calculadora.currentCalc.innerText) !== undefined && String(calculadora.currentCalc.innerText) !== null && String(calculadora.currentCalc.innerText) !==  ''){
                    console.log(operator.innerHTML)
                    calculadora.operationClick(operator.innerHTML)
                    calculadora.updateDisplay();
                }else{
                    return
                }
                break;
            case '-':
                if(String(calculadora.currentCalc.innerText) !== undefined && String(calculadora.currentCalc.innerText) !== null && String(calculadora.currentCalc.innerText) !==  ''){
                    console.log(operator.innerHTML)
                    calculadora.operationClick(operator.innerHTML)
                    calculadora.updateDisplay();
                }else{
                    return
                }
                break;
            case '*':
                if(String(calculadora.currentCalc.innerText) !== undefined && String(calculadora.currentCalc.innerText) !== null && String(calculadora.currentCalc.innerText) !==  ''){
                    console.log(operator.innerHTML)
                    calculadora.operationClick(operator.innerHTML)
                    calculadora.updateDisplay();
                }else{
                    return
                }
                break;
            case '/':
                if(String(calculadora.currentCalc.innerText) !== undefined && String(calculadora.currentCalc.innerText) !== null && String(calculadora.currentCalc.innerText) !==  ''){
                    console.log(operator.innerHTML)
                    calculadora.operationClick(operator.innerHTML)
                    calculadora.updateDisplay();
                }else{
                    return
                }
                break;
            case 'DEL':
                calculadora.operatorDelete(String(calculadora.currentCalc.innerText).replace(/.$/, ''))
                calculadora.updateDisplay();
                break;
            case 'CE':
                let answer = prompt('Deseja apagar?').toLowerCase();
                if(answer === 'sim'){
                    calculadora.operatorClear();
                    calculadora.updateDisplay()
                }

                break;
            case '=':
                console.log('=')
        }
    })
}
//Check se o número foi clickado
for(let number of numbers){
    number.addEventListener('click', ()=>{
        calculadora.numberClick(number.innerText);
        calculadora.updateDisplay();
    })
}