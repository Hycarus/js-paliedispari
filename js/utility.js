function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

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
        console.log('è palindromo');
    } else{
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

function dividedByTwo(num){
    if(num % 2 === 0){
        return true;
    } else{
        return false;
    }
}