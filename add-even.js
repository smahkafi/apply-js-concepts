// const number = 4;
// const reminder = number % 2;
// console.log(reminder ==0)
// console.log(number % 2 ==0)

const number = 145;
function isEven(number){
    if(number % 2 ==0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
console.log('is my number even', isMyNumberEven)

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber)
console.log('is her number even', isHerNumberEven)


// is odd function 

function isOdd(number){
    // if(number%2 == 1)  that means next line
    if(number%2 != 0){
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber)
console.log('is my number odd', isMyNumberOdd);

const isHerNumberOdd = isOdd(herNumber)
console.log('is my number odd', isHerNumberOdd);