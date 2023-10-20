$(document).ready(function(){

    let bb = document.querySelector("#bb") 
    let jqbb = $("#bb")
    // bb.css("color","blue") 
    // bb변수에는 자바스크립트 문서객체가 저장되어있기 때문에 제이쿼리문서객체의 메서드인 css()함수를 사용할 수 없음 
    $(bb).css("color","red")

    jqbb.get(0).style.color="blue"
    // jqbb변수에는 제이쿼리문서객체가 있다 그런데 get(0)메서드를 실행하여 그 자리에는 자바스크립트 문서객체로 전환되어 남겨졌다.
    $($(bb).get(0)).get(0).style.textDecoration="underline"

    let naverlink = $(".naverlink")
    naverlink.attr("href","http://www.naver.com")
    naverlink.attr("target","_blank")
    let txt = naverlink.attr("title")
    // alert(txt)

    let naverlink2 = document.querySelector(".naverlink")
    naverlink2.setAttribute("href","http://www.daum.net")
    let txt2 = naverlink2.getAttribute("title")
    // alert($(naverlink2).attr("href"))


    let txt3 = $(".abox").text()
    $(".textFrame").html("<h3>오늘은 금요일 "+txt3+"</h3>")

    $(".enom").prev().css("color","red")
    $(".enom").next().css("color","blue")
    $(".enom").parent().css("border","1px solid red")
    $(".mom").children().css("font-style","italic")
    $(".mom").children().eq(2).css("background","yellow")
    $(".mom>li").eq(0).css("font-size","1.4rem")
    $(".mom>li:nth-of-type(2)").css("text-decoration","underline")

    let lists = document.querySelector(".mom").children
    lists[3].style.backgroundColor = "salmon"

    $(".des").addClass("on")
    $(".des").removeClass("on")

})
