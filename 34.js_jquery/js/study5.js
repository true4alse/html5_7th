$(document).ready(function(){

    // let coords = $(".box4").offset().top
    // console.log(coords)

    let scTop = 0
    $(window).scroll(function(){
        scTop = $(this).scrollTop()
        console.log(scTop)
        $("body>div").each(function(){
            // 각각의 영역태그가 전체문서를 기준으로 했을 때 위에서 얼마만큼 떨어져있는지 계산하고 그리고 스크롤바가 위에서 얼만큼 떨어져 내려왔는지 계산하여 스크롤바값이 태그의 위에서 얼만큼 떨어져있는지 계산한 값보다 크다면 -> 지나쳤다라는 뜻

            if(scTop >= $(this).offset().top){
                $(this).addClass("on")
            }else{
                $(this).removeClass("on")
            }
        })



    })

})