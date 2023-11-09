$(function(){

    new Scrooth({
        strength:20,
        acceleration:2,
    })

    let pathLength = $("#curvedLine").get(0).getTotalLength()
    $(window).scroll(function(){
        let sct = $(window).scrollTop()
        $("#txtPath").attr("startOffset",sct)
    })


})