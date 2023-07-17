class Student {
    constructor(id,img,studentName, birthdate, group,detailScore) {
        this.id = id;
        this.img = img;
        this.studentName = studentName;
        this.birthdate = birthdate;
        this.group = group;
        this.detailScore = detailScore;
        this.firstSemesterAverage = this.loadFirstSemesterAverage().toFixed(1);
        this.secondSemesterAverage = this.loadSecondSemesterAverage().toFixed(1); 
        this.fullYearScore = this.loadFullYearScore().toFixed(1);
    }
    getName(){
        return this.studentName;
    }
    setName(_newName){
        this.studentName = _newName;
    }
    getBirthdate(){
        return this.birthdate;
    }
    setBirthdate(_newBirthdate){
        this.birthdate = _newBirthdate;
    }
    getFirstTermScore() {
        return this.firstSemesterAverage;
    }
    getSecondTermScore() {
        return this.secondSemesterAverage;
    }
    getFullYearScore() {
        // this.fullYearScore =
        //     (this.getFirstTermScore() + 2 * this.getSecondTermScore()) / 3;
        return this.fullYearScore;
    }
    saveStudentName() {
        localStorage.setItem("studentName", JSON.stringify(this.studentName));
      }
    // loadStudentName() {
    //     return JSON.parse(localStorage.getItem("studentName")) ?? [];
    //   }
    loadFirstSemesterAverage(){
        return JSON.parse(localStorage.getItem("firstSemesterAverage"))??[];
    }
    loadSecondSemesterAverage(){
        return JSON.parse(localStorage.getItem("secondSemesterAverage"))??[];
    }
    loadFullYearScore(){
        return JSON.parse(localStorage.getItem("fullYearAverage"))??[];
    }
}
