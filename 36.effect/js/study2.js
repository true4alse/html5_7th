// alert("text".length)

function textAnimation(selector,option){
    let txt = $(selector).text()
    let result = ""
    for(let i=0 ; i<txt.length ; i++){
        result+="<i style='animation:"+(option.aniName)+" 1s ease "+(i*option.delay)+"s forwards;opacity:0;display:inline-block'>"+txt[i]+"</i>"
    }
    console.log(result)
    $(selector).html(result)
}

$(document).ready(function(){

    textAnimation(".text>h1>b",{
        delay:0.5,
        aniName:"slideLtoR"
    })
    textAnimation(".text>h1>span",{
        delay:0.1,
        aniName:"fadeIn"
    })
    textAnimation(".pp",{
        delay:0.01,
        aniName:"slideBtoT"
    })

    $(".buttonChar").click(function(){
        textAnimation(".tit1",{
            delay:0.01,
            aniName:"slideBtoT"
        })
        textAnimation(".par1",{
            delay:0.01,
            aniName:"scaleUtoD"
        })


    })
    


})