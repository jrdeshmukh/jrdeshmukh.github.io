const gradeMap = {
  "A+": 4.5, "A": 4.25, "A-": 4.0,
  "B+": 3.5, "B": 3.25, "B-": 3.0,
  "C+": 2.5, "C": 2.25, "C-": 2.0,
  "D+": 1.5, "D": 1.25, "D-": 1.0,
  "F": 0, '': 0
};
let shown = false;
function toggleExtra() {
  let uw = document.getElementById('unweighted')
  let nuw = document.getElementById('nunweighted')
  shown = !shown;
  uw.style.display = shown ? 'block' : 'none' 
  nuw.style.display = shown ? 'block' : 'none'
}


/*var pastething = document.getElementsByClassName("pastething");
pastething.addEventListener('paste', (event) => {
  console.log("d")
});*/



document.addEventListener('DOMContentLoaded', myFunction);
function myFunction() {
  let arr;
  arr = JSON.parse(localStorage.arr);
  for (let i = 0; i < 7; i++) {
    document.getElementById("class" + (i + 1)).value = arr[i][1];
    document.getElementById("class" + (i + 1) + "select").value = arr[i][0];
  }
  document.getElementById("result").innerHTML = "GPA: " + arr[8][0].toFixed(3);
  document.getElementById("unweighted").innerHTML = "Unweighted GPA: " + arr[8][1].toFixed(3);
  document.getElementById("nunweighted").innerHTML = "Standard Scale GPA: " + arr[8][2].toFixed(3);

}

function calculateGPA() {

  let grades = [
    document.getElementById("class1").value.toUpperCase(),
    document.getElementById("class2").value.toUpperCase(),
    document.getElementById("class3").value.toUpperCase(),
    document.getElementById("class4").value.toUpperCase(),
    document.getElementById("class5").value.toUpperCase(),
    document.getElementById("class6").value.toUpperCase(),
    document.getElementById("class7").value.toUpperCase()
  ]

  let classValue = [
    document.getElementById("class1select").value,
    document.getElementById("class2select").value,
    document.getElementById("class3select").value,
    document.getElementById("class4select").value,
    document.getElementById("class5select").value,
    document.getElementById("class6select").value,
    document.getElementById("class7select").value
  ]

  let uw=0;
  let numcla = 7;
  let boost = 0;

  for (let i = 0; i < 7; i++) {
    if (grades[i]==="" || grades[i]==='' || grades[i]===undefined) {
      numcla -= 1;
      continue;
    }
    uw += gradeMap[grades[i].toUpperCase()];
    if (classValue[i] === "AP") {
      boost++;
    }
    if (classValue[i] === "Honors") {
      boost += 0.5;
    }
  }
  const uwgpa = (uw - numcla * 0.5) / numcla;
  const ext = numcla > 5 ? 1 : 0;
  const bgpa = (uw + boost + ext) / numcla;
  const ngpa = (uwgpa * numcla + boost) / numcla;
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
    [],
  ];

  for (let i = 0; i < 7; i++) {
    arr[i][0] = classValue[i];
    arr[i][1] = grades[i];
  }
  arr[8] = [bgpa, uwgpa, ngpa]

  localStorage.arr = JSON.stringify(arr);
  
  document.getElementById("result").innerHTML = "GPA: " + bgpa.toFixed(3);
  document.getElementById("unweighted").innerHTML = "Unweighted GPA: " + uwgpa.toFixed(3);
  document.getElementById("nunweighted").innerHTML = "Standard Scale GPA: " + ngpa.toFixed(3);
}