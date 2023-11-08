
$(function(){

    // intro 텍스트 애니메이션
    let intro_per = Number($("#intro_per").text())
    
    // 0.01초마다 1씩 증가시킨 값을 200까지 증가시켜서 텍스트내용으로 넣는 기능
    let count = 0
    let timer = setInterval(function(){
        count++
        $("#intro_per").html(count)
        if(count >= intro_per){clearInterval(timer)}
    },10)

    let stateSkill = false
    function skillRotate(){
        // 스킬 텍스트 애니메이션
        $(".skill_list>li").each(function(){
            let per = Number($(this).find(".skillPer").text())
            let count = 0
            let thisList = $(this)

            // svg원이 퍼센트대로 그려지는 소스코드
            let pathLength = thisList.find("circle").get(0).getTotalLength()
            thisList.find("circle").css("stroke-dasharray",pathLength)
            thisList.find("circle").css("stroke-dashoffset",pathLength)

            let timer = setInterval(function(){
                count++
                thisList.find(".skillPer").html(count)
                thisList.find("circle").css("stroke-dashoffset",pathLength-(pathLength*count/100))
                if(count>=per){
                    clearInterval(timer)
                }
            },10)
        })
        return true
    }
    

    $(window).scroll(function(){
        let sct = $(window).scrollTop()
        let devHeight = $(window).height()
        let skillTop = $(".skill_list").offset().top
        console.log(sct,skillTop,devHeight)

        if(sct+devHeight*0.5>skillTop){
            if(stateSkill == false){
                stateSkill = skillRotate()
            }
        }
    })

    

})