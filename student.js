const student = {
    name: "Madhav",
    age: 24,
    marks:[80,90,75]
}

let total = 0
for (let i = 0; i < student.marks.length; i++) {
    total = total + student.marks[i];
}

const average = total / student.marks.length;

console.log("Name:",student.name)
console.log("Average marks",average)