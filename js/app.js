let listaAmigosIncluidos = [];
let listaSorteio = [];
let amigosIncluidos = document.getElementById('lista-amigos');

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo');

    if (nomeAmigo.value == ''){
        alert('Favor digitar um nome');
        return;
    } else if (listaAmigosIncluidos.includes(nomeAmigo.value)){
        alert('Nome já incluso!');
        return;
    }

    listaAmigosIncluidos.push(nomeAmigo.value);
    amigosIncluidos.textContent = listaAmigosIncluidos;
    
    nomeAmigo.value = '';
}

function sortear(){
    let sorteio = document.getElementById('lista-sorteio');
    embaralharLista(listaAmigosIncluidos);

    sorteio.innerHTML = '';

    for (k = 0; k < listaAmigosIncluidos.length; k++){
        if (k == listaAmigosIncluidos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + listaAmigosIncluidos[k] + ' --> ' + listaAmigosIncluidos[0] + '<br>';
         } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigosIncluidos[k] + ' --> ' + listaAmigosIncluidos[k + 1] + '<br>';
        }
    }
}

// Embaralhamento Fisher-Yates
function embaralharLista(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function reiniciar(){
    listaAmigosIncluidos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
  }