const fotos = document.querySelectorAll(".hobbies");
let foto = 0;
console.log(fotos)
setInterval(() =>{
    switch(foto)
    {
        case 0:
            fotos[0].style.opacity = "100%";
            fotos[1].style.opacity = "0";
            fotos[2].style.opacity = "0";
            break;

        case 1:
            fotos[0].style.opacity = "0";
            fotos[1].style.opacity = "100%";
            fotos[2].style.opacity = "0";
            break;

        case 2:
            fotos[0].style.opacity = "0";
            fotos[1].style.opacity = "0";
            fotos[2].style.opacity = "100%";
            break;
    }

    foto = foto < 2 ? foto + 1 : 0;
}, 5000);
