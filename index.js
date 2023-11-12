const elementoMovel = document.getElementsByClassName('banner')[0]
const cards = document.getElementsByClassName("home-cards")[0]
const titulopr = document.getElementsByClassName("titulopr")[0]

let var1, var2, var3


  document.body.scrollY = 0;
  document.documentElement.scrollTop = 0;
  window.scrollTo(0, 0);

// Função para mover o elemento



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
        
        //box.style.transform = 'translateY(-2rem)'
        box.style.marginTop = '-4rem'
       

      } else {
        
       
  // Quando o elemento sai da tela
        //box.style.opacity = 0;
        //box.style.transform = 'translateY(2rem)';


      }
    });
  }, options);
  observer.observe(box);
}

