window.onload = function(){
    //문서를 끝까지 읽은 후 한번 실행되는 구간

    let h1tag = document.querySelector("h1")
    h1tag.style.color = "red"

    let pptag = document.querySelector(".pp")
    pptag.classList.add("on")
    // on이라는 클래스를 추가
    pptag.classList.add("active")
    // active클래스 추가
    pptag.classList.remove("pp")
    // pp클래스 삭제

}

