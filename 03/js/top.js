// アカウント作成クリックイベント
function creac() {
    document.getElementById('create_a').classList.toggle("visible") ;
    console.log("a")
}
function createbatsu() {
    document.getElementById('create_a').classList.toggle("visible") ;
    console.log("a")
}

register.addEventListener('click', function(e) {
    var createid = document.getElementById('create-id').value;
    var createpass = document.getElementById('create-pass').value;
    
    firebase.auth().createUserWithEmailAndPassword(createid, createpass)
    .then(function(userCredential){
        alert("新規登録完了しました。");
        $("#create-id").val("");
        $("#create-pass").val("");
       })
    .catch(function(error) {
      alert('登録できません（' + error.message + '）');
    });
  });


  //ログイン処理
 loginup.addEventListener('click', function(e) {
    var createid = document.getElementById('create-id').value;
    var createpass = document.getElementById('create-pass').value;
   
    
   firebase.auth().signInWithEmailAndPassword(createid, createpass)
   .then(function(userCredential){
    location.href = 'index.html';
   })
    .catch(function(error) {
      alert('ログインできません（' + error.message + '）');
    });
  });

  reset.addEventListener('click', function(){
    $("#create-id").val("");
    $("#create-pass").val("");
  })

  function logininput() {
    location.href = 'user.html';
  }



  //認証状態の確認
// firebase.auth().onAuthStateChanged(function(user) {  //現在ログインしているユーザー取得
//     if(user) {
//       //ログイン状態
//       alert("ログインに成功しました");
//       location.href = 'login.html';
//     }else{
//       //ログアウト状態
//     }
//   });
