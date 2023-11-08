$(function(){

    let pathLength = $(".intropath").get(0).getTotalLength()
    $(".intropath").css("stroke-dasharray",pathLength)
    $(".intropath").css("stroke-dashoffset",pathLength)
    setTimeout(function(){
        $(".intropath").css("transition","all 4s ease 0s")
    },500)


    setTimeout(function(){
        $(".intro").addClass("on")
    },1000)



})