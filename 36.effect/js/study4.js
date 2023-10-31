$(document).ready(function(){

    let result = ""
    for(let i=0 ; i<artwork.length ; i++){
        result += `<li>
        <img src="./img/${artwork[i].imgFileName}" alt="${artwork[i].title}">
        <h2 class="title">${artwork[i].title}</h2>
        <p>${artwork[i].description}</p>
        <span class="btnClose">close</span>
    </li>`
    }
    $(".train").html(result)

    
    

    
})