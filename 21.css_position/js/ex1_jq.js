$(document).ready(function(){

    $(".tabMenu1>dt").click(function(){
        $(".tabMenu1>dt").removeClass("on")
        $(this).addClass("on")

        // index()함수 를 사용하여 선택한 태그가 부모태그기준 몇 번째 자식태그인지를 숫자형태로 리턴할 수 있다
        let idx = $(this).index()
        // alert(idx)

    })

    $(".tabMenu2>dt").click(function(){
        $(".tabMenu2>dt").removeClass("active")
        $(this).addClass("active")
    })

})