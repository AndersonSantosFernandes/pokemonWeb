function back() {
    var corpo = document.getElementById("corpo")
    let fundo = Number.parseInt(Math.random() * 4 + 1)

    if (fundo == 1) {
        corpo.style.backgroundImage = "url(images/pokemons.jfif)"
    } else if (fundo == 2) {
        corpo.style.backgroundImage = "url(images/pokemons2.webp)"
    } else if (fundo == 3) {
        corpo.style.backgroundImage = "url(images/comPokebola.jpg)"
    } else if (fundo == 4) {
        corpo.style.backgroundImage = "url(images/pokemon-unite.jpg)"
    }


}
function cabecalhoGeral() {

    var cabGeral = document.getElementById("cabecalho")
    var leftBarr = document.getElementById("leftBar")

    cabGeral.innerHTML =
        `
<!-- div poke é a pokebola que fica passando da esquerda para direita -->
<div id="poke"></div>

<a href="index.html"><button class="btnMenu">HOME</button></a>
<a href="pagina2.html"><button class="btnMenu">Página 2 </button></a>
<a href="pagina3.html"><button class="btnMenu">Página 3 </button></a>
<a href="pagina4.html"><button class="btnMenu">Página 4 </button></a>
<a href="pagina5.html"><button class="btnMenu">Página 5 </button></a>
<a href="pagina6.html"><button class="btnMenu">Página 6 </button></a>

`
//     leftBarr.innerHTML =
//         `
// <div class="iconesLeft">

//         </div>
//         <div class="iconesLeft">
            
//         </div>
//         <div class="iconesLeft">
            
//         </div>
//         <div class="iconesLeft">
            
//         </div>
//         <div class="iconesLeft">
            
//         </div>
//         <div class="iconesLeft">
            
//         </div>

// `


}