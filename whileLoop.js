
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

let myNum;
do {
    myNum = parseInt(prompt("Please enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

let counter = 1;
do {
    console.log(counter);
    counter++;
} while (counter <= myNum);

const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

subjects.forEach(subject => {
    console.log(subject);
});

const commaSeparated = subjects.join(", ");
console.log(commaSeparated);