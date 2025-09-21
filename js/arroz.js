document.querySelector('#button1').addEventListener('click', verficar_resposta);

let or = 1

function verficar_resposta () {

let perguntas1 = document.querySelector('input[name="perguntas1"]:checked');

let erro = document.getElementById('mensagemErro');
let erro1= document.getElementById('mersagep');
let resposta = document.querySelector('.reposta')
let puro = document.querySelector('#puro_suco')

if(!perguntas1){

    erro.textContent='selecione alguma opção';
    return;
}

if(or == 1){

if(perguntas1.id == 'pergunta2'){

    erro.style.display="flex"

     erro.textContent ='acertou'

    erro1.style.display='none'

    erro.style.color='black'

    document.querySelector('.reposta').textContent = '';

    setTimeout(proxima_pergunta, 1000)

}

else {

    erro.style.display='none'

    erro1.style.display="flex"

    erro1.textContent='errou'
    
    erro1.style.color='red'

    resposta.textContent= 'A água oxigenada é composta por dois átomos de hidrogênio e dois átomos de oxigênio, daí a fórmula H₂O₂. H₂O é a água comum.'


}

}

if(or == 2){

    if(perguntas1.id == 'pergunta2'){

    erro.style.display="flex"

     erro.textContent ='acertou'

    erro1.style.display='none'

    erro.style.color='black'
   

    setTimeout(proxima_pergunta, 1000)

}

else {

    erro.style.display='none'

    erro1.style.display="flex"

    erro1.textContent='errou'
    
    erro1.style.color='red'

    resposta.textContent= 'explicação'
    }
}

function proxima_pergunta (){

 let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    if(!document.getElementById('proxima_pergunta')){
 
        let proxima = document.createElement('button');
        proxima.id = 'proxima_pergunta';
        proxima.textContent='proximo';
        proxima.style= 'background-color: #2b5285; color: rgba(0, 0, 0, 1); border-style: none; box-shadow: 0 10px 12px rgba(0, 0, 0, 0.2); '
        
        proxima.addEventListener('click', function () {
                
        document.getElementById('mensagemErro').textContent = '';
     document.getElementById('mersagep').textContent = '';
     resposta.textContent= ''


      or++

      if (or == 2){

        puro.innerHTML='Qual é a principal aplicação doméstica mais comum da solução aquosa de H₂O₂ a 3%?'

      }

      if (or == 3){

        puro.innerHTML='ppppppppppppp'

      }

        });

        let opcoesContainer = document.querySelector('.item2');
        opcoesContainer.appendChild(proxima);

    }

}

}


let card = document.querySelector('.card');
let  scene = document.querySelector('.scene');

scene.addEventListener('mousemove', (asd) => {
 let rect = scene.getBoundingClientRect();
  let x = asd.clientX - rect.left;
  let y = asd.clientY - rect.top;
  
  let centerX = rect.width / 2;
  let centerY = rect.height / 2;
  
 let rotateX = ((y - centerY) / centerY) * 10;
  let rotateY = ((x - centerX) / centerX) * 10;

  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

scene.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});