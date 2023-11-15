$(function(){

    let count = 0
    setInterval(function(){
        count++
        if(count>2){count=0}
        $(".train").css("transform",`translateX(${-33.333*count}%)`)
    },2500)

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
    })

    $(".firstNotice").click(function(){
        $(".popup").addClass("on")
    })

    $(".btnClosePopup").click(function(){
        $(".popup").removeClass("on")
    })
    

})