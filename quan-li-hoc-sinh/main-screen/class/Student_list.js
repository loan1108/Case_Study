class StudentList {
    constructor(_students) { 
        this.students = _students;
    }
    addStudent(_student){
        this.students.push(_student);
        displayAll();

    }
    removeStudent(_id){
        this.students.splice(_id,1);
        displayAll();
    }
    displayAll() {
        let str = "";
        for (let i = 0; i < this.students.length; i++) {
            str += `<div class="card">
                        <div style="text-align: right">
                            <span type="button" class="remove-btn btn" onclick="this.removeStudent(${i}")
                            ><i class="fa-solid fa-trash"></i
                            ></span>    
                        </div>
                        <div class="student-img">
                            <img src="../assets/${this.students[i].img}" alt="student image" width="fit-content" height="150px" />
                        </div>
                        <div class="student-infor">
                            <p>
                                <span>Họ và tên: </span
                                ><span class="student-name">${this.students[i].name}</span
                                ><button type="button" class="edit-btn btn" >CHỈNH SỬA</button>
                            </p>
                            <p>
                                <span>Ngày sinh: </span><span>1/1/2010</span
                                ><button type="button" class="edit-btn btn" >CHỈNH SỬA</button>
                            </p>
                            <div>
                                <p>Điểm trung bình: </p>
                                <p>
                                    <span>Học kì 1: </span>
                                    <span id="first-term">${this.students[i].getFirstTermScore()}</span>
                                </p>
                                <p>
                                    <span>Học kì 2: </span>
                                    <span id="second-term">${this.students[i].getSecondTermScore()}</span>
                                </p>
                                <p>
                                    <span>Cả năm: </span>
                                    <span id="full-year">${this.students[i].getFullYearScore()}</span>
                                </p>
                            </div>
                            <p>Điểm thành phần từng môn: <a href="#">Xem tại đây</a></p>
                        </div>
                    </div>`;
        }
    }
}
