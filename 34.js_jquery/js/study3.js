$(document).ready(function(){
    $(".banner").css("color","red")

    $(".btn1").click(function(){
        $(".banner").css("color","blue")
    })
    
    $(".btn2").click(function(){
        $(".banner").css("color","green")
    })

    $(".banner").mouseover(function(){
        alert("마우스 올림")
    })

    $(".banner").mouseout(function(){
        alert("마우스 뺌")
    })

})
