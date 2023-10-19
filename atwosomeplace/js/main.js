window.onload=function(){

    // 메뉴버튼을 클릭 시 숨겨진 메뉴영역이 보임
    let btnMenu = document.querySelector(".btnMenu")
    let hiddenGnb = document.querySelector(".hiddenGnb")
    btnMenu.addEventListener("click",function(){
        hiddenGnb.classList.add("on")
    })

    // 메뉴닫기버튼 클릭 시 숨겨진 메뉴영역이 닫힘
    let btnCloseMenu = document.querySelector(".btnCloseGnb")
    btnCloseMenu.addEventListener("click",function(){
        hiddenGnb.classList.remove("on")
    })
    

}