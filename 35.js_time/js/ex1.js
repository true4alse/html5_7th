$(document).ready(function(){

    let second = 0
    let btnstop
    $(".btn1").click(function(){
        clearInterval(btnstop)
        btnstop = setInterval(function(){
            second++
            $(".sec").html(second)
        },1000)
    })

    $(".btn2").click(function(){
        // 일시정지
        clearInterval(btnstop)
    })

    $(".btnReset").click(function(){
        second = 0;
        $(".sec").html(second)
        clearInterval(btnstop)
    })

})

