class Detail {
  constructor(_studentName) {
    this.studenName = _studentName;
    this.subjects = this.load();
    this.fullYearAverage = 0;
  }
  addSubject(_subject) {
    this.subjects.push(_subject);
    this.save();
  };
  displayDetail() {
    let str = `<table style="width: 100%" border="1">
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
      console.log(this.subjects[i].subjectName);
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
        <td class="average-final">${this.subjects[
          i
        ].calculateAverageFinal()}</td>
        <td><button class="edit-btn btn" type="button" onclick="updateScore(${i})">Chỉnh sửa</button></td>
      </tr>`;
      this.fullYearAverage += this.subjects[i].calculateAverageFinal();
    }
    str += `<tr>
        <td colspan="9" >TRUNG BÌNH NĂM</td>
        <td colspan="2" id="full-year-average">${this.fullYearAverage}</td>
      </tr>
    </table>`;
    document.getElementById("detail-table").innerHTML = str;
  }
  save() {
    localStorage.setItem("subjects", JSON.stringify(this.subjects));
  }
  load() {
    return JSON.parse(localStorage.getItem("subjects")) ?? [];
  }
}
