// variable 

var time = '10:15pm';
var bookPrice = 150;
var isWhiteColor = false;

// array 

var partners = ['sazid', 'modid', 'nojid', 'lajit']
var elementCount = partners.length;
var nojidIndex = partners.indexOf('nojid');
partners.push('kajit');
partners.pop();

//conditional
if(bookPrice < 120){
    console.log('i will buy book')
}
else{
    console.log('MAMA!  kichu discount den na')
}

//
var i =0;
while ( i <=17){
    console.log('thank you')
    i++;
}

for(i = 0; i<=17; i++){
    console.log();
}

// function
function isMoonUp(){
    if (time >=19 && time <= 5){
        return true;
    }
    return false;
}

var moonStatus = isMoonUp();


// let const
// value of variable could change 
let price = 27;
price = 29;
price = 31;


// value of the variable will not change 
const name = 'lal e lal mr. Helal'
console.log(name);
