$(function(){

    let count=0
    setInterval(function(){
        count++
        if(count>2){count=0}

        // fade in fade out
        // $(".train>li").removeClass("on")
        // $(".train>li").eq(count).addClass("on")

        // 가로슬라이드
        $(".train").css("transform",`translateX(${-33.333*count}%)`)

        // 세로슬라이드
        // $(".train").css("transform",`translateY(${-33.333*count}%)`)

    },2500)

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
    })

    $(".noticeFirst").click(function(){
        $(".popup").addClass("on")
    })

    $(".btnClosePopup").click(function(){
        $(".popup").removeClass("on")
    })


})