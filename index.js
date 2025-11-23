const age=24;
console.log(`I am ${age} years old.`);
const name="John Doe";
console.log(`My name is ${name}.`);

function greet(userName) {
    return `Hello, ${userName}!`;
}
console.log(greet("Alice"));

function above18(age){
    if(age>18){
        console.log(`you are eligible for voting ${name}`);
    }
}

function table(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }   
}
table(5);