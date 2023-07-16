//Tạo học kì
const firstSemester = new Semester();
const secondSemester = new Semester();
//Tạo các môn học
const math = new Subject(
  "Toán Học",
  "Nguyễn Thị A",
  firstSemester,
  secondSemester
);
const literature = new Subject(
  "Ngữ Văn",
  "Nguyễn Thị B",
  firstSemester,
  secondSemester
);
const english = new Subject(
  "Tiếng Anh",
  "Nguyễn Thị C",
  firstSemester,
  secondSemester
);
const chemical = new Subject(
  "Hóa học",
  "Nguyễn Thị D",
  firstSemester,
  secondSemester
);
const physic = new Subject(
  "Vật lí",
  "Nguyễn Thị E",
  firstSemester,
  secondSemester
);
const biology = new Subject(
  "Sinh học",
  "Nguyễn Thị F",
  firstSemester,
  secondSemester
);
//Tạo nhóm các môn học

//Tạo detail
const detail = new Detail("Nguyễn Văn A");
detail.subjects = [];
detail.load();
detail.save();
detail.addSubject(math);
detail.addSubject(literature);
detail.addSubject(english);
detail.addSubject(chemical);
detail.addSubject(physic);
detail.addSubject(biology);
console.log(detail.subjects);
detail.displayDetail();

//Udate thông tin điểm
function updateScore(_index) {
  let checkConfirm = confirm("Bạn có muốn thay đổi điểm này không?");
  if (checkConfirm) {
    let newOral_exam_1 = +prompt("Bạn hãy nhập điểm 10 phút của kì 1");
    let newFifteen_minute_test_1 = +prompt(
      "Bạn hãy nhập điểm 15 phút của kì 1"
    );
    let newMiddle_exam_1 = +prompt("Bạn hãy nhập điểm giữa kì của kì 1");
    let newLast_exam_1 = +prompt("Bạn hãy nhập điểm cuối kì của kì 1");
    let newOral_exam_2 = +prompt("Bạn hãy nhập điểm 10 phút của kì 2");
    let newFifteen_minute_test_2 = +prompt(
      "Bạn hãy nhập điểm 15 phút của kì 2"
    );
    let newMiddle_exam_2 = +prompt("Bạn hãy nhập điểm giữa kì của kì 2");
    let newLast_exam_2 = +prompt("Bạn hãy nhập điểm cuối kì của kì 2");
    //Set first semester
    if (
      newOral_exam_1 != "" &&
      newOral_exam_1 != null &&
      newFifteen_minute_test_1 != "" &&
      newFifteen_minute_test_1 != null &&
      newMiddle_exam_1 != "" &&
      newMiddle_exam_1 != null &&
      newLast_exam_1 != "" &&
      newLast_exam_1 != null &&
      newOral_exam_2 != "" &&
      newOral_exam_2 != null &&
      newFifteen_minute_test_2 != "" &&
      newFifteen_minute_test_2 != null &&
      newMiddle_exam_2 != "" &&
      newMiddle_exam_2 != null &&
      newLast_exam_2 != "" &&
      newLast_exam_2 != null
    ) {
      detail.subjects[_index].firstSemester.setOralExam(newOral_exam_1);
      detail.subjects[_index].firstSemester.setFifteenMinuteTest(
        newFifteen_minute_test_1
      );
      detail.subjects[_index].firstSemester.setMiddelExam(newMiddle_exam_1);
      detail.subjects[_index].firstSemester.setLastExam(newLast_exam_1);
      // set second semester
      detail.subjects[_index].secondSemester.setOralExam(newOral_exam_2);
      detail.subjects[_index].secondSemester.setFifteenMinuteTest(
        newFifteen_minute_test_2
      );
      detail.subjects[_index].secondSemester.setMiddelExam(newMiddle_exam_2);
      detail.subjects[_index].secondSemester.setLastExam(newLast_exam_2);
    } else {
      alert("Bạn chưa nhập đầy đủ các trường");
    }
  }
  detail.displayDetail();
}
detail.subjects[0].firstSemester.setOralExam(10);
// 
detail.displayDetail()