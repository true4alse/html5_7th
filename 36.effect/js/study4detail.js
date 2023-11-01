$(document).ready(function(){

    let url = location.href
    let urlArr = url.split("?")
    let idx = urlArr[1].split("=")[1]
    $(".innerWrap").html(`<section>
        <img src="./img/${artwork[idx].imgFileName}" alt="${artwork[idx].title}">
    </section>
    <section>
        <h2>${artwork[idx].title}</h2>
        <p>${artwork[idx].description}</p>
    </section>`)
    

})