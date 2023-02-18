const Employee=require("./Employee")

class Manager extends Employee{
    constructor(name, email, id, contact) {
        super(name, email, id)
        this.contact = contact;
        this.role = "Manager";

    }

    getContact() {
        return this.contact;
    }

    getRole() {
        return this.role;
    }

    
}

module.exports=Manager