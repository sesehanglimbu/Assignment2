
// Array of student objects
const students = [
  { name: "Sese", score: 80 },
  { name: "Sameer", score: 75 },
  { name: "Diwash", score: 90 },
  { name: "Sepmang", score: 85 },
  { name: "Ronahang", score: 60 },
  { name: "Prasan", score: 95 },
  { name: "samkhana", score: 70 },
  { name: "Osama", score: 92 },
  { name: "JOhn", score: 78 },
  { name: "Roshan", score: 88 },
  { name: "Samjhana", score: 65 },
  { name: "Anish", score: 82 },
  { name: "Jacky", score: 72 },
  { name: "Prajwal", score: 87 },
  { name: "Limbu", score: 68 },
  { name: "Bob", score: 45 },
];

// Sorting the students array in descending order based on score
students.sort((a, b) => b.score - a.score);


// Displaying the sorted list
console.log("Names and Scores of 15 Students (in descending order):");
for (let i = 0; i < students.length; i++) { 
console.log(`${students[i].name} - ${students[i].score}`);
}


