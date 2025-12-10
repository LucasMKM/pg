// ==================== CÓDIGO PARA INFORMAÇÕES DO CEP ====================//

document.querySelector("#cep").addEventListener('click', removerc);
document.querySelector('#enviar_cep').addEventListener('click', enviarc);

let contadorc = -1;

function removerc() {
  if (contadorc < 0) {
    contadorc++;
    document.querySelector("#cep").value = "";
  }
}

async function enviarc() {
  document.querySelector('#ceprespostac').innerHTML = '';
   
  try {
    if (Number.isInteger(parseInt(document.querySelector("#cep").value))) {
    } else {
      document.querySelector('#ceprespostac').innerHTML = '⚠️ Apenas números';
      return;
    }

    let api = `https://brasilapi.com.br/api/cep/v1/${document.querySelector("#cep").value}`;

    if (document.querySelector("#cep").value.length != 8) {
      document.querySelector('#ceprespostac').innerHTML = "⚠️ Coloque exatamente 8 números";
      return;
    }

    let as = await fetch(api);
    let pok = await as.json();
    let asd = Object.keys(pok);

    asd.forEach(element => {
      document.querySelector('#ceprespostac').innerHTML += `<strong>${element}:</strong> ${pok[element]}<br>`;
    });

  } catch(erro) {
    document.querySelector('#ceprespostac').innerHTML = '❌ CEP inválido, digite novamente';
  }
}

// ==================== CÓDIGO DE DDD ====================

document.querySelector("#dd").addEventListener('click', removerd);
document.querySelector('#enviar_ddd').addEventListener('click', enviard);

let contadord = -1;

function removerd() {
  if (contadord < 0) {
    contadord++;
    document.querySelector("#dd").value = "";
  }
}

async function enviard() {
  document.querySelector('#ceprespostad').innerHTML = '';
   
  try {
    if (Number.isInteger(parseInt(document.querySelector("#dd").value))) {
    } else {
      document.querySelector('#ceprespostad').innerHTML = '⚠️ Apenas números';
      return;
    }

    let api = `https://brasilapi.com.br/api/ddd/v1/${document.querySelector("#dd").value}`;

    if (document.querySelector("#dd").value.length != 2) {
      document.querySelector('#ceprespostad').innerHTML = "⚠️ Coloque exatamente 2 números";
      return;
    }

    let as = await fetch(api);
    let pok = await as.json();
    let asd = Object.keys(pok);

    asd.forEach(element => {
      document.querySelector('#asd').innerHTML += `<p><strong>${element}:</strong> ${pok[element]}</p>`;
    });

  } catch(erro) {
    document.querySelector('#ceprespostad').innerHTML = '❌ DDD inválido, digite novamente';
  }
}

// ==================== CÓDIGO DE FERIADOS ====================

document.querySelector("#feriado").addEventListener('click', removerfe);
document.querySelector('#enviar_ano').addEventListener('click', enviarfe);

let contadora = -1;

function removerfe() {
  if (contadora < 0) {
    contadora++;
    document.querySelector("#feriado").value = "";
  }
}

async function enviarfe() {
  document.querySelector('#ceprespostaa').innerHTML = '';
   
  try {
   
    let ano = document.querySelector("#feriado").value;
    
    if (!Number.isInteger(parseInt(ano))) {
      document.querySelector('#ceprespostaa').innerHTML = '⚠️ Apenas números';
      return;
    }

    let de = new Date();
    if (parseInt(ano) > de.getFullYear()) {
      document.querySelector('#ceprespostaa').innerHTML = "⚠️ Ano inválido, digite novamente";
      return;
    }

    let api = `https://brasilapi.com.br/api/feriados/v1/${ano}`;
    let as = await fetch(api);
    
    if (!as.ok) {
      throw new Error('Ano inválido');
    }
    
    let pok = await as.json();

    pok.forEach(feriado => {
      document.querySelector('#ceprespostaa').innerHTML += `
        <p>🎉 <strong>${feriado.name}</strong> - ${feriado.date}</p>
      `;
    });

  } catch(erro) {
    document.querySelector('#ceprespostaa').innerHTML = '❌ Ano inválido, digite novamente';
  }
}

// ==================== CÓDIGO DE MARCAS ====================


document.querySelector("#carro").addEventListener('click', removerm);
document.querySelector('#enviar_marca').addEventListener('click', enviarm);

let contadorm = -1;

function removerm() {
  if (contadorm < 0) {
    contadorm++;
    document.querySelector("#carro").value = "";
  }
}

async function enviarm() {
  document.querySelector('#ceprespostam').innerHTML = '';
   
  try {
    if (Number.isInteger(parseInt(document.querySelector("#carro").value))) {
    } else {
      document.querySelector('#ceprespostam').innerHTML = '⚠️ Apenas números';
      return;
    }

    let api = `https://brasilapi.com.br/api/fipe/preco/v1/${document.querySelector("#carro").value}`;
 
    if (document.querySelector("#carro").value.length != 7) {
      document.querySelector('#ceprespostam').innerHTML = "⚠️ Coloque exatamente 7 números";
      return;
    }

    let as = await fetch(api);
    let pok = await as.json();

    // Itera sobre cada ano/modelo retornado
    pok.forEach(veiculo => {
      let asd = Object.keys(veiculo);
      document.querySelector('#ceprespostam').innerHTML += '<hr>';
      asd.forEach(element => {
        document.querySelector('#ceprespostam').innerHTML += `<strong>${element}:</strong> ${veiculo[element]}<br>`;
      });
    });

  } catch(erro) {
    document.querySelector('#ceprespostam').innerHTML = '❌ Código FIPE inválido, digite novamente';
  }
}
