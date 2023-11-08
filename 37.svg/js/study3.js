$(function(){

    // let pathL = $(".intro1path").get(0).getTotalLength()
    // $(".intro1path").css("stroke-dasharray",pathL)
    // $(".intro1path").css("stroke-dashoffset",pathL)

    $(".intro path").each(function(i){
        // 각각의 path태그들에 대하여 실행될 동작
        // let idx = $(this).index()
        console.log(i)
        let delay = i * 0.6

        let thispath = $(this)
        let pathL = $(this).get(0).getTotalLength()
        $(this).css("stroke-dasharray",pathL)
        $(this).css("stroke-dashoffset",pathL)

        setTimeout(function(){
            thispath.css("transition",`stroke-dashoffset 1s ease ${delay}s,fill 1s ease ${1+delay}s`)
        },500)
    })

    setTimeout(function(){
        $(".intro").addClass("on")
    },1000)
    



})
