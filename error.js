









let divide =(a, b) => {
    try{
        if(b==0){
            throw "division by 0"
        }else {
            return a/b;
        }
    }catch(e) {
        console.log(e);
        console.log('why are you dividing by 0')
    }
}

let sum =(a, b, c) => {
    let div = divide (a, b);
    return div + c;
}

console.log(sum(1, 0 ,2))


function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    return sum;
}


const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log("Sum of numbers:", result); 

