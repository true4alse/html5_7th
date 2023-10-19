window.onload = function(){

    let btnNext = document.querySelector(".btn_next")
    let train = document.querySelector(".train")
    let trainLength = train.children.length; // 6
    train.style.width = trainLength*100+"%"
    let count = 0
    let pageUL = document.querySelector(".pagination")
    let pageLI = pageUL.children

    function slideMove(trn,cnt){
        trn.style.transform = "translateX("+(-(100/trn.children.length)*cnt)+"%)"
    }

    btnNext.addEventListener("click",function(){
        count++
        if(count>trainLength-1){count=0}
        // 기차가 이동하는 소스
        // train.style.transform = "translateX("+(-25*count)+"%)"
        slideMove(train,count)

        // pagination이 움직이는 소스
        // 모든 li태그들이 on클래스가 다 지워지고
        // 현재보이고있는 슬라이드의 순번에 맞는 li태그한테 on클래스가 들어가야함
        // pageLI[0].classList.remove("on")
        // pageLI[1].classList.remove("on")
        // pageLI[2].classList.remove("on")
        // pageLI[3].classList.remove("on")
        for(let i=0 ; i<trainLength ;i++){
            pageLI[i].classList.remove("on")
        }
        pageLI[count].classList.add("on")
    })

    // 이전버튼을 눌렀을 때 기능
    let btnPrev = document.querySelector(".btn_prev")
    btnPrev.addEventListener("click",function(){
        count--
        if(count<0){count=trainLength-1}
        slideMove(train,count)

        for(let i=0 ; i<trainLength ;i++){
            pageLI[i].classList.remove("on")
        }
        pageLI[count].classList.add("on")

    })


}