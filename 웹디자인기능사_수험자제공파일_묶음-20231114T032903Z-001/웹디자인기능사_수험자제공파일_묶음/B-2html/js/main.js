$(function(){

    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateY(${-33.333*count}%)`)
    },2500)

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
    })

    $(".firstNotice").click(function(){
        $(".popup").addClass("on")
        $(".modal_cover").addClass("on")
    })

    $(".btnClosePopup").click(function(){
        $(".popup").removeClass("on")
        $(".modal_cover").removeClass("on")
    })

    $(".gnb").mouseover(function(){
        $("header").addClass("show")
    })

    $(".gnb").mouseout(function(){
        $("header").removeClass("show")
    })
    

})