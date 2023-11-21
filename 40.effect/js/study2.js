$(function(){


    $(window).scroll(function(){
        let sct = $(window).scrollTop()
        console.log(sct)
        let spacing = sct/5
        $(".box").css("letter-spacing",spacing+"px")
        $(".bb").css("padding",spacing+"px")
    })

})