let decimal = prompt("Test?");

function dec_to_bh(number1, base) {
    while (number1 < 0) {
        number1 = 0xFFFFFFFF + number1 + 1;
    };
    switch (base) {
        case 'B':
            return parseInt(number1, 10).toString(2);
        case 'H':
            return parseInt(number1, 10).toString(16)
    }
};

console.log(dec_to_bh(decimal,'H'))
console.log(dec_to_bh(decimal,'B'))