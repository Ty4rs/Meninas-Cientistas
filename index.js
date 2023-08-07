// Captura o elemento que será movido
const elementoMovel = document.getElementsByClassName('banner')[0];
var novaPosicao, scrollTop

let var1

// Função para mover o elemento
function moverElemento() {
    // Obtém a posição vertical atual do scroll
    scrollTop = window.scrollY;

    // Define a nova posição vertical do elemento
   novaPosicao -= scrollTop ; // Pode ajustar o valor conforme desejado
     var1 =- (window.scrollY/ (window.scrollY + 70) * 10)
    // Aplica a nova posição ao elemento
    document.getElementsByClassName('banner')[0].style.top =    var1 + "rem"
    console.log(document.getElementsByClassName('banner')[0].style.top)
    console.log(var1)
}



// Adiciona o evento de scroll à página
window.addEventListener('scroll', moverElemento);
