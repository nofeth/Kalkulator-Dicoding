const calculator = {
    displayNumber: '',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
 };

 function updateDisplay(){
     document.querySelector('#displayNumber').innerText = calculator.displayNumber;
 }

 function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
    }

function inputDigit(digit){
    if( calculator.displayNumber === '0'){
        calculator.displayNumber = '';
        calculator.displayNumber += digit;
    }else if(calculator.displayNumber === 'CE'){
        calculator.displayNumber += '0';
    }else{
        calculator.displayNumber += digit
    }
}

function inverseNumber(){
    if (calculator.displayNumber === '0'){
        return
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator.innerText;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
 
        // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
        calculator.displayNumber = '0';
    } else {
        alert('Operator sudah ditetapkan')
    }
}

function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Anda belum menetapkan operator");
        return;
    }
    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    }
  
     // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
   const history = {
    firstNumber: calculator.firstNumber,
    secondNumber: calculator.displayNumber,
    operator: calculator.operator,
    result: result
}
    putHistory(history);
    calculator.displayNumber = result;
    renderHistory();
 }

let buttons = document.querySelectorAll(".button")
for(const button of buttons){
    console.log(button)
    button.addEventListener('click', (event) => {
        // event.target.innerText = Math.floor((Math.random() * 10) + 4);
        if(event.target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if(event.target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if(event.target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if(event.target.classList.contains('operator')) {
            handleOperator(event.target);
            updateDisplay();
            return;
        }
        console.log(event.target.innerText)
        inputDigit(event.target.innerText)
        updateDisplay()
    })
}

// if(typeof(Storage)){

// }else{

// }

// const cacheKey = 'NUMBER';
// const count1 = document.querySelector('.count')
// function countfunction(){
//         let item2 = sessionStorage.getItem(cacheKey)
//         count1.innerText = item2

// }

// if(typeof(Storage) !== null){
    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    // if (sessionStorage.getItem(cacheKey) === null) {
    //     // Jika belum maka akan atur dengan nilai awal yakni 0
    //     sessionStorage.setItem(cacheKey, 0);
    // }

    // const tombol = document.querySelector(".tombol");
    // const count = document.querySelector('.count')
    // const reset = document.querySelector('.reset')
    // session storage
    // tombol.addEventListener('click', () => {
    //     let item = sessionStorage.getItem(cacheKey)
    //     item++;
    //     sessionStorage.setItem(cacheKey, item)
    //     count.innerText = item
    // })

    // local storage

//     if(localStorage.getItem(cacheKey) === null){
//        localStorage.setItem(cacheKey, 0)
//     }

//     tombol.addEventListener('click', () => {
//        item3 = localStorage.getItem(cacheKey)
//        item3++;
//        localStorage.setItem(cacheKey, item3)
//        count.innerText = localStorage.getItem(cacheKey);
//     })

//     reset.addEventListener('click', () => {
//         let c = localStorage.removeItem(cacheKey)
//         count.innerText = 0;
//     })
// }





