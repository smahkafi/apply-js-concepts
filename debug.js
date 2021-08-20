function getFatorial(number){
    let factorial = 1;
    console.log('number is ', number)
    for(let i = 1; i<=number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

const getMyFactorial = getFatorial(8);
console.log('yes! this is my factorial', getMyFactorial);