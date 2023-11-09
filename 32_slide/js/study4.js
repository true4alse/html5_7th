$(document).ready(function(){

    $(window).resize(function(){
        let devWidth = $(window).width()
        // console.log(devWidth,"화면너비가 바뀌었군.")
        if(devWidth>1024){
            views = 3
            $(".train").css("width",(100*slides/views)+"%")
        }else if(devWidth>768){
            views = 2
            $(".train").css("width",(100*slides/views)+"%")
        }else{
            views = 1
            $(".train").css("width",(100*slides/views)+"%")
        }
    })

    let deviceWidth = $(window).width()
    let slides = $(".train>li").length
    let views = deviceWidth>1024?3:deviceWidth>768?2:1
    $(".train").css("width",(100*slides/views)+"%")

    let count = 0;
    $(".btnNext").click(function(){
        count++
        if(count>slides-1-(views-1)){
            count=slides-1-(views-1)
        }
        $(".train").css("transform",`translateX(${-(100/slides)*count}%)`)
    })

    $(".btnPrev").click(function(){
        count--
        if(count<0){
            count=0
        }
        $(".train").css("transform",`translateX(${-(100/slides)*count}%)`)
    })


})
