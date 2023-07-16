class Detail {
  constructor() {
    this.studentName = this.loadStudentName();
    this.subjects = this.loadSubjects();
    this.firstSemesterAverage = 0;
    this.secondSemesterAverage = 0;
    this.fullYearAverage = 0;
  }
  addSubject(_subject) {
    this.subjects.push(_subject);
    this.saveSubjects();
  };
  displayDetail() {
    let str = 
    `<p id="student-name">Học sinh: ${this.studentName}<p>
    <table style="width: 100%" border="1">
        <tr>
          <th>HỌC KÌ</th>
          <th colspan="4">HỌC KÌ I</th>
          <th colspan="4">HỌC KÌ II(Nhân hệ số 2)</th>
          <th rowspan="2">TỔNG KẾT MÔN</th>
          <th rowspan="2">CHỈNH SỬA</th>
        </tr>
        <tr>
          <th>MÔN HỌC</th>
          <th>10 phút</th>
          <th>15 phút</th>
          <th>Giữa kì</th>
          <th>Cuối kì</th>
          <th>10 phút</th>
          <th>15 phút</th>
          <th>Giữa kì</th>
          <th>Cuối kì</th>
        </tr>`;
    for (let i = 0; i < 6; i++) {
      // console.log(this.subjects[i].subjectName);
      str += `
      <tr>
        <td class="subject-name">${this.subjects[i].subjectName}</td>
        <td class="first-semester oral-exam">${this.subjects[
          i
        ].firstSemester.getOralExam()}</td>
        <td clss="first-semester fifteen-minutes-exam">${this.subjects[
          i
        ].firstSemester.getFifteenMinuteTest()}</td>
        <td class="first-semester middle-exam">${this.subjects[
          i
        ].firstSemester.getMiddleExam()}</td>
        <td class="first-semester final-exam">${this.subjects[
          i
        ].firstSemester.getLastExam()}</td>
        <td class="second-semester oral-exam">${this.subjects[
          i
        ].secondSemester.getOralExam()}</td>
        <td clss="second-semester fifteen-minutes-exam">${this.subjects[
          i
        ].secondSemester.getFifteenMinuteTest()}</td>
        <td class="second-semester middle-exam">${this.subjects[
          i
        ].secondSemester.getMiddleExam()}</td>
        <td class="second-semester final-exam">${this.subjects[
          i
        ].secondSemester.getLastExam()}</td>
        <td class="average-final">${this.convertScore(this.subjects[
          i
        ].calculateAverageFinal())}</td>
        <td><button class="edit-btn btn" type="button" onclick="updateScore(${i})">Chỉnh sửa</button></td>
      </tr>`;
      this.firstSemesterAverage += this.subjects[i].firstSemester.averageSemester()/(this.subjects.length);
      this.secondSemesterAverage += this.subjects[i].secondSemester.averageSemester()/(this.subjects.length);
      this.fullYearAverage += this.subjects[i].calculateAverageFinal()/(this.subjects.length);
    }
    str += `<tr>
        <td colspan="1" >TRUNG BÌNH</td>
        <td colspan="4">${this.convertScore(this.firstSemesterAverage)}</td>
        <td colspan="4">${this.convertScore(this.secondSemesterAverage)}</td>
        <td colspan="2" id="full-year-average">${this.convertScore(this.fullYearAverage)}</td>
      </tr>
    </table>`;
    document.getElementById("detail-table").innerHTML = str;
  }
  saveSubjects() {
    localStorage.setItem("subjects", JSON.stringify(this.subjects));
  }
  loadSubjects() {
    return JSON.parse(localStorage.getItem("subjects")) ?? [];
  }
  convertScore(_score){
    let score = _score;
    return score.toFixed(1);
  }
  loadStudentName(){
    return JSON.parse(localStorage.getItem("studentName"))??[];
  }
  saveFirstSemesterAverage(){
    localStorage.setItem("firstSemesterAverage",JSON.stringify(this.firstSemesterAverage));
  }
  saveSecondSemesterAverage(){
    localStorage.setItem("secondSemesterAverage",JSON.stringify(this.secondSemesterAverage));
  }
  savefullYearAverage(){
    localStorage.setItem("fullYearAverage",JSON.stringify(this.fullYearAverage));
  }
}
