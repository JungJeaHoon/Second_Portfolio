

//gnb

const gnbBtn = document.querySelector('.gnbBtn');
const gnb_open = document.querySelector('.gnb_open');
const dark = document.querySelector('.dark');
const btn_subs= document.querySelectorAll('.btn_sub');
const btn_subArrows= document.querySelectorAll('.btn_sub>span');
const list_sub_wraps= document.querySelectorAll('.list_sub_wrap');
const user_xmark = document.querySelector('.user_xmark');



//gnb가 왼쪽에서 튀어나오게
gnbBtn.addEventListener('click',()=>{
    gnb_open.style = `transform: translateX(0)`;
    dark.style.display = 'block';
})



//gnb가 왼쪽으로 들어가게

dark.addEventListener('click',()=>{
    gnb_open.style = `transform: translateX(-100%)`;
    dark.style.display = 'none';
})
user_xmark.addEventListener('click',()=>{
  gnb_open.style = `transform: translateX(-100%)`;
    dark.style.display = 'none';
})



/*gnb +누르면 서브메뉴 나오기*/


const btn_menu_business = document.querySelector('.btn_menu_business');
const gnb_sub_Detail = document.querySelector('.gnb_sub_Detail');

// 초기에 서브 메뉴를 숨김
gnb_sub_Detail.style.display = 'none';

btn_menu_business.addEventListener('click', (event) => {
  // 클릭 이벤트가 발생할 때마다 서브 메뉴의 표시 상태를 토글합니다.
  if (gnb_sub_Detail.style.display === 'none' || gnb_sub_Detail.style.display === '') {
    gnb_sub_Detail.style.display = 'block';
  } else {
    gnb_sub_Detail.style.display = 'none';
  }

  // 이벤트 버블링을 막아서 document 클릭 이벤트가 발생하지 않도록 합니다.
  event.stopPropagation();
});

// document를 클릭했을 때 서브 메뉴를 숨깁니다.
document.addEventListener('click', () => {
  gnb_sub_Detail.style.display = 'none';
});





//banner
$(document).ready(function() {
  var $banner = $(".banner").find("ul");

  var $bannerWidth = $banner.children().outerWidth();//이미지의 폭
  var $bannerHeight = $banner.children().outerHeight(); // 높이
  var $length = $banner.children().length;//이미지의 갯수
  var rollingId;

  //정해진 초마다 함수 실행
  rollingId = setInterval(function() { rollingStart(); }, 3000);//다음 이미지로 롤링 애니메이션 할 시간차
  
  function rollingStart() {
    $banner.css("width", $bannerWidth * $length + "px");
    $banner.css("height", $bannerHeight + "px");
    //alert(bannerHeight);
    //배너의 좌측 위치를 옮겨 준다.
    $banner.animate({left: - $bannerWidth + "px"}, 1500, function() { //숫자는 롤링 진행되는 시간이다.
      //첫번째 이미지를 마지막 끝에 복사(이동이 아니라 복사)해서 추가한다.
      $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
      //뒤로 복사된 첫번재 이미지는 필요 없으니 삭제한다.
      $(this).find("li:first").remove();
      //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
      $(this).css("left", 0);
      //이 과정을 반복하면서 계속 롤링하는 배너를 만들 수 있다.
    });
  }
}); 





/*top버튼*/

let topBtn = document.querySelector('.topBtn');

if (topBtn) {
  topBtn.addEventListener('click', function (e){
    e.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
}


window.addEventListener('scroll', function(){
  if (this.scrollY > 200){
    topBtn.classList.add('on');
  }else{
    topBtn.classList.remove('on');
  }
})


const element = document.getElementById("topBtn"); // "topBtn" ID를 가진 요소를 찾아 변수에 할당

if (element) {
  element.addEventListener("click", function() {
    // 이벤트 핸들러 코드
  });
} else {
  console.error("topBtn 요소가 존재하지 않습니다.");
}