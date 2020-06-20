const mensagem = document.querySelector('#mensagem');
const btComprarCarta = document.querySelector('#btComprarCarta');
const btApostar = document.querySelector('#btApostar');
const btNovo = document.querySelector('#btNovo');
const cartas = document.querySelectorAll('.card-body');
const pontos = document.querySelectorAll('span');


const tipos = ['copas', 'paus', 'espadas', 'ouros'];
const numeros = [...Array(9)].map((_, index) => `${index + 2}`);
const letras = ['A', 'J', 'Q', 'K'];

let baralho = [],
    contagemPontosJogador = 0,
    contagemPontosComputador = 0;




const montaBaralho = () => {
  numeros.forEach((_, cardIndex) => {
    tipos.forEach(tipo => {
      baralho.push(`${cardIndex + 2}_${tipo}`);
    });
  });

  letras.forEach(letra => {
    tipos.forEach(tipo => {
      baralho.push(`${letra}_${tipo}`);
    });
  });

  baralho = _.shuffle(baralho);
};

const pesoCarta = carta => {
  const simbolo = carta.substr(0, carta.indexOf('_'));
  const peso = letras.includes(simbolo) ? (simbolo == 'A' ? 11 : 10) : Number(simbolo);
  return peso;
};

btComprarCarta.addEventListener('click', e => {
  const carta = baralho.pop();

  const img = document.createElement('img');
  img.src = `images/cartas/${carta}.png`;
  contagemPontosJogador += pesoCarta(carta);

  cartas[0].appendChild(img);
  pontos[0].innerText = contagemPontosJogador;

  if (contagemPontosJogador > 21) {
    btComprarCarta.disabled = true;
    btApostar.disabled = true;
    mensagem.classList.remove('d-none');
    mensagem.classList.add('alert-danger');
    mensagem.innerHTML = '<strong>Ops!</strong> Você passou dos 21 pontos e perdeu.';
  }

});

btApostar.addEventListener('click', e => {
  do {
    const carta = baralho.pop();

    const img = document.createElement('img');
    img.src = `images/cartas/${carta}.png`;
    contagemPontosComputador += pesoCarta(carta);

    cartas[1].appendChild(img);
    pontos[1].innerText = contagemPontosComputador;
  } while (contagemPontosComputador < contagemPontosJogador);

  btComprarCarta.disabled = true;
  btApostar.disabled = true;
  mensagem.classList.remove('d-none');

  if (contagemPontosJogador == contagemPontosComputador) {
    mensagem.classList.add('alert-secondary');
    mensagem.innerHTML = '<strong>Empate.</strong> Ninguém ganha,ninguém perde...';
  } else if (contagemPontosComputador > 21 || contagemPontosJogador > contagemPontosComputador) {
    mensagem.classList.add('alert-success');
    mensagem.innerHTML = '<strong>Parabéns!</strong> Você ganhou!.';
  } else {
    mensagem.classList.add('alert-danger');
    mensagem.innerHTML = '<strong>Ops!</strong> Você perdeu.';
  }

});

btNovo.addEventListener('click', () => location.reload());

window.addEventListener('load', () => {
  montaBaralho();
});