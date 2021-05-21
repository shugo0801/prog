$("#save").on('click', function(){
    const user = $("#user-form").val();
    const adress = $("#adress-form").val();
    const phone = $("#phone-form").val();
    const mail = $("#mail-form").val();
    const haisin = $("#haisin-form").val();
    const plan = $("#plan-form").val();

    var data = {
        user,adress,phone,mail,haisin,plan
    };
    localStorage.setItem("account",JSON.stringify(data));

    const html1 = `${user}`   
    $("#user").html(html1);
    const html2 = `${adress}`   
    $("#adress").html(html2);
    const html3 = `${phone}`   
    $("#phone").html(html3);
    const html4 = `${mail}`   
    $("#mail").html(html4);
    const html5 = `${haisin}`   
    $("#haisin").html(html5);
    const html6 = `${plan}`   
    $("#plan").html(html6);

    // 中身を空にする
    $("#user-form").val("");
    $("#adress-form").val("");
    $("#phone-form").val("");
    $("#mail-form").val("");
    $("#haisin-form").val("");
    $("#plan-form").val("");

});


$("#clear").on("click",function(){
    localStorage.clear();  //localStorageを空にする
    $("#user-form").empty();   
    $("#adress-form").empty();   
    $("#phone-form").empty();   
    $("#mail-form").empty();   
    $("#haisin-form").empty();   
    $("#plan-form").empty();   
});


 /* トップ画像 */
 $('#myImage').on('change', function(e){
     var file = e.target.files[0];
     var filereader = new FileReader();
    filereader.onload = function(e){
        $('#preview').attr('src', e.target.result);
    }
    filereader.readAsDataURL(e.target.files[0]);
});

// 編集クリックイベント
function hennsyuuEvent() {
    document.getElementById('main').classList.toggle("visible") ;
    document.getElementById('pro').classList.toggle("visible") ;
}
function batsu() {
    document.getElementById('main').classList.toggle("visible") ;
    document.getElementById('pro').classList.toggle("visible") ;
}

// アカウント作成クリックイベント
function creac() {
    document.getElementById('create_a').classList.toggle("visible") ;
    console.log("a")
}
function createbatsu() {
    document.getElementById('create_a').classList.toggle("visible") ;
    console.log("a")
}

// ログインクリックイベント


var newId = $("#create-id").val();
var newPass = $("#create-pass").val();


function login2() {
    var loginId = $("#login-id").val();
    var loginPass = $("#login-pass").val();
    // var userId = localStorage.getItem(key);
    for(let i=0; i<localStorage.length; i++){
    var userId = localStorage.key(i);
    const value = localStorage.getItem(userId);
    console.log(value);

// if(value !== null){
    if(loginPass === value){
    location.href = 'index.html';
} else{
    alert("IDかパスワードが一致しません")
    $("#login-id").val("");
    $("#login-pass").val("");
}
}
}


function logininput() {
    document.getElementById('login_a').classList.toggle("visible") ;
}
function loginbatsu() {
    document.getElementById('login_a').classList.toggle("visible") ;
}

// アカウント作成
$("#touroku").on('click', function(){
    var newId = $("#create-id").val();
    var newPass = $("#create-pass").val();
$("#create-id").val("");
$("#create-pass").val("");

localStorage.setItem(newId, newPass);
});


