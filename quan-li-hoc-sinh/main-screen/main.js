
let student_1 = new Student("Xiao_Zhan.jpeg","Loan", 110899,"11A1");
let student_2 = new Student("Xiao_Zhan.jpeg","Loan", 110899,"11A2");
let list = new StudentList();
console.log(list.students)
list.addStudent(student_1);
list.addStudent(student_2);
list.displayAll();
 
// document.getElementById('add-btn').addEventListener('click', function(){list.addStudent(student_1);});
