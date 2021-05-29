// シンプルカレンダー
const weeks = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
var toTwoDigits = function (num, digit) {
    num += ''
    if (num.length < digit) {
      num = '0' + num
    }
    return num
  }
  
const month = date.getMonth() + 1
var mm = toTwoDigits(month, 2)
const startDate = new Date(year, month - 1, 1) // 月の最初の日を取得
const endDate = new Date(year, month,  0) // 月の最後の日を取得
const endDayCount = endDate.getDate() // 月の末日
const startDay = startDate.getDay() // 月の最初の日の曜日を取得
let dayCount = 1 // 日にちのカウント
let calendarHtml = '' // HTMLを組み立てる変数

calendarHtml += '<h1>' + year  + '年' + mm +  '月'+ '</h1>'
calendarHtml += '<table id="carendar">'

// 曜日の行を作成
for (let i = 0; i < weeks.length; i++) {
    calendarHtml += '<td>' + weeks[i] + '</td>'
}

for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            // 1行目で1日の曜日の前
            calendarHtml += '<td></td>'
        } else if (dayCount > endDayCount) {
            // 末尾の日数を超えた
            calendarHtml += '<td></td>'
        } else {
            calendarHtml += `<td class="calendar_td" data-date="${year}-${mm}-${dayCount}">${dayCount}</td>`
            // calendarHtml += '<td class = "calendar_td">' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml

// クリックイベント
document.addEventListener("click", memo);
    function memo(e) {

 // 背景色を切り替える
    var target = e.target;
    if( ( target.tagName || "" ).match(/td/i) ){
    target.style.backgroundColor =
    target.style.backgroundColor ? "" : "#fff799" ;
    }
        
    if(e.target.classList.contains("calendar_td")) {
        alert('クリックした日付は' + e.target.dataset.date + 'です')
        document.querySelector('.event').classList.toggle("visible") ;
    }
    const inputDate = e.target.dataset.date
    document.getElementById('date').value = `${inputDate}`
    document.removeEventListener("click", memo);
}


//日付入力
$("#send").on("click", function () {
    let date = $("#date").val();
    let title = $("#title").val();
    let event = $("#event").val();
    let place = $("#place").val();

    if(date === "") {
      alert("入力してないよ")
      return
    
}   else{
    newPostRef.push({
        date:$("#date").val(),
        title:$("#title").val(),
        event:$("#event").val(),
        place:$("#place").val()
    })
    document.querySelector('.event').classList.toggle("visible") ;
    location.reload();
    // document.getElementById('carendar').style.color = "red" ;       //色つける
   

// firebase.database().ref('-MaNFEkPMGjGVLtVbC2u')
// .once('value',function(snapshot) {
//     console.log(snapshot.val())})

// firebase.database().ref()                               //全体から2021/5/31を探す
// .orderByChild('date').startAt('2021/5/17').endAt('2021/5/24')           
// .once('value',function(snapshot) {
//     if(snapshot.val() === null ){
//         alert ("存在しません")
//     }else{
//         alert("マッチングしました")
//         console.log(snapshot.val())}})

}
});

newPostRef.on("child_added", function (data) {
    let v = data.val();              //ここに保存されたデータが全て入ってくる
    // let k = data.key;            //今回は使いません

    console.log(v);                 //vの変数に入っているオブジェクトを全てみる

    let str = `<p>${v.date}<br>${v.title}</p>`;

    // ここでデータをhtmlに埋め込む
    $("#output").prepend(str);
  })

 
function modoru(){
    location.href = 'login.html';
}
function temae(){
    location.reload();
}

