function writeTable(name,ko,en,ma,aver){
    document.write(`
        <table class="grade">
        <caption>${name}님의 성적표</caption>
        <tr>
            <th>국어</th>
            <td>${ko}점</td>
        </tr>
        <tr>
            <th>영어</th>
            <td>${en}점</td>
        </tr>
        <tr>
            <th>수학</th>
            <td>${ma}점</td>
        </tr>
        <tr>
            <th>합계</th>
            <td>${ko+en+ma}점</td>
        </tr>
        <tr>
            <th>평균</th>
            <td>${aver}점</td>
        </tr>
    </table>
    `)
}