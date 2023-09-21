// object destructuring 
const actor = {
    name: 'mohammod juwel',
    age: 30,
    phone: 01869316504,
};

const {phone} = actor;
console.log(phone);

const {name:amerName, ages} = actor;
console.log(amerName);
console.log(ages);

// array destructuring 
const numbers = [4, 60, 50, 80, 68, 100];
const [numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix] = numbers;
console.log(numberOne)
console.log(numberTwo)
console.log(numberThree)
console.log(numberFour)
console.log(numberFive)
console.log(numberSix)

function doubleThem (a, b) {
    return [a*2, b*2]
}
const doubleThemResult = doubleThem(10, 10);
console.log(doubleThemResult);
const [first, second] = doubleThemResult;
console.log(first, second);

const [num1,,,,,num6] = numbers;
console.log(num1, num6);


// function destructuring 
function numbersFun(){

    return [100, 200, 5000, 1000];
}

const [number1, number2,,number4] = numbersFun();
console.log(number1, number2,  number4)

const students =  {
    name: 'alu mama',
    id:150,
    age:17,
    schoolName: 'goyabari school and college'
}

function studentFun(student) {
    return student;
}

const {name, age, id, schoolName} = studentFun(students);
console.log(name, age, id, schoolName);



