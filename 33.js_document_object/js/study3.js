window.onload = function(){

    let title = document.querySelector("#title")
    title.style.color = "red"
    // console.log(title.children)

    let ulTag = document.querySelector(".list")
    let lists = ulTag.children // 선택한태그의 자식태그들이 [자식,자식,자식] 배열형태로 남겨짐
    lists[0].style.color = "blue"

    let box = title.parentElement // 선택한태그의 부모태그가 남겨짐
    box.style.border = "1px solid red"

    lists[1].nextElementSibling.style.color = "red"
    lists[1].previousElementSibling.style.color = "orange"


}


