function palindrome(n){
    let strN = ''+n;
    let revN = reverse(strN);
    return strN== revN;
}
console.log(palindrome(12321))




//list of digits of the number.
function digits(n){
    let strN=''+ n;
    let arr = [];
    for (let i=0; i<strN.length;i++){
        arr.push(number(strN(i)))

    }
    return arr;
}
console.log(digits(12345))