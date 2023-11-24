$(function(){

    

    setInterval(function(){
        let today = new Date()
        let hours = today.getHours()
        let minutes = today.getMinutes()
        let seconds = today.getSeconds()
        $(".hour").html(hours)
        $(".min").html(minutes<10?"0"+minutes:minutes)
        $(".sec").html(seconds<10?"0"+seconds:seconds)
    },1000)

    
    

    


})