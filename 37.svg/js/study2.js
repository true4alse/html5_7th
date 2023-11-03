$(document).ready(function(){

    let pathLength = $(".a").get(0).getTotalLength()
    // getTotalLength()메서드는 자바스크립트 메서드이기 때문에 앞에 선택한 태그가 자바스크립트 문서객체여야만 사용할 수 있다.
    $(".a").css("stroke-dasharray",pathLength)
    $(".a").css("stroke-dashoffset",pathLength)

    let my1length = $(".my1").get(0).getTotalLength()
    $(".my1").css("stroke-dasharray",my1length)
    $(".my1").css("stroke-dashoffset",my1length)

})