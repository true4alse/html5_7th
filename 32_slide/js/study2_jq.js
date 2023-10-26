$(document).ready(function(){

    let count = 0
    $(".btn_next").click(function(){
        count++
        if(count>3){count=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    })
    $(".btn_prev").click(function(){
        count--
        if(count<0){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    })

    let timer = setInterval(function(){
        count++
        if(count>3){count=0}
        // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
        // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        $(".pagination>li").removeClass("on")
        $(".pagination>li").eq(count).addClass("on")
    },2000)

    $(".station").mouseover(function(){
        clearInterval(timer)
    })

    $(".station").mouseout(function(){
        timer = setInterval(function(){
            count++
            if(count>3){count=0}
            // 기차칸 li태그가 전부 선택되서 on클래스가 지워지고
            // 순번에 맞는 기차칸 li태그만 on클래스가 추가가 되면 됨
            $(".train>li").removeClass("on")
            $(".train>li").eq(count).addClass("on")
            $(".pagination>li").removeClass("on")
            $(".pagination>li").eq(count).addClass("on")
        },2000)
    })

})

