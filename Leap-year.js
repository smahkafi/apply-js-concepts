// function isLeapYear(year){
//     if(year%4 ==0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const myYear = 2087;
// const isMyYearLeapYear = isLeapYear(myYear);
// console.log('is my year leap year', isMyYearLeapYear);

// const yourYear = 3040;
// const isYourYearLeapYear = isLeapYear(yourYear);
// console.log('is your year is leap year',  isYourYearLeapYear);



// program to check leap year
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = checkLeapYear(2100);