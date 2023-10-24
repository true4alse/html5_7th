// 문서를 끝까지 읽고 난 뒤 한번 실행되는 소스코드
$(document).ready(function(){

    let btnNext = $(".btn_next")
    let btnPrev = $(".btn_prev")
    let train = $(".train")
    let trainLength = $(".train").children().length
    train.css("width",(trainLength*100)+"%")
    let count = 0
    let pageUL = $(".pagination")
    let pageLI = pageUL.children()
    
    btnNext.click(function(){
        count++
        if(count>3){count=3}
        // 기차가움직이는 코드
        train.css("transform","translateX("+(-25*count)+"%)")
        pageLI.removeClass("on")
        pageLI.eq(count).addClass("on")

    })
    btnPrev.click(function(){
        count--
        if(count<0){count=0}
        train.css("transform","translateX("+(-25*count)+"%)")
        pageLI.removeClass("on")
        pageLI.eq(count).addClass("on")
    })




})