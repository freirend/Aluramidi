function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === "audio"){
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou não compativel')
    }
        
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (contador = 0; contador < listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    const rodasom = `#som_${instrumento}`;

    teclas.onclick = function(){
        tocaSom(rodasom);
    }

    teclas.onkeydown = function(evento){
        if (evento.code === "Space" || evento.code === "Enter")
            teclas.classList.add('ativa');
    }

    teclas.onkeyup = function(){
        teclas.classList.remove('ativa')
    }
}
