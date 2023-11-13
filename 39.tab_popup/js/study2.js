$(document).ready(function(){

    let tabDescArray = [
        `<h2>title1</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolor officia esse fugit enim, pariatur velit cumque ipsum quidem, ullam distinctio? Soluta saepe ex aspernatur a eaque vitae corporis atque!</p>`,
        `<h2>title2</h2>
        <p>ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolor officia esse fugit enim, pariatur velit cumque ipsum quidem, ullam distinctio? Soluta saepe ex aspernatur a eaque vitae corporis atque!ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolor officia esse fugit enim, pariatur velit cumque ipsum quidem, ullam distinctio? Soluta saepe ex aspernatur a eaque vitae </p>`,
        `<h2>title3</h2>
        <p>ipsum dolor sit amet consectetur, adipisicing elit. Beatae dolor officia esse fugit enim, pariatur ve pariatur velit cumque ipsum quidem, ullam distinctio? Soluta saepe ex aspernatur a eaque vitae </p>`
    ]

    $(".category>li").click(function(){
        $(".category>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()
        $(".des").html(tabDescArray[idx])
    })

})