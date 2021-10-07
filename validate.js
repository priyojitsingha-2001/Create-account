
function validateform() {
    var name = document.forms['form']['fname'].value;
    var lname = document.forms['form']['lname'].value;
    var mob = document.forms['form']['phone'].value;
    //var pass= document.forms['form']['password'].value;
    if (name.length == 0 || name.length<4) {
        alert("Name is too small");
        return false;
    }
    if (lname.length == 0 || lname.length<4) {
        alert("last name is too small");
        return false;
    }
    if (mob.length>10) {
        alert("enter a valid phone number");
        return false;
    }
    if (document.forms['form']['cpassword'].value!=document.forms['form']['password'].value) {
        alert("password didn't matched");
        return false
    }
    return true;
}