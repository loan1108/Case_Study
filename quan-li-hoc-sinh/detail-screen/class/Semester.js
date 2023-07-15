class Semester {
  constructor() {
    this.oral_exam = 0;
    this.fifteen_minute_test = 0;
    this.middle_exam = 0;
    this.last_exam = 0;
  }
  setOralExam(_score) {
    this.oral_exam = _score;
  }
  getOralExam() {
    return this.oral_exam;
  }
  setFifteenMinuteTest(_score) {
    this.fifteen_minute_test = _score;
  }
  getFifteenMinuteTest() {
    return this.fifteen_minute_test;
  }
  setMiddelExam(_score) {
    this.middle_exam = _score;
  }
  getMiddleExam() {
    return this.middle_exam;
  }
  setLastExam(_score) {
    this.last_exam = _score;
  }
  getLastExam() {
    return this.last_exam;
  }
  averageSemester() {
    let average =
      (this.oral_exam +
        this.fifteen_minute_test +
        this.middle_exam +
        2 * this.last_exam) /
      5;
    return average;
  }
}
