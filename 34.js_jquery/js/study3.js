$(document).ready(function(){
    $(".banner").css("color","red")

    $(".btn1").click(function(){
        $(".banner").css("color","blue")
    })
    
    $(".btn2").click(function(){
        $(".banner").css("color","green")
    })

    $(".banner").mouseover(function(){
        // alert("마우스 올림")
    })

    $(".banner").mouseout(function(){
        // alert("마우스 뺌")
    })

    $(".btn3").click(function(){
        $(".banner").addClass("on")
        boxstate="열림"
    })

    $(".btn4").click(function(){
        $(".banner").removeClass("on")
        boxstate="닫힘"
    })

    let boxstate = "닫힘"
    $(".btn5").click(function(){
        // 상태에 따라 열닫기능
        if(boxstate=="닫힘"){
            $(".banner").addClass("on")
            boxstate = "열림"
        }else{
            $(".banner").removeClass("on")
            boxstate = "닫힘"
        }
    })

})
