class StudentList {
  constructor() {
    this.students = this.load();
  }
  addStudent(student) {
    this.students.push(student);
    this.save();
    this.displayAll();
  }
  removeStudent(index) {
    this.students.splice(index, 1);
    this.save();
    this.displayAll();
  }
  displayAll() {
    let str = "";
    let index;
    for (let i = 0; i < this.students.length; i++) {
      str += `<div class="card">   
                        <div style="text-align: right">
                            <span type="button" class="remove-btn btn" 
                            ><i class="fa-solid fa-trash" onclick="deleteStudent(${i})"></i
                            ></span>
                        </div> 
                        <div class="student-img">
                            <img src="../assets/${
                              this.students[i].img
                            }" alt="student image" width="fit-content" height="150px" />
                        </div>
                        <div class="student-infor">
                            <p>
                                <span>Họ và tên: </span
                                ><span class="student-name">${
                                  this.students[i].name
                                }</span
                                ><button type="button" class="edit-btn btn" onclick="editName(${i})" >CHỈNH SỬA</button>
                            </p>
                            <p>
                                <span>Ngày sinh: </span><span>${
                                  this.students[i].birthdate
                                }</span
                                ><button type="button" class="edit-btn btn" onclick="editBirthdate(${i})" >CHỈNH SỬA</button>
                            </p>
                            <div>
                                <p>Điểm trung bình: </p>
                                <p>
                                    <span>Học kì 1: </span>
                                    <span id="first-term">${this.students[
                                      i
                                    ].getFirstTermScore()}</span>
                                </p>
                                <p>
                                    <span>Học kì 2: </span>
                                    <span id="second-term">${this.students[
                                      i
                                    ].getSecondTermScore()}</span>
                                </p>
                                <p>
                                    <span>Cả năm: </span>
                                    <span id="full-year">${this.students[
                                      i
                                    ].getFullYearScore()}</span>
                                </p>
                            </div>
                            <p>Điểm thành phần từng môn: <a href="#">Xem tại đây</a></p>
                        </div>
                        
                    </div>`;
    }
    document.getElementById("class-list").innerHTML = str;
  }
  save() {
    localStorage.setItem("list", JSON.stringify(this.students));
  }
  load() {
    return JSON.parse(localStorage.getItem("list")) ?? [];
  }
}
