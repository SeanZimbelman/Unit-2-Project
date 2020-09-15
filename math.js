let decimal = prompt("What is your decimal number?");

function dec_to_bh(number1, type) {
    switch (type) {
        case 'bin':
            return parseInt(number1, 10).toString(2);
        case 'hex':
            return parseInt(number1, 10).toString(16);
    }
};

console.log(`The number ${decimal} in hexadecimal is ${dec_to_bh(decimal,'hex')}`);
console.log(`The number ${decimal} in binary is ${dec_to_bh(decimal,'bin')}`);