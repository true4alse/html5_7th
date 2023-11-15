$(function(){

    let count = 0

    setInterval(function(){
        count++
        if(count>2){
            count=0
        }
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
    },2500)

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
    })
    
    $(".btnClosePop").click(function(){
        $(".popup").removeClass("on")
        // $(".modal_cover").removeClass("on")
    })
    
    $(".firstNotice").click(function(){
        $(".popup").addClass("on")
        // $(".modal_cover").addClass("on")
    })

   


})