$(document).ready(function(){

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")
        // 높이조절소스 - 웹디기출에서는 쓸 하등의 이유가 없다 ->실무기준
        let dlHeight = 50+$(this).next().height()
        $(".tabMenu").css("height",dlHeight)
        
    })


})