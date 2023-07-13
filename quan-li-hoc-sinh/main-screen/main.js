
let student_1 = new Student(1,"Xiao_Zhan.jpeg","Nguyễn Văn A", "01/01/2008","11A1");
let student_2 = new Student(2,"linyi.jpg","Nguyễn Văn B", "01/02/2009","11A1");
let student_3 = new Student(3,"liuyifei.jpg","Nguyễn Văn C", "01/03/2009","11A1");
let student_4 =new Student(4,"yangmi.jpg","Nguyễn Văn D", "01/04/2009","11A1");
let student_5 =new Student(4,"Yibo.jpg","Nguyễn Văn E", "01/05/2009","11A1");
let list = new StudentList();
list.students = [];
list.load();
list.save();
list.addStudent(student_1);
list.addStudent(student_2);
list.addStudent(student_3);
list.addStudent(student_4);
list.addStudent(student_5);
list.displayAll();
 
// document.getElementById('add-btn').addEventListener('click', function(){list.addStudent(student_1);});
