$(document).ready(function(){

    // 마우스 휠을 아래로 굴리면 한바닥아래 섹션으로 부드럽게 이동
    // 마우스 휠을 위로 굴리면 하바닥위 섹션으로 부드럽게 이동
    // 마우스를 어디에 대고 휠을 굴려?? -> 섹션

    $(".wrap>section").on("wheel DOMMouseScroll",function(event){
        // event 사용자의 행동정보를 담고있는 객체
        let E = event.originalEvent
        let delta = 0
        if(E.detail){
            //파폭 
            delta = E.detail * -40
        }else{
            //크롬,익스..
            delta = E.wheelDelta
        }

        if(delta<0){
            // 휠을 아래로 굴렸다
            let posTop = $(this).next().offset().top
            $("html,body").stop().animate({scrollTop:posTop},1000)
            $(".wrap>section").removeClass("on")
            $(this).next().addClass("on")

        }else{
            // 휠을 위로 굴렸다
            let posTop = $(this).prev().offset().top
            $("html,body").stop().animate({scrollTop:posTop},1000)
            $(".wrap>section").removeClass("on")
            $(this).prev().addClass("on")
        }
        return false

    })


})