function writeTableOfScore(){
    let userName = prompt("이름을 말해라")
    let scoreKo = Number(prompt("국어점수 말해라"))
    let scoreEn = Number(prompt("영어점수 말해라"))
    let scoreMa = Number(prompt("수학점수 말해라"))
    let scoreAver = (scoreKo+scoreEn+scoreMa)/3
    document.write(`
        <table class="grade">
        <caption>${userName}님의 성적표</caption>
        <tr>
            <th>국어</th>
            <td>${scoreKo}점</td>
        </tr>
        <tr>
            <th>영어</th>
            <td>${scoreEn}점</td>
        </tr>
        <tr>
            <th>수학</th>
            <td>${scoreMa}점</td>
        </tr>
        <tr>
            <th>합계</th>
            <td>${scoreKo+scoreEn+scoreMa}점</td>
        </tr>
        <tr>
            <th>평균</th>
            <td>${scoreAver}점</td>
        </tr>
    </table>
    `)
    }