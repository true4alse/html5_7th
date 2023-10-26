$(document).ready(function(){

    let winTop = 0
    $(window).scroll(function(){
        winTop = $(this).scrollTop()
        if(winTop > 500){
            $("header").addClass("on")
        }else{
            $("header").removeClass("on")
        }
    })

    // 메뉴를 클릭했을 때 
    // 첫번째 메뉴를 클릭 ->  첫번째 섹션으로 스크롤바를 부드럽게 이동
    // ..
    // 다섯번째 메뉴를 클릭 -> 다섯번째 섹션으로 ...
    $(".gnb>li").click(function(e){
        e.preventDefault() // 태그가 갖는 기본기능을 억제해주는 소스
        let idx = $(this).index()
        let targetTop = $(".contents_wrap>section").eq(idx).offset().top

        $("html,body").stop().animate({scrollTop:targetTop},1000)

        //현재 활성화된 리스트 추가
          $(".gnb>li").removeClass("on")
          $(this).addClass("on")
        //   $(".gnb>li").eq(idx).addClass("on")

    })

})