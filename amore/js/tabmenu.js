function tabmenu(selector,actName){
    let dt = document.querySelectorAll(selector+">dt")
    for(let i=0 ; i<dt.length ; i++){
        dt[i].addEventListener("click",function(){
            //dt태그들을 클릭할 때 동작할 소스코드
            //dt들 전부 on클래스를 지움
            for(let j=0 ; j<dt.length ; j++){
                dt[j].classList.remove(actName)
            }
            //클릭한 dt태그한테만 on클래스를 추가
            this.classList.add(actName)
            // this는 클릭하는 맥락 안에서 이벤트가 전달된 태그를 this로 표현할 수 있다.
        })
    }
}

function tabmenu2(option){
    let dt = document.querySelectorAll(option.selector+">dt")
    for(let i=0 ; i<dt.length ; i++){
        dt[i].addEventListener("click",function(){
            //dt태그들을 클릭할 때 동작할 소스코드
            //dt들 전부 on클래스를 지움
            for(let j=0 ; j<dt.length ; j++){
                dt[j].classList.remove(option.activeName)
            }
            //클릭한 dt태그한테만 on클래스를 추가
            this.classList.add(option.activeName)
            // this는 클릭하는 맥락 안에서 이벤트가 전달된 태그를 this로 표현할 수 있다.
        })
    }
}

