function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}
function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();

    var name = document.forms['myForm']["fname"].value;
    if(name.length<5){
        seterror("name", "*Length of name is too short!!");
        returnval = false;
    }
    if(name.length==0){
        seterror("name", "*Fill this field to login!!");
        returnval = false;
    }

    var phone = document.forms['myForm']['fphone'].value;
    if(phone.length!=10){
        seterror("phone", "*Number should be only of 10 digits!!")
        returnval = false;
    }

    var email = document.forms['myForm']['femail'].value;
    if(email.length>30){
        seterror("email", "*E-mail is too long!!");
        returnval = false;
    }

    var password = document.forms['myForm']['fpassword'].value;
    if(password.length<6){
        seterror("password", "*Password should be atleast 6 digits!!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']['fcpassword'].value;
    if(cpassword !=  password){
        seterror("cpassword", "*Password ans confirm password should match!!");
        returnval = false;
    }


    return returnval;
}