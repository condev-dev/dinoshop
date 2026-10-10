function ShowNotFoundProduct(obj) {
    document.getElementById(obj).style.visibility = "visible";
    document.getElementById(obj).style.top = "54px";
    document.getElementById(obj).style.opacity = 1;
}

function HideNotFoundProduct(obj) {
    document.getElementById(obj).style.visibility = "hidden";
    document.getElementById(obj).style.top = "74px";
    document.getElementById(obj).style.opacity = 0;
}


//---------------------

function ChangeBg1() {
    document.getElementById("Digital").style.display = "flex";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Poshok").style.display = "none";

    document.getElementById("TitleDigital").style.backgroundColor = "#f1f1f1";
    document.getElementById("TitleHome").style.backgroundColor = "#fff";
    document.getElementById("TitlePoshok").style.backgroundColor = "#fff";
}

function ChangeBg2() {
    document.getElementById("Home").style.display = "flex";
    document.getElementById("Digital").style.display = "none";
    document.getElementById("Poshok").style.display = "none";

    document.getElementById("TitleHome").style.backgroundColor = "#f1f1f1";
    document.getElementById("TitleDigital").style.backgroundColor = "#fff";
    document.getElementById("TitlePoshok").style.backgroundColor = "#fff";
}

function ChangeBg3() {
    document.getElementById("Poshok").style.display = "flex";
    document.getElementById("Digital").style.display = "none";
    document.getElementById("Home").style.display = "none";

    document.getElementById("TitlePoshok").style.backgroundColor = "#f1f1f1";
    document.getElementById("TitleHome").style.backgroundColor = "#fff";
    document.getElementById("TitleDigital").style.backgroundColor = "#fff";
}

//------------------

function RightMenuShow() {
    document.getElementById("Right-Menu").style.right = "0px";
    document.getElementById("OpenMenu").style.display = "none";
    document.getElementById("CloseMenu").style.display = "block";
}

function RightMenuCloes() {
    document.getElementById("Right-Menu").style.right = "-500px";
    document.getElementById("OpenMenu").style.display = "inline-block";
    document.getElementById("CloseMenu").style.display = "none";
}

function ShowCategoryMenuMobile() {
    var obj = document.getElementById("CategoryMobileMenu");

    if (obj.style.height == "auto") {
        obj.style.height = "0px";
    } else {
        obj.style.height = "auto";
    }
}

//------ Loading

var loading = document.querySelector(".ConLoading");
window.onload = function () {
    loading.style.display = "none";
}

//------------

function ChangeImage(obj) {
    document.getElementById("ConImageChange").src = obj;
    $(".Image-Zoom").blowup();
}

//------------------

function RedMoreValue(obj) {

    if (obj.innerHTML == "بستن") {
        document.getElementById("RedMoreValues").style.height = "100px";
        obj.innerHTML = "بیشتر";
    } else {
        document.getElementById("RedMoreValues").style.height = "auto";
        obj.innerHTML = "بستن";
    }
}

function RedMoreDescription(obj) {

    if (obj.innerHTML == "بستن") {
        document.getElementById("Description").style.height = "82px";
        obj.innerHTML = "بیشتر";
    } else {
        document.getElementById("Description").style.height = "auto";
        obj.innerHTML = "بستن";
    }
}

//-----------------------------

function DontAdd(obj) {
    var num = obj.nextElementSibling;

    if (num.innerHTML == 0) {} else {
        Number = 1;
        num.innerHTML = parseInt(num.innerHTML) - Number;
    }
}

function Add(obj) {
    Number = 1;
    var num = obj.previousElementSibling;
    num.innerHTML = parseInt(num.innerHTML) + Number;
}

//-----------------------------

function Change1() {
    document.getElementById("Description-Product").style.display = "block";
    document.getElementById("more-information").style.display = "none";
    document.getElementById("Comments").style.display = "none";
}

function Change2() {
    document.getElementById("Description-Product").style.display = "none";
    document.getElementById("Comments").style.display = "none";
    document.getElementById("more-information").style.display = "block";
}

function Change3() {
    document.getElementById("Description-Product").style.display = "none";
    document.getElementById("more-information").style.display = "none";
    document.getElementById("Comments").style.display = "flex";
}

//-----------------------------------

function ChangeSize() {
    var MyClass1 = "Category-Filter col-3 bg-gray";
    var NewClass1 = "Category-Filter col-0 bg-gray"
    var MyClass2 = "Product-Title col-12 col-lg-9";
    var NewClass2 = "Product-Title col-12 col-lg-12"

    if (document.getElementById("Category-Filter").style.display == "none") {
        document.getElementById("Category-Filter").style.display = "block";
        document.getElementById("Category-Filter").className = MyClass1;

        document.getElementById("Product").className = MyClass2;
        document.getElementById("Hide-Filter-Text").innerHTML = "پنهان کردن فیلتر";
    } else {
        document.getElementById("Category-Filter").style.display = "none";
        document.getElementById("Category-Filter").className = NewClass1;

        document.getElementById("Product").className = NewClass2;
        document.getElementById("Hide-Filter-Text").innerHTML = "نمایش فیلتر ها";
    }

}


//-------------------------- Show And Hdie Pass 

$(document).ready(function () {
    $("#show_hide_password a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password input').attr("type") == "text") {
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass("fa-eye-slash");
            $('#show_hide_password i').removeClass("fa-eye");
        } else if ($('#show_hide_password input').attr("type") == "password") {
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass("fa-eye-slash");
            $('#show_hide_password i').addClass("fa-eye");
        }
    });
});

$(document).ready(function () {
    $("#show_hide_password1 a").on('click', function (event) {
        event.preventDefault();
        if ($('#show_hide_password1 input').attr("type") == "text") {
            $('#show_hide_password1 input').attr('type', 'password');
            $('#show_hide_password1 i').addClass("fa-eye-slash");
            $('#show_hide_password1 i').removeClass("fa-eye");
        } else if ($('#show_hide_password1 input').attr("type") == "password") {
            $('#show_hide_password1 input').attr('type', 'text');
            $('#show_hide_password1 i').removeClass("fa-eye-slash");
            $('#show_hide_password1 i').addClass("fa-eye");
        }
    });
});

//-------------------------- 

function ShowSingIn() {
    document.getElementById("SinginForm").style.top = "10px";
    document.getElementById("SingUpForm").style.bottom = "-300px";
    document.getElementById("BtnSingUp").style.fontSize = "20px";
    document.getElementById("btnSingIn").style.fontSize = "24px";
}

function ShowSingUp() {
    document.getElementById("SinginForm").style.top = "-500px";
    document.getElementById("SingUpForm").style.bottom = "0px";
    document.getElementById("btnSingIn").style.fontSize = "20px";
    document.getElementById("BtnSingUp").style.fontSize = "24px";
}

//--------------------------  for card page

function DeleteProduct(obj) {
    var parent1 = obj.parentNode;
    var parent2 = parent1.parentNode;
    var parent3 = parent2.parentNode;
    var parent4 = parent3.parentNode;
    parent4.style.visibility = "hidden";
    parent4.style.position = "absolute";
}