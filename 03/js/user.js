// ユーザー入力
$("#serch").on("click", function () {
    let name = $("#name").val();
    let riyou = $("#riyou").val();
    let mokuteki = $("#mokuteki").val();
    let toplace = $("#toplace").val();

    if(riyou === "") {
      alert("入力してないよ")
      return
    
}   else{
    newPostRef.push({
        name:$("#name").val(),
        riyou:$("#riyou").val(),
        mokuteki:$("#mokuteki").val(),
        toplace:$("#toplace").val()
    })


// マッチング設定
firebase.database().ref()                        
.orderByChild('date').startAt(riyou).endAt(riyou)           
.once('value',function(snapshot) {
    if(snapshot.val() === null ){
        alert ("日程が合いませんでした")
        console.log(riyou)
    }else{
        console.log(snapshot.val())}})
        document.getElementById('matching').classList.toggle("visible") ;

        const html1 = `${riyou}`   
        $("#day1").html(html1);
        const html2 = `${mokuteki}`   
        $("#puro").html(html2);
        const html3 = `${toplace}`   
        $("#tp").html(html3);
        
}
});

// マッチング○
$("#yoyaku").on("click", function () {

    $("#name").val("");
    $("#riyou").val("");
    $("#mokuteki").val("");
    $("#toplace").val("");

document.getElementById('matching').classList.toggle("visible") ;
document.getElementById('ta1').classList.toggle("visible") ;

});

$("#modoru").on("click", function () {
      location.reload();
});



function modoru(){
    location.href = 'login.html'
}