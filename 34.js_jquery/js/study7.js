$(document).ready(function(){
    
    $(".box1").animate({height:400},1000)
    $(".box1").stop()
    $(".box1").animate({width:400},1000)
    $(".box1").animate({marginLeft:200},1000)
    
    
    $(".box2").animate({width:500},1000)
    $(".box2").animate({height:400},1000)
    $(".box2").animate({marginTop:200},1000)
    $(".box2").clearQueue()

    
    
})