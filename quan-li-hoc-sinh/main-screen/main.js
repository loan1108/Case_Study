//Tạo học sinh ban đầu
let student_1 = new Student(
  1,
  "Xiao_Zhan.jpeg",
  "Nguyễn Văn A",
  "01/01/2008",
  "11A1",
  new Detail(),
);
// student_1.saveStudentName();
let student_2 = new Student(
  2,
  "linyi.jpg",
  "Nguyễn Văn B",
  "01/02/2009",
  "11A1",
  new Detail(),
);
// student_2.saveStudentName();
let student_3 = new Student(
  3,
  "liuyifei.jpg",
  "Nguyễn Văn C",
  "01/03/2009",
  "11A1",
  new Detail(),
);

// student_3.saveStudentName();
let list = new StudentList();

if (list.students.length <= 0) {
  list.addStudent(student_1);
  list.addStudent(student_2);
  list.addStudent(student_3);
}

// document.getElementById('add-btn').addEventListener('click', function(){list.addStudent(student_1);});
//Thêm học sinh mới
function addNewStudent() {
  let img = prompt("Hãy gắn link ảnh của học sinh");
  let name = prompt("Hãy điền họ và tên học sinh");
  let birthdate = prompt("Hãy điền ngày tháng năm sinh của học sinh");
  let id = prompt("Hãy điền mã số học sinh");
  let group = prompt("Hãy nhập tên lớp");
  let student = new Student(id, img, name, birthdate, group);
  if (
    img != "" &&
    name != "" &&
    birthdate != "" &&
    id != "" &&
    group != "" &&
    img != null &&
    name != null &&
    birthdate != null &&
    id != null &&
    group != null
  ) {
    list.addStudent(student);
  } else {
    alert("Bạn chưa nhập đẩy đủ các trường");
  }
}
document.getElementById("add-btn").addEventListener("click", addNewStudent);
//Xóa học sinh ra khỏi danh sách
function deleteStudent(_index) {
  let checkConfirm = confirm("Bạn có muốn xóa học sinh này ra khỏi danh sách lớp?");
  if (checkConfirm) {
    list.removeStudent(_index);
    list.displayAll();
  }
}
// chỉnh sửa thông tin học sinh
// chỉnh sửa tên

function editName(_index) {
  let studentClass = document.getElementsByClassName("student-name");
  console.log(studentClass[_index]);
  let checkConfirm = confirm("Bạn có muốn chỉnh sửa tên của học sinh này?")
  if (checkConfirm) {
    let newName = prompt("Hãy nhập tên mới cho học sinh");
    if (newName != "" && newName != null) {
      list.students[_index].setName(newName);
      list.students[_index].getName(newName);
      list.displayAll();
    } else {
      alert("Bạn chưa nhập tên mới cho học sinh");
    }

  }
}

// chỉnh sửa ngày sinh 

function editBirthdate(_index) {
  let checkConfirm = confirm("Bạn có muốn chỉnh sửa ngày sinh của học sinh này?")
  if (checkConfirm) {
    let newBirthdate = prompt("Hãy nhập ngày sinh mới cho học sinh");
    if (newBirthdate != "" && newBirthdate != null) {
      list.students[_index].setBirthdate(newBirthdate);
      list.students[_index].getBirthdate(newBirthdate);
      list.displayAll();
    } else {
      alert("Bạn chưa nhập ngày sinh mới cho học sinh");
    }

  }
}
//Lưu student name vào local storage để lấy sử dụng tên trong màn detail
function saveStudentName(_index) {
  localStorage.setItem("studentDetail", JSON.stringify(list.students[_index]))
};
function moveToScoreDetailScreen(_index) {
  saveStudentName(_index);
  location.href = "../detail-screen/detail.html";
}

// class Class{
//   name;
//   noStudent = 0;
//   listStudent = [];

//   constructor(_name, _noStudent){
//     this.name = _name;
//   }

//   addStudent(...students) {
//     this.listStudent.push(...students);
//     this.noStudent = this.listStudent.length;
//   }
// }

// class Student {
//   constructor(_name, _age){
//     this.name = _name,
//     this.age = _age;
//   }
// }


// const class10A1 = new Class("10A1");

// const Loan  = new Student("Loan", 10);
// const Tuan  = new Student("Tuan", 11);
// const Dai  = new Student("Dai", 12);

// class10A1.addStudent(Loan, Tuan, Dai);

// console.log(class10A1);