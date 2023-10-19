function slidePage(array,actName,cnt){
    for(let i=0; i<array.length ; i++){
        array[i].classList.remove(actName)
    }
    array[cnt].classList.add(actName)
}

window.onload = function(){
    // 브라우저가 끝까지 html을 해석하고 난 뒤 한번 실행되는 공간

    let btnNext = document.querySelector(".btn_next")
    let btnPrev = document.querySelector(".btn_prev")
    let train = document.querySelector(".train")
    let trainListArray = train.children
    let count = 0
    let page = document.querySelector(".page")
    let pageListArray = page.children
    console.log(pageListArray)

    btnNext.addEventListener("click",function(){
        // 다음버튼을 클릭했을 때 실행되는 소스코드
        // 1. 기차가 이동하는 소스코드
        count++
        if(count >= 6){
            count = 6
            btnNext.classList.add("ghost")
        }else{
            btnNext.classList.remove("ghost")
            btnPrev.classList.remove("ghost")
        }
        train.style.transform = `translateX(-${(100/7)*count}%)`

        // 2. 페이지개수정보 표시기능
        slidePage(pageListArray,"on",count)
        // 3. 리스트안에 flotingbox영역이 보이는 기능
        slidePage(trainListArray,"on",count)

    })

    btnPrev.addEventListener("click",function(){
        // 이전버튼을 클릭했을 때 실행되는 소스코드
        // 1. 기차가 이동하는 소스코드
        count--
        if(count<=0){
            count=0
            btnPrev.classList.add("ghost")
        }else{
            btnNext.classList.remove("ghost")
            btnPrev.classList.remove("ghost")
        }
        train.style.transform = `translateX(-${(100/7)*count}%)`

       // 2. 페이지개수정보 표시기능
       slidePage(pageListArray,"on",count)
       // 3. 리스트안에 flotingbox영역이 보이는 기능
       slidePage(trainListArray,"on",count)

    })

}