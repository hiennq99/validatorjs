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
    z.style.left = "0";
}

function validate() {
    var regex_username = /^[a-zA-Z]*$/g;
    var regex_pw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g;
    var regex_mail = /^[a-z0-9](\.?[a-z0-9])*@[a-z]{3,}.[a-z]{1,3}$/g;
    var regex_phone = /^([0-9]{10,}$)/g;
    var err = document.getElementsByClassName("err");
    var check = true;
    if (!regex_username.test(document.getElementById("user").value)) {
        err[0].innerHTML = "Không hợp lệ"
        check = false;
    } else {

        err[0].innerHTML = "";
    }
    if (!regex_pw.test(document.getElementById("Password").value)) {
        err[1].innerHTML = "Không hợp lệ"
        check = false;

    } else {
        err[1].innerHTML = "";
    }
    if (document.getElementById("Password").value != document.getElementById("Re_Password").value) {
        err[2].innerHTML = "Không hợp lệ"
        check = false;
    } else
        err[1].innerHTML = "";
    if (!regex_mail.test(document.getElementById("Email").value)) {
        err[3].innerHTML = "Không hợp lệ"
        check = false;

    } else {
        err[3].innerHTML = "";
    }
    if (!regex_phone.test(document.getElementById("Phone").value))

    {
        err[4].innerHTML = "Không hợp lệ"
        check = false;

    } else {
        err[4].innerHTML = "";
    }
    if (check == true)
        window.alert("Đăng kí thành công");
}