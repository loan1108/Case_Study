//Tạo học sinh ban đầu
let student_1 = new Student(1,"Xiao_Zhan.jpeg","Nguyễn Văn A", "01/01/2008","11A1");
let student_2 = new Student(2,"linyi.jpg","Nguyễn Văn B", "01/02/2009","11A1");
let student_3 = new Student(3,"liuyifei.jpg","Nguyễn Văn C", "01/03/2009","11A1");
let student_4 =new Student(4,"yangmi.jpg","Nguyễn Văn D", "01/04/2009","11A1");
let student_5 =new Student(5,"Yibo.jpg","Nguyễn Văn E", "01/05/2009","11A1");
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
//Thêm học sinh mới
function addNewStudent(){
    let img = prompt("Hãy gắn link ảnh của học sinh");
    let name = prompt("Hãy điền họ và tên học sinh");
    let birthdate = prompt("Hãy điền ngày tháng năm sinh của học sinh");
    let id = prompt("Hãy điền mã số học sinh");
    let group = prompt("Hãy nhập tên lớp");
    let student = new Student(id,img,name,birthdate,group);
    if(img != "" && name !=""&&birthdate!=""&&id!=""&&group!=""){
        list.addStudent(student);
    }else{
        alert("Bạn chưa nhập đẩy đủ các trường")
    }
    
}
document.getElementById('add-btn').addEventListener('click',addNewStudent);