const Employee=require("./Employee")

class Intern extends Employee{
    constructor(name, email, id, school) {
        super(name, email, id)
        this.School = "school";
        this.role = "Intern";

    }

    getSchool() {
        return this.School;
    }

    getRole() {
        return this.role;
    }

    
}

module.exports=Intern