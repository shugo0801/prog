// // jsを記述する際はここに記載していく
img = new Array("img/course_02.jpg","img/h.png");
cheese = new Array("img/course_03.jpg","img/c.png"); 
farm = new Array("img/course_01.jpg","img/u.png"); 
count = -1; 
imgTimer();

function imgTimer() {
	//画像番号
	count++; 
	//画像の枚数確認
	if (count == img.length) count = 0; 
	//画像出力
	document.photo.src = farm[count]; 
	document.photo2.src = img[count]; 
	document.photo3.src = cheese[count]; 
  
	//次のタイマー呼びだし
	setTimeout("imgTimer()",1600); 
};


$(function(){
    $('a[href^="#"]').click(function(){
      let speed = 500;
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });

    function change_tom() {
        document.getElementById('btn').classList.toggle("tom");
        document.getElementById('a1').classList.toggle("active");
        document.getElementById('a2').classList.toggle("active");
        document.getElementById('tom3').classList.toggle("active");
        document.getElementById('tom2').classList.toggle("active");
        // target = document.getElementById('tom2');
        // target
    };

    function jery() {
      document.getElementById('hint').classList.toggle("jery");
    };

    function tom() {
      document.getElementById('hint2').classList.toggle("tj");
    };
    
    function top_tom() {
      document.getElementById('btn').classList.toggle("finish");
      // document.getElementById('tom2').innerHTML="";
      document.getElementById('tom3').innerHTML="おしまい！！";
      // document.getElementById('tom3').classList.toggle("active");
      document.getElementById('tom2').classList.toggle("active");
    };

    // スクロールアクション
    const scrollEvent = function() {
      // 要素の取得
      let scrollEle = document.querySelectorAll('.photo');

      window.addEventListener("scroll", () => {
        for (let i = 0; i < scrollEle.length; i++){

        // スクロール量の取得
        let scroll = window.pageYOffset;
        
        // 取得した要素のtop値の取得
        let rect = scrollEle[i].getBoundingClientRect().top;
        
        // 取得した要素のtop値の取得 + スクロール量
        let offset =  scroll + rect;

        // 画面の高さを取得
        let windowHeight = window.innerHeight;

        // はみ出させる値（お好みで設定）
        let value = 130;

        // 条件設定
        if(scroll > offset - windowHeight + value) {
          scrollEle[i].classList.add('scroll-in')
          // scrollEle[1].classList.add('scroll-in')
          // scrollEle[2].classList.add('scroll-in')
          // scrollEle[3].classList.add('scroll-out')
        }
      }
      });
    };

    scrollEvent(); 
