$(function(){
    // new Scrooth({
    //     strength:20
    // })
    let sct = 0
    $(window).scroll(function(){
        sct = $(window).scrollTop()
        let rDeg = sct/10 //회전각
        let introY = sct/7 //이동거리
        let opc = sct/1000 //투명도
        let bDis = sct / 5 // b태그들 이동거리


        // $(".title").css("transform","rotate("+rDeg+"deg)")
        $(".title>b").eq(0).css("transform",`translate(${-1*bDis}px,${-1*bDis}px)`)
        $(".title>b").eq(1).css("transform",`translate(${-1*bDis}px,${-2*bDis}px)`)
        $(".title>b").eq(2).css("transform",`translate(${-1*bDis}px,${-3*bDis}px)`)
        $(".title>b").eq(3).css("transform",`translate(${-1*bDis}px,${-4*bDis}px)`)
        $(".title>b").eq(4).css("transform",`translate(${-1*bDis}px,${-5*bDis}px)`)
        $(".title>b").eq(5).css("transform",`translate(${-3*bDis}px,${-0*bDis}px)`)
        $(".title>b").eq(6).css("transform",`translate(${-3*bDis}px,${1*bDis}px)`)
        $(".title>b").eq(7).css("transform",`translate(${-3*bDis}px,${2*bDis}px)`)
        $(".title>b").eq(8).css("transform",`translate(${-3*bDis}px,${3*bDis}px)`)
        $(".title>b").eq(9).css("transform",`translate(${-3*bDis}px,${4*bDis}px)`)
        

        $(".introTxt").css("transform",`translate(0%,${introY}%)`)
        $(".introTxt").css("opacity",1-opc)
    })

    $(window).scroll(function(){
        sct = $(window).scrollTop()
        let scrollBoxTop = $(".scrollBox").offset().top
        let distance = sct - scrollBoxTop
        let scrollBoxHeight = $(".scrollBox").height()
        let elvHeight = $(".elv").height()
        let aniEnd = scrollBoxHeight - elvHeight
        let per = distance/aniEnd*100
        let perTrain = per*1
        
        let num = perTrain/20
        let idx = Math.floor(num)
        let sPer = num-idx

        if(distance<0){
            console.log("도달하지못함")
            $(".elv").removeClass("fixed")
            $(".elv").removeClass("bottom")
        }
        if(distance>=0 && distance<aniEnd){
            console.log("중간지점 안에 있는 상태")
            $(".elv").removeClass("bottom")
            $(".elv").addClass("fixed")
            $(".curPer").html(per+"%")
            $(".curPer").css("width",per+"%")
            $(".train").css("transform",`translateX(-${perTrain}%)`)

            $(".progress").html(`현재 ${idx}번째 슬라이드가 ${sPer}%진행중입니다.`)
            $(".train>li").eq(idx).children("b").css("opacity",1-sPer);
            $(".train>li").eq(idx).children("b").css("transform",`scale(${2-sPer})`);

            // 뒷배경 svg 진행도에 따라서 그려지는 소스
            $(".svg_percent .txt").css("stroke-dashoffset",pathLength-(pathLength*per/100))
        }
        if(distance>=aniEnd){
            console.log("벗어난상태임")
            $(".elv").removeClass("fixed")
            $(".elv").addClass("bottom")
        }

    })

    let pathLength = $(".svg_percent .txt").get(0).getTotalLength()
    $(".svg_percent .txt").css("stroke-dasharray",pathLength)
    $(".svg_percent .txt").css("stroke-dashoffset",pathLength)

    
})