let binary = prompt("Test?");

function bin_to_hexadec(number) { 
    return parseInt((number) .replace(/[^01]/), 2).toString(16); };

console.log(bin_to_hexadec(binary));