// Captura o elemento que será movido
const elementoMovel = document.getElementsByClassName('banner')[0]
const cards = document.getElementsByClassName("home-cards")[0]
const titulopr = document.getElementsByClassName("titulopr")[0]

let var1, var2, var3

// Função para mover o elemento
function moverElemento() {
    // Obtém a posição vertical atual do scroll
    var scrollTop = window.scrollY;

    // Define a nova posição vertical do elemento
  //var novaPosicao = scrollTop ; // Pode ajustar o valor conforme desejado
     var1 =- (window.scrollY/ (window.scrollY + 220) * 14)
     var2 =- (window.scrollY/ (window.scrollY + 240) * 30)
     if(var3 > -200){
      var3 =- ((window.scrollY/ (window.scrollY - 500) ) )
      window.alert("Oi")
     }
     console.log("var3" + var3)
     

    // Aplica a nova posição ao elemento
    document.getElementsByClassName('banner')[0].style.top =    (var1 - 1.2) + "rem"
    document.getElementsByClassName("home-cards")[0].style.top =    var2 + "rem"
    document.getElementsByClassName("titulopr")[0].style.top =    var3 + "rem"
    console.log(document.getElementsByClassName('banner')[0].style.top)
    console.log(var1)



}



// Adiciona o evento de scroll à página
window.addEventListener('scroll', moverElemento);


const box = document.querySelector('.box');

const options = {
  
 
threshold: 0.2, // Defina o quanto do elemento precisa estar visível para disparar a animação
};




for (let index = 0; index < document.getElementsByClassName('box').length; index++) {
  let box = document.getElementsByClassName('box')[index]
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
       
  // Quando o elemento entra na tela
        //box.style.opacity = 1;
        
       
        box.style.marginTop = "-4rem"

      } else {
        
       
  // Quando o elemento sai da tela
        //box.style.opacity = 0;
        //box.style.transform = 'translateY(+20px)';
        box.style.marginTop = "1rem"

      }
    });
  }, options);
  observer.observe(box);
}

