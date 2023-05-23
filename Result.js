// Find GPA and Grade with respect to Marks in any subject
const marks = 45;
const result = calculateGPA(marks);

function calculateGPA(marks) {
  if (marks >= 80 && marks <= 100) {
    return { gpa: 5.0, grade: "A+" };
  } else if (marks >= 70 && marks < 80) {
    return { gpa: 4.0, grade: "A" };
  } else if (marks >= 60 && marks < 70) {
    return { gpa: 3.5, grade: "A-" };
  } else if (marks >= 50 && marks < 60) {
    return { gpa: 3.0, grade: "B" };
  } else if (marks >= 40 && marks < 50) {
    return { gpa: 2.0, grade: "C" };
  } else if (marks >= 33 && marks < 40) {
    return { gpa: 1.0, grade: "D" };
  } else if (marks >= 0 && marks < 33) {
    return { gpa: 0.0, grade: "F" };
  } else {
    return { gpa: NaN, grade: "Invalid marks" };
  }
}

console.log(`GPA: ${result.gpa}`);
console.log(`Grade: ${result.grade}`);

// Create a loop that will rotate from 1000 to 300

for (let i = 1000; i >= 300; i--) {
  console.log(`Loop:${i}`);
}
//Find the even and odd numbers from 1 and 1000 through for loop
for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

for (let i = 1; i <= 1000; i++) {
  if (i % 2 !== 0) {
    console.log("Odd numbers:");
    console.log(i);
  }
}
//Find the number divisible by 7 between 1 and 1000

for (let i = 1; i <= 1000; i++) {
  if (i % 7 === 0) {
    console.log("Numbers divisible by 7:");
    console.log(i);
  }
}

//Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11

for (let i = 3; ; i += 3) {
  if (i % 11 === 0) {
    console.log(`Number divisible by 11 found: ${i}`);
    break;
  }
}

//Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4
let count = 0;

for (let i = 1; count < 500; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log(i);
    count++;
  }
}

//Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice.

let value = 10000;

for (let i = 0; i < 50; i++) {
  value++;
  value--;
}

console.log(`loop 50 times${value}`);

/*

Name: MD Shirajam Munir
Re-admission from Batch-2
*/
