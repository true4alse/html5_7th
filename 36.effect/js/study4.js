$(document).ready(function(){

    let result = ""
    for(let i=0 ; i<artwork.length ; i++){
        result += `<li>
                        <img src="./img/${artwork[i].imgFileName}" alt="${artwork[i].title}">
                        <h2 class="title">${artwork[i].title}</h2>
                        <p>${artwork[i].description}</p>
                        <span class="btnClose">close</span>
                        <a class="btnLink" href="./study4detail.html?gid=${i}">detail more</a>
                    </li>`
    }
    $(".train").html(result)


    let countWheel = 0
    $(".station").on("wheel DOMMouseScroll",function(event){
        // event 사용자의 행동정보를 담고있는 객체
        let E = event.originalEvent
        let delta = 0
        if(E.detail){
            //파폭 
            delta = E.detail * -40
        }else{
            //크롬,익스..
            delta = E.wheelDelta
        }

        if(delta<0){
            // 휠을 아래로 굴렸다
            countWheel++
            if(countWheel>15){countWheel=15}
        }else{
            // 휠을 위로 굴렸다
            countWheel--
            if(countWheel<0){countWheel=0}
        }
        $(".train").css("transform",`translateX(${-200*countWheel}px)`)
        return false

    })

    $(".pagination>li").click(function(){
        // 각각의 클릭한 번호만큼 기차가 이동되도록 소스코드를 완성해보시오.
        let idx = $(this).index()
        $(".train").css("transform",`translateX(${-200*idx*5}px)`)
        countWheel = idx*5
    })

    $(".train>li").click(function(){
        $(".train>li").removeClass("on")
        $(this).addClass("on")

        // 클릭한 리스트의 순번만큼 기차가 이동될 수 있도록
        let idx = $(this).index()
        $(".train").css("transform",`translateX(${-200*idx}px)`)
        countWheel = idx
    })

    $(".btnClose").click(function(){
        $(".train>li").removeClass("on")
        return false
        // 이벤트 버블링을 막기위해서 return false를 사용
        // 이벤트 버블링 - 클릭한 태그의 상위 태그들에게 순차적으로 클릭한 이벤트효과가 전달되는 특징
    })

    $(document).mousemove(function(event){
        let x=event.clientX
        let y=event.clientY
        console.log(x,y)
        $(".mouse").css("left",x+20)
        $(".mouse").css("top",y+20)
    })
    
    let state = false

    $(".station").mouseover(function(){
        if(state==false){
            $(".mouse").addClass("scroll")
            state=true
        }
    })

    $(".station").mouseout(function(){
        if(state==true){
            $(".mouse").removeClass("scroll")
            state=false
        }
    })





    

    
})