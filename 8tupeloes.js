
const eleccion = localStorage.getItem("porosidad");
if (eleccion == "porosidad baja"){
    document.getElementById('titulo1').innerHTML = "Tu pelo esde BAJA POROSIDAD"
    document.getElementById('subtitulo1').innerHTML = "Esto quiere decir, que no absorbe fácilmente los productos, sobre"
    document.getElementById('subtitulo2').innerHTML = "todo los que contienen proteínas."
}
else if(eleccion == "porosidad media"){
    document.getElementById('titulo1').innerHTML = "Tu pelo esde POROSIDAD MEDIA"
    document.getElementById('subtitulo1').innerHTML = "Esto quiere decir, que absorbe bien los productos, pero pierde sus"
    document.getElementById('subtitulo2').innerHTML = "nutrientes con facilidad."

}
else if(eleccion == "porosidad alta"){
    document.getElementById('titulo1').innerHTML = "Tu pelo es de ALTA POROSIDAD"
    document.getElementById('subtitulo1').innerHTML = "Esto quiere decir, que tu pelo absorbe muy bien todos los productos,"
    document.getElementById('subtitulo2').innerHTML = "pero se deshidrata con mucha facilidad."

}