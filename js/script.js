(function () {
    const btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        const inputEl = document.getElementById('data').value;
        reset('alert-success');
        reset('alert-danger');
        palindrome(inputEl);
    })
    function palindrome(input) {
        let sliceArray = [];
        let reverseArray = [];
        console.log(input)
        for (let i = 0; i < input.length; i++) {
            console.log(input[i]);
            sliceArray.push(input[i]);
        }
        for (let i = input.length - 1; i >= 0; i--) {
            console.log(input[i]);
            reverseArray.push(input[i]);
        }
        console.log(sliceArray);
        console.log(reverseArray);
        let word1 = sliceArray.join('');
        let word2 = reverseArray.join('');
        if (word1 === word2) {
            print('alert-success', 'È palindromo');
            console.log('è palindromo');
        } else {
            print('alert-danger', 'Non è palindromo');
            console.log('non è palindromo');
        }
    }

    function print(alertColor, msg) {
        const resultEl = document.querySelector('.alert');
        resultEl.classList.add(alertColor);
        resultEl.classList.remove('d-none');
        resultEl.innerText = msg;
    }
    function reset(alertColor) {
        const resultEl = document.querySelector('.alert');
        resultEl.classList.remove(alertColor);
        resultEl.classList.add('d-none');
    }

    const pari = document.getElementById('pari');
    const dispari = document.getElementById('dispari');

    pari.addEventListener('click', function () {
        reset('alert-success');
        reset('alert-danger');
        game('pari');
    })

    dispari.addEventListener('click', function () {
        reset('alert-success');
        reset('alert-danger');
        game('dispari');
    })

    function dividedByTwo(num) {
        if (num % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    function game(scelta) {
        const inputEl2 = parseInt(document.getElementById('data2').value);
        let computerChoice = getRndInteger(1, 5);
        console.log(computerChoice);
        console.log(inputEl2);
        let somma = inputEl2 + computerChoice;
        console.log(somma);
        if (inputEl2 > 5) {
            print('alert-danger', 'Quante dita hai?')
            console.log('Quante dita hai?')
        } else {
            if (dividedByTwo(somma) === true) {
                if (scelta === 'pari') {
                    print('alert-success', ('Il risultato è:' + ' ' + somma + '. ' + 'Hai vinto!'));
                    console.log('hai vinto');
                } else {
                    print('alert-danger', ('Il risultato è:' + ' ' + somma + '. ' + 'Hai perso!'));
                    console.log('hai perso');
                }
            } else {
                if (scelta === 'dispari') {
                    print('alert-success', ('Il risultato è:' + ' ' + somma + '. ' + 'Hai vinto!'));
                    console.log('hai vinto');
                } else {
                    print('alert-danger', ('Il risultato è:' + ' ' + somma + '. ' + 'Hai perso!'));
                    console.log('hai perso');
                }
            }
        }
    }
})();
