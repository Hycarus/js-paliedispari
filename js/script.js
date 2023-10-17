const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    const inputEl = document.getElementById('data').value;
    reset('alert-success');
    reset('alert-danger');
    palindrome(inputEl);
})
function palindrome(input){
    let sliceArray = [];
    let reverseArray = [];
    console.log(input)
    for(let i = 0; i < input.length; i++){
        console.log(input[i]);
        sliceArray.push(input[i]);
    }
    for(let i = input.length - 1; i >= 0; i--){
        console.log(input[i]);
        reverseArray.push(input[i]);
    }
    console.log(sliceArray);
    console.log(reverseArray);
    let word1 = sliceArray.join('');
    let word2 = reverseArray.join('');
    if(word1 === word2){
        print('alert-success', 'È palindromo');
        console.log('è palindromo');
    } else{
        print('alert-danger', 'Non è palindromo');
        console.log('non è palindromo');
    }
}

function print(alertColor, msg){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.add(alertColor);
    resultEl.classList.remove('d-none');
    resultEl.innerText = msg;
}
function reset(alertColor){
    const resultEl = document.querySelector('.alert');
    resultEl.classList.remove(alertColor);
    resultEl.classList.add('d-none');
}

const pari = document.getElementById('pari');
const dispari = document.getElementById('dispari');

pari.addEventListener('click', function(){
    const inputEl2 = parseInt(document.getElementById('data2').value);
    let computerChoice = getRndInteger(1, 5);
    console.log(computerChoice);
    console.log(inputEl2);
    let somma = inputEl2 + computerChoice;
    console.log(somma);
    if(inputEl2 > 5){
        console.log('Quante dita hai?')    
    } else{
        if(dividedByTwo(somma) === true){
            console.log('ha vinto utente');
        } else{
            console.log('ha vinto il computer');
        }
    }
})

dispari.addEventListener('click', function(onclick){
    const inputEl2 = parseInt(document.getElementById('data2').value);
    let computerChoice = getRndInteger(1, 5);
    console.log(computerChoice);
    console.log(inputEl2);
    let somma = inputEl2 + computerChoice;
    console.log(somma);
    if(inputEl2 > 5){
        console.log('Quante dita hai?')    
    } else{
        if(dividedByTwo(somma) === true){
            console.log('ha vinto il computer');
        } else{
            console.log('ha vinto utente');
        }
    }
})

function dividedByTwo(num){
    if(num % 2 === 0){
        return true;
    } else{
        return false;
    }
}