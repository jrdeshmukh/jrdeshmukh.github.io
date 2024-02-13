APScale = {
 "A+": 5.5, "A": 5.25, "A-": 5.0,
 "B+": 4.5, "B": 4.25, "B-": 4.0,
 "C+": 3.5, "C": 3.25, "C-": 3.0,
 "D+": 2.5, "D": 2.25, "D-": 2.0,
 "F": 0
}

HonorsScale = {
  "A+": 5.0, "A": 4.75, "A-": 4.5,
  "B+": 4.0, "B": 3.75, "B-": 3.5,
  "C+": 3.0, "C": 2.75, "C-" :2.5, 
  "D+": 2.0, "D": 1.75, "D-": 1.5, 
  "F": 0
}

NormalScale = {
  "A+": 4.5, "A": 4.25, "A-": 4.0,
  "B+": 3.5, "B": 3.25, "B-": 3.0, 
  "C+": 2.5, "C": 2.25, "C-": 2.0, 
  "D+": 1.5, "D": 1.25, "D-": 1.0,
  "F": 0
}


document.addEventListener('DOMContentLoaded', myFunction);
function myFunction() {
  let arr;
  arr = JSON.parse(localStorage.arr);
  for(i = 0; i < 7; i++) {
    document.getElementById("class" + (i+1)).value = arr[i][1];
    document.getElementById("class" + (i+1) + "select").value = arr[i][0];
  }
}

function calculateGPA() {
inputtedGrades = {};

grades = [
  document.getElementById("class1").value.toUpperCase(),
  document.getElementById("class2").value.toUpperCase() ,
  document.getElementById("class3").value.toUpperCase(),
  document.getElementById("class4").value.toUpperCase(),
  document.getElementById("class5").value.toUpperCase(),
  document.getElementById("class6").value.toUpperCase(),
  document.getElementById("class7").value.toUpperCase()
]

classValue = [ 
  document.getElementById("class1select").value,
  document.getElementById("class2select").value,
  document.getElementById("class3select").value,
  document.getElementById("class4select").value,
  document.getElementById("class5select").value,
  document.getElementById("class6select").value,
  document.getElementById("class7select").value
]




var totalGPA = 0;
var academicClasses = 7;
var arr = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

for (i = 0; i < 7; i++) {
  arr[i][0] = classValue[i];
  arr[i][1] = grades[i];
  if (grades[i] != 0) {
    if (classValue[i] == "AP") {
      totalGPA += APScale[grades[i]];
      //console.log(totalGPA)
    }
    if (classValue[i] == "Honors") {
      totalGPA += HonorsScale[grades[i]];
      //console.log(totalGPA)
    }
    if (classValue[i] == "Normal") {
      totalGPA += NormalScale[grades[i]];
      //console.log(totalGPA)
    }
  } else {
    academicClasses -= 1;
    //console.log(academicClasses)
  }
}

if (academicClasses >= 6) {
  totalGPA++;
}

console.log(arr);
localStorage.arr = JSON.stringify(arr);
//console.log(totalGPA/academicClasses)
  console.log(localStorage.arr);
  gpa = (totalGPA / academicClasses).toFixed(3);

  document.getElementById("result").innerHTML = "GPA: " + gpa;
}

grades = {
  "A+":12,
  "A" :11,
  "A-" :10,
  "B+" :9,
  "B" :8,
  "B-" :7,
  "C+" :6,
  "C" :5,
  "C-" :4,
  "D+" :3,
  "D" :2,
  "D-" :1,
  "F" :0,
}

function calculateSem() {
  var q1val = grades[document.getElementById("q1").value.toUpperCase()];
  var q2val = grades[document.getElementById("q2").value.toUpperCase()];
  var exval = grades[document.getElementById("ex").value.toUpperCase()];
  document.getElementById("semresult").innerHTML = "Semester Grade: " + getKeyByValue(grades, Math.round((0.4*q1val)+(0.4*q2val)+(0.2*exval)));
}

function getKeyByValue(obj, value) {
  return Object.entries(obj).find(([key, val]) => val === value)?.[0];
}
