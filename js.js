var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register() {
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    console.log(y);
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    const regex = /[a-zA-z]/g;
    console.log(regex);
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    console.log(x);
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function register() {
    const regex = /[a-zA-z]/g;
    console.log(regex);
    var x = document.getElementById("login");
    var y = document.getElementById("register");
    var z = document.getElementById("btn");
    console.log(x);
    x.style.left = "-450px";
    y.style.left = "50px";
    z.style.left = "110px";
}


function validate() {
    var err = document.getElementsByClassName("err");
    var check = true;
    const fieldRequired = ["user", "Password", "Re_Password", "Email", "Phone"];
    var rules;
    var i = 0;
    var re_pw = document.getElementById("Re_Password").value.trim();
    fieldRequired.forEach(field => {
        let value = document.getElementById(`${field}`).value.trim();
        err[0].innerHTML = isUserName(value);
        err[1].innerHTML = isPassword(value);
        err[2].innerHTML = isRe_pw(value);
        err[3].innerHTML = isMail(value);
        err[4].innerHTML = isPhone(value);
        (value);

    });
}

function required(value) {
    return value
}

function isPassword(value) {
    if (required(value)) {
        var regex_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
        if (!regex_pw.test(document.getElementById("Password").value)) {
            return "Không hợp lệ"
        } else
            return "";
    } else
        return "Không được bỏ trống";


}

function isUserName(value) {
    if (required(value)) {
        var regex_username = /^[a-zA-Z]*$/g;
        if (!regex_username.test(document.getElementById("user").value)) {
            return "Không hợp lệ";
        } else
            return "";
    } else
        return "Không được bỏ trống";

}

function isMail(value) {
    if (required(value)) {
        var regex_mail = /^[a-z0-9](\.?[a-z0-9])*@[a-z]{3,}.[a-z]{1,3}$/g;
    if (!regex_mail.test(document.getElementById("Email").value)) {
            return "Không hợp lệ"
        } else
            return "";
    } else
        return "Không được bỏ trống";

}

function isPhone(value) {
    if (required(value)) {
        var regex_phone = /^([0-9]{10,}$)/g;
    if (!regex_phone.test(document.getElementById("Phone").value)) {
            return "Không hợp lệ"
        } else
            return "";
    } else
        return "Không được bỏ trống";

}
function isRe_pw(value)
{
    if(required(value))
    {
        var pw = document.getElementById("Password").value.trim();
        if(pw!=value)
            return "Password không khớp";
        else
            return "";
    }
    else
        return "không được bỏ trống";
}
// switch (fieldRequired) {
//     case "user":
//         if (!isUserName(value)) {
//             err[i].innerHTML = "Không hợp lệ";
//         } else
//             err[i].innerHTML = "";
//         break;
//     case "Password":
//         if (!isUserName(value)) {
//             err[i].innerHTML = "Không hợp lệ";
//         } else
//             err[i].innerHTML = "";
//         break;
//     case "Re_Password":
//         if (value!=re_pw) {
//             err[i].innerHTML = "Không hợp lệ";
//         } else
//             err[i].innerHTML = "";
//         break;
//     case "Email":
//         if (!isUserName(value)) {
//             err[i].innerHTML = "Không hợp lệ";
//         } else
//             err[i].innerHTML = "";
//         break;
//     case "Phone":
//         if (!isUserName(value)) {
//             err[i].innerHTML = "Không hợp lệ";
//         } else
//             err[i].innerHTML = "";
//         break;
{}