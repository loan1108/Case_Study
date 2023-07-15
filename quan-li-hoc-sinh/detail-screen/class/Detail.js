class Detail {
  constructor(_studentName, _subjects) {
    this.studenName = _studentName;
    this.subjects = _subjects;
    this.fullYearAverage = 0;
  }
  // calculateFullYearAverage() {
  //   this.fullYearAverage =
  //     (this.subjects.math.averageFinal +
  //       this.subjects.literature.averageFinal +
  //       this.subjects.english.averageFinal +
  //       this.subjects.chemical.averageFinal +
  //       this.subjects.physic.averageFinal +
  //       this.subjects.biology.averageFinal) /
  //     6;
  //   return this.fullYearAverage;
  // }
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
      str += `
      <tr>
        <td class="subject-name">${this.subjects.subjectRange[i].subjectName}</td>
        <td class="first-semester oral-exam">${this.subjects.subjectRange[i].firstSemester.oral_exam}</td>
        <td clss="first-semester fifteen-minutes-exam">${this.subjects.subjectRange[i].firstSemester.fifteen_minute_test}</td>
        <td class="first-semester middle-exam">${this.subjects.subjectRange[i].firstSemester.middle_exam}</td>
        <td class="first-semester final-exam">${this.subjects.subjectRange[i].firstSemester.last_exam}</td>
        <td class="second-semester oral-exam">${this.subjects.subjectRange[i].secondSemester.oral_exam}</td>
        <td clss="second-semester fifteen-minutes-exam">${this.subjects.subjectRange[i].secondSemester.fifteen_minute_test}</td>
        <td class="second-semester middle-exam">${this.subjects.subjectRange[i].secondSemester.middle_exam}</td>
        <td class="second-semester final-exam">${this.subjects.subjectRange[i].secondSemester.last_exam}</td>
        <td class="average-final">${this.subjects.subjectRange[i].averageFinal}</td>
        <td><button class="edit-btn btn" type="button" onclick="updateScore(${i})">Chỉnh sửa</button></td>
      </tr>`;
      this.fullYearAverage += this.subjects.subjectRange[i].averageFinal;
    }
    str += `<tr>
        <td colspan="9" >TRUNG BÌNH NĂM</td>
        <td colspan="2" id="full-year-average">${this.fullYearAverage}</td>
      </tr>
    </table>`;
    document.getElementById("detail-table").innerHTML = str;
  }
}
