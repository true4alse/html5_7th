window.onbeforeunload = function() {
    window.scrollTo(0, 0);
}

$(document).ready(function(){

    setTimeout(function(){
        $(".real_start>h1").text("아직도 스크롤 안했어요?")
    },3000)
    setTimeout(function(){
        $(".real_start>h1").text("내려!!!!!!")
    },4000)
    setTimeout(function(){
        $(".real_start>h1").text("새로고침!!!!!!")
    },5000)

    $(".wrap>section").on("wheel DOMMouseScroll", function(event){
        let E = event.originalEvent
        let delta  = 0
        if(E.detail){
            delta = E.detail * -40
        }
        else{
            delta = E.wheelDelta
        }
        if(delta<0){
            let posTop = $(this).next().offset().top
            $("html,body").stop().animate({scrollTop:posTop},1000)
            $(".wrap>section").removeClass("on")
            $(this).next().addClass("on")
        }
        else{
            let posTop = $(this).prev().offset().top
            $("html,body").stop().animate({scrollTop:posTop},1000)
            $(".wrap>section").removeClass("on")
            $(this).prev().addClass("on")
        }
        return false
    })

    

    $(window).scroll(function(){
        let sct = $(window).scrollTop()
        let start = $(".start").offset().top
        let jiyeon = $(".jiyeon").offset().top
        let hyeri = $(".hyeri").offset().top
        let jiyeong = $(".jiyeong").offset().top
        let haeun = $(".haeun").offset().top
        let hyunsu = $(".hyunsu").offset().top
        let sieun = $(".sieun").offset().top
        let minjae = $(".minjae").offset().top
        let yeonghwan = $(".yeonghwan").offset().top
        let donghyun = $(".donghyun").offset().top
        let ending = $(".ending").offset().top

        if(sct>=start){
            $(".start>p").css("opacity","1")
        }
        if(sct>=jiyeon){
            $(".jiyeon>p").css("opacity","1")
        }
        if(sct>=hyeri){
            $(".hyeri>p").css("opacity","1")
        }
        if(sct>=jiyeong){
            $(".jiyeong>p").css("opacity","1")
        }
        if(sct>=haeun){
            $(".haeun>p").css("opacity","1")
        }
        if(sct>=hyunsu){
            $(".hyunsu>p").css("opacity","1")
        }
        if(sct>=sieun){
            $(".sieun>p").css("opacity","1")
        }
        if(sct>=minjae){
            $(".minjae>p").css("opacity","1")
        }
        if(sct>=yeonghwan){
            $(".yeonghwan>p").css("opacity","1")
        }
        if(sct>=donghyun){
            $(".donghyun>p").css("opacity","1")
            setTimeout(function(){
                $(".donghyun>img").css("top","1000px")
                $(".donghyun>img").css("left","2500px")
                $(".donghyun>img").css("transform","rotate(180deg)")
            },2000)
            setTimeout(function(){
                $(".donghyun>img").css("transform","rotate(360deg)")
                $(".donghyun>img").css("top","-500px")
                $(".donghyun>img").css("left","1000px")
            },3000)
            setTimeout(function(){
                $(".donghyun>img").css("transform","rotate(540deg)")
                $(".donghyun>img").css("top","1000px")
                $(".donghyun>img").css("left","1000px")
            },4000)
            setTimeout(function(){
                $(".donghyun>img").css("transform","rotate(720deg)")
                $(".donghyun>img").css("top","0px")
                $(".donghyun>img").css("left","-500px")
            },5000)
        }
        if(sct>=ending){
            $(".ending>h1").css("opacity","0")
            setTimeout(function(){
                $(".ending>h1").text("아직 끝이 아닙니다!!")
            },600)
            setTimeout(function(){
                $(".ending>h1").text("춘식이가 없어서 심심하셨다구요?")
            },1600)
            setTimeout(function(){
                $(".ending>h1").text("그래서 준비했습니다!!")
            },2800)
            setTimeout(function(){
                $(".ending>h1").text("두구두구")
            },3500)
            setTimeout(function(){
                $(".ending>h1").text("두구두구두구")
            },4000)
            setTimeout(function(){
                $(".ending>h1").text("두구두구두구두구")
            },4500)
        }
    })

    let popLi = $(".popup_images>li")
    let modal = $(".modal")
    let control =  $(".control")
    let btnNext = $(".btn_next")
    let btnPrev = $(".btn_prev")

    $(".images>li>img").click(function(){
        let idx = $(this).parent().index()
        popLi.eq(idx).addClass("pop")
        modal.addClass("pop")
        control.addClass("pop")

    })
    $(".close").click(function(){
        modal.removeClass("pop")
        popLi.removeClass("pop")
        control.removeClass("pop")
        $(".last_popup").removeClass("pop")
    })

    
    btnNext.click(function(e){
        e.preventDefault()
        let idx = $(".popup_images>li.pop").index()
        $(".popup_images>li.pop").removeClass("pop")
        popLi.eq(idx).next().addClass("pop")
        if(idx>=12){
            popLi.eq(12).addClass("pop")
        }
    })
    btnPrev.click(function(e){
        e.preventDefault()
        let idx = $(".popup_images>li.pop").index()
        $(".popup_images>li.pop").removeClass("pop")
        popLi.eq(idx).prev().addClass("pop")
        if(idx<=0){
            popLi.eq(0).addClass("pop")
        }
    })

    $(".last").click(function(){
        $(".last_popup").addClass("pop")
        modal.addClass("pop")
    })


    
})