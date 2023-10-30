$(document).ready(function(){

    // 마우스를 움직일 때마다 실행되는 소스코드
    $(document).mousemove(function(e){
        let dx = e.pageX
        let dy = e.pageY
        $(".coords_x").html(dx)
        $(".coords_y").html(dy)

        let cx = e.clientX
        let cy = e.clientY
        $(".coords_x2").html(cx)
        $(".coords_y2").html(cy)

        $(".mouse").css("left",cx)
        $(".mouse").css("top",cy)

    })

    $(".box").mouseover(function(){
        $(".mouse").addClass("on")
    })

    $(".box").mouseout(function(){
        $(".mouse").removeClass("on")
    })
    

})