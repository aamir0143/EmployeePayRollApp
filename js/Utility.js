//Display date in proper format
const stringifyDate = (date) => {
    const option = { day: 'numeric', month: 'short', year: 'numeric' };
    let newDate = !date ? "undefined" : date.toLocaleDateString('en-GB', option);
    return newDate;
}

//Check name is in correct format or not
const checkName = (name) => {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if (!nameRegex.test(name)) throw "Name is incorrect!";
}

//check email is in correct formate or not
const checkEmail = (email) => {
    let emailRegex = RegExp("^[a-zA-Z0-9]{3,}([._+-][0-9a-zA-Z]{2,})*@[0-9a-zA-Z]+[.]?([a-zA-Z]{2,4})+[.]?([a-zA-Z]{2,3})$");
    if (!emailRegex.test(email)) throw "Email is invalid!";
}

//check contact is in correct formate or not 
const checkContact = (contact) => {
    let contactRegex = RegExp("^\\+?91[ ]?[1-9][0-9]{9}$");
    if (!contactRegex.test(contact)) throw "Contact is not valid!";
}
//check id is in correct formate or not 
const checkId = (id) => {
    let idRegex = RegExp("^[0-9]{1,}$");
    if (!idRegex.test(id)) throw "Id is not valid!";
}

//Check date is in correct format or not
const checkStartDate = (date) => {
    let now = new Date();
    //Givendate should not exceed todays date
    if (date > now) throw "The Given Date Is Greater Than Current Date";
    //Validating the start date should note be older than 30 days
    var diff = Math.abs(now.getTime() - date.getTime());
    if (diff / (1000 * 60 * 60 * 24) > 30)
        throw "DOB Is Beyond 30 Days";
}