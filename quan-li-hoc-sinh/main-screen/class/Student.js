class Student {
    constructor(id,img,studentName, birthdate, group,detailScore) {
        this.id = id;
        this.img = img;
        this.studentName = studentName;
        this.birthdate = birthdate;
        this.group = group;
        this.detailScore = detailScore;
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
        return 9.0;
    }
    getSecondTermScore() {
        return 9.0;
    }
    getFullYearScore() {
        let fullYearScore =
            (this.getFirstTermScore() + 2 * this.getSecondTermScore()) / 3;
        return fullYearScore;
    }
    // saveStudentName() {
    //     localStorage.setItem("studentName", JSON.stringify(this.studentName));
    //   }
    // // loadStudentName() {
    // //     return JSON.parse(localStorage.getItem("studentName")) ?? [];
    // //   }
}
