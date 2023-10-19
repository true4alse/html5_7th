function moveSlideFade(array,cnt){
    for(let i=0 ; i<array.length ; i++){
        array[i].classList.remove("on")
    }
    array[cnt].classList.add("on")
}

window.onload = function(){

    let prevBtn = document.querySelector(".btn_prev")
    let nextBtn = document.querySelector(".btn_next")
    let train = document.querySelector(".train")
    let trainLiArray = train.children
    let pageArray = document.querySelectorAll(".pagination>li")
    let count = 0

    nextBtn.addEventListener("click",function(){
        count++
        if(count>3){count=3}
        moveSlideFade(trainLiArray,count)
        moveSlideFade(pageArray,count)
    })

    prevBtn.addEventListener("click",function(){
        count--
        if(count<0){count=0}
        moveSlideFade(trainLiArray,count)
        moveSlideFade(pageArray,count)
    })

   


}