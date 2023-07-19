class Student {
    constructor(id,img,studentName, birthdate, group) {
        this.id = id;
        this.img = img;
        this.studentName = studentName;
        this.birthdate = birthdate;
        this.group = group;
       // console.log(this.loadFirstSemesterAverage());
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
        return this.fullYearScore;
    }
    saveStudentName() {
        localStorage.setItem("studentName", JSON.stringify(this.studentName));
      }
    loadFirstSemesterAverage(){
        const firstSemesterAverage = JSON.parse(localStorage.getItem("firstSemesterAverage"))??{};
        console.log(firstSemesterAverage, this.id);
        if (this.id && firstSemesterAverage.studentId === this.id) {
            return firstSemesterAverage.firstSemesterAverage
        }
        return 0;
    }
    loadSecondSemesterAverage(){
        const secondSemesterAverage = JSON.parse(localStorage.getItem("secondSemesterAverage"))??{};
        console.log(secondSemesterAverage);
        if (this.id && secondSemesterAverage.studentId === this.id) {
            return secondSemesterAverage.secondSemesterAverage
        }
        return 0;
    }
    loadFullYearScore(){
        const fullYearAverage = JSON.parse(localStorage.getItem("fullYearAverage"))??{};
        console.log(fullYearAverage);
        if (this.id &&fullYearAverage.studentId === this.id) {
            return fullYearAverage.fullYearAverage
        }
        return 0;
    }
}
