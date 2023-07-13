class Student {
    constructor(id,img,name, birthdate, group) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.birthdate = birthdate;
        this.group = group;
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
}
