const btn = document.querySelector('button');

const resultEl = document.querySelector('.alert');

(function(){
    btn.addEventListener('click', function(){
        const inputEl = document.getElementById('data').value;
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
            console.log('è palindromo');
        } else{
            console.log('non è palindromo');
        }
    }
})




