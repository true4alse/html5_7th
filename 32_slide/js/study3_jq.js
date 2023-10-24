$(document).ready(function(){

    let count = 0;
    $(".btn_next").click(function(){
        count++
        // 1.슬라이드가 이동
        // 2.페이지정보 업데이트
        // 3.슬라이드안 텍스트가 보이는 기능
        // 4.다음/이전버튼 활성/비활성 기능

        if(count>=6){
            count=6
            $(this).addClass("ghost")
        }else{
            $(this).removeClass("ghost")
            $(".btn_prev").removeClass("ghost")
        } // 예외처리

        $(".train").css("transform",`translateX(${-count*(100/7)}%)`)
        
        $(".page>li").removeClass("on")
        $(".page>li").eq(count).addClass("on")

        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        
    })

    $(".btn_prev").click(function(){
        count--
        if(count<=0){
            count=0
            $(this).addClass("ghost")
        }else{
            $(".btn_next").removeClass("ghost")
            $(this).removeClass("ghost")
        } // 예외처리
        $(".train").css("transform",`translateX(${-count*(100/7)}%)`)
        
        $(".page>li").removeClass("on")
        $(".page>li").eq(count).addClass("on")

        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")

    })

    // 페이지버튼 클릭 시 동작
    $(".page>li").click(function(){
        let idx = $(this).index()
        count = idx

        // idx -> 0일때->(이전버튼고스트),6일때->(다음버튼고스트)
        if(idx==0){
            $(".btn_prev").addClass("ghost")
            $(".btn_next").removeClass("ghost")
        }else if(idx==6){
            $(".btn_next").addClass("ghost")
            $(".btn_prev").removeClass("ghost")
        }else{
            $(".btn_prev").removeClass("ghost")
            $(".btn_next").removeClass("ghost")
        }

        $(".train").css("transform",`translateX(${-idx*(100/7)}%)`)

        $(".page>li").removeClass("on")
        $(".page>li").eq(idx).addClass("on")

        $(".train>li").removeClass("on")
        $(".train>li").eq(idx).addClass("on")

    })

})