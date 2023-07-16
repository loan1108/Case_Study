class Subject {
  constructor(_subjectName, _teacher, _firstSemester, _secondSemester) {
    this.subjectName = _subjectName;
    this.teacher = _teacher;
    this.firstSemester = _firstSemester;
    this.secondSemester = _secondSemester;
    this.averageFinal = 0;
  }
  calculateAverageFinal() {
    this.averageFinal =
      (this.firstSemester.averageSemester() +
        2 * this.secondSemester.averageSemester()) /
      3;
    return this.averageFinal;
  }
}
