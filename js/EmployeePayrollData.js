//Created Employee Payroll Data Class
class EmployeePayrollData {

    //Getter and setter methods for property of id
    get empId() { return this._empId };
    set empId(id) {
        let idPattern = RegExp('^[0-9]$');
        if (idPattern.test(id))
            this._empId = id;
        else
            throw "The Id Is Null";
    };

    //Getter and setter methods for properties of name
    get empName() { return this._empName };
    set empName(name) {
        let namePattern = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (namePattern.test(name))
            this._empName = name
        else throw "Name Is Invalid";
    };

    //Getter and setter mathod for properties of email
    get empEmail() {return this._empEmail};
    set empEmail(email) {
        let emailPattern = RegExp('^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})$')
        if (emailPattern.test(email))
        this._empEmail = email;
        else throw "Email Is Invalid";
    };

    //Getter and setter methods for properties of profilepic
    get empProfilePic() {
        return this._empProfilePic;
    }
    set empProfilePic(profilePic) {
        if (profilePic != null)
            this._empProfilePic = profilePic;
        else throw `Profile Value Is Null`;
    }

    //Getter and setter methods for property of gender
    get empGender() { return this._empGender };
    set empGender(gender) {
        //Pattern for gender either M or F or others
        let genderPattern = new RegExp('^Male$|^Female$|^Others$');
        if (genderPattern.test(gender))
            this._empGender = gender;
        else
            throw "The Given Gender Is Not In Correct Format";
    }

    //Getter and setter methods for property of department
    get empDept() {
        return this._empDept;
    }
    set empDept(dept) {
        if (dept != null)
            this._empDept = dept;
        else throw `Department Value Is Null`;
    }

    //Getter and setter methods for property of salary
    get empSalary() { return this._empSalary };
    set empSalary(salary) {
        //Pattern for salary for positive numbers
        let salaryPattern = new RegExp('^[1-9][0-9]*$');
        if (salaryPattern.test(salary))
            this._empSalary = salary;
        else throw "The Given Salary Is Invalid";
    };

    //Getter and setter methods for property of date of birth
    get empDate() { return this._empDate };
    set empDate(date) {
        let now = new Date();
        const options = { day: 'numeric', month: 'short', year: 'numeric' }
        const newDate = !date ? "undefined" : date.toLocaleDateString('en-GB', options);
        //Givendate should not exceed todays date
        if (date > now) throw "The Given Date Is Greater Than Current Date";
        //Validating the DOB should note be older than 30 days
        var diff = Math.abs(now.getTime() - date.getTime());
        if (diff / (1000 * 60 * 60 * 24) > 30)
            throw "Date Of Birth Is Beyond 30 Days";
        this._empDate = newDate;

    }

     //Getter and setter methods for property of contact
     get empContact() {return this._empContact};
     set empContact(contact) {
        let contactPattern = RegExp('^\\+?91[ ]?[1-9][0-9]{9}$');
        if (contactPattern.test(contact))
            this._empContact = contact;
        else throw "Contact is incorrect";
     };

    //Getter and setter methods for property of notes
    get empNotes() { return this._empNotes};
    set empNotes(notes) {
        if (notes != null)
            this._empNotes = notes;
        else
            throw `Notes Value Is Null`;
    }

    //Method to return string of values
    toString() {
        return `Emploee Id : ${this._empId} \tEmployee Name : ${this._empName} \nEmployee Email : ${this._empEmail} \nEmployee Gender : ${this._empGender} \nProfile Pic : ${this._empProfilePic} \nEmployee Department : ${this._empDept} \nEmployee Salary : ${this._empSalary} \nEmployee Date Of Birth : ${this._empDate} \nEmployee Contact : ${this._empContact} \nEmployee Notes = ${this._empNotes}`;
    }
}