// 숫자데이터가 입력
function getAver1(sub1,sub2,sub3){
    return (sub1+sub2+sub3)/3
}

// 배열데이터가 입력된다는 것을 염두에두고 만든 함수
function getAver2(score){
    let sum = 0
    for(let i=0 ; i<score.length ; i++){
        sum+=score[i]
    }
    return sum/score.length
}
