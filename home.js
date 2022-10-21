$(document).ready(function () {
    var modal = $('.modal');
    var btn = $('.btn');
    var span = $('#btnClose');
    var modal1 = $('.modal1');
    var btn1 = $('.btn1');
    var span1 = $('#btnClose1');

    btn.click(function () {
        modal.show();
    });

    span.click(function () {
        modal.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modal')) {
            modal.hide();
        }
    });
    btn1.click(function () {
        modal1.show();
    });

    span1.click(function () {
        modal1.hide();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is('.modal1')) {
            modal1.hide();
        }
    });
});

var User = function (name, mail, phone, pass) {
    this.name = name;
    this.mail = mail;
    this.phone = phone;
    this.pass = pass;
}
var DataArr = [];
$('#btnSave').click(function () {
    var txtname = $('#name').val();
    var txtnmail = $('#mail').val();
    var txtphone = $('#phone').val();
    var txtpass = $('#pass').val();

    var user = new User(txtname, txtnmail, txtphone, txtpass);
    DataArr.push(user);
    localStorage.setItem("homepage", JSON.stringify(DataArr));
})
$('#btnSave1').click(function () {
    var submail = $('#email1').val();
    var subpass = $('#pass1').val();

    list_user = localStorage.getItem("homepage") ? JSON.parse(localStorage.getItem("homepage")) : [];

    user_login = null;
    list_user.forEach((current_user) => {
        if (current_user.mail === submail && current_user.pass === subpass)
            user_login = current_user;
    })
    if (user_login) {
        console.log("Sign in");
        localStorage.setItem('session', JSON.stringify({ "user": user_login, status: "Signing" }));
        window.location.reload();
    } else {
        console.log("Unlogin");
    }
})
window.onload = () => {

    if (localStorage.getItem('session')) {
        user = JSON.parse(localStorage.getItem("session")).user;
        console.log("Da co user su dung");
        $('#new_session_container').css("display", "none");
        $('#name_user').html(user.name);
    } else {
        console.log("Phai dang nhap/ dang kys");
        $('#new_session_container').css("display", "block");
        $('.user_info').css("visibility", "hidden");
    }
}
$('#ava').click(function () {
    $('.action_user').css("display", "block");
})

$('#sign-out').click(function () {
    localStorage.removeItem('session');
    window.location.reload();
})