// 手札のカードがクリックされた時
var btn = document.getElementsByClassName('tefuda-card');

for (var i = btn.length - 1; i >= 0; i--) {
        btnAction(btn[i],i);
        console.log(i);
}
    function btnAction(btnDOM,btnId){
        btnDOM.addEventListener("click", function(){
            this.classList.toggle('battle');
            document.getElementById('check').classList.toggle("active");
            for (var i = btn.length - 1; i >= 0; i--) {
                if(btnId !== i){
                if(btn[i].classList.contains('battle')){
                btn[i].classList.remove('battle')
                }
                }
            }
        })
}
    
// 説明画面の切り替え     
function batsu() {
    document.querySelector('.saisyo').classList.toggle("none");
    document.querySelector('.gs').classList.toggle("visible");
}
    
function card_set1(){
    let ok =  document.querySelector('.ok');
    let chensel = document.querySelector('.chansel');
}


// カードセットボタン設定
var count_value = 0; 

function cardSet(btn){

    if(btn === 1){ 
        document.getElementById('check').classList.toggle("active"); 
        document.querySelector('.my-card').classList.toggle("visible");
        document.querySelector('.aite-card').classList.toggle("visible");
        document.querySelector('.battle').classList.toggle("a") ;
        count_value += 1;      //OKボタンカウント

        const aite = document.getElementsByClassName('aite-tefuda-card');
        for (let i = 0; i < aite.length; i++) {
            aite[count_value].classList.toggle('shugo');
            console.log(count_value);
            // document.querySelector('.aite-tefuda-card.shugo').remove();
        // aiteAction(aite[i],i);   
        
        // function aiteAction(btnDOM,btnId){
        //     btnDOM.classList.toggle('shugo');

        //     for (var i = btn.length - 1; i >= 0; i--) {
        //         if(btnId !== i){
        //         if(btn[i].classList.contains('battle')){
        //         btn[i].classList.remove('battle')
        //         }
        //         }
        //     }
        // }
     }
    }else if(btn === 2){
        document.getElementById('check').classList.toggle("active");
    }
}

// Duelボタン押した時
function duel() {
    document.querySelector('.battle.a').classList.toggle("visible") ;
    document.querySelector('.my-card').classList.toggle("visible");
    document.querySelector('.aite-card').classList.toggle("visible");
    var myCard = document.querySelector('.battle.a.visible');
    var dorei = document.getElementById('dorei');
    var heimin = document.getElementById('heimin');
    var heimin2 = document.getElementById('heimin2');
    var heimin3 = document.getElementById('heimin3');
    var heimin4 = document.getElementById('heimin4');
    var aiteCard = Math.floor(Math.random()*4);

// [aiteCard] 0:king,1:heimin,2:heimin,3:heimin,4:heimin

    if(myCard === heimin&&aiteCard === 0 || myCard === heimin2&&aiteCard === 0 || myCard === heimin3&&aiteCard === 0 ||myCard === heimin4&&aiteCard === 0 ){  // 自分が平民かつ相手がキングの場合
        // alert("LOSE");
        document.querySelector('.aite-king').classList.toggle("visible");
        document.querySelector('.lose').classList.toggle("visible");
    }else if(myCard === heimin&&aiteCard === 1 || myCard === heimin2&&aiteCard === 1 || myCard === heimin3&&aiteCard === 1 ||myCard === heimin4&&aiteCard === 1 ){ // 自分と相手が平民の場合
        // alert("DRAW");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.draw').classList.toggle("visible");
    }else if(myCard === heimin&&aiteCard === 2 || myCard === heimin2&&aiteCard === 2 || myCard === heimin3&&aiteCard === 2 ||myCard === heimin4&&aiteCard === 2 ){ // 自分と相手が平民の場合
        // alert("DRAW");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.draw').classList.toggle("visible");
    }else if(myCard === heimin&&aiteCard === 3 || myCard === heimin2&&aiteCard === 3 || myCard === heimin3&&aiteCard === 3 ||myCard === heimin4&&aiteCard === 3 ){ // 自分と相手が平民の場合
        // alert("DRAW");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.draw').classList.toggle("visible");
    }else if(myCard === heimin&&aiteCard === 4 || myCard === heimin2&&aiteCard === 4 || myCard === heimin3&&aiteCard === 4 ||myCard === heimin4&&aiteCard === 4 ){ // 自分と相手が平民の場合
        // alert("DRAW");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.draw').classList.toggle("visible");
    }else if(myCard === dorei&&aiteCard === 0 ){ // 自分が奴隷かつ相手がキングの場合
        // alert("WIN！！！！！！！！！！！！！！");
        document.querySelector('.aite-king').classList.toggle("visible");
        document.querySelector('.win').classList.toggle("visible");
    }else if(myCard === dorei&&aiteCard === 1 ){ // 自分が奴隷かつ相手が平民の場合
        // alert("LOSE");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.lose').classList.toggle("visible");
    }else if(myCard === dorei&&aiteCard === 2 ){ // 自分が奴隷かつ相手が平民の場合
        // alert("LOSE");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.lose').classList.toggle("visible");
    }else if(myCard === dorei&&aiteCard === 3 ){ // 自分が奴隷かつ相手が平民の場合
        // alert("LOSE");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.lose').classList.toggle("visible");
    }else if(myCard === dorei&&aiteCard === 4 ){ // 自分が奴隷かつ相手が平民の場合
        // alert("LOSE");
        document.querySelector('.aite-heimin').classList.toggle("visible");
        document.querySelector('.lose').classList.toggle("visible");
    };
}

// 次のバトルを押した時
function removeEvent() { 
    var king = document.querySelector('.aite-king')
    var heimin = document.querySelector('.aite-heimin')
    document.querySelector('.battle.a.visible').remove();
    if(king.classList.contains('visible')){
       king.classList.remove('visible');
       document.querySelector('.draw').classList.toggle("visible");
    }else if(heimin.classList.contains('visible')){
        heimin.classList.remove('visible');
        document.querySelector('.draw').classList.toggle("visible");
    }
}









// 試し０
$("#btn").on("click",function(){
    alert("OK");
});

// 再読み込み
function reset() {
    location.reload();
}


// G'sカード
$(function() {
	setTimeout(function(){
		$('.setumei p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.setumei').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
